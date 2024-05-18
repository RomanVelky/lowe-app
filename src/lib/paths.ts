// utils/paths.js

export const PATHS = {
  WAGES: {
    link: "/wages",
    description: "MZDY",
    subPaths: {
      NET_SALARY: { link: "/wages#net-salary", text: "ČISTÁ MZDA" },
      GROSS_SALARY: { link: "/wages#gross-salary", text: "HRUBÁ MZDA" },
      PRICE_OF_WORK: { link: "/wages#price-of-work", text: "SUPERHRUBÁ MZDA" },
    },
  },
  SAVINGS: {
    link: "/savings",
    description: "SPORENIE",
    subPaths: {
      SAVINGS_ACCOUNTS: {
        link: "/savings#savings-accounts",
        text: "SPORIACE ÚČTY",
      },
      BUILDING_SAVINGS: {
        link: "/savings#building-savings",
        text: "STAVEBNÉ SPORENIE",
      },
      RETIREMENT_SAVINGS: {
        link: "/savings#retirement-savings",
        text: "SPORENIE NA DÔCHODOK",
      },
    },
  },
  TAXES: {
    link: "/taxes",
    description: "DANE",
    subPaths: {
      INCOME_TAX: { link: "/taxes#income-tax", text: "DAŇ Z PRÍJMU" },
      VAT: { link: "/taxes#vat", text: "DPH" },
      TAX_CALENDAR: { link: "/taxes#tax-calendar", text: "DAŇOVÝ KALENDÁR" },
    },
  },
  INVESTMENTS: { link: "/investments", description: "INVESTÍCIE" },
  NEWS: { link: "/news", description: "ČLÁNKY" },
};

export const PATHS_OPTIONS = Object.values(PATHS);
