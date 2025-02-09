import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/layout";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import { ClerkProvider } from "@clerk/nextjs";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <>
      <ClerkProvider
        publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        appearance={{
          baseTheme: undefined,
        }}
      >
        <NextIntlClientProvider
          locale={router.locale}
          messages={pageProps.messages}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </NextIntlClientProvider>
      </ClerkProvider>
    </>
  );
};

export default App;
