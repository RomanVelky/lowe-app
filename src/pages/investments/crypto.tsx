const Crypto = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="py-11 px-11">
        <h1>Crypto page</h1>
      </div>
    </main>
  );
};

export default Crypto;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
