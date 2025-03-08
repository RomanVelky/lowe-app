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

const SavingsAccounts = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="px-4 pb-14 container">
          <div className="max-w-[800px] mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Savings Accounts Guide
            </h1>
            <p className="text-xl text-muted-foreground">
              Understanding your options for secure and profitable savings
            </p>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Why Choose a Savings Account?
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Safe & Secure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Protected by deposit insurance up to €100,000 per bank in EU
                    countries
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Earn Interest
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your money grows over time with compound interest rates
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="w-5 h-5" />
                    Easy Access
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access your funds when needed, with various withdrawal
                    options
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
              Types of Savings Accounts
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Standard Savings Account</CardTitle>
                  <CardDescription>
                    Basic savings account with regular access to funds
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                      <p>
                        Lower interest rates but complete flexibility with
                        withdrawals
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                      <p>No minimum balance requirements usually</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                      <p>Perfect for emergency funds and regular savings</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Term Deposit Account</CardTitle>
                  <CardDescription>
                    Fixed-term savings with higher interest rates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                      <p>Higher interest rates for longer commitment periods</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                      <p>Fixed terms from 1 month to several years</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Lock className="w-5 h-5 text-blue-500 mt-0.5" />
                      <p>Early withdrawal may result in penalties</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>High-Yield Savings Account</CardTitle>
                  <CardDescription>
                    Better interest rates with some conditions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                      <p>
                        Higher interest rates than standard savings accounts
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                      <p>May require minimum balance or regular deposits</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                      <p>
                        Often offered by online banks with lower overhead costs
                      </p>
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
              Account Comparison
            </h2>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Feature</TableHead>
                        <TableHead>Standard Savings</TableHead>
                        <TableHead>Term Deposit</TableHead>
                        <TableHead>High-Yield</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Interest Rate
                        </TableCell>
                        <TableCell>0.01-0.5%</TableCell>
                        <TableCell>2-4%</TableCell>
                        <TableCell>3-4.5%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Minimum Balance
                        </TableCell>
                        <TableCell>€0</TableCell>
                        <TableCell>€500-1000</TableCell>
                        <TableCell>€0-100</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Access to Funds
                        </TableCell>
                        <TableCell>Anytime</TableCell>
                        <TableCell>End of Term</TableCell>
                        <TableCell>Limited</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Best For</TableCell>
                        <TableCell>Emergency Fund</TableCell>
                        <TableCell>Long-term Savings</TableCell>
                        <TableCell>Growing Savings</TableCell>
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
              Tips for Choosing a Savings Account
            </h2>

            <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PiggyBank className="w-5 h-5" />
                    Consider Your Goals
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    • Short-term vs long-term savings
                  </p>
                  <p className="text-muted-foreground">
                    • Emergency fund or wealth building
                  </p>
                  <p className="text-muted-foreground">
                    • Regular access needs
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Compare Rates
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    • Check multiple banks
                  </p>
                  <p className="text-muted-foreground">
                    • Look at online banks
                  </p>
                  <p className="text-muted-foreground">
                    • Consider promotional rates
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Check Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    • Verify deposit insurance
                  </p>
                  <p className="text-muted-foreground">
                    • Review bank reputation
                  </p>
                  <p className="text-muted-foreground">
                    • Check online security features
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="w-5 h-5" />
                    Read the Fine Print
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    • Minimum balance requirements
                  </p>
                  <p className="text-muted-foreground">• Monthly fees</p>
                  <p className="text-muted-foreground">
                    • Withdrawal limitations
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
