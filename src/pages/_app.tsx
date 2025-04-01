import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/layout";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import { ClerkProvider } from "@clerk/nextjs";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [supabaseClient] = useState(() => createPagesBrowserClient());
  const locale = router.locale || "sk";
  const messages = require(`../messages/${locale}.json`);

  return (
    <>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
          appearance={{
            baseTheme: undefined,
          }}
        >
          <NextIntlClientProvider
            locale={locale}
            timeZone="Europe/Vienna"
            messages={messages}
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
      </SessionContextProvider>
    </>
  );
};

export default App;
