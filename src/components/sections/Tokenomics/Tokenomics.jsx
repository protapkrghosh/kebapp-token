import React from 'react';
import Container from '../Container/Container';
import { Progress } from "@/components/ui/progress"
import tokenomImg from '@/assets/tokenomics/Group 1000003525.png'


const Tokenomics = () => {
  return (
    <div>
      <Container>
        <div>
          {/* token title  */}
          <p className='text-[#FFF] text-[58px] font-bold leading-[75.4px] text-center mb-[22px]'>Tokenomics</p>
          <p className='text-[#FFF] text-[18px] leading-[28.4px] text-center '>Berlin Meme Coin’s tokenomics is a well-balanced structure that ensures sustainability <br /> and growth. Our total token supply is currently divided into various segments</p>
        </div>

        {/* tokenomics contain  */}
        <div className='flex'>
          {/* card 1 */}
          <div className='xl:w-1/2 mb-[32px]'>
            <div>
              <p className='text-[24px] font-semibold leading-[33.6px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>Seed Round:</span></p>
              <p className='xl:max-w-64 text-[#F4F4F4] text-[14px] leading-[22.4px]'>50,000,000 tokens, providing a strong foundation for our project’s early development.</p>
            </div>
            <div>
              <Progress value={33} className="bg-[#F1F715]" />
            </div>
          </div>
          {/* token image */}
          <div className='xl:w-1/2'>
            <img src={tokenomImg} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tokenomics;