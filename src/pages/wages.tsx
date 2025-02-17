import { useState, useEffect } from "react";
import CalculatorPreview from "@/components/homepage/calculator-preview/calculator-preview";

const Wages = () => {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash.slice(1));
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-2xl font-bold capitalize">
          {hash ? hash.replace(/-/g, " ") : "Wages Overview"}
        </h1>
        {hash && <CalculatorPreview />}
      </div>
    </main>
  );
};

export default Wages;
