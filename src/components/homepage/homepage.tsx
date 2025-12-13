import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  LineChart,
  Shield,
  Wallet2,
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

const HomePage = () => {
  const t = useTranslations("HOMEPAGE");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center gap-4 py-16 text-center md:py-32">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            {t("hero.title")}
            <span className="text-primary">{t("hero.title-highlight")}</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            {t("hero.description")}
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button size="lg" asChild>
            <Link href="/wages/net">
              {t("hero.calculate-button")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline">
            <Link href="/wages">{t("hero.learn-more-button")}</Link>
          </Button>
        </div>
      </section>
      {/* Features Section */}
      <section className="container py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-border/50 bg-background/50">
            <CardHeader>
              <Calculator className="h-12 w-12 text-primary" />
              <CardTitle>{t("features.card-1.title")}</CardTitle>
              <CardDescription>{t("features.card-1.subtitle")}</CardDescription>
            </CardHeader>
            <CardContent>{t("features.card-1.description")}</CardContent>
          </Card>
          <Card className="border-border/50 bg-background/50">
            <CardHeader>
              <LineChart className="h-12 w-12 text-primary" />
              <CardTitle>{t("features.card-2.title")}</CardTitle>
              <CardDescription>{t("features.card-2.subtitle")}</CardDescription>
            </CardHeader>
            <CardContent>{t("features.card-2.description")}</CardContent>
          </Card>
          <Card className="border-border/50 bg-background/50">
            <CardHeader>
              <Shield className="h-12 w-12 text-primary" />
              <CardTitle>{t("features.card-3.title")}</CardTitle>
              <CardDescription>{t("features.card-3.subtitle")}</CardDescription>
            </CardHeader>
            <CardContent>{t("features.card-3.description")}</CardContent>
          </Card>
          <Card className="border-border/50 bg-background/50">
            <CardHeader>
              <Wallet2 className="h-12 w-12 text-primary" />
              <CardTitle>{t("features.card-4.title")}</CardTitle>
              <CardDescription>{t("features.card-4.subtitle")}</CardDescription>
            </CardHeader>
            <CardContent>{t("features.card-4.description")}</CardContent>
          </Card>
        </div>
      </section>
      {/* CTA Section */}
      <section className="container py-12 md:py-16">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="flex flex-col items-center gap-4 p-12 text-center">
            <h2 className="text-3xl font-bold">{t("cta.title")}</h2>
            <p className="max-w-[600px] text-primary-foreground/90">
              {t("cta.description")}
            </p>
            <Button size="lg" variant="secondary" asChild className="mt-4">
              <Link href="/wages/net">
                {t("cta.button")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default HomePage;
