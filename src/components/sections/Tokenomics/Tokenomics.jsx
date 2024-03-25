import React from 'react';
import Container from '../Container/Container';
import { Progress } from "@/components/ui/progress"
import tokenomImg from '@/assets/tokenomics/Group 1000003526.png'


const Tokenomics = () => {
  return (
    <div className='pb-20'>
      <Container>
        <div className='mb-[141px]'>
          {/* token title  */}
          <p className='text-[#FFF] text-[58px] font-bold leading-[75.4px] text-center mb-[22px]'>Tokenomics</p>
          <p className='text-[#FFF] text-[18px] leading-[28.4px] text-center mb-20'>Berlin Meme Coin’s tokenomics is a well-balanced structure that ensures sustainability <br /> and growth. Our total token supply is currently divided into various segments</p>
        </div>

        {/* tokenomics contain  */}
        <div className='flex'>
          {/* card 1 */}
          <div className='xl:w-[60%]'>

            <div className='mb-[32px] flex justify-between'>
              <div className='2xl:w-[30%]'>
                <p className='text-[24px] font-semibold leading-[33.6px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>Seed Round:</span></p>
                <p className='text-[#F4F4F4] text-[14px] leading-[22.4px]'>50,000,000 tokens, providing a strong foundation for our project’s early development.</p>
              </div>
              <Progress value={60} className="z-40 2xl:w-[60%]" clsName="bg-[#F1F715]" />
            </div>

            <div className='mb-[32px] flex justify-between'>
              <div className='2xl:w-[34%]'>
                <p className='text-[24px] font-semibold leading-[33.6px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>Private Round:</span></p>
                <p className='text-[#F4F4F4] text-[14px] leading-[22.4px]'>150,000,000 tokens, supporting strategic investors who believe in the long-term potential of Berlin Coin.</p>
              </div>
              <Progress value={30} className="z-40 2xl:w-[60%]" clsName="bg-[#21C6D9]" />
            </div>

            <div className='mb-[32px] flex justify-between 2xl:gap-20'>
              <div className='2xl:max-w-[269.235px]'>
                <p className='text-[24px] font-semibold leading-[33.6px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>Partners:</span></p>
                <p className='text-[#F4F4F4] text-[14px] leading-[22.4px]'>50,000,000 tokens, facilitating partnerships to expand our ecosystem.</p>
              </div>
              <Progress value={30} className="z-40 2xl:max-w-[364.96px]'>" clsName="bg-[#C060A1]" />
            </div>

            <div className='mb-[32px] flex justify-between'>
              <div className='2xl:max-w-[283.206px]'>
                <p className='text-[24px] font-semibold leading-[33.6px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>Team & Advisors:</span></p>
                <p className='text-[#F4F4F4] text-[14px] leading-[22.4px]'>180,000,000 tokens, incentivizing our talented team and experienced advisors.</p>
              </div>
              <Progress value={50} className="z-40 2xl:w-[60%]" clsName="bg-[#6D67E4]" />
            </div>

          </div>

          {/* token image */}
          <div className='xl:w-[40%] relative'>
            <img className='2xl:w-auto absolute 2xl:-bottom-2 2xl:-right-16' src={tokenomImg} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tokenomics;