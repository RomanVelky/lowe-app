import { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CALCULATOR_CONSTANTS as CC } from "@/lib/calculator-constants";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const employeeDeduction = Number(
  CC.DEDUCTIONS.reduce(
    (sum, deduction) => sum + deduction.employeeContribution,
    0
  ).toFixed(3)
);
const companyDeduction = Number(
  CC.DEDUCTIONS.reduce(
    (sum, deduction) => sum + deduction.employerContribution,
    0
  ).toFixed(3)
);

function calculateChildAllowanceRate(totalChildren: number): number {
  if (totalChildren > 6) {
    return CC.CHILD_ALLOWANCE_RATES.find((rate) => rate.numberOfChildren === 6)!
      .rate;
  }
  const rate = CC.CHILD_ALLOWANCE_RATES.find(
    (rate) => rate.numberOfChildren === totalChildren
  );
  return rate ? rate.rate : 0;
}

function calculateNetWage(
  grossWage: number,
  nonTaxablePart: boolean,
  childrenUnder18: number,
  childrenOver18: number
) {
  const deductions = Number((grossWage * employeeDeduction).toFixed(2));
  const nonTaxableAmount = nonTaxablePart
    ? CC.NON_TAXABLE_AMOUNT_OF_TAX_BASIS
    : 0;
  const incomeWithoutDeductions = grossWage - deductions;
  const taxableIncome = Number(
    (grossWage - deductions - nonTaxableAmount).toFixed(2)
  );
  const incomeTaxAmount = Number((taxableIncome * CC.INCOME_TAX).toFixed(2));
  const childrenTotal = childrenUnder18 + childrenOver18;
  const taxBonusAmount = Number(
    (
      (grossWage - deductions) *
      calculateChildAllowanceRate(childrenTotal)
    ).toFixed(2)
  );
  const maxTaxBonus =
    childrenOver18 * CC.MAX_ONE_CHILDREN_OVER_DEDUCTION +
    childrenUnder18 * CC.MAX_ONE_CHILDREN_UNDER_DEDUCTION;
  const taxBonus = taxBonusAmount > maxTaxBonus ? maxTaxBonus : taxBonusAmount;
  const netWage = Number(
    (grossWage - deductions - taxableIncome * CC.INCOME_TAX + taxBonus).toFixed(
      2
    )
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

const formSchema = z.object({
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

const CalculatorPreview = () => {
  const [superGrossWage, setSuperGrossWage] = useState(0);
  const [netWage, setNetWage] = useState(0);
  const [deductions, setDeductions] = useState(0);
  const [taxableIncome, setTaxableIncome] = useState(0);
  const [nonTaxableAmount, setNonTaxableAmount] = useState(0);
  const [incomeWithoutDeductions, setIncomeWithoutDeductions] = useState(0);
  const [incomeTaxAmount, setIncomeTaxAmount] = useState(0);
  const [taxBonus, setTaxBonus] = useState(0);

  const [isVisible, setIsVisible] = useState(false);
  //form inicialization
  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      grossWage: CC.MIN_WAGE,
      nonTaxablePart: true,
      childrenUnder18: 0,
      childrenOver18: 0,
    },
  });

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const watchedValues = form.watch();

  useEffect(() => {
    if (CC.MIN_WAGE <= watchedValues.grossWage) {
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
    <div className="flex gap-4 py-5">
      <div className="flex-none">
        <Card className="w-64">
          <CardContent className="pt-6">
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
                          placeholder={CC.MIN_WAGE.toString()}
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
                        <FormLabel className="text-base">
                          Nezdaň. časť
                        </FormLabel>
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
                        <FormLabel className="text-base pt-1">
                          Deti 18-
                        </FormLabel>
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
                        <FormLabel className="text-base pt-1">
                          Deti 18+
                        </FormLabel>
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
                        <FormMessage className="text-center" />
                      </div>
                    </FormItem>
                  )}
                />
              </form>
            </Form>
            <div className="flex flex-col gap-y-3 pt-4">
              <Button onClick={handleToggle}>Viac info</Button>
              <Button>Detailný prehľad</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* DISPLAY CALCULATED VALUES SECTION */}
      <div className="flex-none">
        <Card className="">
          <CardContent className="pt-6">
            <h1 className="text-2xl font-bold">Výpočet čistej mzdy</h1>
            <h6 className="text-gray-500">
              Super hrubá mzda: {superGrossWage}€
            </h6>
            <h6 className="text-gray-500">
              Hrubá mzda: {watchedValues.grossWage || CC.MIN_WAGE}€
            </h6>
            <h6 className="text-gray-500">Čistá mzda: {netWage}€</h6>
          </CardContent>
        </Card>
      </div>

      {/* ANIMATED PART WITH MORE DETAILS */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 560 }}
          transition={{ duration: 0.5 }}
          className="absolute">
          <Card className="w-64">
            <CardContent className="pt-6">
              <h1 className="text-2xl font-bold">Odvody</h1>
              <h2 className="text-gray-500">{deductions}</h2>

              <h1 className="text-2xl font-bold">zaklad dane</h1>
              <h2 className="text-gray-500">{incomeWithoutDeductions}</h2>
              <h1 className="text-2xl font-bold">nezdanitelna cast </h1>
              <h2 className="text-gray-500">{nonTaxableAmount}</h2>
              <h1 className="text-2xl font-bold">zaklad dane pred</h1>
              <h2 className="text-gray-500">{taxableIncome.toFixed(2)}</h2>
              <h1 className="text-2xl font-bold">dan z prijmu</h1>
              <h2 className="text-gray-500">{incomeTaxAmount}</h2>

              <h1 className="text-2xl font-bold">Danovy bonus</h1>
              <h2 className="text-gray-500">{taxBonus}</h2>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default CalculatorPreview;
