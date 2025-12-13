import WageInfo from "@/components/informational/wages-info";

const WagesPage = () => {
  return (
    <>
      <WageInfo />
    </>
  );
};
export default WagesPage;

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {},
  };
};
