import Footer from "./footer";
import Header from "./header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto py-14">{children}</main>
      <Footer />
    </>
  );
}
