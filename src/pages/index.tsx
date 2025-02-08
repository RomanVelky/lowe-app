import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Accordions from "@/components/homepage/homepage-accordions";
import HomePage from "@/components/homepage/homepage";

const Homepage = () => {
  const t = useTranslations();
  return (
    <main className="min-h-svh">
      <HomePage />
      <Accordions />
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
