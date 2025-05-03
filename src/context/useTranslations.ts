// src/context/useTranslations.tsx
import { useContext } from "react";
import { TranslationContext } from "./TranslationContext";

export function useTranslations(namespace?: string) {
  const { messages, isLoaded } = useContext(TranslationContext);

  if (!isLoaded) {
    return (key: string) => key;
  }

  return (key: string) => {
    if (!namespace) {
      const parts = key.split(".");
      let result = messages;

      for (const part of parts) {
        if (!result || typeof result !== "object") return key;
        result = result[part];
      }

      return result || key;
    }

    if (!messages[namespace]) return key;

    const parts = key.split(".");
    let result = messages[namespace];

    for (const part of parts) {
      if (!result || typeof result !== "object") return key;
      result = result[part];
    }

    return result || key;
  };
}
