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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";

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
                        className="bg-gradient-to-b from-[#DB4E66] from-0% via-[#A24688] via-40% to-[#4E3ABA] to-100%"
                        asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                          href="#">
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            ČISTÁ MZDA
                          </div>
                          <p className="text-sm leading-tight text-white">
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
                    <ListItem href="#" title="MZDY JEDNODUCHO">
                      Čo je to mzda, aké druhy sú a ako sa vypočítavajú a kde sa
                      udávajú Porovnanie priemernej mzdy naprieč krajinami.
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
                        className="bg-gradient-to-b from-[#DB4E66] from-0% via-[#A24688] via-40% to-[#4E3ABA] to-100%"
                        asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md  p-6 no-underline outline-none focus:shadow-md"
                          href="#">
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            INVESTÍCIE
                          </div>
                          <p className="text-sm leading-tight text-white">
                            Podielové fondy Nehnutelnosti
                          </p>
                          <p className="text-sm leading-tight text-white">
                            Akcie
                          </p>
                          <p className="text-sm leading-tight text-white">
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
                        className="bg-gradient-to-b  from-[#DB4E66] from-0% via-[#A24688] via-40% to-[#4E3ABA] to-100%"
                        asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md  text-white  p-6 no-underline outline-none focus:shadow-md"
                          href="#">
                          <div className="mb-2 mt-4 text-lg font-medium">
                            DPH
                          </div>
                          <p className="text-sm leading-tight">
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
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100/50 focus:bg-gray-100/50 dark:bg-gray-800 dark:hover:bg-gray-800/50 dark:focus:bg-gray-800/50"
                  href="#">
                  Item 1
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100/50 focus:bg-gray-100/50 dark:bg-gray-800 dark:hover:bg-gray-800/50 dark:focus:bg-gray-800/50"
                  href="#">
                  Item 2
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100/50 focus:bg-gray-100/50 dark:bg-gray-800 dark:hover:bg-gray-800/50 dark:focus:bg-gray-800/50"
                  href="#">
                  Item 3
                </Link>
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
