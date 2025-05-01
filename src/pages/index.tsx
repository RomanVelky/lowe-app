import Accordions from "@/components/homepage/homepage-accordions";
import HomePage from "@/components/homepage/homepage";

const Homepage = () => {
  return (
    <main className="min-h-svh">
      <HomePage />
      <Accordions />
    </main>
  );
};

export default Homepage;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}
