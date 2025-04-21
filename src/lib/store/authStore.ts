import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  lastVisitedUrl: string;
  setLastVisitedUrl: (url: string) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      lastVisitedUrl: "/",
      setLastVisitedUrl: (url) => set({ lastVisitedUrl: url }),
    }),
    {
      name: "auth",
    }
  )
);
