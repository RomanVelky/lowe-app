import WageCalculator from "@/components/calculator/calculator";

const NetSallaryPage = () => {
  return (
    <>
      <WageCalculator wageType="net" />
    </>
  );
};
export default NetSallaryPage;

//TODO wage type dat na typ a nie string

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
