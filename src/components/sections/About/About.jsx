import aboutImg from '@/assets/About/icon41.png'
import aboutImgAll from '@/assets/About/Group1000003523 (1).png'
import { Button } from '@/components/ui/button';
import Container from '../Container/Container';


const About = () => {
  return (
    <div>
      <div className='relative overflow-hidden -mt-72 md:mt-0 lg:pt-24 2xl:pt-32 pb-40' id='aboutToken'>
        {/* Top path shadow */}
        <div className='hidden lg:block'>
          <div className="w-[1326px] h-[155px] mapShadow absolute tom-0 left-[10%] rotate-180" />
        </div>
        <Container>

          <div className='flex flex-col lg:flex-row lg:justify-between items-center'>
            {/*  pasta Image  */}
            <div className='lg:w-1/2 flex justify-end 2xl:justify-center relative mt-24 lg:mt-0 mb-52 md:mb-72 lg:mb-0'>
              <img src={aboutImgAll} alt="Image" className='w-[60%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%] -mb-32 md:-mb-52 lg:mb-0 mr-[85px] md:mr-44 lg:mr-16 xl:mr-20 2xl:mr-18 animate-spin duration-3000' />

              <img src={aboutImg} alt="Image" className='w-[120px] md:w-[240px] lg:w-[215px] xl:w-[300px] 2xl:w-[375px] absolute bottom-[-75px] md:bottom-[-130px] lg:bottom-[75px] xl:bottom-[85px] 2xl:bottom-[100px] right-[135px] md:right-[255px] lg:right-[140px] xl:right-[175px] 2xl:right-[210px]' />
            </div>

            {/*  About Contents  */}
            <div className='lg:w-1/2'>
              <div className="max-w-[1620px] mx-auto 2xl:pl-[20px] xl:pl-[18px] lg:pl-15 md:pl-10 sm:pl-2 pl-4">
                <h1 className='text-[#fff] mb-10 text-[50px] md:text-[57px] lg:text-[44px] xl:text-[58px] 2xl:text-[58px] font-bebasNeue font-bold'>About <span className='bg-clip-text text-transparent bg-gradient-to-l uppercase from-[#f2f817] to-[#1bc5df]'>kebapp</span> Token</h1>

                <div className=' text-[#A7A9AC] text-[18px] font-inter font-normal space-y-4 mt-2 mb-10 2xl:w-[90%] pr-3 lg:pr-0'>
                  <p>kebapp Token is a decentralized cryptocurrency operates on the Binance Smart Chain (BSC), renowned for its efficiency and low transaction costs.</p>

                  <p>As a part of the decentralized finance (DeFi) ecosystem, kebapp Token offers users the opportunity to participate in yield farming, liquidity provision, other DeFi activities. With its unique features and community-driven approach,</p>

                  <p>The token enables staking opportunities, allowing users to earn rewards by staking their kebapp tokens in liquidity pools or other yield farming mechanisms. Furthermore......</p>
                </div>

                <div>
                  <Button className="bg-gradient-to-l from-[#5e6c1e] to-[#135a65] hover:from-[#f5f914bb] hover:to-[#19c4e2bb] border-[1.5px] border-[#F3F813] uppercase text-[22px] rounded-[10px] px-[35px] py-[20px]">Buy Now</Button>
                </div>

              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>



    // Tokonomix section 




  );
};

export default About;