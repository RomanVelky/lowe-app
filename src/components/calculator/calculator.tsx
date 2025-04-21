import React, { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "framer-motion";
import { formSchema, FormSchemaType } from "./calculator.schema";
import { WageType } from "./calculator.types";
import { useCalculator, companyDeduction } from "./calculator.utils";
import InputFormCard from "./components/input-form-card";
import ResultsCard from "./components/result-card";
import DetailsCard from "./components/details-card";
import { CALCULATOR_CONSTANTS as CC } from "@/lib/calculator-constants";

interface WageCalculatorProps {
  wageType: WageType;
}

const WageCalculator: React.FC<WageCalculatorProps> = ({ wageType }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const form = useForm<FormSchemaType>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      wage: CC.MIN_WAGE,
      nonTaxablePart: true,
      childrenUnder18: 0,
      childrenOver18: 0,
      calcType: wageType,
    },
  });

  const watchedValues = form.watch();
  const calcType = watchedValues.calcType;

  const adjustedValues = useMemo(() => {
    if (calcType === "gross") {
      return {
        ...watchedValues,
        wage: watchedValues.wage,
      };
    } else if (calcType === "supergross") {
      return {
        ...watchedValues,
        wage: watchedValues.wage * (1 + companyDeduction),
      };
    }
    return watchedValues;
  }, [watchedValues, calcType]);

  const calculationResults = useCalculator(adjustedValues);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 1024);
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[auto_auto_auto] gap-4 py-5 justify-center min-[300px]:max-[475px]:px-3 items-center lg:items-stretch">
      <InputFormCard
        form={form}
        onToggleDetails={() => setIsVisible(!isVisible)}
        isDetailsVisible={isVisible}
      />
      <ResultsCard
        calculationResults={calculationResults}
        grossWage={
          calcType === "supergross"
            ? adjustedValues.wage
            : watchedValues.wage || CC.MIN_WAGE
        }
        calcType={calcType}
        inputValue={watchedValues.wage || CC.MIN_WAGE}
      />
      <AnimatePresence>
        {isVisible && (
          <DetailsCard
            calculationResults={calculationResults}
            watchedValues={watchedValues}
            isMobile={isMobile}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(WageCalculator);
