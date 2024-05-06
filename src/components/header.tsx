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

export default function Header() {
  return (
    <nav className=" border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/logo.svg" alt="Love Logo" width={45} height={45} />
          </a>
        </div>
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>MZDY</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink
                        className="bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500"
                        asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="#">
                          <div className="mb-2 mt-4 text-lg font-medium">
                            ČISTÁ MZDA
                          </div>
                          <p className="text-sm leading-tight text-slate-50">
                            Jednoduchá a prehľadná kalkulačka na výpočet čistej
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="#" title="HRUBÁ MZDA">
                      Výpočet hrubej mzdy
                    </ListItem>
                    <ListItem href="#" title="SUPERHRUBÁ MZDA">
                      Výpočet superhrubej mzdy
                    </ListItem>
                    <ListItem href="#" title="PRIEMERNÁ MZDA">
                      Porovnanie priemernej mzdy naprieč krajinami
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>SPORENIE</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink
                        className="bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500"
                        asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="#">
                          <div className="mb-2 mt-4 text-lg font-medium">
                            INVESTÍCIE
                          </div>
                          <p className="text-sm leading-tight text-slate-50">
                            Podielové fondy Nehnutelnosti
                          </p>
                          <p className="text-sm leading-tight text-slate-50">
                            Akcie
                          </p>
                          <p className="text-sm leading-tight text-slate-50">
                            Kryptomeny
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="#" title="SPORIACE ÚČTY">
                      Typy a fungovanie sporiacich účtov
                    </ListItem>
                    <ListItem href="#" title="STAVEBNÉ SPORENIE">
                      Čo je to stavebné sporenie?
                    </ListItem>
                    <ListItem href="#" title="SPORENIE NA DÔCHODOK">
                      Možnosti sporenia na dôchodok
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>DANE</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink
                        className="bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500"
                        asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="#">
                          <div className="mb-2 mt-4 text-lg font-medium">
                            DPH
                          </div>
                          <p className="text-sm leading-tight text-slate-50">
                            Dôležité informácie o dani z pridanej hodnoty
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="#" title="DAŇ Z PRÍJMU">
                      Čo je to daň z príjmu? Od čoho závisí jej výška?
                    </ListItem>
                    <ListItem href="#" title="DAŇOVÝ KALENDÁR">
                      Kalendár obsahujúci informácie dokedy a aké dane zaplatiť
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
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
          </Button>
          <Button variant="outline" size="icon">
            <LanguageIcon />
          </Button>
          <Button variant="outline" size="icon">
            <MenuIcon />
          </Button>
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
