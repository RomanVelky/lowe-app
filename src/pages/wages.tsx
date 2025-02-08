import { usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import CalculatorPreview from "@/components/homepage/calculator-preview/calculator-preview";

const Wages = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentHash, setCurrentHash] = useState<string>("");

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    setCurrentHash(hash);

    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      setCurrentHash(newHash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname, searchParams]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-2xl font-bold capitalize">
          {currentHash ? currentHash.replace(/-/g, " ") : "Wages Overview"}
        </h1>
        {currentHash && <CalculatorPreview />}
      </div>
    </main>
  );
};

export default Wages;
