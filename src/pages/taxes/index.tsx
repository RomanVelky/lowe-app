import {
  ArrowRight,
  BarChart3,
  Building2,
  Calculator,
  CircleDollarSign,
  HandCoins,
  LineChart,
  Scale,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTranslations } from "next-intl";

const Taxes = () => {
  const t = useTranslations("TAXES_INDEX");

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

        {/* Main Tax Types */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("tax_types.title")}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CircleDollarSign className="w-5 h-5" />
                    {t("tax_types.income.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      {t("tax_types.income.description")}:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>{t("tax_types.income.items.rate_19")}</li>
                      <li>{t("tax_types.income.items.rate_25")}</li>
                      <li>{t("tax_types.income.items.allowance")}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HandCoins className="w-5 h-5" />
                    {t("tax_types.vat.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      {t("tax_types.vat.description")}:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>{t("tax_types.vat.items.standard")}</li>
                      <li>{t("tax_types.vat.items.reduced")}</li>
                      <li>{t("tax_types.vat.items.threshold")}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    {t("tax_types.corporate.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      {t("tax_types.corporate.description")}:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>{t("tax_types.corporate.items.rate_15")}</li>
                      <li>{t("tax_types.corporate.items.rate_21")}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Entities */}
        <section className="px-4 py-12 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("business_entities.title")}
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t("business_entities.szco.title")}</CardTitle>
                  <CardDescription>
                    {t("business_entities.szco.subtitle")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-medium mb-2">
                          {t("business_entities.advantages")}:
                        </h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>
                            {t("business_entities.szco.advantages.simple")}
                          </li>
                          <li>
                            {t("business_entities.szco.advantages.lower_admin")}
                          </li>
                          <li>
                            {t("business_entities.szco.advantages.flat_rate")}
                          </li>
                          <li>
                            {t("business_entities.szco.advantages.quick")}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">
                          {t("business_entities.disadvantages")}:
                        </h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>
                            {t(
                              "business_entities.szco.disadvantages.liability"
                            )}
                          </li>
                          <li>
                            {t(
                              "business_entities.szco.disadvantages.limited_tax"
                            )}
                          </li>
                          <li>
                            {t("business_entities.szco.disadvantages.social")}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t("business_entities.sro.title")}</CardTitle>
                  <CardDescription>
                    {t("business_entities.sro.subtitle")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-medium mb-2">
                          {t("business_entities.advantages")}:
                        </h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>
                            {t("business_entities.sro.advantages.liability")}
                          </li>
                          <li>{t("business_entities.sro.advantages.tax")}</li>
                          <li>{t("business_entities.sro.advantages.image")}</li>
                          <li>
                            {t("business_entities.sro.advantages.income")}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">
                          {t("business_entities.disadvantages")}:
                        </h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>
                            {t("business_entities.sro.disadvantages.setup")}
                          </li>
                          <li>
                            {t("business_entities.sro.disadvantages.admin")}
                          </li>
                          <li>
                            {t("business_entities.sro.disadvantages.taxation")}
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

        {/* Tax Optimization */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("optimization.title")}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    {t("optimization.szco.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>{t("optimization.szco.items.flat_rate")}</li>
                    <li>{t("optimization.szco.items.timing")}</li>
                    <li>{t("optimization.szco.items.home_office")}</li>
                    <li>{t("optimization.szco.items.vehicle")}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    {t("optimization.sro.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>{t("optimization.sro.items.salary")}</li>
                    <li>{t("optimization.sro.items.investment")}</li>
                    <li>{t("optimization.sro.items.rd")}</li>
                    <li>{t("optimization.sro.items.depreciation")}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-5 h-5" />
                    {t("optimization.general.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>{t("optimization.general.items.deductible")}</li>
                    <li>{t("optimization.general.items.benefits")}</li>
                    <li>{t("optimization.general.items.education")}</li>
                    <li>{t("optimization.general.items.charitable")}</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SK vs CZ Comparison */}
        <section className="px-4 py-12 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("comparison.title")}
            </h2>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("comparison.table.feature")}</TableHead>
                      <TableHead>{t("comparison.table.slovakia")}</TableHead>
                      <TableHead>{t("comparison.table.czech")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        {t("comparison.table.income_tax")}
                      </TableCell>
                      <TableCell>19% / 25%</TableCell>
                      <TableCell>15% / 23%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        {t("comparison.table.corporate_tax")}
                      </TableCell>
                      <TableCell>15% / 21%</TableCell>
                      <TableCell>19%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        {t("comparison.table.vat")}
                      </TableCell>
                      <TableCell>23% / 19% / 10% / 0% </TableCell>
                      <TableCell>21% / 15% / 10%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        {t("comparison.table.flat_rate")}
                      </TableCell>
                      <TableCell>60%</TableCell>
                      <TableCell>40% - 80%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        {t("comparison.table.social")}
                      </TableCell>
                      <TableCell>33.15%</TableCell>
                      <TableCell>31.3%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="w-5 h-5" />
                    {t("comparison.sk_advantages.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>{t("comparison.sk_advantages.items.corporate")}</li>
                    <li>{t("comparison.sk_advantages.items.vat")}</li>
                    <li>{t("comparison.sk_advantages.items.system")}</li>
                    <li>{t("comparison.sk_advantages.items.admin")}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    {t("comparison.cz_advantages.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>{t("comparison.cz_advantages.items.income")}</li>
                    <li>{t("comparison.cz_advantages.items.flat")}</li>
                    <li>{t("comparison.cz_advantages.items.social")}</li>
                    <li>{t("comparison.cz_advantages.items.deduction")}</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final Tips */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">
              {t("final.title")}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t("final.description")}
            </p>
            <Button size="lg" className="gap-2">
              {t("final.button")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Taxes;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
