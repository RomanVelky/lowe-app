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

const VatPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="px-4 pb-14 container">
          <div className="max-w-[800px] mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Slovak VAT Guide
            </h1>
            <p className="text-xl text-muted-foreground">
              Understanding VAT Rates and Requirements in Slovakia
            </p>
          </div>
        </section>

        {/* VAT Overview */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              VAT Rates Overview
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BadgePercent className="w-5 h-5" />
                    Standard Rate: 23%
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Applied to most goods and services
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Examples:</p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>Electronics</li>
                      <li>Clothing</li>
                      <li>Most services</li>
                      <li>Luxury items</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BadgePercent className="w-5 h-5" />
                    Reduced Rate: 19%
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Special category items
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Applies to:</p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>Vinegar</li>
                      <li>Salt</li>
                      <li>Electric energy</li>
                      <li>Some food products</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BadgePercent className="w-5 h-5" />
                    Special Rate: 5%
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Basic food items</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Includes:</p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>Fresh bread</li>
                      <li>Milk and dairy</li>
                      <li>Fresh fruits</li>
                      <li>Fresh vegetables</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BadgePercent className="w-5 h-5" />
                    Zero Rate: 0%
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Special transactions
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Applies to:</p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>Export of goods</li>
                      <li>Intra-EU supplies</li>
                      <li>International transport</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gray-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BadgePercent className="w-5 h-5" />
                    VAT Exempt
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">No VAT charged</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Examples:</p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>Postal services</li>
                      <li>Financial services</li>
                      <li>Insurance</li>
                      <li>Education</li>
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
              VAT Registration
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Registration Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4">
                      <div>
                        <h4 className="font-medium mb-2">
                          Mandatory Registration:
                        </h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>
                            Turnover exceeds €49,790 over 12 consecutive months
                          </li>
                          <li>
                            Acquiring a business as a going concern from a VAT
                            payer
                          </li>
                          <li>Legal successor of a VAT payer</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">
                          Voluntary Registration:
                        </h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>Available before reaching the threshold</li>
                          <li>Requires proof of business activities</li>
                          <li>Subject to tax authority approval</li>
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
              Important Information
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="filing">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    VAT Filing Requirements
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                    <li>Monthly filing for new VAT payers (first 12 months)</li>
                    <li>
                      Option for quarterly filing if turnover below €100,000
                    </li>
                    <li>VAT returns due by 25th day of following month</li>
                    <li>EC Sales Lists required for intra-EU supplies</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="records">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Record Keeping
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                    <li>Maintain records for 10 years</li>
                    <li>Detailed invoice requirements</li>
                    <li>Separate records for different VAT rates</li>
                    <li>Digital storage requirements</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="penalties">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <Scale className="w-5 h-5" />
                    Penalties and Fines
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                    <li>Late registration: up to €20,000</li>
                    <li>Late filing: from €30 to €16,000</li>
                    <li>Interest on late payments</li>
                    <li>Additional penalties for serious violations</li>
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
              VAT Tips and Best Practices
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CircleDollarSign className="w-5 h-5" />
                    Cash Flow
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Monitor VAT payment dates</li>
                    <li>Plan for VAT payments</li>
                    <li>Consider VAT payment account</li>
                    <li>Track receivables carefully</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    International Trade
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Understand EU VAT rules</li>
                    <li>Verify customer VAT numbers</li>
                    <li>Keep export documentation</li>
                    <li>Consider fiscal representation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5" />
                    Common Mistakes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Late registration</li>
                    <li>Incorrect rate application</li>
                    <li>Missing documentation</li>
                    <li>Late filing of returns</li>
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
