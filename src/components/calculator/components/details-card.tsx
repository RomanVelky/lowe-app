import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CALCULATOR_CONSTANTS as CC } from "@/lib/calculator-constants";
import { motion } from "framer-motion";
import { FormSchemaType } from "../calculator.schema";
import { companyDeduction, employeeDeduction } from "../calculator.utils";
import type { CalculatorState } from "../calculator.types";
interface InfoItemProps {
  label: string;
  value: string;
  subvalue?: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ label, value, subvalue }) => (
  <div className="space-y-1">
    <h3 className="text-sm font-medium">{label}</h3>
    <p className="text-sm text-muted-foreground">{value}</p>
    {subvalue && <p className="text-xs text-muted-foreground">{subvalue}</p>}
  </div>
);

interface DetailsCardProps {
  calculationResults: CalculatorState;
  watchedValues: FormSchemaType;
  isMobile: boolean;
}

const DetailsCard: React.FC<DetailsCardProps> = ({
  calculationResults,
  watchedValues,
  isMobile,
}) => {
  const {
    deductions,
    taxableIncome,
    nonTaxableAmount,
    incomeWithoutDeductions,
    incomeTaxAmount,
    taxBonus,
  } = calculationResults;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: isMobile ? 100 : 0,
        x: !isMobile ? -100 : 0,
      }}
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      exit={{
        opacity: 0,
        y: isMobile ? 100 : 0,
        x: !isMobile ? -100 : 0,
      }}
      transition={{ duration: 0.5 }}
      className="lg:col-start-3 lg:row-start-1 lg:mt-0 flex justify-center w-full"
      style={{ height: "auto" }}
    >
      <Card className="w-full md:w-80 shadow-lg border-0 bg-card/95 backdrop-blur-sm h-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">
            Detailné informácie
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            <InfoItem
              label="Odvody zamestnanec"
              value={`${deductions.toFixed(2)} €`}
              subvalue={`(${(employeeDeduction * 100).toFixed(1)}%)`}
            />
            <InfoItem
              label="Odvody zamestnávateľ"
              value={`${(
                (watchedValues.wage || CC.MIN_WAGE) * companyDeduction
              ).toFixed(2)} €`}
              subvalue={`(${(companyDeduction * 100).toFixed(1)}%)`}
            />
            <InfoItem
              label="Základ dane"
              value={`${incomeWithoutDeductions.toFixed(2)} €`}
            />
            <InfoItem
              label="Nezdaniteľná časť"
              value={`${nonTaxableAmount.toFixed(2)} €`}
            />
            <InfoItem
              label="Zdaniteľný príjem"
              value={`${taxableIncome.toFixed(2)} €`}
            />
            <InfoItem
              label="Daň z príjmu"
              value={`${incomeTaxAmount.toFixed(2)} €`}
              subvalue={`(${(CC.INCOME_TAX * 100).toFixed(0)}%)`}
            />
            <InfoItem label="Daňový bonus" value={`${taxBonus.toFixed(2)} €`} />
          </div>

          {(watchedValues.childrenUnder18 > 0 ||
            watchedValues.childrenOver18 > 0) && (
            <div className="pt-2 border-t">
              <h3 className="text-sm font-medium mb-2">Daňový bonus na deti</h3>
              <div className="grid grid-cols-2 gap-2">
                {watchedValues.childrenUnder18 > 0 && (
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">
                      Deti do 18 rokov:
                    </p>
                    <p className="text-sm">
                      max.{" "}
                      {(
                        watchedValues.childrenUnder18 *
                        CC.MAX_ONE_CHILDREN_UNDER_DEDUCTION
                      ).toFixed(2)}{" "}
                      €
                    </p>
                  </div>
                )}
                {watchedValues.childrenOver18 > 0 && (
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">
                      Deti nad 18 rokov:
                    </p>
                    <p className="text-sm">
                      max.{" "}
                      {(
                        watchedValues.childrenOver18 *
                        CC.MAX_ONE_CHILDREN_OVER_DEDUCTION
                      ).toFixed(2)}{" "}
                      €
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DetailsCard;
