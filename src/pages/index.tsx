import { GetStaticProps } from "next";
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
