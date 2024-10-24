export const CALCULATOR_CONSTANTS = {
  DEDUCTIONS: [
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
  ],
  CHILD_ALLOWANCE_RATES: [
    { numberOfChildren: 0, rate: 1 },
    { numberOfChildren: 1, rate: 0.2 },
    { numberOfChildren: 2, rate: 0.27 },
    { numberOfChildren: 3, rate: 0.34 },
    { numberOfChildren: 4, rate: 0.41 },
    { numberOfChildren: 5, rate: 0.48 },
    { numberOfChildren: 6, rate: 0.55 },
  ],
  MIN_WAGE: 750,
  NON_TAXABLE_AMOUNT_OF_TAX_BASIS: 470.54,
  INCOME_TAX: 0.19,
  MAX_ONE_CHILDREN_UNDER_DEDUCTION: 140,
  MAX_ONE_CHILDREN_OVER_DEDUCTION: 50,
};
