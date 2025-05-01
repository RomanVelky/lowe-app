import WageInfo from "@/components/informational/wages-info";

const WagesPage = () => {
  return (
    <>
      <WageInfo />
    </>
  );
};
export default WagesPage;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
