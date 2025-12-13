import { z } from "zod";
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

export const wageQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(5),
  sort: z.enum(["asc", "desc"]).default("desc"),
});

export type WageQueryParams = z.infer<typeof wageQuerySchema>;

export interface WageRecord {
  name: string;
  wage: number;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const validatedQuery = wageQuerySchema.safeParse(req.query);

    if (!validatedQuery.success) {
      return res.status(400).json({
        message: "Invalid query parameters",
        errors: validatedQuery.error.errors,
      });
    }

    const { page, limit, sort } = validatedQuery.data;
    const offset = (page - 1) * limit;

    const [countResult, dataResult] = await Promise.all([
      supabase.from("wages").select("*", { count: "exact", head: true }),
      supabase
        .from("wages")
        .select("name, wage")
        .order("wage", { ascending: sort === "asc" })
        .range(offset, offset + limit - 1),
    ]);

    if (countResult.error) {
      throw new Error(`Count error: ${countResult.error.message}`);
    }
    if (dataResult.error) {
      throw new Error(`Data error: ${dataResult.error.message}`);
    }
    if (countResult.count === null) {
      throw new Error("Failed to get total count");
    }

    const totalPages = Math.ceil(countResult.count / limit);

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
    );

    return res.status(200).json({
      data: dataResult.data as WageRecord[],
      pagination: {
        total: countResult.count,
        totalPages,
        currentPage: page,
        limit,
      },
    });
  } catch (error) {
    console.error("API Error:", error);

    return res.status(500).json({
      message: "Internal server error",
      error:
        process.env.NODE_ENV === "development"
          ? error instanceof Error
            ? error.message
            : "Unknown error"
          : undefined,
    });
  }
}
