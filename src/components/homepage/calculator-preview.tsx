import { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CALCULATOR_CONSTANTS } from "@/lib/calculatorConstants";

const minWage = CALCULATOR_CONSTANTS.MIN_WAGE;
const nonTaxableAmountOfTaxBasis =
  CALCULATOR_CONSTANTS.NON_TAXABLE_AMOUNT_OF_TAX_BASIS;
const incomeTax = CALCULATOR_CONSTANTS.INCOME_TAX;
const employeeDeduction = Number(
  CALCULATOR_CONSTANTS.DEDUCTIONS.reduce(
    (sum, deduction) => sum + deduction.employeeContribution,
    0
  ).toFixed(3)
);
const companyDeduction = Number(
  CALCULATOR_CONSTANTS.DEDUCTIONS.reduce(
    (sum, deduction) => sum + deduction.employerContribution,
    0
  ).toFixed(3)
);
const maxOneChildrenUnderDeduction =
  CALCULATOR_CONSTANTS.MAX_ONE_CHILDREN_UNDER_DEDUCTION;
const maxOneChildrenOverDeduction =
  CALCULATOR_CONSTANTS.MAX_ONE_CHILDREN_OVER_DEDUCTION;

//total children rates based on numbers from form
function calculateChildAllowanceRate(totalChildren: number): number {
  if (totalChildren > 6) {
    return CALCULATOR_CONSTANTS.CHILD_ALLOWANCE_RATES.find(
      (rate) => rate.numberOfChildren === 6
    )!.rate;
  }
  const rate = CALCULATOR_CONSTANTS.CHILD_ALLOWANCE_RATES.find(
    (rate) => rate.numberOfChildren === totalChildren
  );
  return rate ? rate.rate : 0;
}

// calculate NET WAGE
function calculateNetWage(
  grossWage: number,
  nonTaxablePart: boolean,
  childrenUnder18: number,
  childrenOver18: number
): {
  netWage: number;
  deductions: number;
  taxableIncome: number;
  nonTaxableAmount: number;
  incomeWithoutDeductions: number;
  incomeTaxAmount: number;
  taxBonus: number;
} {
  const deductions = Number((grossWage * employeeDeduction).toFixed(2));
  const nonTaxableAmount = nonTaxablePart ? nonTaxableAmountOfTaxBasis : 0;
  const incomeWithoutDeductions = grossWage - deductions;
  const taxableIncome = Number(
    (grossWage - deductions - nonTaxableAmount).toFixed(2)
  );
  const incomeTaxAmount = Number((taxableIncome * incomeTax).toFixed(2));
  const childrenTotal = childrenUnder18 + childrenOver18;
  const taxBonusAmount = Number(
    (
      (grossWage - deductions) *
      calculateChildAllowanceRate(childrenTotal)
    ).toFixed(2)
  );
  const maxTaxBonus =
    childrenOver18 * maxOneChildrenOverDeduction +
    childrenUnder18 * maxOneChildrenUnderDeduction;
  const taxBonus = taxBonusAmount > maxTaxBonus ? maxTaxBonus : taxBonusAmount;
  const netWage = Number(
    (grossWage - deductions - taxableIncome * incomeTax + taxBonus).toFixed(2)
  );

  return {
    netWage: netWage,
    deductions: deductions,
    taxableIncome: taxableIncome,
    nonTaxableAmount: nonTaxableAmount,
    incomeWithoutDeductions: incomeWithoutDeductions,
    incomeTaxAmount: incomeTaxAmount,
    taxBonus: taxBonus,
  };
}

