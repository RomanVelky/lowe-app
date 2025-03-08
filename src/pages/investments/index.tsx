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

const Investments = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="px-4 pb-14 container">
          <div className="max-w-[800px] mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Smart Investment Guide
            </h1>
            <p className="text-xl text-muted-foreground">
              Understand different investment types and make informed decisions
              for your financial future
            </p>
          </div>
        </section>
        {/* Investment Types */}
        <section className="px-4 py-12 md:py-24 bg-muted/50 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Investment Types
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Stocks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Company shares traded on stock exchanges. Higher risk,
                    potential for higher returns.
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <LineChart className="w-4 h-4 mr-2 text-green-500" />
                    Average return: 7-10% annually
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Bonds
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fixed-income securities. Lower risk, stable returns.
                    Government or corporate debt instruments.
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <LineChart className="w-4 h-4 mr-2 text-blue-500" />
                    Average return: 3-6% annually
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Real Estate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Property investments through REITs or direct ownership. Good
                    for diversification.
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <LineChart className="w-4 h-4 mr-2 text-green-500" />
                    Average return: 8-12% annually
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    ETFs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Diversified funds tracking indexes. Balance of risk and
                    return. Easy way to invest in markets.
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <LineChart className="w-4 h-4 mr-2 text-green-500" />
                    Average return: 7-9% annually
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Mutual Funds
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Professionally managed investment pools. Good for hands-off
                    investing.
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <LineChart className="w-4 h-4 mr-2 text-green-500" />
                    Average return: 5-8% annually
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Coins className="w-5 h-5" />
                    Commodities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Raw materials like gold, silver, oil. Good hedge against
                    inflation.
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <LineChart className="w-4 h-4 mr-2 text-yellow-500" />
                    Average return: 2-8% annually
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* Risk vs Return */}
        <section className="px-4 py-12 md:py-24 container">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Risk vs Return
          </h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Lower Risk</CardTitle>
                <CardDescription>More stable, lower returns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Bonds</p>
                <p>• Certificates of Deposit</p>
                <p>• Treasury Securities</p>
                <p>• Money Market Funds</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Higher Risk</CardTitle>
                <CardDescription>
                  More volatile, higher potential returns
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Individual Stocks</p>
                <p>• Cryptocurrencies</p>
                <p>• Options Trading</p>
                <p>• Emerging Markets</p>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* Crypto Teaser */}
        <section className="px-4 py-12 md:py-24 bg-gradient-to-b from-primary/10 to-primary/5">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">
              Curious About Crypto?
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore the world of digital currencies, blockchain technology,
              and decentralized finance.
            </p>
            <Button size="lg" className="mt-6">
              Explore Crypto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Investments;
