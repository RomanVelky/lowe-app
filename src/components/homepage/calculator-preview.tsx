import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const minWage = 750;
const formSchema = z.object({
  grossWage: z.number().min(minWage, {
    message: "Gross wage must be at least minimum wage (750€)",
  }),
});

export default function CalculatorPreview() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      grossWage: 750,
    },
  });

  const watchedValues = form.watch();

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const netWage = parseFloat(
    (
      (watchedValues.grossWage - watchedValues.grossWage * 0.134) *
      0.81
    ).toFixed(2)
  );
  const superGrossWage = parseFloat(
    (watchedValues.grossWage * 1.362).toFixed(2)
  );

  return (
    <div className="px-16 py-5">
      <div className="w-96 border-2 py-5 px-5 border-gray-950 rounded-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="grossWage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hrubá mzda (€)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder={minWage.toString()}
                      inputMode="numeric"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
      <div className="pt-16">
        <h1 className="text-2xl font-bold">Výpočet čistej mzdy</h1>
        <h6 className="text-gray-500">
          Super hrubá mzda (náklady zamestnávateľa): {superGrossWage}€
        </h6>
        <h6 className="text-gray-500">
          Hrubá mzda: {watchedValues.grossWage || minWage}€
        </h6>
        <h6 className="text-gray-500">Čistá mzda: {netWage}€</h6>
      </div>
    </div>
  );
}
