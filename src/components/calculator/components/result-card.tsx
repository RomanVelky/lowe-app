import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WageType } from "../calculator.types";
import type { CalculatorState } from "../calculator.types";
import { SignedIn, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
interface ResultsCardProps {
  calculationResults: CalculatorState;
  grossWage: number;
  calcType: WageType;
  inputValue: number;
}

const ResultsCard: React.FC<ResultsCardProps> = ({
  calculationResults,
  grossWage,
  calcType,
  inputValue,
}) => {
  const { superGrossWage, netWage, deductions, wage } = calculationResults;
  const { isSignedIn, user } = useUser();

  const handleSaveCalculation = async () => {
    try {
      console.log("Saving calculation for user:", user?.id);
      console.log("Calculation data:", {
        userId: user?.id,
        calculationType: calcType,
        grossWage,
        netWage,
        superGrossWage,
        timestamp: new Date(),
      });
    } catch (error) {
      console.error("Error saving calculation:", error);
    }
  };

  return (
    <Card className="w-full md:w-80 shadow-md border-0 bg-card/95 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold">
          {calcType === "gross"
            ? "Výpočet hrubej mzdy"
            : calcType === "supergross"
            ? "Výpočet super hrubej mzdy"
            : "Výpočet čistej mzdy"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>
              {calcType === "supergross" ? "Hrubá mzda:" : "Super hrubá mzda:"}
            </span>
            <span className="font-medium">
              {calcType === "supergross"
                ? inputValue.toFixed(2)
                : calcType === "net"
                ? superGrossWage.toFixed(2)
                : grossWage.toFixed(2)}
              €
            </span>
          </div>
          {calcType === "net" && (
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>Hrubá mzda:</span>
              <span className="font-medium">{grossWage.toFixed(2)} €</span>
            </div>
          )}
          {calcType === "net" && (
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>Odvody zamestnanec:</span>
              <span className="font-medium">{deductions.toFixed(2)} €</span>
            </div>
          )}
          <div className="flex justify-between items-center pt-2 border-t">
            <span className="text-lg font-semibold">
              {calcType === "gross"
                ? "Hrubá mzda"
                : calcType === "supergross"
                ? "Super hrubá mzda"
                : "Čistá mzda:"}
            </span>
            <span className="text-lg font-bold text-emerald-600 dark:text-emerald-500">
              {calcType === "gross"
                ? wage?.toFixed(2)
                : calcType === "supergross"
                ? superGrossWage.toFixed(2)
                : netWage.toFixed(2)}{" "}
              €
            </span>
          </div>
        </div>

        {/* Save calculation button */}
        <SignedIn>
          <Button
            onClick={handleSaveCalculation}
            variant="outline"
            className="w-full mt-2 flex items-center justify-center gap-2"
          >
            <Save className="h-4 w-4" /> Uložiť výpočet
          </Button>
        </SignedIn>
      </CardContent>
    </Card>
  );
};

export default ResultsCard;
