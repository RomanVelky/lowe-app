import { ArrowRight, Building, Coins, PiggyBank, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const Savings = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="px-4 pb-14 container">
          <div className="max-w-[800px] mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Smart Savings Guide
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover different ways to save and secure your financial future
            </p>
          </div>
        </section>
        {/* Main Savings Types */}
        <section className="px-4 py-12 md:py-24 bg-muted/50 rounded-md">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Types of Savings
            </h2>
            {/* Traditional Savings Account */}
            <div className="grid gap-8 max-w-5xl mx-auto">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PiggyBank className="w-6 h-6" />
                    Savings Accounts
                  </CardTitle>
                  <CardDescription>
                    Traditional banking savings with easy access to your money
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-medium">Key Benefits:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Easy access to your money</li>
                        <li>FDIC/European deposit protection</li>
                        <li>No risk investment</li>
                        <li>Multiple account options</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Interest Rates:</h4>
                      <p className="text-muted-foreground">
                        Current rates range from 0.5% to 4% annually depending
                        on the bank and account type
                      </p>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/savings/accounts">
                      Learn More About Savings Accounts
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              {/* Building Savings */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="w-6 h-6" />
                    Building Savings (Stavebné Sporenie)
                  </CardTitle>
                  <CardDescription>
                    Special Slovak savings program for housing purposes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-medium">Key Benefits:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>State premium contribution</li>
                        <li>Favorable interest rates</li>
                        <li>Option for future housing loan</li>
                        <li>Tax advantages</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Features:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>6-year minimum saving period</li>
                        <li>State premium up to 70€ annually</li>
                        <li>Interest rates around 1-2%</li>
                      </ul>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/savings/building">
                      Explore Building Savings
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              {/* Retirement Savings */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="w-6 h-6" />
                    Retirement Savings
                  </CardTitle>
                  <CardDescription>
                    Long-term savings for your retirement years
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-medium">Options Include:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>2nd Pillar (Mandatory)</li>
                        <li>3rd Pillar (Voluntary)</li>
                        <li>Supplementary pension savings</li>
                        <li>Private retirement accounts</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Benefits:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Tax advantages</li>
                        <li>Employer contributions possible</li>
                        <li>Long-term wealth building</li>
                      </ul>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/savings/retirement">
                      Plan Your Retirement
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* Quick Tips Section */}
        <section className="px-4 py-12 md:py-24 container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
              Smart Saving Tips
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Coins className="w-5 h-5" />
                    Diversify
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Don't put all your savings in one place. Combine different
                    types of savings for optimal results.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PiggyBank className="w-5 h-5" />
                    Start Early
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The earlier you start saving, the more time your money has
                    to grow through compound interest.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="w-5 h-5" />
                    Regular Savings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Set up automatic transfers to your savings accounts each
                    month for consistent growth.
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

export default Savings;
