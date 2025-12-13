import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "@/context/useTranslations";

const Accordions = () => {
  const t = useTranslations("HOMEPAGE.accordions");

  return (
    <div className="flex flex-col md:flex-row gap-10 px-8">
      <div className="w-full md:w-1/2">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>{t("leftColumn.item1.title")}</AccordionTrigger>
            <AccordionContent>{t("leftColumn.item1.content")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>{t("leftColumn.item2.title")}</AccordionTrigger>
            <AccordionContent>{t("leftColumn.item2.content")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>{t("leftColumn.item3.title")}</AccordionTrigger>
            <AccordionContent>{t("leftColumn.item3.content")}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="w-full md:w-1/2">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>{t("rightColumn.item1.title")}</AccordionTrigger>
            <AccordionContent>
              {t("rightColumn.item1.content")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>{t("rightColumn.item2.title")}</AccordionTrigger>
            <AccordionContent>
              {t("rightColumn.item2.content")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>{t("rightColumn.item3.title")}</AccordionTrigger>
            <AccordionContent>
              {t("rightColumn.item3.content")}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Accordions;
