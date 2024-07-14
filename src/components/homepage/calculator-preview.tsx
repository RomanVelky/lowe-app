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

type Deductions = {
  type: string;
  employeeContribution: number;
  employerContribution: number;
};

const Deductions: Deductions[] = [
  {
    type: "Sickness Insurance",
    employeeContribution: 0.014,
    employerContribution: 0.014,
  },
  {
    type: "Old Age Insurance",
    employeeContribution: 0.04,
    employerContribution: 0.14,
  },
  {
    type: "Disability Insurance",
    employeeContribution: 0.03,
    employerContribution: 0.03,
  },
  {
    type: "Unemployment Insurance",
    employeeContribution: 0.01,
    employerContribution: 0.005,
  },
  {
    type: "Insurance for Financing Support During Short-Time Work",
    employeeContribution: 0,
    employerContribution: 0.005,
  },
  {
    type: "Guarantee Fund",
    employeeContribution: 0,
    employerContribution: 0.0025,
  },
  {
    type: "Reserve Fund",
    employeeContribution: 0,
    employerContribution: 0.0475,
  },
  {
    type: "Accident Insurance",
    employeeContribution: 0,
    employerContribution: 0.008,
  },
  {
    type: "Health Insurance",
    employeeContribution: 0.04,
    employerContribution: 0.11,
  },
];

type ChildAllowanceRate = {
  numberOfChildren: number;
  rate: number;
};

const childAllowanceRates: ChildAllowanceRate[] = [
  { numberOfChildren: 0, rate: 1 },
  { numberOfChildren: 1, rate: 0.2 },
  { numberOfChildren: 2, rate: 0.27 },
  { numberOfChildren: 3, rate: 0.34 },
  { numberOfChildren: 4, rate: 0.41 },
  { numberOfChildren: 5, rate: 0.48 },
  { numberOfChildren: 6, rate: 0.55 },
];

const minWage = 750; // refactotor into some CONST file  along with other constants
const nonTaxableAmountOfTaxBasis = 470.54; //470,54/month    5646,48/year - when under 24 952,06/year
const incomeTax = 0.19; // 25% when 47 537,98 eur/year +
const employeeDeduction = Number(
  Deductions.reduce(
    (sum, deduction) => sum + deduction.employeeContribution,
    0
  ).toFixed(3)
);
const companyDeduction = Number(
  Deductions.reduce(
    (sum, deduction) => sum + deduction.employerContribution,
    0
  ).toFixed(3)
);
const maxOneChildrenUnderDeduction = 140;
const maxOneChildrenOverDeduction = 50;

//total children rates based on numbers from form
function calculateChildAllowanceRate(totalChildren: number): number {
  if (totalChildren > 6) {
    return childAllowanceRates.find((rate) => rate.numberOfChildren === 6)!
      .rate;
  }
  const rate = childAllowanceRates.find(
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
      grossWage: 750,
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
      <div className="w-96 border-2 py-5 px-5 border-gray-950 rounded-lg">
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
