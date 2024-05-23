import Accordions from "@/components/homepage/accordions";
import CalculatorPreview from "@/components/homepage/calculator-preview";

export default function Homepage() {
  return (
    <main className="min-h-svh">
      <Accordions />
      <div className="py-60">
        <CalculatorPreview />
      </div>
    </main>
  );
}
