export const PATHS = {
  WAGES: {
    link: "/wages",
    subPaths: {
      NET_SALARY: { link: "/wages/net" },
      GROSS_SALARY: { link: "/wages/gross" },
      PRICE_OF_WORK: { link: "/wages/supergross" },
    },
  },
  SAVINGS: {
    link: "/savings",
    subPaths: {
      SAVINGS_ACCOUNTS: {
        link: "/savings/accounts",
      },
      BUILDING_SAVINGS: {
        link: "/savings/building",
      },
      RETIREMENT_SAVINGS: {
        link: "/savings/retirement",
      },
    },
  },
  TAXES: {
    link: "/taxes",
    subPaths: {
      INCOME_TAX: { link: "/taxes/income" },
      VAT: { link: "/taxes/vat" },
      TAX_CALENDAR: { link: "/taxes/calendar" },
    },
  },
  INVESTMENTS: { link: "/investments" },
  NEWS: { link: "/news" },
};

export const PATHS_OPTIONS = Object.values(PATHS);
