import React from 'react';
import Container from '../Container/Container';
import { Progress } from "@/components/ui/progress"
import tokenomImg from '@/assets/tokenomics/Group 1000003526.png'
import tokenomBgImg from '@/assets/tokenomics/Layer2.png'


const Tokenomics = () => {
  return (
    <div className='lg:pb-20' id='tokenomics'>
      <Container>
        <div className='mb-16 md:mb-[141px] relative'>
          {/* token title  */}
          <p className='text-[#FFF] text-[58px] font-bold leading-[75.4px] text-center mb-[22px]'>Tokenomics</p>
          <p className='text-[#A7A9AC] text-[18px] leading-[28.4px] text-center mb-20 lg:w-[82%] xl:w-[63%] 2xl:w-[51%] mx-auto'>Berlin Meme Coin’s tokenomics is a well-balanced structure that ensures sustainability and growth. Our total token supply is currently divided into various segments</p>

          <img className='hidden lg:block 2xl:w-auto xl:w-[30%] lg:w-[35%] absolute 2xl:right-0 xl:right-0 lg:right-0 2xl:bottom-10 xl:bottom-10 lg:bottom-14' src={tokenomBgImg} alt="" />
        </div>

        {/* tokenomics contain  */}
        <div className='lg:flex items-center'>
          {/* card 1 */}
          <div className='xl:w-[60%] lg:w-[50%]'>

            <div className='mb-[32px] lg:flex xl:flex-row lg:flex-col-reverse justify-between relative'>
              <div className='2xl:w-[30%] xl:w-[35%] mb-3 lg:mb-0'>
                <p className='text-[24px] xl:mt-[0px] lg:mt-[5px] font-semibold leading-[33.6px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>Seed Round:</span></p>
                <p className='text-[#A7A9AC] text-[14px] leading-[22.4px]'>50,000,000 tokens, providing a strong foundation for our project’s early development.</p>
              </div>
              <Progress value={60} className="z-40 2xl:w-[60%] xl:w-[55%]" clsName="bg-[#F1F715]" />
              <p className='text-[#000] text-[14.833px] font-semibold leading-[17.8px] absolute 2xl:bottom-[65px] xl:bottom-[65px] lg:bottom-[100px] bottom-4 2xl:left-[380px] xl:left-[350px] left-[30px] z-40'>60%</p>
            </div>

            <div className='mb-[32px] lg:flex xl:flex-row lg:flex-col-reverse justify-between relative'>
              <div className='2xl:w-[34%] xl:w-[40%] mb-3 lg:mb-0'>
                <p className='text-[24px] xl:mt-[0px] lg:mt-[5px] font-semibold leading-[33.6px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>Private Round:</span></p>
                <p className='text-[#A7A9AC] text-[14px] leading-[22.4px]'>150,000,000 tokens, supporting strategic investors who believe in the long-term potential of Berlin Coin.</p>
              </div>
              <Progress value={30} className="z-40 2xl:w-[60%] xl:w-[55%]" clsName="bg-[#21C6D9]" />
              <p className='text-[#000] text-[14.833px] font-semibold leading-[17.8px] absolute 2xl:bottom-[65px] xl:bottom-[65px] lg:bottom-[100px] bottom-4 2xl:left-[380px] xl:left-[350px] left-[30px] z-40'>10%</p>
            </div>

            <div className='mb-[32px] lg:flex xl:flex-row lg:flex-col-reverse justify-between relative'>
              <div className='2xl:max-w-[283.206px] xl:max-w-[283.206px] mb-3 lg:mb-0'>
                <p className='text-[24px] xl:mt-[0px] lg:mt-[5px] font-semibold leading-[33.6px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>Partners:</span></p>
                <p className='text-[#A7A9AC] text-[14px] leading-[22.4px]'>50,000,000 tokens, facilitating partnerships to expand our ecosystem.</p>
              </div>
              <Progress value={30} className="z-40 2xl:w-[60%] xl:w-[55%]" clsName="bg-[#C060A1]" />
              <p className='text-[#FFF] text-[14.833px] font-semibold leading-[17.8px] absolute 2xl:bottom-[45px] xl:bottom-[45px] lg:bottom-[80px] bottom-4 2xl:left-[380px] xl:left-[350px] left-[30px] z-40'>30%</p>
            </div>

            <div className='mb-[32px] lg:flex xl:flex-row lg:flex-col-reverse justify-between relative'>
              <div className='2xl:max-w-[283.206px] xl:max-w-[283.206px] mb-3 lg:mb-0'>
                <p className='text-[24px] xl:mt-[0px] lg:mt-[5px] font-semibold leading-[33.6px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>Team & Advisors:</span></p>
                <p className='text-[#A7A9AC] text-[14px] leading-[22.4px]'>180,000,000 tokens, incentivizing our talented team and experienced advisors.</p>
              </div>
              <Progress value={50} className="z-40 2xl:w-[60%] xl:w-[55%]" clsName="bg-[#6D67E4]" />
              <p className='text-[#FFF] text-[14.833px] font-semibold leading-[17.8px] absolute 2xl:bottom-[45px] xl:bottom-[45px] lg:bottom-[100px] bottom-4 2xl:left-[380px] xl:left-[350px] left-[30px] z-40'>50%</p>
            </div>

          </div>

          {/* token image */}
          <div className='xl:w-[40%] lg:w-[50%] relative'>
            <img className='2xl:w-[92%] xl:w-[92%] lg:w-[92%] md:w-[85%] w-full mx-auto lg 2xl:scale-125 xl:scale-125 lg:scale-125 ' src={tokenomImg} alt="Image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tokenomics;