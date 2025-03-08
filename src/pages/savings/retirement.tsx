import {
  BarChart3,
  Building2,
  Calculator,
  CircleDollarSign,
  Globe2,
  HandCoins,
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

const RetirementSavings = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="px-4 pb-14 container">
          <div className="max-w-[800px] mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Retirement Savings in Slovakia
            </h1>
            <p className="text-xl text-muted-foreground">
              Understanding the Three-Pillar Pension System and EU Comparisons
            </p>
          </div>
        </section>

        {/* Slovak Pension System Overview */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Slovak Pension System
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    First Pillar
                  </CardTitle>
                  <CardDescription>Mandatory State Pension</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Managed by Social Insurance Agency</li>
                    <li>Mandatory contributions</li>
                    <li>Based on pay-as-you-go system</li>
                    <li>18.3% of gross salary</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="w-5 h-5" />
                    Second Pillar
                  </CardTitle>
                  <CardDescription>Private Pension Savings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Private pension management companies</li>
                    <li>Optional participation</li>
                    <li>4.5% of gross salary</li>
                    <li>Individual investment choices</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HandCoins className="w-5 h-5" />
                    Third Pillar
                  </CardTitle>
                  <CardDescription>Voluntary Supplementary</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Voluntary additional savings</li>
                    <li>Tax advantages</li>
                    <li>Employer contributions possible</li>
                    <li>Flexible contribution amounts</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="px-4 py-12 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Key Features of Slovak System
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Contribution Rates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Pillar</TableHead>
                        <TableHead>Employee</TableHead>
                        <TableHead>Employer</TableHead>
                        <TableHead>Total</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          1st Pillar
                        </TableCell>
                        <TableCell>4%</TableCell>
                        <TableCell>14.3%</TableCell>
                        <TableCell>18.3%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          2nd Pillar
                        </TableCell>
                        <TableCell>4.5%</TableCell>
                        <TableCell>0%</TableCell>
                        <TableCell>4.5%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          3rd Pillar
                        </TableCell>
                        <TableCell>Voluntary</TableCell>
                        <TableCell>Optional</TableCell>
                        <TableCell>Flexible</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* EU Comparison */}
        <section className="px-4 py-12 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              EU Pension Systems Comparison
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Western Europe</CardTitle>
                  <CardDescription>
                    Germany, France, Netherlands
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <div className="font-medium">Key Characteristics:</div>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Higher state pensions</li>
                      <li>Well-developed occupational schemes</li>
                      <li>Strong private pension markets</li>
                      <li>Higher contribution rates</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Nordic Countries</CardTitle>
                  <CardDescription>Sweden, Denmark, Finland</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <div className="font-medium">Key Characteristics:</div>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Universal basic pensions</li>
                      <li>Strong occupational pensions</li>
                      <li>High replacement rates</li>
                      <li>Automatic adjustment mechanisms</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Central Europe</CardTitle>
                  <CardDescription>
                    Slovakia, Czech Republic, Poland
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <div className="font-medium">Key Characteristics:</div>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Mixed systems with private elements</li>
                      <li>Mandatory second pillars</li>
                      <li>Growing voluntary schemes</li>
                      <li>Lower replacement rates</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Southern Europe</CardTitle>
                  <CardDescription>Italy, Spain, Greece</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <div className="font-medium">Key Characteristics:</div>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Strong state pensions</li>
                      <li>Less developed private pensions</li>
                      <li>Higher pension spending</li>
                      <li>Recent reform pressure</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="px-4 py-12 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Making the Most of Your Retirement Savings
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CircleDollarSign className="w-5 h-5" />
                    Start Early
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Begin contributing to voluntary schemes as early as possible
                    to maximize compound interest benefits.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Diversify
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Participate in multiple pillars to create a balanced
                    retirement portfolio.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Monitor
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Regularly review your pension fund performance and adjust
                    your strategy accordingly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe2 className="w-5 h-5" />
                    Stay Informed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Keep up with pension system changes and new opportunities
                    for retirement savings.
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

export default RetirementSavings;
