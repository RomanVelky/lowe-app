import { CALCULATOR_CONSTANTS as CC } from "@/lib/calculator-constants";
import { useMemo } from "react";
import type { FormSchemaType } from "@/components/calculator/calculator.schema";
import type { CalculatorState } from "@/components/calculator/calculator.types";
export const employeeDeduction = Number(
  CC.DEDUCTIONS.reduce(
    (sum, deduction) => sum + deduction.employeeContribution,
    0
  ).toFixed(3)
);

export const companyDeduction = Number(
  CC.DEDUCTIONS.reduce(
    (sum, deduction) => sum + deduction.employerContribution,
    0
  ).toFixed(3)
);

export function calculateChildAllowanceRate(totalChildren: number): number {
  if (totalChildren > 6) {
    return CC.CHILD_ALLOWANCE_RATES.find((rate) => rate.numberOfChildren === 6)!
      .rate;
  }
  const rate = CC.CHILD_ALLOWANCE_RATES.find(
    (rate) => rate.numberOfChildren === totalChildren
  );
  return rate ? rate.rate : 0;
}

export function calculateNetWage(
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

export const useCalculator = (formValues: FormSchemaType) => {
  const calculateValues = (values: FormSchemaType): CalculatorState => {
    const defaultState: CalculatorState = {
      superGrossWage: 0,
      netWage: 0,
      deductions: 0,
      taxableIncome: 0,
      nonTaxableAmount: 0,
      incomeWithoutDeductions: 0,
      incomeTaxAmount: 0,
      taxBonus: 0,
      wage: 0,
    };
    if (values.wage < CC.MIN_WAGE) {
      return defaultState;
    }

    if (values.calcType === "net") {
      const superGrossWage = Number(
        (values.wage * (1 + companyDeduction)).toFixed(2)
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
        values.wage,
        values.nonTaxablePart ?? false,
        values.childrenUnder18,
        values.childrenOver18
      );

      return {
        ...defaultState,
        superGrossWage,
        netWage,
        deductions,
        taxableIncome,
        nonTaxableAmount,
        incomeWithoutDeductions,
        incomeTaxAmount,
        taxBonus,
      };
    } else if (values.calcType === "gross") {
      return {
        ...defaultState,
        wage: values.wage / (1 + companyDeduction),
      };
    } else if (values.calcType === "supergross") {
      const superGrossWage = values.wage;

      return {
        ...defaultState,
        superGrossWage,
      };
    }
    return defaultState;
  };

  return useMemo(() => calculateValues(formValues), [formValues]);
};
