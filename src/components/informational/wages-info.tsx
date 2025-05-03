import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Euro,
  LineChart,
  Users,
} from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "@/context/useTranslations";
import { Skeleton } from "@/components/ui/skeleton";
import { useWageData } from "@/pages/api/hooks/useWageData";

type SortDirection = "asc" | "desc" | null;

const WageInfo = () => {
  const t = useTranslations("WAGES_INFO");
  const tt = useTranslations();

  const {
    data: currentData,
    pagination,
    isLoading,
    isError,
    error,
    changePage,
    changeLimit,
    toggleSort,
    sort: sortDirection,
  } = useWageData();

  const LoadingTable = () => (
    <div className="space-y-3">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex justify-between">
          <Skeleton className="h-12 w-1/3" />
          <Skeleton className="h-12 w-1/3" />
        </div>
      ))}
    </div>
  );
  const ErrorState = () => (
    <div className="text-center py-4 text-red-500">
      <p>{t("comparison.table.error")}</p>
      <p className="text-sm">
        {error instanceof Error ? error.message : "Unknown error"}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-background p-6 lg:p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            {t("title")}
          </h1>
          <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Euro className="h-5 w-5" />
                {t("cards.what_is.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t("cards.what_is.description")}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="h-5 w-5" />
                {t("cards.types.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc text-muted-foreground">
                <li>{t("cards.types.list_0")}</li>
                <li>{t("cards.types.list_1")}</li>
                <li>{t("cards.types.list_2")}</li>
                <li>{t("cards.types.list_3")}</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                {t("cards.where_used.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t("cards.where_used.description")}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t("comparison.title")}</CardTitle>
            <CardDescription>{t("comparison.subtitle")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-4">
                {isLoading ? (
                  <LoadingTable />
                ) : isError ? (
                  <ErrorState />
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{t("comparison.table.country")}</TableHead>
                        <TableHead>
                          <Button
                            variant="ghost"
                            onClick={toggleSort}
                            className="flex items-center gap-2 hover:text-primary"
                          >
                            {t("comparison.table.min_wage")}
                            {sortDirection === "desc" ? (
                              <ArrowDown className="h-4 w-4" />
                            ) : (
                              <ArrowUp className="h-4 w-4" />
                            )}
                          </Button>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {currentData.map((item) => (
                        <TableRow key={item.name}>
                          <TableCell className="font-medium">
                            {tt(item.name)}
                          </TableCell>
                          <TableCell>
                            {item.wage.toLocaleString("sk-SK")} €
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-sm text-muted-foreground">
                    {t("comparison.table.rows_per_page")}
                  </p>
                  <Select
                    value={pagination.limit.toString()}
                    onValueChange={(value) => changeLimit(Number(value))}
                  >
                    <SelectTrigger className="w-[80px]">
                      <SelectValue placeholder="10" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="15">15</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => changePage(pagination.currentPage - 1)}
                    disabled={pagination.currentPage === 1 || isLoading}
                  >
                    {t("comparison.table.prev")}
                  </Button>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium">
                      {pagination.currentPage}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {t("comparison.table.of")}
                    </span>
                    <span className="text-sm font-medium">
                      {pagination.totalPages}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => changePage(pagination.currentPage + 1)}
                    disabled={
                      pagination.currentPage === pagination.totalPages ||
                      isLoading
                    }
                  >
                    {t("comparison.table.next")}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("calculation.title")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              {t("calculation.description")}
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span>{t("calculation.steps_0")}</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span>{t("calculation.steps_1")}</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span>{t("calculation.steps_2")}</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span>{t("calculation.steps_3")}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WageInfo;
