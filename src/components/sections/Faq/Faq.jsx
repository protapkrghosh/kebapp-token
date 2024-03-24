import React from 'react';
import Container from '../Container/Container';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Faq = () => {
  return (
    <div className='mt-16 mb-32'>
      <Container>
        <h1 className='text-white text-[50px] md:text-[58px] text-center font-semibold capitalize'>Frequently Asked <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2] font-semibold'>Questions</span></h1>

        <div className='text-white mt-20'>
          <Accordion type="single" defaultValue="item-1" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is KEBAPP Heaven?</AccordionTrigger>
              <AccordionContent className="xl:w-[76%]">
                KEBAPP Heaven is a decentralized finance (DeFi) platform built on the Binance Smart Chain (BSC). It offers a variety of DeFi services, including yield farming, liquidity provision, and token swaps, all centered around our native token, KEBAPP.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How do I participate in KEBAPP Heaven?</AccordionTrigger>
              <AccordionContent className="xl:w-[72%]">
                To participate in KEBAPP Heaven, you'll need to connect your BSC-compatible wallet, such as MetaMask or Trust Wallet, to our platform. From there, you can engage in various DeFi activities like farming, staking, and swapping tokens.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What is KEBAPP Token?</AccordionTrigger>
              <AccordionContent className="xl:w-[60%]">
                KEBAPP Token is our platform's native cryptocurrency. It serves multiple purposes within the KEBAPP Heaven ecosystem, including governance, yield farming rewards, and liquidity incentives.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How can I acquire KEBAPP Tokens?</AccordionTrigger>
              <AccordionContent className="xl:w-[69%]">
                You can acquire KEBAPP Tokens by swapping other cryptocurrencies for KEBAPP on decentralized exchanges (DEXs) like PancakeSwap. Make sure to have Binance Coin (BNB) or another supported token to trade for KEBAPP.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>What are the benefits of holding KEBAPP Tokens?</AccordionTrigger>
              <AccordionContent className="xl:w-[64%]">
                Holding KEBAPP Tokens provides several benefits, including voting rights in governance decisions, earning rewards through yield farming, and participating in community events and initiatives.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
