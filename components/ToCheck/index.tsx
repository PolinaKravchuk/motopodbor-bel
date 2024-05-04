import whatToCheck from "@/data/whatToCheck.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export const ToCheck = () => {
  return (
    <section
      id="check"
      className="h-2/3  max-w-5xl w-full font-mono text-sm flex flex-col gap-8"
    >
      <h2 className="text-5xl drop-shadow-lg font-thin text-center">
        Что мы проверяем?
      </h2>
      <div className="mt-20 mb-32 text-center text-lg lg:max-w-5xl lg:w-full lg:mb-0  lg:text-left">
        <Accordion type="single" collapsible className="w-full">
          {whatToCheck.map((item) => (
            <AccordionItem key={item.id} value={`item-${item.id}`}>
              <AccordionTrigger className="hover:no-underline hover:text-amber-600">
                {item.title}
              </AccordionTrigger>
              {item.list.map((point, index) => {
                return <AccordionContent key={index}>{point}</AccordionContent>;
              })}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
