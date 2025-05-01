import {
  BarChart3,
  Building2,
  Calculator,
  CircleDollarSign,
  Globe2,
  HandCoins,
  Shield,
  Wallet,
} from "lucide-react";
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

const RetirementSavings = () => {
  const t = useTranslations("RETIREMENT_SAVINGS");

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

        {/* Slovak Pension System Overview */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("pension_system.title")}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    {t("pension_system.pillars.first.title")}
                  </CardTitle>
                  <CardDescription>
                    {t("pension_system.pillars.first.subtitle")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>{t("pension_system.pillars.first.items.0")}</li>
                    <li>{t("pension_system.pillars.first.items.1")}</li>
                    <li>{t("pension_system.pillars.first.items.2")}</li>
                    <li>{t("pension_system.pillars.first.items.3")}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="w-5 h-5" />
                    {t("pension_system.pillars.second.title")}
                  </CardTitle>
                  <CardDescription>
                    {t("pension_system.pillars.second.subtitle")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>{t("pension_system.pillars.second.items.0")}</li>
                    <li>{t("pension_system.pillars.second.items.1")}</li>
                    <li>{t("pension_system.pillars.second.items.2")}</li>
                    <li>{t("pension_system.pillars.second.items.3")}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HandCoins className="w-5 h-5" />
                    {t("pension_system.pillars.third.title")}
                  </CardTitle>
                  <CardDescription>
                    {t("pension_system.pillars.third.subtitle")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>{t("pension_system.pillars.third.items.0")}</li>
                    <li>{t("pension_system.pillars.third.items.1")}</li>
                    <li>{t("pension_system.pillars.third.items.2")}</li>
                    <li>{t("pension_system.pillars.third.items.3")}</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="px-4 py-12 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("key_features.title")}
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    {t("key_features.contribution_rates.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>
                          {t(
                            "key_features.contribution_rates.table.headers.pillar"
                          )}
                        </TableHead>
                        <TableHead>
                          {t(
                            "key_features.contribution_rates.table.headers.employee"
                          )}
                        </TableHead>
                        <TableHead>
                          {t(
                            "key_features.contribution_rates.table.headers.employer"
                          )}
                        </TableHead>
                        <TableHead>
                          {t(
                            "key_features.contribution_rates.table.headers.total"
                          )}
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          {t(
                            "key_features.contribution_rates.table.first_pillar.name"
                          )}
                        </TableCell>
                        <TableCell>4%</TableCell>
                        <TableCell>14.3%</TableCell>
                        <TableCell>18.3%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          {t(
                            "key_features.contribution_rates.table.second_pillar.name"
                          )}
                        </TableCell>
                        <TableCell>4.5%</TableCell>
                        <TableCell>0%</TableCell>
                        <TableCell>4.5%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          {t(
                            "key_features.contribution_rates.table.third_pillar.name"
                          )}
                        </TableCell>
                        <TableCell>
                          {t(
                            "key_features.contribution_rates.table.third_pillar.employee"
                          )}
                        </TableCell>
                        <TableCell>
                          {t(
                            "key_features.contribution_rates.table.third_pillar.employer"
                          )}
                        </TableCell>
                        <TableCell>
                          {t(
                            "key_features.contribution_rates.table.third_pillar.total"
                          )}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* EU Comparison */}
        <section className="px-4 py-12 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("eu_comparison.title")}
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {t("eu_comparison.regions.western.title")}
                  </CardTitle>
                  <CardDescription>
                    {t("eu_comparison.regions.western.subtitle")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <div className="font-medium">
                      {t("eu_comparison.regions.western.characteristics")}
                    </div>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>{t("eu_comparison.regions.western.items.0")}</li>
                      <li>{t("eu_comparison.regions.western.items.1")}</li>
                      <li>{t("eu_comparison.regions.western.items.2")}</li>
                      <li>{t("eu_comparison.regions.western.items.3")}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    {t("eu_comparison.regions.nordic.title")}
                  </CardTitle>
                  <CardDescription>
                    {t("eu_comparison.regions.nordic.subtitle")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <div className="font-medium">
                      {t("eu_comparison.regions.nordic.characteristics")}
                    </div>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>{t("eu_comparison.regions.nordic.items.0")}</li>
                      <li>{t("eu_comparison.regions.nordic.items.1")}</li>
                      <li>{t("eu_comparison.regions.nordic.items.2")}</li>
                      <li>{t("eu_comparison.regions.nordic.items.3")}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    {t("eu_comparison.regions.central.title")}
                  </CardTitle>
                  <CardDescription>
                    {t("eu_comparison.regions.central.subtitle")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <div className="font-medium">
                      {t("eu_comparison.regions.central.characteristics")}
                    </div>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>{t("eu_comparison.regions.central.items.0")}</li>
                      <li>{t("eu_comparison.regions.central.items.1")}</li>
                      <li>{t("eu_comparison.regions.central.items.2")}</li>
                      <li>{t("eu_comparison.regions.central.items.3")}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    {t("eu_comparison.regions.southern.title")}
                  </CardTitle>
                  <CardDescription>
                    {t("eu_comparison.regions.southern.subtitle")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <div className="font-medium">
                      {t("eu_comparison.regions.southern.characteristics")}
                    </div>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>{t("eu_comparison.regions.southern.items.0")}</li>
                      <li>{t("eu_comparison.regions.southern.items.1")}</li>
                      <li>{t("eu_comparison.regions.southern.items.2")}</li>
                      <li>{t("eu_comparison.regions.southern.items.3")}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="px-4 py-12 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("recommendations.title")}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CircleDollarSign className="w-5 h-5" />
                    {t("recommendations.tips.start_early.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t("recommendations.tips.start_early.description")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    {t("recommendations.tips.diversify.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t("recommendations.tips.diversify.description")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    {t("recommendations.tips.monitor.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t("recommendations.tips.monitor.description")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe2 className="w-5 h-5" />
                    {t("recommendations.tips.stay_informed.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t("recommendations.tips.stay_informed.description")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RetirementSavings;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
