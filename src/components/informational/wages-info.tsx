import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Euro,
  LineChart,
  Users,
} from "lucide-react";
import { useState } from "react";
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
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";

type SortDirection = "asc" | "desc" | null;

const WageInfo = () => {
  const t = useTranslations("WAGES_INFO");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const wageData = [
    { country: "Luxembursko", wage: 6755 },
    { country: "Dánsko", wage: 5634 },
    { country: "Írsko", wage: 4890 },
    { country: "Belgicko", wage: 4832 },
    { country: "Rakúsko", wage: 4542 },
    { country: "Nemecko", wage: 4250 },
    { country: "Francúzsko", wage: 4033 },
    { country: "Švédsko", wage: 3718 },
    { country: "Holandsko", wage: 3555 },
    { country: "Slovinsko", wage: 2757 },
    { country: "Taliansko", wage: 2729 },
    { country: "Španielsko", wage: 2716 },
    { country: "Malta", wage: 2499 },
    { country: "Litva", wage: 2265 },
    { country: "Cyprus", wage: 2203 },
    { country: "Estónsko", wage: 2075 },
    { country: "Česko", wage: 1955 },
    { country: "Portugalsko", wage: 1911 },
    { country: "Lotyšsko", wage: 1858 },
    { country: "Chorvátsko", wage: 1794 },
    { country: "Slovensko", wage: 1583 },
    { country: "Poľsko", wage: 1505 },
    { country: "Rumunsko", wage: 1478 },
    { country: "Grécko", wage: 1418 },
    { country: "Maďarsko", wage: 1408 },
    { country: "Bulharsko", wage: 1125 },
  ].sort((a, b) => {
    if (sortDirection === "desc") {
      return b.wage - a.wage;
    }
    return a.wage - b.wage;
  });

  const totalPages = Math.ceil(wageData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = wageData.slice(startIndex, endIndex);

  const toggleSort = () => {
    setSortDirection((current) => (current === "desc" ? "asc" : "desc"));
  };

  return (
    <div className="min-h-screen bg-background p-6 lg:p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            {t("title")}
          </h1>
          <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Euro className="h-5 w-5" />
                {t("cards.what_is.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t("cards.what_is.description")}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="h-5 w-5" />
                {t("cards.types.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc text-muted-foreground">
                <li>{t("cards.types.list_0")}</li>
                <li>{t("cards.types.list_1")}</li>
                <li>{t("cards.types.list_2")}</li>
                <li>{t("cards.types.list_3")}</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                {t("cards.where_used.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t("cards.where_used.description")}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t("comparison.title")}</CardTitle>
            <CardDescription>{t("comparison.subtitle")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t("comparison.table.country")}</TableHead>
                    <TableHead>
                      <Button
                        variant="ghost"
                        onClick={toggleSort}
                        className="flex items-center gap-2 hover:text-primary"
                      >
                        {t("comparison.table.min_wage")}
                        {sortDirection === "desc" ? (
                          <ArrowDown className="h-4 w-4" />
                        ) : (
                          <ArrowUp className="h-4 w-4" />
                        )}
                      </Button>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentData.map((item) => (
                    <TableRow key={item.country}>
                      <TableCell className="font-medium">
                        {item.country}
                      </TableCell>
                      <TableCell>
                        {item.wage.toLocaleString("sk-SK")} €
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-sm text-muted-foreground">
                    {t("comparison.table.rows_per_page")}
                  </p>
                  <Select
                    value={itemsPerPage.toString()}
                    onValueChange={(value) => {
                      setItemsPerPage(Number(value));
                      setCurrentPage(1);
                    }}
                  >
                    <SelectTrigger className="w-[80px]">
                      <SelectValue placeholder="10" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="15">15</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentPage((page) => Math.max(1, page - 1))
                    }
                    disabled={currentPage === 1}
                  >
                    {t("comparison.table.prev")}
                  </Button>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium">{currentPage}</span>
                    <span className="text-sm text-muted-foreground">
                      {t("comparison.table.of")}
                    </span>
                    <span className="text-sm font-medium">{totalPages}</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentPage((page) => Math.min(totalPages, page + 1))
                    }
                    disabled={currentPage === totalPages}
                  >
                    {t("comparison.table.next")}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("calculation.title")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              {t("calculation.description")}
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span>{t("calculation.steps_0")}</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span>{t("calculation.steps_1")}</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span>{t("calculation.steps_2")}</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span>{t("calculation.steps_3")}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WageInfo;
