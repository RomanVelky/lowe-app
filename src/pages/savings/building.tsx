import {
  BadgeCheck,
  Building,
  Calculator,
  BarChartIcon as ChartBar,
  Coins,
  Globe,
  HandCoins,
  Home,
  Percent,
  Shield,
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

const BuildingSavings = () => {
  const t = useTranslations("BUILDING_SAVINGS");

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

        {/* What is Building Savings */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("what_is.title")}
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    {t("what_is.description")}
                  </p>
                  <div className="grid gap-4 md:grid-cols-2 pt-4">
                    <div className="space-y-2">
                      <h4 className="font-medium flex items-center gap-2">
                        <Building className="w-5 h-5" />
                        {t("what_is.origins.title")}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {t("what_is.origins.description")}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium flex items-center gap-2">
                        <Globe className="w-5 h-5" />
                        {t("what_is.popularity.title")}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {t("what_is.popularity.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="px-4 py-12 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("benefits.title")}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HandCoins className="w-5 h-5" />
                    {t("benefits.state_premium.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t("benefits.state_premium.description")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Percent className="w-5 h-5" />
                    {t("benefits.interest.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t("benefits.interest.description")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    {t("benefits.loan.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t("benefits.loan.description")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("how_it_works.title")}
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t("how_it_works.savings_phase.title")}</CardTitle>
                  <CardDescription>
                    {t("how_it_works.savings_phase.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                    <p>{t("how_it_works.savings_phase.features.0")}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                    <p>{t("how_it_works.savings_phase.features.1")}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                    <p>{t("how_it_works.savings_phase.features.2")}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t("how_it_works.loan_phase.title")}</CardTitle>
                  <CardDescription>
                    {t("how_it_works.loan_phase.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                    <p>{t("how_it_works.loan_phase.features.0")}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                    <p>{t("how_it_works.loan_phase.features.1")}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                    <p>{t("how_it_works.loan_phase.features.2")}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparison with Other Countries */}
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
                      <TableHead>{t("comparison.country")}</TableHead>
                      <TableHead>{t("comparison.system_name")}</TableHead>
                      <TableHead>{t("comparison.state_support")}</TableHead>
                      <TableHead>{t("comparison.popularity")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        {t("comparison.countries.slovakia.name")}
                      </TableCell>
                      <TableCell>
                        {t("comparison.countries.slovakia.system_name")}
                      </TableCell>
                      <TableCell>
                        {t("comparison.countries.slovakia.state_support")}
                      </TableCell>
                      <TableCell>
                        {t("comparison.countries.slovakia.popularity")}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        {t("comparison.countries.czech.name")}
                      </TableCell>
                      <TableCell>
                        {t("comparison.countries.czech.system_name")}
                      </TableCell>
                      <TableCell>
                        {t("comparison.countries.czech.state_support")}
                      </TableCell>
                      <TableCell>
                        {t("comparison.countries.czech.popularity")}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        {t("comparison.countries.germany.name")}
                      </TableCell>
                      <TableCell>
                        {t("comparison.countries.germany.system_name")}
                      </TableCell>
                      <TableCell>
                        {t("comparison.countries.germany.state_support")}
                      </TableCell>
                      <TableCell>
                        {t("comparison.countries.germany.popularity")}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        {t("comparison.countries.austria.name")}
                      </TableCell>
                      <TableCell>
                        {t("comparison.countries.austria.system_name")}
                      </TableCell>
                      <TableCell>
                        {t("comparison.countries.austria.state_support")}
                      </TableCell>
                      <TableCell>
                        {t("comparison.countries.austria.popularity")}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Usage Tips */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("tips.title")}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    {t("tips.optimize.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    • {t("tips.optimize.items.0")}
                  </p>
                  <p className="text-muted-foreground">
                    • {t("tips.optimize.items.1")}
                  </p>
                  <p className="text-muted-foreground">
                    • {t("tips.optimize.items.2")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ChartBar className="w-5 h-5" />
                    {t("tips.planning.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    • {t("tips.planning.items.0")}
                  </p>
                  <p className="text-muted-foreground">
                    • {t("tips.planning.items.1")}
                  </p>
                  <p className="text-muted-foreground">
                    • {t("tips.planning.items.2")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Coins className="w-5 h-5" />
                    {t("tips.benefits.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    • {t("tips.benefits.items.0")}
                  </p>
                  <p className="text-muted-foreground">
                    • {t("tips.benefits.items.1")}
                  </p>
                  <p className="text-muted-foreground">
                    • {t("tips.benefits.items.2")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    {t("tips.protection.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    • {t("tips.protection.items.0")}
                  </p>
                  <p className="text-muted-foreground">
                    • {t("tips.protection.items.1")}
                  </p>
                  <p className="text-muted-foreground">
                    • {t("tips.protection.items.2")}
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

export default BuildingSavings;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
