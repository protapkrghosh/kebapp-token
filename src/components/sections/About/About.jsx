import aboutImg from '@/assets/About/Polygon 1.png'
import aboutImgAll from '@/assets/About/Group 1000003534.png'
import { Button } from '@/components/ui/button';
import Container from '../Container/Container';


const About = () => {
  return (
    <div>
      <div className='relative -pt-20 md:-pt-44 lg:pt-40  mb-28 overflow-hidden' id='aboutToken'>
        {/* Top path shadow */}
        <div className='hidden lg:block'>
          <div className="w-[1326px] h-[155px] mapShadow absolute tom-0 left-[10%] rotate-180" />
        </div>
        <Container>
          <div className='flex flex-col lg:flex-row lg:justify-between items-center'>
            {/* pasta Image */}
            <div className='lg:w-1/2 flex justify-end 2xl:justify-center relative mt-24 lg:mt-0 mb-52 md:mb-72 lg:mb-0'>
              <img src={aboutImgAll} alt="Image" className='w-[60%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%] -mb-32 md:-mb-52 lg:mb-0 mr-[85px] md:mr-44 lg:mr-16 xl:mr-20 2xl:mr-18 animate-spin duration-3000' />

              <img src={aboutImg} alt="Image" className='w-[120px] md:w-[240px] lg:w-[215px] xl:w-[300px] 2xl:w-[375px] absolute bottom-[-85px] md:bottom-[-145px] lg:bottom-[60px] xl:bottom-[65px] 2xl:bottom-[90px] right-[135px] md:right-[255px] lg:right-[140px] xl:right-[175px] 2xl:right-[210px]' />
            </div>

            {/* About Contents */}
            <div className='lg:w-1/2'>
              <div className="max-w-[1620px] mx-auto 2xl:pl-[20px] xl:pl-[18px] lg:pl-15 md:pl-10 sm:pl-2 pl-4">
                <h1 className='text-[#fff] mb-10 text-[50px] md:text-[57px] lg:text-[44px] xl:text-[58px] 2xl:text-[58px] font-bebasNeue font-bold'>About <span className='bg-clip-text text-transparent bg-gradient-to-l uppercase from-[#f2f817] to-[#1bc5df]'>kebapp</span> Token</h1>

                <div className=' text-[#F4F4F4] text-[18px] font-inter font-normal space-y-4 mt-2 mb-10 2xl:w-[90%] pr-3 lg:pr-0'>
                  <p>kebapp Token is a decentralized cryptocurrency operates on the Binance Smart Chain (BSC), renowned for its efficiency and low transaction costs.</p>

                  <p>As a part of the decentralized finance (DeFi) ecosystem, kebapp Token offers users the opportunity to participate in yield farming, liquidity provision, other DeFi activities. With its unique features and community-driven approach,</p>

                  <p>The token enables staking opportunities, allowing users to earn rewards by staking their kebapp tokens in liquidity pools or other yield farming mechanisms. Furthermore......</p>
                </div>

                <div>
                  <Button className="bg-gradient-to-l from-[#5e6c1e] to-[#135a65] border-[1.5px] border-[#F3F813] uppercase text-[22px] rounded-[10px] px-[35px] py-[20px]">Buy Now</Button>
                </div>
              </div>
            </div>


          </div>
        </Container>

        {/* bottom path shadow */}
        <div className='hidden lg:block'>
          <img src='' alt="Image" className='lg:w-[250px] xl:w-[300px] 2xl:w-[400px] absolute lg:bottom-14 xl:bottom-0 left-[32%] opacity-[0.06] 2xl:opacity-[0.05]' />

          <div className='pathShadowBottom blur-[250px] 2xl:blur-[300px] w-[150px] xl:w-[200px] 2xl:w-[300px] h-[150px] xl:h-[200px] 2xl:h-[300px] absolute bottom-16 xl:bottom-36 2xl:bottom-0 left-[38%] xl:left-[36%] 2xl:left-[34%]' />
        </div>
      </div>
    </div>
  );
};

export default About;