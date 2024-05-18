import Footer from "./footer";
import Header from "./header";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
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
