import {
  Calculator,
  Calendar,
  CircleDollarSign,
  FileText,
  HandCoins,
  HelpCircle,
  PiggyBank,
  Wallet,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

const IncomeTaxPage = () => {
  const t = useTranslations("INCOME_TAX");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="px-4 pb-14 container">
          <div className="max-w-[800px] mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t("hero.description")}
            </p>
          </div>
        </section>

        {/* Tax Rates Overview */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("tax_rates.title")}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {t("tax_rates.rate_19.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {t("tax_rates.rate_19.description")}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">
                      {t("tax_rates.rate_19.includes")}:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>{t("tax_rates.rate_19.items.employment")}</li>
                      <li>{t("tax_rates.rate_19.items.business")}</li>
                      <li>{t("tax_rates.rate_19.items.rental")}</li>
                      <li>{t("tax_rates.rate_19.items.other")}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {t("tax_rates.rate_25.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {t("tax_rates.rate_25.description")}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">
                      {t("tax_rates.rate_25.progressive")}:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>{t("tax_rates.rate_25.items.threshold")}</li>
                      <li>{t("tax_rates.rate_25.items.previous")}</li>
                      <li>{t("tax_rates.rate_25.items.monthly")}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tax Allowances and Deductions */}
        <section className="px-4 py-12 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("allowances.title")}
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PiggyBank className="w-5 h-5" />
                    {t("allowances.personal.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      {t("allowances.personal.basic")}
                    </p>
                    <div className="grid gap-4">
                      <div>
                        <h4 className="font-medium mb-2">
                          {t("allowances.personal.conditions_title")}:
                        </h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>
                            {t("allowances.personal.conditions.decreases")}
                          </li>
                          <li>
                            {t("allowances.personal.conditions.available")}
                          </li>
                          <li>{t("allowances.personal.conditions.monthly")}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HandCoins className="w-5 h-5" />
                    {t("allowances.additional.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-medium mb-2">
                          {t("allowances.additional.spouse.title")}:
                        </h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>{t("allowances.additional.spouse.amount")}</li>
                          <li>{t("allowances.additional.spouse.based")}</li>
                          <li>
                            {t("allowances.additional.spouse.conditions")}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">
                          {t("allowances.additional.child.title")}:
                        </h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>{t("allowances.additional.child.amount")}</li>
                          <li>{t("allowances.additional.child.minimum")}</li>
                          <li>
                            {t("allowances.additional.child.restrictions")}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Types of Income */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("income_types.title")}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="employment">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <Wallet className="w-5 h-5" />
                    {t("income_types.employment.title")}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                    <li>{t("income_types.employment.items.salary")}</li>
                    <li>{t("income_types.employment.items.bonuses")}</li>
                    <li>{t("income_types.employment.items.benefits")}</li>
                    <li>{t("income_types.employment.items.withholding")}</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="business">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <CircleDollarSign className="w-5 h-5" />
                    {t("income_types.business.title")}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                    <li>{t("income_types.business.items.self_employment")}</li>
                    <li>{t("income_types.business.items.trade")}</li>
                    <li>{t("income_types.business.items.professional")}</li>
                    <li>{t("income_types.business.items.agricultural")}</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="capital">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    {t("income_types.capital.title")}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                    <li>{t("income_types.capital.items.stock")}</li>
                    <li>{t("income_types.capital.items.property")}</li>
                    <li>{t("income_types.capital.items.investment")}</li>
                    <li>{t("income_types.capital.items.dividend")}</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Important Dates */}
        <section className="px-4 py-12 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("dates.title")}
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{t("dates.table.headers.date")}</TableHead>
                        <TableHead>
                          {t("dates.table.headers.requirement")}
                        </TableHead>
                        <TableHead>
                          {t("dates.table.headers.details")}
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          {t("dates.table.march.date")}
                        </TableCell>
                        <TableCell>
                          {t("dates.table.march.requirement")}
                        </TableCell>
                        <TableCell>{t("dates.table.march.details")}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          {t("dates.table.june.date")}
                        </TableCell>
                        <TableCell>
                          {t("dates.table.june.requirement")}
                        </TableCell>
                        <TableCell>{t("dates.table.june.details")}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          {t("dates.table.september.date")}
                        </TableCell>
                        <TableCell>
                          {t("dates.table.september.requirement")}
                        </TableCell>
                        <TableCell>
                          {t("dates.table.september.details")}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          {t("dates.table.monthly.date")}
                        </TableCell>
                        <TableCell>
                          {t("dates.table.monthly.requirement")}
                        </TableCell>
                        <TableCell>
                          {t("dates.table.monthly.details")}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Special Cases */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("special_cases.title")}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {t("special_cases.first_employment.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>
                      {t("special_cases.first_employment.items.allowances")}
                    </li>
                    <li>{t("special_cases.first_employment.items.reduced")}</li>
                    <li>
                      {t("special_cases.first_employment.items.time_limited")}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    {t("special_cases.foreign_income.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>{t("special_cases.foreign_income.items.treaties")}</li>
                    <li>{t("special_cases.foreign_income.items.credits")}</li>
                    <li>
                      {t("special_cases.foreign_income.items.requirements")}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5" />
                    {t("special_cases.tax_relief.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>{t("special_cases.tax_relief.items.research")}</li>
                    <li>{t("special_cases.tax_relief.items.incentives")}</li>
                    <li>{t("special_cases.tax_relief.items.donations")}</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default IncomeTaxPage;
