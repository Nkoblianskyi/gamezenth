"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion, AnimatePresence } from "framer-motion"

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FaqItem[]
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <AccordionItem value={`item-${index}`} className="border rounded-lg mb-4 overflow-hidden">
            <AccordionTrigger className="text-left font-medium px-4 py-4 hover:bg-muted/50 transition-colors">
              {item.question}
            </AccordionTrigger>
            <AnimatePresence>
              <AccordionContent className="px-4 pb-4 pt-2">
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-muted-foreground"
                >
                  {item.answer}
                </motion.div>
              </AccordionContent>
            </AnimatePresence>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  )
}
