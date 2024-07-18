import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Accordions from "@/components/homepage/accordions";
import CalculatorPreview from "@/components/homepage/calculator-preview";

export default function Homepage() {
  const t = useTranslations();
  return (
    <main className="min-h-svh">
      <h1>{t("test")}</h1> {/* Example usage of translations */}
      <Accordions />
      <div className="py-60">
        <CalculatorPreview />
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // Import the messages for the current locale
  const messages = (await import(`../messages/${context.locale}.json`)).default;

  return {
    props: {
      messages,
    },
  };
};
