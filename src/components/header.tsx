import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";

export default function Header() {
  const hamburgerList = [
    { text: "MZDY", link: "/wages" },
    { text: "SPORENIE", link: "/savings" },
    { text: "INVESÍCIE", link: "/investments" },
    { text: "DANE", link: "/taxes" },
    { text: "ČLÁNKY", link: "/news" },
  ];
  const headerMenuList = [
    {
      header: "MZDY",
      link: "/wages",
      colorSubMenu: {
        link: "/wages#net-salary",
        subHeader: " ČISTÁ MZDA",
        text: " Jednoduchá a prehľadná kalkulačka na výpočet čistej",
      },
      items: [
        {
          link: "/wages#gross-salary",
          subHeader: "HRUBÁ MZDA",
          text: "Výpočet hrubej mzdy",
        },
        {
          link: "/wages#price-of-work",
          subHeader: "SUPERHRUBÁ MZDA",
          text: "Výpočet superhrubej mzdy",
        },
        {
          link: "/wages",
          subHeader: "MZDY JEDNODUCHO",
          text: " Čo je to mzda, aké druhy sú a ako sa vypočítavajú a kde sa udávajú Porovnanie priemernej mzdy naprieč krajinami.",
        },
      ],
    },
    {
      header: "SPORENIE",
      link: "/savings",
      colorSubMenu: {
        link: "/investments",
        subHeader: "INVESTÍCIE",
        text: "Podielové fondy, nehnutelnosti, akcie, kryptomeny",
      },
      items: [
        {
          link: "/savings#savings-accounts",
          subHeader: "SPORIACE ÚČTY",
          text: "Typy a fungovanie sporiacich účtov",
        },
        {
          link: "/savings#building-savings",
          subHeader: "STAVEBNÉ SPORENIE",
          text: "Čo je to stavebné sporenie?",
        },
        {
          link: "/savings#retirement-savings",
          subHeader: "SPORENIE NA DÔCHODOK",
          text: "Možnosti sporenia na dôchodok",
        },
      ],
    },
    {
      header: "DANE",
      link: "/taxes",
      colorSubMenu: {
        link: "/taxes#dph",
        subHeader: "DPH",
        text: "Dôležité informácie o dani z pridanej hodnoty",
      },
      items: [
        {
          link: "/taxes#income-tax",
          subHeader: "DAŇ Z PRÍJMU",
          text: "Čo je to daň z príjmu? Od čoho závisí jej výška?",
        },
        {
          link: "/taxes#tax-calendar",
          subHeader: "DAŇOVÝ KALENDÁR",
          text: "Kalendár obsahujúci informácie do kedy a aké dane zaplatiť",
        },
      ],
    },
  ];

  return (
    <nav className=" border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/logo.svg" alt="Love Logo" width={45} height={45} />
          </Link>
        </div>
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              {headerMenuList.map((headerSection, key) => (
                <NavigationMenuItem key={key}>
                  <NavigationMenuTrigger>
                    <Link href={headerSection.link}>
                      {headerSection.header}
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink
                          href={headerSection.colorSubMenu.link}
                          className="bg-gradient-to-b from-[#DB4E66] from-0% via-[#A24688] via-40% to-[#4E3ABA] to-100%"
                          asChild>
                          <a className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md">
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              {headerSection.colorSubMenu.subHeader}
                            </div>
                            <p className="text-sm leading-tight text-white">
                              {headerSection.colorSubMenu.text}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {headerSection.items.map((item, key) => (
                        <ListItem
                          key={key}
                          href={item.link}
                          title={item.subHeader}>
                          {item.text}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Link href="/news" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    ČLÁNKY
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex gap-3">
          <div className="px-6 hidden sm:block">
            <Button>Prihlásenie</Button>
          </div>
          <Button variant="outline" size="icon">
            <HelpOutlineIcon />
            <span className="sr-only">Support</span>
          </Button>
          <Button variant="outline" size="icon">
            <LanguageIcon />
            <span className="sr-only">Choose Language</span>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button className="lg:hidden" variant="outline" size="icon">
                <MenuIcon />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="grid gap-4 p-4">
                {hamburgerList.map((link, key) => (
                  <Link
                    key={key}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100/50 focus:bg-gray-100/50 dark:bg-gray-800 dark:hover:bg-gray-800/50 dark:focus:bg-gray-800/50"
                    href={link.link}>
                    {link.text}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
