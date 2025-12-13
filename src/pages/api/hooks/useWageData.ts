import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";

type SortDirection = "asc" | "desc";

interface WageData {
  name: string;
  wage: number;
}

interface PaginationData {
  total: number;
  totalPages: number;
  currentPage: number;
  limit: number;
}

interface WageResponse {
  data: WageData[];
  pagination: PaginationData;
}

async function fetchWageData(
  page: number,
  limit: number,
  sort: SortDirection
): Promise<WageResponse> {
  const response = await fetch(
    `/api/wages?page=${page}&limit=${limit}&sort=${sort}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch wage data");
  }

  return response.json();
}

export function useWageData(
  initialPage = 1,
  initialLimit = 5,
  initialSort: SortDirection = "desc"
) {
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);
  const [sort, setSort] = useState<SortDirection>(initialSort);
  const queryClient = useQueryClient();

  const queryKey = ["wages", page, limit, sort] as const;

  const { data, isLoading, isError, error } = useQuery({
    queryKey,
    queryFn: () => fetchWageData(page, limit, sort),
    staleTime: 5 * 60 * 1000,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: false,
  });

  const prefetchNextPage = () => {
    if (data && page < data.pagination.totalPages) {
      queryClient.prefetchQuery({
        queryKey: ["wages", page + 1, limit, sort] as const,
        queryFn: () => fetchWageData(page + 1, limit, sort),
        staleTime: 5 * 60 * 1000,
      });
    }
  };

  useEffect(() => {
    if (data && !isLoading) {
      prefetchNextPage();
    }
  }, [data, isLoading, page]);

  const changePage = (newPage: number) => {
    if (
      newPage >= 1 &&
      (!data?.pagination.totalPages || newPage <= data.pagination.totalPages)
    ) {
      setPage(newPage);
    }
  };

  const changeLimit = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1);
  };

  const toggleSort = () => {
    setSort((current) => (current === "desc" ? "asc" : "desc"));
    setPage(1);
  };

  return {
    data: data?.data || [],
    pagination: data?.pagination || {
      total: 0,
      totalPages: 0,
      currentPage: page,
      limit,
    },
    isLoading,
    isError,
    error,
    changePage,
    changeLimit,
    toggleSort,
    sort,
  };
}
