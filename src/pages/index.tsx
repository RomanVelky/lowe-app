import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Accordions from "@/components/homepage/homepage-accordions";
import CalculatorPreview from "@/components/homepage/calculator-preview";
import LangButton from "@/components/unique/lang-button";

const Homepage = () => {
  const t = useTranslations();
  return (
    <main className="min-h-svh">
      <LangButton />
      <h1>{t("test")}</h1> {/* Example usage of translations */}
      <Accordions />
      <div className="py-60">
        <CalculatorPreview />
      </div>
    </main>
  );
};

export default Homepage;

export const getStaticProps: GetStaticProps = async (context) => {
  // Import the messages for the current locale
  const messages = (await import(`../messages/${context.locale}.json`)).default;

  return {
    props: {
      messages,
    },
  };
};
