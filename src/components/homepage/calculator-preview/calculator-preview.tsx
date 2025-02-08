import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CALCULATOR_CONSTANTS as CC } from "@/lib/calculator-constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Switch } from "../../ui/switch";
import { formSchema, FormSchemaType } from "./calculator-preview.schema";

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

function calculateChildAllowanceRate(totalChildren: number) {
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
    netWage,
    deductions,
    taxableIncome,
    nonTaxableAmount,
    incomeWithoutDeductions,
    incomeTaxAmount,
    taxBonus,
  };
}

const useCalculator = (formValues: FormSchemaType) => {
  const calculateValues = (values: FormSchemaType): CalculatorState => {
    if (values.grossWage < CC.MIN_WAGE) {
      return {
        superGrossWage: 0,
        netWage: 0,
        deductions: 0,
        taxableIncome: 0,
        nonTaxableAmount: 0,
        incomeWithoutDeductions: 0,
        incomeTaxAmount: 0,
        taxBonus: 0,
      };
    }

    const superGrossWage = Number(
      (values.grossWage * (1 + companyDeduction)).toFixed(2)
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
      values.grossWage,
      values.nonTaxablePart ?? false,
      values.childrenUnder18,
      values.childrenOver18
    );

    return {
      superGrossWage,
      netWage,
      deductions,
      taxableIncome,
      nonTaxableAmount,
      incomeWithoutDeductions,
      incomeTaxAmount,
      taxBonus,
    };
  };

  return useMemo(() => calculateValues(formValues), [formValues]);
};

const CalculatorPreview = () => {
  const [isVisible, setIsVisible] = useState(false);

  const form = useForm<FormSchemaType>({
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

  const {
    superGrossWage,
    netWage,
    deductions,
    taxableIncome,
    nonTaxableAmount,
    incomeWithoutDeductions,
    incomeTaxAmount,
    taxBonus,
  } = useCalculator(watchedValues);

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
          className="absolute"
        >
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
