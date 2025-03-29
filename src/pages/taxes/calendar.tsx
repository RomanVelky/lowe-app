import {
  AlertCircle,
  CalendarClock,
  CalendarDays,
  CircleDollarSign,
  Download,
  FileText,
  HandCoins,
  HelpCircle,
  Printer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TaxCalendarPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 py-12 md:py-24 lg:py-32 container">
        <div className="max-w-[800px] mx-auto text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Slovak Tax Calendar 2024
          </h1>
          <p className="text-xl text-muted-foreground">
            All Important Tax Deadlines in Slovakia
          </p>
        </div>
      </section>

      {/* Quick Reference */}

      <section className="px-4 py-12 bg-muted/50 rounded-md">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Key Deadlines
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Income Tax Return
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Standard deadline: March 31, 2024
                </p>
                <div className="space-y-2">
                  <p className="text-sm">Extended deadlines:</p>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                    <li>June 30, 2024 (with notification)</li>
                    <li>September 30, 2024 (foreign income)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HandCoins className="w-5 h-5" />
                  VAT Returns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Monthly/Quarterly filing
                </p>
                <div className="space-y-2">
                  <p className="text-sm">Due dates:</p>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                    <li>25th day after tax period</li>
                    <li>VAT payment due same day</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CircleDollarSign className="w-5 h-5" />
                  Advance Tax Payments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Based on previous tax liability
                </p>
                <div className="space-y-2">
                  <p className="text-sm">Payment schedule:</p>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                    <li>Quarterly: Mar 31, Jun 30, Sep 30, Dec 31</li>
                    <li>Monthly: Last day of each month</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Monthly Calendar */}
      <section className="px-4 py-12 md:py-24">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Monthly Tax Calendar
          </h2>

          <Tabs defaultValue="q1" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="q1">Q1 (Jan-Mar)</TabsTrigger>
              <TabsTrigger value="q2">Q2 (Apr-Jun)</TabsTrigger>
              <TabsTrigger value="q3">Q3 (Jul-Sep)</TabsTrigger>
              <TabsTrigger value="q4">Q4 (Oct-Dec)</TabsTrigger>
            </TabsList>

            <TabsContent value="q1">
              <div className="space-y-8">
                {/* January */}
                <Card>
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="flex items-center gap-2">
                      <CalendarDays className="w-5 h-5" />
                      January
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Date</TableHead>
                          <TableHead>Obligation</TableHead>
                          <TableHead className="hidden md:table-cell">
                            Details
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Jan 15</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              Monthly advance VAT payment
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For December 2023
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Jan 25</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50  dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              VAT return filing
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For December 2023 / Q4 2023
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Jan 31</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-red-50  dark:bg-red-600"
                              >
                                Income
                              </Badge>
                              Monthly income tax advance
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For taxpayers with tax liability &gt;€16,600
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Jan 31</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-green-50  dark:bg-green-600"
                              >
                                Property
                              </Badge>
                              Property tax return
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            If property changes occurred in 2023
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* February */}
                <Card>
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="flex items-center gap-2">
                      <CalendarDays className="w-5 h-5" />
                      February
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Date</TableHead>
                          <TableHead>Obligation</TableHead>
                          <TableHead className="hidden md:table-cell">
                            Details
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Feb 15</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50  dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              Monthly advance VAT payment
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For January 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Feb 25</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50  dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              VAT return filing
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For January 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Feb 28</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-red-50  dark:bg-red-600"
                              >
                                Income
                              </Badge>
                              Monthly income tax advance
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For taxpayers with tax liability &gt;€16,600
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Feb 28</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-purple-50  dark:bg-purple-600"
                              >
                                Employer
                              </Badge>
                              Annual income overview
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For employees requesting employer tax filing
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* March */}
                <Card>
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="flex items-center gap-2">
                      <CalendarDays className="w-5 h-5" />
                      March
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Date</TableHead>
                          <TableHead>Obligation</TableHead>
                          <TableHead className="hidden md:table-cell">
                            Details
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Mar 15</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50  dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              Monthly advance VAT payment
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For February 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Mar 25</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50  dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              VAT return filing
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For February 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Mar 31</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-red-50  dark:bg-red-600"
                              >
                                Income
                              </Badge>
                              <Badge className="bg-red-500 text-white  dark:bg-red-900">
                                IMPORTANT
                              </Badge>
                              Income tax return filing
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            Standard deadline for 2023 tax year
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Mar 31</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-red-50 dark:bg-red-600"
                              >
                                Income
                              </Badge>
                              Quarterly income tax advance
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            Q1 payment for qualifying taxpayers
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Mar 31</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-yellow-50 dark:bg-yellow-600"
                              >
                                Charity
                              </Badge>
                              2% tax assignment deadline
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For directing portion of taxes to charity
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="q2">
              <div className="space-y-8">
                {/* April */}
                <Card>
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="flex items-center gap-2">
                      <CalendarDays className="w-5 h-5" />
                      April
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Date</TableHead>
                          <TableHead>Obligation</TableHead>
                          <TableHead className="hidden md:table-cell">
                            Details
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Apr 15</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              Monthly advance VAT payment
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For March 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Apr 25</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              VAT return filing
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For March 2024 / Q1 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Apr 30</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-red-50 dark:bg-red-600"
                              >
                                Income
                              </Badge>
                              Monthly income tax advance
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For taxpayers with tax liability &gt;€16,600
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* May */}
                <Card>
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="flex items-center gap-2">
                      <CalendarDays className="w-5 h-5" />
                      May
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Date</TableHead>
                          <TableHead>Obligation</TableHead>
                          <TableHead className="hidden md:table-cell">
                            Details
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">May 15</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              Monthly advance VAT payment
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For April 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">May 25</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              VAT return filing
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For April 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">May 31</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-red-50 dark:bg-red-600"
                              >
                                Income
                              </Badge>
                              Monthly income tax advance
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For taxpayers with tax liability &gt;€16,600
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* June */}
                <Card>
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="flex items-center gap-2">
                      <CalendarDays className="w-5 h-5" />
                      June
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Date</TableHead>
                          <TableHead>Obligation</TableHead>
                          <TableHead className="hidden md:table-cell">
                            Details
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Jun 15</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              Monthly advance VAT payment
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For May 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Jun 25</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              VAT return filing
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For May 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Jun 30</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-red-50 dark:bg-red-600"
                              >
                                Income
                              </Badge>
                              <Badge className="bg-red-500 text-white dark:bg-red-900">
                                IMPORTANT
                              </Badge>
                              Extended tax filing deadline
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For those who requested extension
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Jun 30</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-red-50 dark:bg-red-600"
                              >
                                Income
                              </Badge>
                              Quarterly income tax advance
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            Q2 payment for qualifying taxpayers
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="q3">
              <div className="space-y-8">
                {/* July */}
                <Card>
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="flex items-center gap-2">
                      <CalendarDays className="w-5 h-5" />
                      July
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Date</TableHead>
                          <TableHead>Obligation</TableHead>
                          <TableHead className="hidden md:table-cell">
                            Details
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Jul 15</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              Monthly advance VAT payment
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For June 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Jul 25</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              VAT return filing
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For June 2024 / Q2 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Jul 31</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-red-50 dark:bg-red-600"
                              >
                                Income
                              </Badge>
                              Monthly income tax advance
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For taxpayers with tax liability &gt;€16,600
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* August */}
                <Card>
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="flex items-center gap-2">
                      <CalendarDays className="w-5 h-5" />
                      August
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Date</TableHead>
                          <TableHead>Obligation</TableHead>
                          <TableHead className="hidden md:table-cell">
                            Details
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Aug 15</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              Monthly advance VAT payment
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For July 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Aug 25</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              VAT return filing
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For July 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Aug 31</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-red-50 dark:bg-red-600"
                              >
                                Income
                              </Badge>
                              Monthly income tax advance
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For taxpayers with tax liability &gt;€16,600
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* September */}
                <Card>
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="flex items-center gap-2">
                      <CalendarDays className="w-5 h-5" />
                      September
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Date</TableHead>
                          <TableHead>Obligation</TableHead>
                          <TableHead className="hidden md:table-cell">
                            Details
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Sep 15</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              Monthly advance VAT payment
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For August 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Sep 25</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              VAT return filing
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For August 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Sep 30</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-red-50 dark:bg-red-600"
                              >
                                Income
                              </Badge>
                              <Badge className="bg-red-500 text-white dark:bg-red-900">
                                IMPORTANT
                              </Badge>
                              Foreign income tax filing
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For taxpayers with foreign income
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Sep 30</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-red-50 dark:bg-red-600"
                              >
                                Income
                              </Badge>
                              Quarterly income tax advance
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            Q3 payment for qualifying taxpayers
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="q4">
              <div className="space-y-8">
                {/* October */}
                <Card>
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="flex items-center gap-2">
                      <CalendarDays className="w-5 h-5" />
                      October
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Date</TableHead>
                          <TableHead>Obligation</TableHead>
                          <TableHead className="hidden md:table-cell">
                            Details
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Oct 15</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              Monthly advance VAT payment
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For September 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Oct 25</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              VAT return filing
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For September 2024 / Q3 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Oct 31</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-red-50 dark:bg-red-600"
                              >
                                Income
                              </Badge>
                              Monthly income tax advance
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For taxpayers with tax liability &gt;€16,600
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* November */}
                <Card>
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="flex items-center gap-2">
                      <CalendarDays className="w-5 h-5" />
                      November
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Date</TableHead>
                          <TableHead>Obligation</TableHead>
                          <TableHead className="hidden md:table-cell">
                            Details
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Nov 15</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              Monthly advance VAT payment
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For October 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Nov 25</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              VAT return filing
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For October 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Nov 30</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-red-50 dark:bg-red-600"
                              >
                                Income
                              </Badge>
                              Monthly income tax advance
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For taxpayers with tax liability &gt;€16,600
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* December */}
                <Card>
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="flex items-center gap-2">
                      <CalendarDays className="w-5 h-5" />
                      December
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Date</TableHead>
                          <TableHead>Obligation</TableHead>
                          <TableHead className="hidden md:table-cell">
                            Details
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Dec 15</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              Monthly advance VAT payment
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For November 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Dec 25</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                VAT
                              </Badge>
                              VAT return filing
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For November 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Dec 31</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-red-50 dark:bg-red-600"
                              >
                                Income
                              </Badge>
                              Quarterly income tax advance
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            Q4 payment for qualifying taxpayers
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Dec 31</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-red-50 dark:bg-red-600"
                              >
                                Income
                              </Badge>
                              Monthly income tax advance
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            For taxpayers with tax liability &gt;€16,600
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Special Notes */}
      <section className="px-4 py-12 bg-muted/50 rounded-md">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Important Notes
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Filing Extensions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>3-month extension: Notify tax office by March 31</li>
                  <li>6-month extension: Only for foreign income</li>
                  <li>Extension request must be submitted before deadline</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarClock className="w-5 h-5" />
                  Deadline Rules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>
                    If deadline falls on weekend/holiday, moves to next business
                    day
                  </li>
                  <li>
                    Electronic filing is considered on-time if submitted by
                    midnight
                  </li>
                  <li>
                    Paper filing must be received or postmarked by deadline
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxCalendarPage;