//form schema
const formSchema = z.object({
  grossWage: z.number().min(minWage, {
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

export default function CalculatorPreview() {
  const [superGrossWage, setSuperGrossWage] = useState(0);
  const [netWage, setNetWage] = useState(0);
  const [deductions, setDeductions] = useState(0);
  const [taxableIncome, setTaxableIncome] = useState(0);
  const [nonTaxableAmount, setNonTaxableAmount] = useState(0);
  const [incomeWithoutDeductions, setIncomeWithoutDeductions] = useState(0);
  const [incomeTaxAmount, setIncomeTaxAmount] = useState(0);
  const [taxBonus, setTaxBonus] = useState(0);
  //form inicialization
  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      grossWage: CALCULATOR_CONSTANTS.MIN_WAGE,
      nonTaxablePart: true,
      childrenUnder18: 0,
      childrenOver18: 0,
    },
  });

  const watchedValues = form.watch();

  // CALCULATE WAGES
  useEffect(() => {
    //when wage is lower than min wage dont calculate
    if (minWage <= watchedValues.grossWage) {
      const superGrossWage = Number(
        (watchedValues.grossWage * (1 + companyDeduction)).toFixed(2)
      );
      const {
        netWage,
        deductions,
        taxableIncome,
        nonTaxableAmount,
        incomeWithoutDeductions,
        incomeTaxAmount,
        taxBonus,
      } = calculateNetWage(
        watchedValues.grossWage,
        watchedValues.nonTaxablePart || false,
        watchedValues.childrenUnder18,
        watchedValues.childrenOver18
      );
      setSuperGrossWage(superGrossWage);
      setNetWage(netWage);
      setDeductions(deductions);
      setTaxableIncome(taxableIncome);
      setNonTaxableAmount(nonTaxableAmount);
      setIncomeWithoutDeductions(incomeWithoutDeductions);
      setIncomeTaxAmount(incomeTaxAmount);
      setTaxBonus(taxBonus);
    }
  }, [watchedValues]);

  return (
    <div className="px-16 py-5">
      <div className="w-64 border-2 py-5 px-5 border-gray-950 rounded-lg">
        <Form {...form}>
          <form>
            {/* GROSS WAGE INPUT */}
            <FormField
              control={form.control}
              name="grossWage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hrubá mzda (€)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder={minWage.toString()}
                      inputMode="numeric"
                      {...field}
                      value={field.value || ""}
                      onChange={(
                        e: React.ChangeEvent<HTMLInputElement>
                      ): void => {
                        const value = e.target.value;
                        field.onChange(
                          value === "" ? "" : e.target.valueAsNumber
                        );
                      }}
                      onWheel={(e) => e.preventDefault()}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* NON TAXABLE PART SWITCH */}
            <FormField
              control={form.control}
              name="nonTaxablePart"
              render={({ field }) => (
                <FormItem className="flex gap-2">
                  <div className=" flex items-end">
                    <FormLabel className="text-base">Nezdaň. časť</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* CHILDREN UNDER 18 INPUT */}
            <FormField
              control={form.control}
              name="childrenUnder18"
              render={({ field }) => (
                <FormItem className="flex gap-2 ">
                  <div className=" flex items-center">
                    <FormLabel className="text-base pt-1">Deti 18-</FormLabel>
                  </div>
                  <div className="flex flex-col">
                    <FormControl>
                      <Input
                        className="w-10"
                        inputMode="numeric"
                        type="number"
                        {...field}
                        value={field.value !== undefined ? field.value : ""}
                        onChange={(
                          e: React.ChangeEvent<HTMLInputElement>
                        ): void => {
                          const value = e.target.value;
                          field.onChange(
                            value === "" ? "" : e.target.valueAsNumber
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            {/* CHILDREN OVER 18 INPUT */}
            <FormField
              control={form.control}
              name="childrenOver18"
              render={({ field }) => (
                <FormItem className="flex  gap-2">
                  <div className=" flex items-center">
                    <FormLabel className="text-base pt-1">Deti 18+</FormLabel>
                  </div>
                  <div className="flex flex-col">
                    <FormControl className="">
                      <Input
                        className="w-10"
                        inputMode="numeric"
                        type="number"
                        {...field}
                        value={field.value !== undefined ? field.value : ""}
                        onChange={(
                          e: React.ChangeEvent<HTMLInputElement>
                        ): void => {
                          const value = e.target.value;
                          field.onChange(
                            value === "" ? "" : e.target.valueAsNumber
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage className="text-center" />
                  </div>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>

      {/* DISPLAY CALCULATED VALUES SECTION */}
      <div className="pt-16 space-y-4">
        <div className="p-4 border-green-500 border rounded-2xl">
          <h1 className="text-2xl font-bold">Výpočet čistej mzdy</h1>
          <h6 className="text-gray-500">Super hrubá mzda: {superGrossWage}€</h6>
          <h6 className="text-gray-500">
            Hrubá mzda: {watchedValues.grossWage || minWage}€
          </h6>
          <h6 className="text-gray-500">Čistá mzda: {netWage}€</h6>
        </div>

        <div className="p-4 border-amber-400 border rounded-2xl">
          <div className=" bg-red-300 rounded-xl">
            <h1 className="text-2xl font-bold">Odvody</h1>
            <h2 className="text-gray-500">{deductions}</h2>
          </div>
          <h1 className="text-2xl font-bold">zaklad dane</h1>
          <h2 className="text-gray-500">{incomeWithoutDeductions}</h2>
          <h1 className="text-2xl font-bold">nezdanitelna cast </h1>
          <h2 className="text-gray-500">{nonTaxableAmount}</h2>
          <h1 className="text-2xl font-bold">zaklad dane pred</h1>
          <h2 className="text-gray-500">{taxableIncome.toFixed(2)}</h2>
          <h1 className="text-2xl font-bold">dan z prijmu</h1>
          <h2 className="text-gray-500">{incomeTaxAmount}</h2>
          <div className="py-4 pb-4 bg-green-500 rounded-2xl text-center">
            <h1 className="text-2xl font-bold">Danovy bonus</h1>
            <h2 className="text-gray-500">{taxBonus}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
