import { Button } from "./components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function App() {
  return (
    <>
      <main>
        <Accordion
          type="single"
          collapsible
          defaultValue="shipping"
          className="max-w-lg"
        >
          <AccordionItem value="support">
            <AccordionTrigger>
              How can I contact customer support?
            </AccordionTrigger>
            <AccordionContent>
              Reach us via email, live chat, or phone. We respond within 24
              hours during business days.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
      <div>
        <Button>Click Me</Button>
      </div>
    </>
  );
}

export default App;
