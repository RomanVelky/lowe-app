import { z } from "zod";
import { CALCULATOR_CONSTANTS as CC } from "@/lib/calculator-constants";

export const formSchema = z.object({
  grossWage: z.number().min(CC.MIN_WAGE, {
    message: "Gross wage must be at least minimum wage (750€)",
  }),
  nonTaxablePart: z.boolean().optional(),
  childrenUnder18: z
    .number()
    .int()
    .min(0, {
      message: "Must be at least 0",
    })
    .max(10, { message: "Can't be more than 10" }),
  childrenOver18: z
    .number()
    .int()
    .min(0, {
      message: "Must be at least 0",
    })
    .max(10, { message: "Can't be more than 10" }),
});

export type FormSchemaType = z.infer<typeof formSchema>;
