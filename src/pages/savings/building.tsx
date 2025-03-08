import {
  BadgeCheck,
  Building,
  Calculator,
  BarChartIcon as ChartBar,
  Coins,
  Globe,
  HandCoins,
  Home,
  Percent,
  Shield,
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

const BuildingSavings = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="px-4 pb-14 container">
          <div className="max-w-[800px] mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Building Savings
            </h1>
            <p className="text-xl text-muted-foreground">
              Understanding Stavebné Sporenie: A Central European Approach to
              Housing Finance
            </p>
          </div>
        </section>

        {/* What is Building Savings */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              What is Building Savings?
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Building savings (Stavebné sporenie) is a specialized
                    savings and loan program designed to help people save for
                    housing purposes. It combines regular savings with the
                    possibility of obtaining a favorable housing loan, supported
                    by state premiums.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2 pt-4">
                    <div className="space-y-2">
                      <h4 className="font-medium flex items-center gap-2">
                        <Building className="w-5 h-5" />
                        Origins
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        The concept originated in Germany (Bausparen) and was
                        adopted by Central European countries, becoming
                        particularly popular in Slovakia and the Czech Republic
                        after 1992.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium flex items-center gap-2">
                        <Globe className="w-5 h-5" />
                        Regional Popularity
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Most common in: Germany, Austria, Slovakia, Czech
                        Republic, Hungary, and Croatia. Less common or
                        non-existent in other parts of Europe and the world.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="px-4 py-12 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Key Benefits
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HandCoins className="w-5 h-5" />
                    State Premium
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Annual state contribution up to €70 in Slovakia (varies by
                    year and country). Premium is calculated as a percentage of
                    annual savings.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Percent className="w-5 h-5" />
                    Guaranteed Interest
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fixed interest rate on savings (typically 1-2%) plus state
                    premium, making it more attractive than regular savings
                    accounts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    Housing Loan Option
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Right to apply for a favorable housing loan after the
                    savings period, with better interest rates than standard
                    mortgages.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              How Building Savings Works
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Savings Phase</CardTitle>
                  <CardDescription>
                    Initial 6-year savings period
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                    <p>
                      Regular monthly deposits (amount based on your contract)
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                    <p>Annual state premium added to your savings</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                    <p>Interest earned on both savings and state premiums</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Loan Phase (Optional)</CardTitle>
                  <CardDescription>
                    After meeting saving requirements
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                    <p>Option to apply for a housing loan</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                    <p>
                      Favorable interest rates compared to standard mortgages
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                    <p>
                      Loan amount based on saved amount and creditworthiness
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparison with Other Countries */}
        <section className="px-4 py-12 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Building Savings Around the World
            </h2>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Country</TableHead>
                      <TableHead>System Name</TableHead>
                      <TableHead>State Support</TableHead>
                      <TableHead>Popularity</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Slovakia</TableCell>
                      <TableCell>Stavebné sporenie</TableCell>
                      <TableCell>Up to €70/year</TableCell>
                      <TableCell>Very High</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Czech Republic
                      </TableCell>
                      <TableCell>Stavební spoření</TableCell>
                      <TableCell>Up to 2,000 Kč/year</TableCell>
                      <TableCell>Very High</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Germany</TableCell>
                      <TableCell>Bausparen</TableCell>
                      <TableCell>Housing Premium</TableCell>
                      <TableCell>High</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Austria</TableCell>
                      <TableCell>Bausparen</TableCell>
                      <TableCell>State Premium</TableCell>
                      <TableCell>High</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Usage Tips */}
        <section className="px-4 py-12 bg-muted/50 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Tips for Building Savings
            </h2>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Optimize Your Savings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    • Save the optimal amount to maximize state premium
                  </p>
                  <p className="text-muted-foreground">
                    • Consider regular monthly deposits
                  </p>
                  <p className="text-muted-foreground">
                    • Plan for the full 6-year term
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ChartBar className="w-5 h-5" />
                    Long-term Planning
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    • Define your housing goals
                  </p>
                  <p className="text-muted-foreground">
                    • Consider future loan needs
                  </p>
                  <p className="text-muted-foreground">
                    • Compare different providers
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Coins className="w-5 h-5" />
                    State Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    • Understand current premium rates
                  </p>
                  <p className="text-muted-foreground">
                    • Check eligibility conditions
                  </p>
                  <p className="text-muted-foreground">
                    • Monitor policy changes
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Protection
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    • Savings are state-guaranteed
                  </p>
                  <p className="text-muted-foreground">
                    • Read contract terms carefully
                  </p>
                  <p className="text-muted-foreground">
                    • Keep documentation safe
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

export default BuildingSavings;
