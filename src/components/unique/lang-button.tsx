import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";
import { useLanguageStore } from "@/lib/store/langStore";

const languages = [
  {
    code: "sk",
    flagSrc:
      "http://purecatamphetamine.github.io/country-flag-icons/3x2/SK.svg",
  },
  {
    code: "en",
    flagSrc:
      "http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
  },
];

const LangButton = () => {
  const router = useRouter();
  const { locale, setLocale } = useLanguageStore();

  useEffect(() => {
    if (router.locale && !locale) {
      setLocale(router.locale);
    }
  }, []);

  const handleLanguageChange = () => {
    const newLocale = locale === "en" ? "sk" : "en";
    setLocale(newLocale);
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  return (
    <>
      <Button variant="ghost" size="icon" onClick={handleLanguageChange}>
        <Image
          src={currentLanguage.flagSrc}
          alt={`${currentLanguage.code} flag`}
          width={24}
          height={20}
        />
      </Button>
    </>
  );
};

export default LangButton;
