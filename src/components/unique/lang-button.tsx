import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
  const currentLocale = router.locale || "sk";

  const handleLanguageChange = () => {
    const newLocale = currentLocale === "en" ? "sk" : "en";
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];
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
