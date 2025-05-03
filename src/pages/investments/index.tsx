import {
  ArrowRight,
  BarChart3,
  Building2,
  Coins,
  DollarSign,
  Globe,
  LineChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "@/context/useTranslations";

const Investments = () => {
  const t = useTranslations("INVESTMENTS");

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
        {/* Investment Types */}
        <section className="px-4 py-12 md:py-24 bg-muted/50 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("sections.types.title")}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    {t("sections.types.stocks.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t("sections.types.stocks.description")}
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <LineChart className="w-4 h-4 mr-2 text-green-500" />
                    {t("sections.types.stocks.return")}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    {t("sections.types.bonds.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t("sections.types.bonds.description")}
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <LineChart className="w-4 h-4 mr-2 text-blue-500" />
                    {t("sections.types.bonds.return")}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    {t("sections.types.real-estate.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t("sections.types.real-estate.description")}
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <LineChart className="w-4 h-4 mr-2 text-green-500" />
                    {t("sections.types.real-estate.return")}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    {t("sections.types.etfs.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t("sections.types.etfs.description")}
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <LineChart className="w-4 h-4 mr-2 text-green-500" />
                    {t("sections.types.etfs.return")}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    {t("sections.types.mutual-funds.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t("sections.types.mutual-funds.description")}
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <LineChart className="w-4 h-4 mr-2 text-green-500" />
                    {t("sections.types.mutual-funds.return")}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Coins className="w-5 h-5" />
                    {t("sections.types.commodities.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t("sections.types.commodities.description")}
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <LineChart className="w-4 h-4 mr-2 text-yellow-500" />
                    {t("sections.types.commodities.return")}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* Risk vs Return */}
        <section className="px-4 py-12 md:py-24 container">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            {t("sections.risk.title")}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>{t("sections.risk.low-risk.title")}</CardTitle>
                <CardDescription>
                  {t("sections.risk.low-risk.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• {t("sections.risk.low-risk.items.0")}</p>
                <p>• {t("sections.risk.low-risk.items.1")}</p>
                <p>• {t("sections.risk.low-risk.items.2")}</p>
                <p>• {t("sections.risk.low-risk.items.3")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t("sections.risk.high-risk.title")}</CardTitle>
                <CardDescription>
                  {t("sections.risk.high-risk.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• {t("sections.risk.high-risk.items.0")}</p>
                <p>• {t("sections.risk.high-risk.items.1")}</p>
                <p>• {t("sections.risk.high-risk.items.2")}</p>
                <p>• {t("sections.risk.high-risk.items.3")}</p>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* Crypto Teaser */}
        <section className="px-4 py-12 md:py-24 bg-gradient-to-b from-primary/10 to-primary/5">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">
              {t("sections.crypto.title")}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t("sections.crypto.description")}
            </p>
            <Button size="lg" className="mt-6">
              {t("sections.crypto.button")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Investments;

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {},
  };
};
