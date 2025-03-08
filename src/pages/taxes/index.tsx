import {
  ArrowRight,
  BarChart3,
  Building2,
  Calculator,
  CircleDollarSign,
  HandCoins,
  LineChart,
  Scale,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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

const Taxes = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="px-4 pb-14 container">
          <div className="max-w-[800px] mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Slovak Tax Guide
            </h1>
            <p className="text-xl text-muted-foreground">
              Understanding Slovak Tax System and Optimization Strategies
            </p>
          </div>
        </section>

        {/* Main Tax Types */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Main Types of Taxes
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CircleDollarSign className="w-5 h-5" />
                    Income Tax
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      Progressive tax rates:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>19% up to €38,553.01</li>
                      <li>25% above €38,553.01</li>
                      <li>Tax-free allowance: €4,519.92 (2024)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HandCoins className="w-5 h-5" />
                    VAT
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">Three VAT rates:</p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>20% standard rate</li>
                      <li>10% reduced rate</li>
                      <li>Registration threshold: €49,790</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Corporate Tax
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      Corporate income tax:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>15% for revenue up to €49,790</li>
                      <li>21% for revenue above €49,790</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Entities */}
        <section className="px-4 py-12 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Business Entities
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>SZČO (Self-employed)</CardTitle>
                  <CardDescription>
                    Živnosť / Sole Proprietorship
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-medium mb-2">Advantages:</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>Simple to establish</li>
                          <li>Lower administrative burden</li>
                          <li>Flat-rate expenses option</li>
                          <li>Quick setup (within 3 days)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Disadvantages:</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>Personal liability</li>
                          <li>Limited tax optimization</li>
                          <li>Higher social contributions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>s.r.o. (Limited Liability Company)</CardTitle>
                  <CardDescription>
                    Spoločnosť s ručením obmedzeným
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-medium mb-2">Advantages:</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>Limited liability protection</li>
                          <li>Better tax optimization</li>
                          <li>Professional image</li>
                          <li>Multiple income streams</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Disadvantages:</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>Higher setup costs</li>
                          <li>More administrative work</li>
                          <li>Double taxation possible</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tax Optimization */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Tax Optimization Strategies
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    SZČO Strategies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Use flat-rate expenses (60%)</li>
                    <li>Timing of income/expenses</li>
                    <li>Home office deduction</li>
                    <li>Vehicle expenses optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    s.r.o. Strategies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Salary vs. dividend optimization</li>
                    <li>Investment tax benefits</li>
                    <li>R&D deductions</li>
                    <li>Asset depreciation planning</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-5 h-5" />
                    General Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Tax-deductible expenses</li>
                    <li>Employee benefits</li>
                    <li>Education and training costs</li>
                    <li>Charitable contributions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SK vs CZ Comparison */}
        <section className="px-4 py-12 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Slovakia vs. Czech Republic
            </h2>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Feature</TableHead>
                      <TableHead>Slovakia</TableHead>
                      <TableHead>Czech Republic</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Income Tax</TableCell>
                      <TableCell>19% / 25%</TableCell>
                      <TableCell>15% / 23%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Corporate Tax
                      </TableCell>
                      <TableCell>15% / 21%</TableCell>
                      <TableCell>19%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">VAT</TableCell>
                      <TableCell>20% / 10%</TableCell>
                      <TableCell>21% / 15% / 10%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Flat-rate Expenses
                      </TableCell>
                      <TableCell>60%</TableCell>
                      <TableCell>40% - 80%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Social Insurance
                      </TableCell>
                      <TableCell>33.15%</TableCell>
                      <TableCell>31.3%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="w-5 h-5" />
                    Slovak Advantages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Lower corporate tax for small businesses</li>
                    <li>Simpler VAT structure</li>
                    <li>More straightforward tax system</li>
                    <li>Lower administrative burden</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Czech Advantages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Lower personal income tax rates</li>
                    <li>More generous flat-rate expenses</li>
                    <li>Lower social insurance rates</li>
                    <li>More tax deduction options</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final Tips */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">
              Need Professional Advice?
            </h2>
            <p className="text-muted-foreground mb-8">
              Tax laws change frequently. Consider consulting with a tax advisor
              for personalized optimization strategies.
            </p>
            <Button size="lg" className="gap-2">
              Find Tax Advisor
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Taxes;
