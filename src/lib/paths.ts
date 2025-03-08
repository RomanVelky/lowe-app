export const PATHS = {
  WAGES: {
    link: "/wages",
    description: "MZDY",
    subPaths: {
      NET_SALARY: { link: "/wages/net", text: "ČISTÁ MZDA" },
      GROSS_SALARY: { link: "/wages/gross", text: "HRUBÁ MZDA" },
      PRICE_OF_WORK: { link: "/wages/supergross", text: "SUPERHRUBÁ MZDA" },
    },
  },
  SAVINGS: {
    link: "/savings",
    description: "SPORENIE",
    subPaths: {
      SAVINGS_ACCOUNTS: {
        link: "/savings/accounts",
        text: "SPORIACE ÚČTY",
      },
      BUILDING_SAVINGS: {
        link: "/savings/building",
        text: "STAVEBNÉ SPORENIE",
      },
      RETIREMENT_SAVINGS: {
        link: "/savings/retirement",
        text: "SPORENIE NA DÔCHODOK",
      },
    },
  },
  TAXES: {
    link: "/taxes",
    description: "DANE",
    subPaths: {
      INCOME_TAX: { link: "/taxes/income", text: "DAŇ Z PRÍJMU" },
      VAT: { link: "/taxes/vat", text: "DPH" },
      TAX_CALENDAR: { link: "/taxes/calendar", text: "DAŇOVÝ KALENDÁR" },
    },
  },
  INVESTMENTS: { link: "/investments", description: "INVESTÍCIE" },
  NEWS: { link: "/news", description: "ČLÁNKY" },
};

export const PATHS_OPTIONS = Object.values(PATHS);
