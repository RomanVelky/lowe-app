import {
  BadgeCheck,
  BarChart3,
  Lock,
  PiggyBank,
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

const SavingsAccounts = () => {
  const t = useTranslations("SAVINGS_ACCOUNTS");

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

        {/* Key Benefits */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("benefits.title")}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    {t("benefits.security.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t("benefits.security.description")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
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
                    <Wallet className="w-5 h-5" />
                    {t("benefits.access.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t("benefits.access.description")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Account Types */}
        <section className="px-4 py-12 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("account_types.title")}
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t("account_types.standard.title")}</CardTitle>
                  <CardDescription>
                    {t("account_types.standard.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                      <p>{t("account_types.standard.features.0")}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                      <p>{t("account_types.standard.features.1")}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                      <p>{t("account_types.standard.features.2")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t("account_types.term.title")}</CardTitle>
                  <CardDescription>
                    {t("account_types.term.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                      <p>{t("account_types.term.features.0")}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                      <p>{t("account_types.term.features.1")}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Lock className="w-5 h-5 text-blue-500 mt-0.5" />
                      <p>{t("account_types.term.features.2")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t("account_types.high_yield.title")}</CardTitle>
                  <CardDescription>
                    {t("account_types.high_yield.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                      <p>{t("account_types.high_yield.features.0")}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                      <p>{t("account_types.high_yield.features.1")}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                      <p>{t("account_types.high_yield.features.2")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("comparison.title")}
            </h2>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>
                          {t("comparison.features.interest_rate")}
                        </TableHead>
                        <TableHead>
                          {t("account_types.standard.title")}
                        </TableHead>
                        <TableHead>{t("account_types.term.title")}</TableHead>
                        <TableHead>
                          {t("account_types.high_yield.title")}
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          {t("comparison.features.interest_rate")}
                        </TableCell>
                        <TableCell>0.01-0.5%</TableCell>
                        <TableCell>2-4%</TableCell>
                        <TableCell>3-4.5%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          {t("comparison.features.minimum_balance")}
                        </TableCell>
                        <TableCell>0€</TableCell>
                        <TableCell>500-1000€</TableCell>
                        <TableCell>0-100€</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          {t("comparison.features.access_to_funds")}
                        </TableCell>
                        <TableCell>
                          {t("comparison.standard.access_to_funds")}
                        </TableCell>
                        <TableCell>
                          {t("comparison.term.access_to_funds")}
                        </TableCell>
                        <TableCell>
                          {t("comparison.high_yield.access_to_funds")}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          {t("comparison.features.best_for")}
                        </TableCell>
                        <TableCell>
                          {t("comparison.standard.best_for")}
                        </TableCell>
                        <TableCell>{t("comparison.term.best_for")}</TableCell>
                        <TableCell>
                          {t("comparison.high_yield.best_for")}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="px-4 py-12 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("tips.title")}
            </h2>

            <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PiggyBank className="w-5 h-5" />
                    {t("tips.goals.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    • {t("tips.goals.items.0")}
                  </p>
                  <p className="text-muted-foreground">
                    • {t("tips.goals.items.1")}
                  </p>
                  <p className="text-muted-foreground">
                    • {t("tips.goals.items.2")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    {t("tips.rates.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    • {t("tips.rates.items.0")}
                  </p>
                  <p className="text-muted-foreground">
                    • {t("tips.rates.items.1")}
                  </p>
                  <p className="text-muted-foreground">
                    • {t("tips.rates.items.2")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    {t("tips.security.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    • {t("tips.security.items.0")}
                  </p>
                  <p className="text-muted-foreground">
                    • {t("tips.security.items.1")}
                  </p>
                  <p className="text-muted-foreground">
                    • {t("tips.security.items.2")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="w-5 h-5" />
                    {t("tips.fine_print.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    • {t("tips.fine_print.items.0")}
                  </p>
                  <p className="text-muted-foreground">
                    • {t("tips.fine_print.items.1")}
                  </p>
                  <p className="text-muted-foreground">
                    • {t("tips.fine_print.items.2")}
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

export default SavingsAccounts;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
