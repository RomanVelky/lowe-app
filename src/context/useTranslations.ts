import { useContext } from "react";
import { TranslationContext } from "./TranslationContext";

type TranslationFunction = (key: string) => string;

export function useTranslations(namespace?: string): TranslationFunction {
  const { messages, isLoaded } = useContext(TranslationContext);

  if (!isLoaded) {
    return (key: string): string => key;
  }

  return (key: string): string => {
    try {
      if (!namespace) {
        const parts = key.split(".");
        let current: any = messages;

        for (const part of parts) {
          if (!current || !current[part]) {
            console.error(`Key part "${part}" not found in full key "${key}"`);
            return key;
          }
          current = current[part];
        }

        if (typeof current === "string") {
          return current;
        } else {
          console.error(`Translation for "${key}" is not a string:`, current);
          return key;
        }
      }

      let current: any = messages;

      const namespaceParts = namespace.split(".");
      for (const part of namespaceParts) {
        if (!current || !current[part]) {
          console.error(`Namespace part "${part}" not found`);
          return key;
        }
        current = current[part];
      }

      const keyParts = key.split(".");
      for (const part of keyParts) {
        if (!current || !current[part]) {
          console.error(
            `Key part "${part}" not found in namespace "${namespace}"`
          );
          return key;
        }
        current = current[part];
      }

      if (typeof current === "string") {
        return current;
      } else {
        console.error(
          `Translation for "${namespace}.${key}" is not a string:`,
          current
        );
        return key;
      }
    } catch (error) {
      console.error(
        `Translation error for ${namespace || "root"}.${key}:`,
        error
      );
      return key;
    }
  };
}
