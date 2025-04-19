import { create } from "zustand";
import { persist } from "zustand/middleware";

type LanguageState = {
  locale: string;
  setLocale: (locale: string) => void;
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      locale: "sk",
      setLocale: (locale) => set({ locale }),
    }),
    {
      name: "lang",
    }
  )
);
