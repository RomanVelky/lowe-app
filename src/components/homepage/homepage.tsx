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

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center gap-4 py-16 text-center md:py-32">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Kalkulačka Miezd <span className="text-primary">Pre Slovensko</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Jednoduchý a presný nástroj pre výpočet čistej mzdy, odvodov a daní.
            Všetko, čo potrebujete vedieť o vašej výplate.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button size="lg" asChild>
            <Link href="/wages#net-salary">
              Vypočítať Mzdu
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline">
            Zistiť Viac
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-border/50 bg-background/50">
            <CardHeader>
              <Calculator className="h-12 w-12 text-primary" />
              <CardTitle>Presný Výpočet</CardTitle>
              <CardDescription>Aktuálne podľa legislatívy SR</CardDescription>
            </CardHeader>
            <CardContent>
              Vypočítajte si presnú čistú mzdu, odvody a dane podľa aktuálnych
              zákonov a predpisov.
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-background/50">
            <CardHeader>
              <LineChart className="h-12 w-12 text-primary" />
              <CardTitle>Detailný Prehľad</CardTitle>
              <CardDescription>Všetky položky rozpísané</CardDescription>
            </CardHeader>
            <CardContent>
              Získajte podrobný rozpis všetkých odvodov, daní a zliav ktoré
              ovplyvňujú vašu výplatu.
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-background/50">
            <CardHeader>
              <Shield className="h-12 w-12 text-primary" />
              <CardTitle>Bez Registrácie</CardTitle>
              <CardDescription>Rýchlo a anonymne</CardDescription>
            </CardHeader>
            <CardContent>
              Používajte kalkulačku bez nutnosti registrácie. Vaše údaje nikde
              neukladáme.
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-background/50">
            <CardHeader>
              <Wallet2 className="h-12 w-12 text-primary" />
              <CardTitle>Nezdaniteľné Časti</CardTitle>
              <CardDescription>Všetky odpočítateľné položky</CardDescription>
            </CardHeader>
            <CardContent>
              Zohľadňujeme všetky nezdaniteľné časti základu dane vrátane
              odpočtu na deti.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12 md:py-16">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="flex flex-col items-center gap-4 p-12 text-center">
            <h2 className="text-3xl font-bold">
              Začnite s Výpočtom Hneď Teraz
            </h2>
            <p className="max-w-[600px] text-primary-foreground/90">
              Náš kalkulátor je vždy aktuálny a pripravený pomôcť vám s výpočtom
              vašej mzdy. Vyskúšajte ho zadarmo.
            </p>
            <Button size="lg" variant="secondary" asChild className="mt-4">
              <Link href="/wages#net-salary">
                Otvoriť Kalkulačku
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
