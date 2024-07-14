import Footer from "./footer";
import Header from "./header";
import { ReactNode } from "react";
import { Toaster } from "../ui/toaster";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div>
        <main className="max-w-md sm:max-w-2xl md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-xl mx-auto py-14">
          {children}
        </main>
        <Toaster />
      </div>
      <Footer />
    </>
  );
}
