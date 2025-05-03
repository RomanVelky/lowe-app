import { createContext, useState, useEffect, ReactNode } from "react";
import { useLanguageStore } from "@/lib/store/langStore";
export interface TranslationContextType {
  messages: Record<string, any>;
  isLoaded: boolean;
}

export const TranslationContext = createContext<TranslationContextType>({
  messages: {},
  isLoaded: false,
});

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const { locale } = useLanguageStore();
  const [state, setState] = useState<TranslationContextType>({
    messages: {},
    isLoaded: false,
  });

  useEffect(() => {
    try {
      const messages = require(`../messages/${locale}.json`);
      setState({ messages, isLoaded: true });
    } catch (error) {
      console.error("Failed to load translations:", error);
      setState({ messages: {}, isLoaded: true });
    }
  }, [locale]);

  return (
    <TranslationContext.Provider value={state}>
      {children}
    </TranslationContext.Provider>
  );
};
