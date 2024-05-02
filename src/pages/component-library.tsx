import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function ComponentLibrary() {
  return (
    <>
      <div>ComponentLibrary</div>
      <div className="py-11 px-11">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Why is that?</AccordionTrigger>
            <AccordionContent>
              I really don't know. I just wanted to show off the accordion
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Button>Primary</Button>
      </div>
      <div>
        <Button variant="secondary">Secondary</Button>
      </div>
      <div>
        <Button variant="destructive">destructive</Button>
      </div>
      <div>
        <Button>
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
      </div>
    </>
  );
}
