import { useTheme } from "next-themes";
import Head from "next/head";
import { ReactNode, useEffect } from "react";
import { Toaster } from "../ui/toaster";
import Footer from "./footer";
import Header from "./header";
import { useAuthStore } from "@/lib/store/authStore";
import { useRouter } from "next/router";
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const { setLastVisitedUrl } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("system");
    }
    const currentPath = router.pathname;
    if (
      !currentPath.startsWith("/sign-in") &&
      !currentPath.startsWith("/sign-up") &&
      currentPath !== "/en/sign-in" &&
      currentPath !== "/en/sign-up"
    ) {
      setLastVisitedUrl(currentPath);
    }
  }, [setTheme, setLastVisitedUrl]);

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
};

export default Layout;
