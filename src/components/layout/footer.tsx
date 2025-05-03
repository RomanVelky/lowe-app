import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import Github from "../../../public/assets/github.svg";
import { PATHS } from "@/lib/paths";
import { useUser } from "@clerk/nextjs";
import { useTranslations } from "@/context/useTranslations";

type SubPath = { link: string; text: string };
type Item = SubPath | { link: string; description: string };

const Footer = () => {
  const t = useTranslations();
  const isLoggedIn = useUser().isSignedIn;
  const footerMenuList: { header: string; items: Item[] }[] = [
    {
      header: t("FOOTER.wages.header"),
      items: [
        {
          link: PATHS.WAGES.subPaths.NET_SALARY.link,
          text: t("FOOTER.wages.link-1"),
        },
        {
          link: PATHS.WAGES.subPaths.NET_SALARY.link,
          text: t("FOOTER.wages.link-2"),
        },
        {
          link: PATHS.SAVINGS.subPaths.SAVINGS_ACCOUNTS.link,
          text: t("FOOTER.wages.link-3"),
        },
      ],
    },
    {
      header: t("FOOTER.savings.header"),
      items: [
        {
          link: PATHS.SAVINGS.subPaths.SAVINGS_ACCOUNTS.link,
          text: t("FOOTER.savings.link-1"),
        },
        {
          link: PATHS.SAVINGS.subPaths.BUILDING_SAVINGS.link,
          text: t("FOOTER.savings.link-2"),
        },
        {
          link: PATHS.SAVINGS.subPaths.RETIREMENT_SAVINGS.link,
          text: t("FOOTER.savings.link-3"),
        },
        { link: PATHS.INVESTMENTS.link, text: t("FOOTER.savings.link-4") },
      ],
    },
    {
      header: t("FOOTER.taxes.header"),
      items: [
        {
          link: PATHS.TAXES.subPaths.INCOME_TAX.link,
          text: t("FOOTER.taxes.link-1"),
        },
        { link: PATHS.TAXES.subPaths.VAT.link, text: t("FOOTER.taxes.link-2") },
      ],
    },
  ];

  return (
    <footer className="">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-3 w-full max-w-screen-xl" />
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="flex gap-5 px-6 flex-col pb-10 md:pb-0 md:text-start text-center">
            <div>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                {t("FOOTER.p")}
              </p>
            </div>
            <div className="flex md:justify-start justify-center items-center gap-28 md:pt-6">
              <Link href="/">
                <Image src="/logo.svg" alt="Love Logo" width={75} height={75} />
              </Link>
              {!isLoggedIn && (
                <Button>
                  <Link href="/sign-in">{t("LAYOUT.login-button")}</Link>
                </Button>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 text-center md:text-start">
            {footerMenuList.map((footerSection, key) => (
              <div key={key}>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {footerSection.header}
                </h2>
                {footerSection.items.map((item, itemKey) => (
                  <ul
                    key={itemKey}
                    className="text-gray-500 dark:text-gray-400 font-medium"
                  >
                    <li className="mb-4">
                      <Link href={item.link} className="hover:underline">
                        {"text" in item ? item.text : item.description}
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
        </div>
        <hr className="my-4  sm:mx-auto  lg:my-6" />
        <div>
          <div className="flex justify-center sm:mt-0">
            <a
              href="https://github.com/RomanVelky/kalkulacka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className=" fill-gray-500 hover:fill-gray-900" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
