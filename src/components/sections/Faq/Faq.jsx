import React from 'react';
import Container from '../Container/Container';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Faq = () => {
  return (
    <div>
      <Container>
        <h1 className='text-white text-[58px] text-center font-semibold capitalize'>Frequently Asked <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2] font-semibold'>Questions</span></h1>

        <div className='text-white'>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is KEBAB Heaven?</AccordionTrigger>
              <AccordionContent>
                KEBAB Heaven is a decentralized finance (DeFi) platform built on the Binance Smart Chain (BSC). It offers a variety of DeFi services, including yield farming, liquidity provision, and token swaps, all centered around our native token, KEBAB.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
