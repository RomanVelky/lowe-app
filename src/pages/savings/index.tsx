import { ArrowRight, Building, Coins, PiggyBank, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useTranslations } from "@/context/useTranslations";

const Savings = () => {
  const t = useTranslations("SAVINGS_INDEX");

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
        {/* Main Savings Types */}
        <section className="px-4 py-12 md:py-24 bg-muted/50 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("types.title")}
            </h2>
            {/* Traditional Savings Account */}
            <div className="grid gap-8 max-w-5xl mx-auto">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PiggyBank className="w-6 h-6" />
                    {t("types.accounts.title")}
                  </CardTitle>
                  <CardDescription>
                    {t("types.accounts.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-medium">
                        {t("types.accounts.benefits.title")}
                      </h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>{t("types.accounts.benefits.items.0")}</li>
                        <li>{t("types.accounts.benefits.items.1")}</li>
                        <li>{t("types.accounts.benefits.items.2")}</li>
                        <li>{t("types.accounts.benefits.items.3")}</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">
                        {t("types.accounts.interest.title")}
                      </h4>
                      <p className="text-muted-foreground">
                        {t("types.accounts.interest.description")}
                      </p>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/savings/accounts">
                      {t("types.accounts.button")}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              {/* Building Savings */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="w-6 h-6" />
                    {t("types.building.title")}
                  </CardTitle>
                  <CardDescription>
                    {t("types.building.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-medium">
                        {t("types.building.benefits.title")}
                      </h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>{t("types.building.benefits.items.0")}</li>
                        <li>{t("types.building.benefits.items.1")}</li>
                        <li>{t("types.building.benefits.items.2")}</li>
                        <li>{t("types.building.benefits.items.3")}</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">
                        {t("types.building.features.title")}
                      </h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>{t("types.building.features.items.0")}</li>
                        <li>{t("types.building.features.items.1")}</li>
                        <li>{t("types.building.features.items.2")}</li>
                      </ul>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/savings/building">
                      {t("types.building.button")}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              {/* Retirement Savings */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="w-6 h-6" />
                    {t("types.retirement.title")}
                  </CardTitle>
                  <CardDescription>
                    {t("types.retirement.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-medium">
                        {t("types.retirement.options.title")}
                      </h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>{t("types.retirement.options.items.0")}</li>
                        <li>{t("types.retirement.options.items.1")}</li>
                        <li>{t("types.retirement.options.items.2")}</li>
                        <li>{t("types.retirement.options.items.3")}</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">
                        {t("types.retirement.benefits.title")}
                      </h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>{t("types.retirement.benefits.items.0")}</li>
                        <li>{t("types.retirement.benefits.items.1")}</li>
                        <li>{t("types.retirement.benefits.items.2")}</li>
                      </ul>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/savings/retirement">
                      {t("types.retirement.button")}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* Quick Tips Section */}
        <section className="px-4 py-12 md:py-24 container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
              {t("tips.title")}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Coins className="w-5 h-5" />
                    {t("tips.diversify.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t("tips.diversify.description")}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PiggyBank className="w-5 h-5" />
                    {t("tips.start_early.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t("tips.start_early.description")}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="w-5 h-5" />
                    {t("tips.regular.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t("tips.regular.description")}
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

export default Savings;

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {},
  };
};
