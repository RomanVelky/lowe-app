import {
  AlertCircle,
  CalendarClock,
  CalendarDays,
  CircleDollarSign,
  FileText,
  HandCoins,
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
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "@/context/useTranslations";
import { TracingBeam } from "@/components/ui/animations/tracing-beam";

const TaxCalendarPage = () => {
  const t = useTranslations("TAX_CALENDAR");

  const pageContent = (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className=" py-12 md:py-24 lg:py-32 container">
        <div className="max-w-[800px] mx-auto text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            {t("hero.title")}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Quick Reference */}
      <section className=" py-12 bg-muted/50 rounded-md">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            {t("key_deadlines.title")}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  {t("key_deadlines.income_tax.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t("key_deadlines.income_tax.description")}
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    {t("key_deadlines.income_tax.extensions")}
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                    <li>{t("key_deadlines.income_tax.june")}</li>
                    <li>{t("key_deadlines.income_tax.september")}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HandCoins className="w-5 h-5" />
                  {t("key_deadlines.vat.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t("key_deadlines.vat.description")}
                </p>
                <div className="space-y-2">
                  <p className="text-sm">{t("key_deadlines.vat.due_dates")}</p>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                    <li>{t("key_deadlines.vat.day_after")}</li>
                    <li>{t("key_deadlines.vat.same_day")}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CircleDollarSign className="w-5 h-5" />
                  {t("key_deadlines.advance_tax.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t("key_deadlines.advance_tax.description")}
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    {t("key_deadlines.advance_tax.schedule")}
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                    <li>{t("key_deadlines.advance_tax.quarterly")}</li>
                    <li>{t("key_deadlines.advance_tax.monthly")}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Monthly Calendar */}
      <section className=" py-12 md:py-24">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            {t("monthly_calendar.title")}
          </h2>

          <Tabs defaultValue="q1" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="q1">
                {t("monthly_calendar.tabs.q1")}
              </TabsTrigger>
              <TabsTrigger value="q2">
                {t("monthly_calendar.tabs.q2")}
              </TabsTrigger>
              <TabsTrigger value="q3">
                {t("monthly_calendar.tabs.q3")}
              </TabsTrigger>
              <TabsTrigger value="q4">
                {t("monthly_calendar.tabs.q4")}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="q1">
              <div className="space-y-8">
                {/* January */}
                <Card>
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="flex items-center gap-2">
                      <CalendarDays className="w-5 h-5" />
                      {t("monthly_calendar.months.january")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">
                            {t("monthly_calendar.table.date")}
                          </TableHead>
                          <TableHead>
                            {t("monthly_calendar.table.obligation")}
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            {t("monthly_calendar.table.details")}
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
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.monthly_vat_payment"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.dec_previous")}
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
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t("monthly_calendar.obligations.vat_return")}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.q4_previous")}
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
                                {t("monthly_calendar.badges.income")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.monthly_income_tax"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.tax_liability")}
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
                                {t("monthly_calendar.badges.property")}
                              </Badge>
                              {t("monthly_calendar.obligations.property_tax")}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.property_changes")}
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
                      {t("monthly_calendar.months.february")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">
                            {t("monthly_calendar.table.date")}
                          </TableHead>
                          <TableHead>
                            {t("monthly_calendar.table.obligation")}
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            {t("monthly_calendar.table.details")}
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
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.monthly_vat_payment"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.jan_previous")}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Feb 25</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t("monthly_calendar.obligations.vat_return")}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.jan_previous")}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Feb 28</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-red-50 dark:bg-red-600"
                              >
                                {t("monthly_calendar.badges.income")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.monthly_income_tax"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.tax_liability")}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Feb 28</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-purple-50 dark:bg-purple-600"
                              >
                                {t("monthly_calendar.badges.employer")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.annual_income_overview"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.employer_filing")}
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
                      {t("monthly_calendar.months.march")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">
                            {t("monthly_calendar.table.date")}
                          </TableHead>
                          <TableHead>
                            {t("monthly_calendar.table.obligation")}
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            {t("monthly_calendar.table.details")}
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
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.monthly_vat_payment"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.feb_previous")}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Mar 25</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-600"
                              >
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t("monthly_calendar.obligations.vat_return")}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.feb_previous")}
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
                                {t("monthly_calendar.badges.income")}
                              </Badge>
                              <Badge className="bg-red-500 text-white dark:bg-red-900">
                                {t("monthly_calendar.badges.important")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.income_tax_return"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.standard_deadline")}
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
                                {t("monthly_calendar.badges.income")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.quarterly_income_tax"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.q1_payment")}
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
                                {t("monthly_calendar.badges.charity")}
                              </Badge>
                              {t("monthly_calendar.obligations.tax_assignment")}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.charity_portion")}
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
                      {t("monthly_calendar.months.april")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">
                            {t("monthly_calendar.table.date")}
                          </TableHead>
                          <TableHead>
                            {t("monthly_calendar.table.obligation")}
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            {t("monthly_calendar.table.details")}
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
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.monthly_vat_payment"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.mar_previous")}
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
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t("monthly_calendar.obligations.vat_return")}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.mar_previous")}
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
                                {t("monthly_calendar.badges.income")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.monthly_income_tax"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.tax_liability")}
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
                      {t("monthly_calendar.months.may")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">
                            {t("monthly_calendar.table.date")}
                          </TableHead>
                          <TableHead>
                            {t("monthly_calendar.table.obligation")}
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            {t("monthly_calendar.table.details")}
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
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.monthly_vat_payment"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.apr_previous")}
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
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t("monthly_calendar.obligations.vat_return")}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.apr_previous")}
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
                                {t("monthly_calendar.badges.income")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.monthly_income_tax"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.tax_liability")}
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
                      {t("monthly_calendar.months.june")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">
                            {t("monthly_calendar.table.date")}
                          </TableHead>
                          <TableHead>
                            {t("monthly_calendar.table.obligation")}
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            {t("monthly_calendar.table.details")}
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
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.monthly_vat_payment"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.may_previous")}
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
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t("monthly_calendar.obligations.vat_return")}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.may_previous")}
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
                                {t("monthly_calendar.badges.income")}
                              </Badge>
                              <Badge className="bg-red-500 text-white dark:bg-red-900">
                                {t("monthly_calendar.badges.important")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.extended_tax_filing"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.extension_request")}
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
                                {t("monthly_calendar.badges.income")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.quarterly_income_tax"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.q2_payment")}
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
                      {t("monthly_calendar.months.july")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">
                            {t("monthly_calendar.table.date")}
                          </TableHead>
                          <TableHead>
                            {t("monthly_calendar.table.obligation")}
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            {t("monthly_calendar.table.details")}
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
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.monthly_vat_payment"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.jun_previous")}
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
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t("monthly_calendar.obligations.vat_return")}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.jun_previous")}
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
                                {t("monthly_calendar.badges.income")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.monthly_income_tax"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.tax_liability")}
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
                      {t("monthly_calendar.months.august")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">
                            {t("monthly_calendar.table.date")}
                          </TableHead>
                          <TableHead>
                            {t("monthly_calendar.table.obligation")}
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            {t("monthly_calendar.table.details")}
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
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.monthly_vat_payment"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.jul_previous")}
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
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t("monthly_calendar.obligations.vat_return")}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.jul_previous")}
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
                                {t("monthly_calendar.badges.income")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.monthly_income_tax"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.tax_liability")}
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
                      {t("monthly_calendar.months.september")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">
                            {t("monthly_calendar.table.date")}
                          </TableHead>
                          <TableHead>
                            {t("monthly_calendar.table.obligation")}
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            {t("monthly_calendar.table.details")}
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
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.monthly_vat_payment"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.aug_previous")}
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
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t("monthly_calendar.obligations.vat_return")}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.aug_previous")}
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
                                {t("monthly_calendar.badges.income")}
                              </Badge>
                              <Badge className="bg-red-500 text-white dark:bg-red-900">
                                {t("monthly_calendar.badges.important")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.foreign_income_tax"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.foreign_income")}
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
                                {t("monthly_calendar.badges.income")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.quarterly_income_tax"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.q3_payment")}
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
                      {t("monthly_calendar.months.october")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">
                            {t("monthly_calendar.table.date")}
                          </TableHead>
                          <TableHead>
                            {t("monthly_calendar.table.obligation")}
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            {t("monthly_calendar.table.details")}
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
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.monthly_vat_payment"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.sep_previous")}
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
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t("monthly_calendar.obligations.vat_return")}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.sep_previous")}
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
                                {t("monthly_calendar.badges.income")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.monthly_income_tax"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.tax_liability")}
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
                      {t("monthly_calendar.months.november")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">
                            {t("monthly_calendar.table.date")}
                          </TableHead>
                          <TableHead>
                            {t("monthly_calendar.table.obligation")}
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            {t("monthly_calendar.table.details")}
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
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.monthly_vat_payment"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.oct_previous")}
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
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t("monthly_calendar.obligations.vat_return")}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.oct_previous")}
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
                                {t("monthly_calendar.badges.income")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.monthly_income_tax"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.tax_liability")}
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
                      {t("monthly_calendar.months.december")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">
                            {t("monthly_calendar.table.date")}
                          </TableHead>
                          <TableHead>
                            {t("monthly_calendar.table.obligation")}
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            {t("monthly_calendar.table.details")}
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
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.monthly_vat_payment"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.nov_previous")}
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
                                {t("monthly_calendar.badges.vat")}
                              </Badge>
                              {t("monthly_calendar.obligations.vat_return")}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.nov_previous")}
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
                                {t("monthly_calendar.badges.income")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.quarterly_income_tax"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.q4_payment")}
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
                                {t("monthly_calendar.badges.income")}
                              </Badge>
                              {t(
                                "monthly_calendar.obligations.monthly_income_tax"
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {t("monthly_calendar.details.tax_liability")}
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
      <section className=" py-12 bg-muted/50 rounded-md">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            {t("notes.title")}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  {t("notes.extensions.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>{t("notes.extensions.three_month")}</li>
                  <li>{t("notes.extensions.six_month")}</li>
                  <li>{t("notes.extensions.request")}</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarClock className="w-5 h-5" />
                  {t("notes.deadlines.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>{t("notes.deadlines.weekend")}</li>
                  <li>{t("notes.deadlines.electronic")}</li>
                  <li>{t("notes.deadlines.paper")}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <>
      <div className="hidden lg:block">
        <TracingBeam>{pageContent}</TracingBeam>
      </div>
      <div className="lg:hidden">{pageContent}</div>
    </>
  );
};

export default TaxCalendarPage;
