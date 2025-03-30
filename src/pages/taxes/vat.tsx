import {
  ArrowRight,
  BadgePercent,
  Building2,
  Calculator,
  CircleDollarSign,
  FileText,
  Globe,
  HelpCircle,
  Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

const VatPage = () => {
  const t = useTranslations("VAT");

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

        {/* VAT Overview */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("rates.title")}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BadgePercent className="w-5 h-5" />
                    {t("rates.standard.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {t("rates.standard.description")}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">
                      {t("rates.examples")}:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>{t("rates.standard.items.electronics")}</li>
                      <li>{t("rates.standard.items.clothing")}</li>
                      <li>{t("rates.standard.items.services")}</li>
                      <li>{t("rates.standard.items.luxury")}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BadgePercent className="w-5 h-5" />
                    {t("rates.reduced.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {t("rates.reduced.description")}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">
                      {t("rates.applies_to")}:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>{t("rates.reduced.items.vinegar")}</li>
                      <li>{t("rates.reduced.items.salt")}</li>
                      <li>{t("rates.reduced.items.energy")}</li>
                      <li>{t("rates.reduced.items.food")}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BadgePercent className="w-5 h-5" />
                    {t("rates.special.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {t("rates.special.description")}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">
                      {t("rates.includes")}:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>{t("rates.special.items.bread")}</li>
                      <li>{t("rates.special.items.milk")}</li>
                      <li>{t("rates.special.items.fruits")}</li>
                      <li>{t("rates.special.items.vegetables")}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BadgePercent className="w-5 h-5" />
                    {t("rates.zero.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {t("rates.zero.description")}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">
                      {t("rates.applies_to")}:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>{t("rates.zero.items.export")}</li>
                      <li>{t("rates.zero.items.intra_eu")}</li>
                      <li>{t("rates.zero.items.transport")}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gray-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BadgePercent className="w-5 h-5" />
                    {t("rates.exempt.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {t("rates.exempt.description")}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">
                      {t("rates.examples")}:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>{t("rates.exempt.items.postal")}</li>
                      <li>{t("rates.exempt.items.financial")}</li>
                      <li>{t("rates.exempt.items.insurance")}</li>
                      <li>{t("rates.exempt.items.education")}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* VAT Registration */}
        <section className="px-4 py-12 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("registration.title")}
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    {t("registration.requirements.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4">
                      <div>
                        <h4 className="font-medium mb-2">
                          {t("registration.requirements.mandatory.title")}:
                        </h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>
                            {t(
                              "registration.requirements.mandatory.items.turnover"
                            )}
                          </li>
                          <li>
                            {t(
                              "registration.requirements.mandatory.items.business"
                            )}
                          </li>
                          <li>
                            {t(
                              "registration.requirements.mandatory.items.successor"
                            )}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">
                          {t("registration.requirements.voluntary.title")}:
                        </h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>
                            {t(
                              "registration.requirements.voluntary.items.threshold"
                            )}
                          </li>
                          <li>
                            {t(
                              "registration.requirements.voluntary.items.proof"
                            )}
                          </li>
                          <li>
                            {t(
                              "registration.requirements.voluntary.items.approval"
                            )}
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

        {/* Detailed Information */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("info.title")}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="filing">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    {t("info.filing.title")}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                    <li>{t("info.filing.items.monthly")}</li>
                    <li>{t("info.filing.items.quarterly")}</li>
                    <li>{t("info.filing.items.due")}</li>
                    <li>{t("info.filing.items.lists")}</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="records">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    {t("info.records.title")}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                    <li>{t("info.records.items.maintain")}</li>
                    <li>{t("info.records.items.invoice")}</li>
                    <li>{t("info.records.items.separate")}</li>
                    <li>{t("info.records.items.digital")}</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="penalties">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <Scale className="w-5 h-5" />
                    {t("info.penalties.title")}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                    <li>{t("info.penalties.items.registration")}</li>
                    <li>{t("info.penalties.items.filing")}</li>
                    <li>{t("info.penalties.items.interest")}</li>
                    <li>{t("info.penalties.items.additional")}</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Tips Section */}
        <section className="px-4 py-12 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              {t("tips.title")}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CircleDollarSign className="w-5 h-5" />
                    {t("tips.cash_flow.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>{t("tips.cash_flow.items.monitor")}</li>
                    <li>{t("tips.cash_flow.items.plan")}</li>
                    <li>{t("tips.cash_flow.items.account")}</li>
                    <li>{t("tips.cash_flow.items.receivables")}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    {t("tips.international.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>{t("tips.international.items.rules")}</li>
                    <li>{t("tips.international.items.verify")}</li>
                    <li>{t("tips.international.items.export")}</li>
                    <li>{t("tips.international.items.representation")}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5" />
                    {t("tips.mistakes.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>{t("tips.mistakes.items.registration")}</li>
                    <li>{t("tips.mistakes.items.rate")}</li>
                    <li>{t("tips.mistakes.items.documentation")}</li>
                    <li>{t("tips.mistakes.items.filing")}</li>
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

export default VatPage;
