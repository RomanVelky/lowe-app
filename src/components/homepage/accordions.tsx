import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Accordions() {
  return (
    <div className="flex gap-10">
      <div className="w-1/2">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Nerozumieš niečomu?</AccordionTrigger>
            <AccordionContent>
              Ak niečomu nerozumieš, skús pogooogliť na webe, ak nenájdeš
              odpoveď, tak sa nás spýtaj na našej zákazníckej podpore (ikona
              otázkinu v hornom menu).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Ako môžeš poskytnúť spätnú väzbu na vylepšenie stránky?
            </AccordionTrigger>
            <AccordionContent>
              Klikni hore v menu na otáznik a napíš čo máš na srdci, poprípade
              čo by si zmmenil alebo spravil inak, budeme ti vďační.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Prečo používať kalkulačky na tejto stránke?
            </AccordionTrigger>
            <AccordionContent>
              Programoval ich človek čo sa v daniach vôbec nevyznal a snažil sa
              ich pochopiť, a preto dbal na to aby boli jednoduché a aj laik
              rozumel ich výstupnému výpočtu.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="w-1/2">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Prečo je viacero funkcíí vo fáze “bude už čoskoro”?
            </AccordionTrigger>
            <AccordionContent>
              Dôvodom je, že na vývoji pracuje len jeden developer vo voľnom
              čase a funkcionality sa snaží dodávať plne funkčné a pretestované
              a to chce čas.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Čo plánujeme do budúcna?</AccordionTrigger>
            <AccordionContent>
              Chceli by sme časom pridávať články, ktoré by vysvetľovali veci zo
              sveta financií a daní, aby ste sa obyčajný človek v tom dokázal
              lepšie zorientovať, bez rozsiahleho študovania. Do budúcna
              plánujeme spraviť napr. návody ako začať s kryptomenami,
              integrovať pripojenie crypto penaženiek na našu platformu a mnoho
              iných.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Kto by mohol využiť kalkulačky a poskytované informácie?
            </AccordionTrigger>
            <AccordionContent>
              Každý. Či už si môžete porovnať platové podmienky voči priemernej
              mzde, alebo vidieť rozdiel medzi platom zamestnanca, SZČO. Ak vás
              zaujímajú financie, alebo by ste si radi rozšírili svoje obzory.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
