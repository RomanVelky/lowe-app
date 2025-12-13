export type CalculatorState = {
  superGrossWage: number;
  netWage: number;
  deductions: number;
  taxableIncome: number;
  nonTaxableAmount: number;
  incomeWithoutDeductions: number;
  incomeTaxAmount: number;
  taxBonus: number;
  wage?: number;
};

export type WageType = "net" | "gross" | "supergross";
