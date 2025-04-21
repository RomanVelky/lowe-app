import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CALCULATOR_CONSTANTS as CC } from "@/lib/calculator-constants";
import { Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { FormSchemaType } from "../calculator.schema";
import { WageType } from "../calculator.types";
import { UseFormReturn } from "react-hook-form";

interface InputFormCardProps {
  form: UseFormReturn<FormSchemaType>;
  onToggleDetails: () => void;
  isDetailsVisible: boolean;
}

const InputFormCard: React.FC<InputFormCardProps> = ({
  form,
  onToggleDetails,
  isDetailsVisible,
}) => {
  return (
    <Card className="w-full md:w-80 shadow-md border-0 bg-card/95 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center">
          <Select
            value={form.getValues("calcType")}
            onValueChange={(value) => {
              form.setValue("calcType", value as WageType);
            }}
          >
            <SelectTrigger className="w-full h-9 text-base font-medium">
              <SelectValue placeholder="Typ kalkulačky" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="net">Čistá</SelectItem>
                <SelectItem value="gross">Hrubá</SelectItem>
                <SelectItem value="supergross">SuperHrubá</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-4">
            {/* GROSS WAGE INPUT */}
            <FormField
              control={form.control}
              name="wage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    {form.getValues("calcType") === "gross"
                      ? "Super hrubá mzda (€)"
                      : "Hrubá mzda (€)"}
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="number"
                        min="0"
                        placeholder={CC.MIN_WAGE.toString()}
                        inputMode="numeric"
                        className="pl-8"
                        {...field}
                        value={field.value || ""}
                        onChange={(
                          e: React.ChangeEvent<HTMLInputElement>
                        ): void => {
                          const value = e.target.value;
                          field.onChange(
                            value === "" ? "" : e.target.valueAsNumber
                          );
                        }}
                      />
                      <div className="absolute left-2.5 inset-y-0 flex items-center pointer-events-none">
                        <Euro className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* NON TAXABLE PART SWITCH */}
            <FormField
              control={form.control}
              name="nonTaxablePart"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between space-y-0 rounded-lg border p-3 relative group">
                  <div>
                    <FormLabel className="text-sm font-medium">
                      Nezdaniteľná časť
                    </FormLabel>
                    <span className="hidden group-hover:block absolute -top-10 left-0 right-0 bg-popover text-popover-foreground text-xs p-2 rounded shadow-md">
                      Nezdaniteľná časť základu dane:{" "}
                      {CC.NON_TAXABLE_AMOUNT_OF_TAX_BASIS.toFixed(2)} €
                    </span>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-3">
              {/* CHILDREN UNDER 18 INPUT */}
              <FormField
                control={form.control}
                name="childrenUnder18"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Deti do 18
                    </FormLabel>
                    <FormControl>
                      <Input
                        inputMode="numeric"
                        type="number"
                        min="0"
                        className="text-center"
                        {...field}
                        value={field.value !== undefined ? field.value : ""}
                        onChange={(
                          e: React.ChangeEvent<HTMLInputElement>
                        ): void => {
                          const value = e.target.value;
                          field.onChange(
                            value === "" ? "" : e.target.valueAsNumber
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* CHILDREN OVER 18 INPUT */}
              <FormField
                control={form.control}
                name="childrenOver18"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Deti nad 18
                    </FormLabel>
                    <FormControl>
                      <Input
                        inputMode="numeric"
                        type="number"
                        min="0"
                        className="text-center"
                        {...field}
                        value={field.value !== undefined ? field.value : ""}
                        onChange={(
                          e: React.ChangeEvent<HTMLInputElement>
                        ): void => {
                          const value = e.target.value;
                          field.onChange(
                            value === "" ? "" : e.target.valueAsNumber
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full">
              <Button
                onClick={onToggleDetails}
                variant="outline"
                className="w-full"
                disabled={
                  !form.formState.isValid ||
                  form.getValues("calcType") !== "net"
                }
                type="button"
              >
                {isDetailsVisible ? "Skryť info" : "Viac info"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default InputFormCard;
