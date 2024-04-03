import progressImg1 from '@/assets/Banner/Group1.png'
import progressImg2 from '@/assets/Banner/Group2.png'
import progressImg3 from '@/assets/Banner/Group3.png'
import progressImg4 from '@/assets/Banner/Group4.png'
import pathImgTop from '@/assets/Banner/LayerTop.png'
import walletImg from '@/assets/Banner/solarwallet.png'
import ellipse from '@/assets/Banner/Ellipse 2.png'
import kebappImg from '@/assets/Banner/image197.png'
import pathImgBottom from '@/assets/Banner/Layer5.png'
import shapeImg from '@/assets/Banner/Vector308.png'
import arrowImg from "@/assets/Banner/arrow.png"
import logoImg from "@/assets/Banner/icon41.png"
import Container from '../Container/Container';
import { Button } from '@/components/ui/button';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { useEffect, useState } from 'react'

const Banner = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-04-15") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span key={interval} className="px-[35px] md:px-[49.6px] lg:px-[49.5px] xl:px-[51.5px] 2xl:px-[51.1px]">
        <span className="font-bold text-[21px] md:text-[22px]">
          {timeLeft[interval]}
        </span>{" "}
      </span>
    );
  });

  return (
    <div className='relative overflow-hidden' id='home'>
      {/* Shadow and background */}
      <div className='h-[215vh] md:h-[265vh] lg:h-[180vh] xl:h-[150vh] 2xl:h-[110vh]'>
        <Container>
          <img src={pathImgTop} alt="Image" className='absolute -top-7 lg:top-0 -ml-14 w-[250px] lg:w-[500px]' />
        </Container>
        <div className='topBannerShadow w-[250px] xl:w-[400px] 2xl:w-[450px] h-[250px] xl:h-[400px] 2xl:h-[450px] absolute blur-[250px] 2xl:blur-[300px]' />
        <img src={shapeImg} alt="Image" className='absolute top-0 left-0 w-full hidden md:block' />
        {/* <img src={pathImgBottom} alt="Image" className='opacity-[0.06] absolute top-0 left-0' /> */}
      </div>

      <div className='absolute top-20 md:top-20 lg:top-24 xl:top-20 2xl:top-16 w-full'>
        <Container>
          <div className='lg:flex justify-between items-center'>
            <div className='lg:w-1/2 relative'>
              <h1 className='text-[42px] md:text-[80px] lg:text-[70px] xl:text-[68px] 2xl:text-[80px] text-white font-bebasNeue font-bold tracking-wider md:leading-[110px] uppercase'>Welcome to <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>kebapp</span> Heaven</h1>

              <p className='text-[18px] text-[#cdced0] font-normal mt-6 pb-12 w-[83%] font-roobertPro'>Welcome to kebapp Heaven, where the aroma of sizzling meats and the melody of spices fill the air, beckoning you to embark on a culinary journey like no other.</p>

              <div>
                <Button className="bg-gradient-to-l from-[#5e6c1e] to-[#135a65] hover:from-[#f5f914bb] hover:to-[#19c4e2bb] border-2 border-[#F3F813] uppercase text-[22px] font-semibold rounded-[10px] px-12 py-7">Buy Now</Button>
              </div>

              {/* Path image */}
              <img src={pathImgBottom} alt="Image" className='w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-auto absolute -bottom-5 lg:bottom-auto left-96 lg:left-32 xl:left-52 2xl:left-72' />
            </div>

            {/* Card content */}
            <div className='lg:w-1/2 mt-28 lg:mt-0 xl:-mr-5 2xl:-mr-24'>
              {/* Progress card */}
              <div className='max-w-[528px] mx-auto'>
                <div className='bg-[#0A1F24] border-2 border-[#3C7D75] rounded-[15px] backdrop-blur-[18px] pt-4 pb-6'>
                  <p className='text-[30px] text-center font-bold bg-clip-text text-transparent bg-gradient-to-l from-[#e8ff19] to-[#0ebbff] uppercase'>PRESALE ENDS IN</p>

                  {/* Dynamic Timer */}
                  <div className='relative'>
                    <div className='text-[#F5F6F7] flex justify-center absolute top-4 left-[-5px] md:left-5 lg:left-[-20px] xl:left-5'>
                      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                    </div>

                    <div className='flex justify-center gap-x-2 md:gap-x-8 mt-5'>
                      <div className='relative'>
                        <img src={progressImg1} alt="Image" className='w-[87px]' />
                        <div className='text-[#F5F6F7] text-center font-normal absolute top-6 left-7 leading-5'>
                          <p className='text-[14px] mt-5'>Days</p>
                        </div>
                      </div>

                      <div className='relative'>
                        <img src={progressImg2} alt="Image" className='w-[87px]' />
                        <div className='text-[#F5F6F7] text-center font-normal absolute top-6 left-[25px] leading-5'>
                          <p className='text-[14px] mt-5'>Hours</p>
                        </div>
                      </div>

                      <div className='relative'>
                        <img src={progressImg3} alt="Image" className='w-[87px]' />
                        <div className='text-[#F5F6F7] text-center font-normal absolute top-6 left-7 leading-5'>
                          <p className='text-[14px] mt-[21px] md:ml-1'>Min</p>
                        </div>
                      </div>

                      <div className='relative'>
                        <img src={progressImg4} alt="Image" className='w-[87px]' />
                        <div className='text-[#F5F6F7] text-center font-normal absolute top-6 left-7 leading-5'>
                          <p className='text-[14px] mt-5 md:ml-[5px]'>Sec</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className='flex justify-center gap-x-2 md:gap-x-8 mt-5'>
                    <div className='relative'>
                      <img src={progressImg1} alt="Image" className='w-[87px]' />
                      <div className='text-[#F5F6F7] text-center font-normal absolute top-6 left-7 leading-5'>
                        <p className='text-[22px]'>20</p>
                        <p className='text-[14px]'>Days</p>
                      </div>
                    </div>

                    <div className='relative'>
                      <img src={progressImg2} alt="Image" className='w-[87px]' />
                      <div className='text-[#F5F6F7] text-center font-normal absolute top-6 left-[25px] leading-5'>
                        <p className='text-[22px]'>15</p>
                        <p className='text-[14px]'>Hours</p>
                      </div>
                    </div>

                    <div className='relative'>
                      <img src={progressImg3} alt="Image" className='w-[87px]' />
                      <div className='text-[#F5F6F7] text-center font-normal absolute top-6 left-7 leading-5'>
                        <p className='text-[22px]'>30</p>
                        <p className='text-[14px]'>Min</p>
                      </div>
                    </div>

                    <div className='relative'>
                      <img src={progressImg4} alt="Image" className='w-[87px]' />
                      <div className='text-[#F5F6F7] text-center font-normal absolute top-6 left-7 leading-5'>
                        <p className='text-[22px]'>45</p>
                        <p className='text-[14px]'>Sec</p>
                      </div>
                    </div>
                  </div> */}
                </div>

                {/* Content Card */}
                <div className='mt-5'>
                  <div className='bg-[#0A1F24] border-2 border-[#3C7D75] rounded-[15px] backdrop-blur-[18px] px-6 py-5'>
                    <div className='space-y-2'>
                      <div className='flex justify-between items-center'>
                        <p className='text-white'>Token Name:</p>
                        <p className='bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2] font-semibold uppercase'>kebapp</p>
                      </div>

                      <div className='flex justify-between items-center'>
                        <p className='text-white'>Presale Price:</p>
                        <p className='bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2] font-semibold uppercase'>0.00001</p>
                      </div>

                      <div className='flex justify-between items-center'>
                        <p className='text-white'>Launch Price:</p>
                        <p className='bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2] font-semibold uppercase'>0.00003</p>
                      </div>

                      <div className='flex justify-between items-center'>
                        <p className='text-white'>Presale Bonus:</p>
                        <p className='bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2] font-semibold uppercase'>15%</p>
                      </div>

                      <div className='flex justify-between items-center'>
                        <p className='text-white'>Max Buy:</p>
                        <p className='bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2] font-semibold uppercase'>25 SOL</p>
                      </div>

                      <div className='flex justify-between items-center'>
                        <p className='text-white'>Min Buy:</p>
                        <p className='bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2] font-semibold uppercase'>0.5 SOL</p>
                      </div>
                    </div>

                    {/* Presale sold */}
                    <div className='p-[1px] bg-gradient-to-l from-[#2d4734] to-[#133e47] rounded-[8px] mt-3'>
                      <div className='bg-gradient-to-l from-[#213426] to-[#0e2f36] rounded-[8px] px-3 pt-1 pb-2'>
                        <div className='flex justify-between items-center'>
                          <p className='text-white'>Presale sold</p>
                          <p className='bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2]' >0%</p>
                        </div>

                        <Slider defaultValue={[50]} max={100} step={5} className="my-3 cursor-pointer" />
                        {/* <div className='h-3 bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-[70px] mt-[6px]' /> */}
                      </div>
                    </div>

                    <div className='flex justify-between mt-6 mb-3'>
                      <p className='text-white font-normal'>Amount in SOL you pay:</p>
                      <div className='flex items-center'>
                        <img src={walletImg} alt="Image" />
                        <p className='text-white font-normal ml-1'>0.00 SOL</p>
                      </div>
                    </div>

                    {/* SOL Input */}
                    <div className='relative'>
                      <div className='flex items-center absolute mt-[4.4px] bg-[#154438] px-5 py-1 ml-2 rounded-[8px]'>
                        <img src={ellipse} alt="Image" className='w-[32px]' />
                        <p className='text-white font-normal ml-2 uppercase'>SOL</p>
                      </div>

                      <div className='p-[1px] bg-gradient-to-l from-[#2d4734] to-[#133e47] rounded-[8px]'>
                        <Input placeholder="0" className="text-white placeholder:text-white text-end border-none bg-gradient-to-l from-[#213426] to-[#0e2f36] rounded-[8px]" />
                      </div>
                    </div>

                    {/* custom range button */}
                    <div className='relative my-7'>
                      <div className='h-[3px] bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-[70px] mt-[6px]' />

                      <div>
                        <button className="bg-gradient-to-l from-[#48aa8d] to-[#48aa8d] rounded-full w-[34px] h-[34px] absolute -top-[16px] left-[47%]"></button>
                        <img src={arrowImg} alt="Image" className='absolute top-[-7px] left-[50.4%] md:left-[49.3%] cursor-pointer' />
                      </div>
                    </div>

                    {/* kebapp Input */}
                    <div>
                      <p className='text-white font-normal mb-2'>Amount in SAT you receive:</p>

                      <div className='relative'>
                        <div className='flex items-center absolute mt-[4.4px] bg-[#154438] px-5 py-1 ml-2 rounded-[8px]'>
                          <img src={logoImg} alt="Image" className='w-[32px]' />
                          <p className='text-white font-normal ml-2 uppercase'>kebapp</p>
                        </div>

                        <div className='p-[1px] bg-gradient-to-l from-[#2d4734] to-[#133e47] rounded-[8px]'>
                          <Input placeholder="0" className="text-white placeholder:text-white text-end border-none bg-gradient-to-l from-[#213426] to-[#0e2f36] rounded-[8px]" />
                        </div>
                      </div>
                    </div>

                    {/* Connect Wallet */}
                    <Button className="w-full bg-gradient-to-l from-[#5e6c1e] to-[#135a65] hover:from-[#f5f914bb] hover:to-[#19c4e2bb] border border-[#F3F813] text-[18px] rounded-[10px] px-12 py-6 mt-6">Connect Wallet</Button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;