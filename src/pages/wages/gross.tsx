import WageCalculator from "@/components/calculator/calculator";

const GrossSallaryPage = () => {
  return (
    <>
      <WageCalculator wageType="gross" />
    </>
  );
};
export default GrossSallaryPage;

//TODO wage type dat na typ a nie string

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
