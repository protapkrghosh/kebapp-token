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
          <p className='text-[#A7A9AC] text-[18px] leading-[28.4px] text-center mb-20'>Berlin Meme Coin’s tokenomics is a well-balanced structure that ensures sustainability <br /> and growth. Our total token supply is currently divided into various segments</p>
        </div>

        {/* tokenomics contain  */}
        <div className='flex'>
          {/* card 1 */}
          <div className='xl:w-[60%]'>

            <div className='mb-[32px] flex justify-between relative'>
              <div className='2xl:w-[30%] xl:w-[35%]'>
                <p className='text-[24px] font-semibold leading-[33.6px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>Seed Round:</span></p>
                <p className='text-[#F4F4F4] text-[14px] leading-[22.4px]'>50,000,000 tokens, providing a strong foundation for our project’s early development.</p>
              </div>
              <p className='text-[#000] text-[14.833px] font-semibold leading-[17.8px] absolute 2xl:bottom-[65px] 2xl:left-[380px] z-50'>50%</p>
              <Progress value={60} className="z-40 2xl:w-[60%] xl:w-[55%]" clsName="bg-[#F1F715]" />
            </div>

            <div className='mb-[32px] flex justify-between relative'>
              <div className='2xl:w-[34%] xl:w-[40%]'>
                <p className='text-[24px] font-semibold leading-[33.6px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>Private Round:</span></p>
                <p className='text-[#F4F4F4] text-[14px] leading-[22.4px]'>150,000,000 tokens, supporting strategic investors who believe in the long-term potential of Berlin Coin.</p>
              </div>
              <p className='text-[#000] text-[14.833px] font-semibold leading-[17.8px] absolute 2xl:bottom-[65px] 2xl:left-[380px] z-50'>50%</p>
              <Progress value={30} className="z-40 2xl:w-[60%] xl:w-[55%]" clsName="bg-[#21C6D9]" />
            </div>

            <div className='mb-[32px] flex justify-between 2xl:gap-[80px] xl:gap-[67px] relative'>
              <div className='2xl:max-w-[269.235px] xl:max-w-[269.235px]'>
                <p className='text-[24px] font-semibold leading-[33.6px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>Partners:</span></p>
                <p className='text-[#F4F4F4] text-[14px] leading-[22.4px]'>50,000,000 tokens, facilitating partnerships to expand our ecosystem.</p>
              </div>
              <p className='text-[#FFF] text-[14.833px] font-semibold leading-[17.8px] absolute 2xl:bottom-[45px] 2xl:left-[380px] z-50'>50%</p>
              <Progress value={30} className="z-40 2xl:max-w-[364.96px] xl:max-w-[364.96px]'>" clsName="bg-[#C060A1]" />
            </div>

            <div className='mb-[32px] flex justify-between relative'>
              <div className='2xl:max-w-[283.206px] xl:max-w-[283.206px]'>
                <p className='text-[24px] font-semibold leading-[33.6px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>Team & Advisors:</span></p>
                <p className='text-[#F4F4F4] text-[14px] leading-[22.4px]'>180,000,000 tokens, incentivizing our talented team and experienced advisors.</p>
              </div>
              <p className='text-[#FFF] text-[14.833px] font-semibold leading-[17.8px] absolute 2xl:bottom-[45px] 2xl:left-[380px] z-50'>50%</p>
              <Progress value={50} className="z-40 2xl:w-[60%] xl:w-[55%]" clsName="bg-[#6D67E4]" />
            </div>

          </div>

          {/* token image */}
          <div className='xl:w-[40%] relative'>
            <img className='2xl:w-[92%] xl:w-[92%] 2xl:scale-125 xl:scale-125 absolute 2xl:bottom-4 xl:bottom-16 2xl:-right-11 xl:-right-8' src={tokenomImg} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tokenomics;