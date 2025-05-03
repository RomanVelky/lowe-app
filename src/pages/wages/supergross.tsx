import WageCalculator from "@/components/calculator/calculator";

const SuperGrossSallaryPage = () => {
  return (
    <>
      <WageCalculator wageType="supergross" />
    </>
  );
};
export default SuperGrossSallaryPage;
//TODO wage type dat na typ a nie string

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {},
  };
};
