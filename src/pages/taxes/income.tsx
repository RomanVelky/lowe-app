import {
  Calculator,
  Calendar,
  CircleDollarSign,
  FileText,
  HandCoins,
  HelpCircle,
  PiggyBank,
  Wallet,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const IncomeTaxPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="px-4 pb-14 container">
          <div className="max-w-[800px] mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Slovak Income Tax Guide
            </h1>
            <p className="text-xl text-muted-foreground">
              Understanding Personal Income Tax in Slovakia
            </p>
          </div>
        </section>

        {/* Tax Rates Overview */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Tax Rates (2024)
            </h2>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    19% Tax Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Applies to annual taxable income up to €38,553.01
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Includes:</p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>Employment income</li>
                      <li>Business income</li>
                      <li>Rental income</li>
                      <li>Other income sources</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    25% Tax Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Applies to annual taxable income above €38,553.01
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Progressive taxation:</p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>Only applies to income exceeding threshold</li>
                      <li>Previous income taxed at 19%</li>
                      <li>Calculated on monthly basis for employment</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tax Allowances and Deductions */}
        <section className="px-4 py-12 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Tax Allowances and Deductions
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PiggyBank className="w-5 h-5" />
                    Personal Allowance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Basic tax-free allowance for 2024: €4,519.92
                    </p>
                    <div className="grid gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Conditions:</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>Decreases progressively with higher income</li>
                          <li>Available to all taxpayers</li>
                          <li>Calculated monthly for employees</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HandCoins className="w-5 h-5" />
                    Additional Deductions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-medium mb-2">Spouse Allowance:</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>Up to €4,519.92 annually</li>
                          <li>Based on spouse's income</li>
                          <li>Specific conditions apply</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Child Tax Bonus:</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>€50.14 per child monthly</li>
                          <li>Requires minimum income</li>
                          <li>Age restrictions apply</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Types of Income */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Types of Taxable Income
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="employment">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <Wallet className="w-5 h-5" />
                    Employment Income
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                    <li>Salary and wages</li>
                    <li>Bonuses and commissions</li>
                    <li>Benefits in kind</li>
                    <li>Withholding tax system</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="business">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <CircleDollarSign className="w-5 h-5" />
                    Business Income
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                    <li>Self-employment income</li>
                    <li>Trade license income</li>
                    <li>Professional services</li>
                    <li>Agricultural income</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="capital">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Capital Gains
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                    <li>Stock market investments</li>
                    <li>Property sales</li>
                    <li>Investment income</li>
                    <li>Dividend income</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Important Dates */}
        <section className="px-4 py-12 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Important Tax Dates
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Requirement</TableHead>
                        <TableHead>Details</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">March 31</TableCell>
                        <TableCell>Standard filing deadline</TableCell>
                        <TableCell>For most taxpayers</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">June 30</TableCell>
                        <TableCell>Extended filing deadline</TableCell>
                        <TableCell>With official extension</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          September 30
                        </TableCell>
                        <TableCell>Foreign income deadline</TableCell>
                        <TableCell>Income from abroad</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Monthly</TableCell>
                        <TableCell>Advance tax payments</TableCell>
                        <TableCell>For qualifying taxpayers</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Special Cases */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Special Cases and Exemptions
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    First-time Employment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Special allowances for graduates</li>
                    <li>Reduced tax burden</li>
                    <li>Time-limited benefits</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Foreign Income
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Double taxation treaties</li>
                    <li>Foreign tax credits</li>
                    <li>Special declaration requirements</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5" />
                    Tax Relief
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Research & Development</li>
                    <li>Investment incentives</li>
                    <li>Charitable donations</li>
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

export default IncomeTaxPage;
