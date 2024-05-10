import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Footer() {
  const footerMenuList = [
    {
      header: "KALKULAČKY",
      items: [
        {
          link: "/wages#net-salary",
          text: "SZČO",
        },
        {
          link: "/wages#net-salary",
          text: "ČISTÁ MZDA",
        },
        {
          link: "/savings#savings-accounts",
          text: "ÚROKOVÁ",
        },
        {
          link: "/taxes#dph",
          text: "DPH ",
        },
      ],
    },
    {
      header: "SPORENIE",
      items: [
        {
          link: "/savings#savings-accounts",
          text: "SPORIACE ÚČTY",
        },
        {
          link: "/wages#net-salary",
          text: "STAVEBNÉ SPORENIE",
        },
        {
          link: "/savings#retirement-savings",
          text: " SPORENIE NA DÔCHODOK",
        },
        {
          link: "/investments",
          text: "INVESTÍCIE ",
        },
      ],
    },
    {
      header: "DANE",
      items: [
        {
          link: "/taxes#income-tax",
          text: "DAŇ Z PRÍJMU",
        },
        {
          link: "/taxes#dph",
          text: "DPH ",
        },
      ],
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-3 w-full max-w-screen-xl" />
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="flex gap-5 px-6 flex-col pb-10 md:pb-0 md:text-start text-center">
            <div>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                Objav viac jednoduchých a intuitívnych nástrojov na našej
                stránke
              </p>
            </div>
            <div className="flex md:justify-start justify-center items-center gap-28 md:pt-6">
              <Link href="/">
                <Image src="/logo.svg" alt="Love Logo" width={75} height={75} />
              </Link>
              <Button> Prihlásenie</Button>
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
                    className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <Link href={item.link} className="hover:underline">
                        {item.text}
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://github.com/RomanVelky/kalkulacka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <svg
                className="w-8 h-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// {footerMenuList.map((footerSection: FooterSection, key: number) => (
//   // ...
//   {footerSection.items.map((item: FooterItem, itemKey: number) => (
//     // ...
//   ))}
// ))}

// interface FooterItem {
//   link: string;
//   text: string;
// }

// interface FooterSection {
//   group: string;
//   items: FooterItem[];
// }
