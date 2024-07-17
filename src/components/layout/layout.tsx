import { useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import { Toaster } from "../ui/toaster";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("system"); // Default
    }
  }, [setTheme]);

  return (
    <>
      <Head>
        <title>Lowe</title>
        <meta name="description" content="TODO" />
      </Head>
      <div className={`theme-${resolvedTheme}`} suppressHydrationWarning>
        <Header />
        <main className="max-w-md sm:max-w-2xl md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-xl mx-auto pt-20 py-14">
          {children}
        </main>
        <Toaster />
        <Footer />
      </div>
    </>
  );
}
