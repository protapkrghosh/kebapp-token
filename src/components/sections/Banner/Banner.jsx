import progressImg1 from '@/assets/Banner/Group1.png'
import progressImg2 from '@/assets/Banner/Group2.png'
import progressImg3 from '@/assets/Banner/Group3.png'
import progressImg4 from '@/assets/Banner/Group4.png'
import pathImgTop from '@/assets/Banner/LayerTop.png'
import walletImg from '@/assets/Banner/solarwallet.png'
import pathImgBottom from '@/assets/Banner/Layer5.png'
import shapeImg from '@/assets/Banner/Vector308.png'
import Container from '../Container/Container';
import { Button } from '@/components/ui/button';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Input } from '@/components/ui/input'

const Banner = () => {
  return (
    <div className='relative overflow-hidden' id='home'>
      {/* Shadow and background */}
      <div className='h-[70vh] md:h-[120vh] 2xl:h-[120vh]'>
        <Container>
          <img src={pathImgTop} alt="Image" className='absolute top-0 -ml-14 w-auto' />
        </Container>
        <div className='topBannerShadow xl:w-[400px] 2xl:w-[450px] xl:h-[400px] 2xl:h-[450px] absolute blur-[250px] 2xl:blur-[300px]' />
        <img src={shapeImg} alt="Image" className='absolute top-0 left-0 w-full' />
        {/* <img src={pathImgBottom} alt="Image" className='opacity-[0.06] absolute top-0 left-0' /> */}
      </div>

      <div className='absolute top-20 md:top-32 lg:top-32 xl:top-40 2xl:top-52 w-full'>
        <Container>
          <div className='flex justify-between items-center'>
            <div className='md:w-1/2'>
              <h1 className='text-[70px] xl:text-[80px] 2xl:text-[80px] text-white font-bebasNeue font-bold tracking-wider  leading-[110px] uppercase'>Welcome to <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>Kebab</span> Heaven</h1>

              <p className='text-[18px] text-white font-normal mt-6 pb-12 w-[83%] font-roobertPro'>Welcome to KEBAB Heaven, where the aroma of sizzling meats and the melody of spices fill the air, beckoning you to embark on a culinary journey like no other.</p>

              <div>
                <Button className="bg-gradient-to-l from-[#5e6c1e] to-[#135a65] border-2 border-[#F3F813] uppercase text-[22px] font-semibold rounded-[10px] px-12 py-7">Buy Now</Button>
              </div>
            </div>

            {/* Card content */}
            <div className='md:w-1/2'>
              {/* Progress card */}
              <div className='max-w-[600px] mx-auto'>
                <div className='bg-[#0A1F24] border-2 border-[#3C7D75] rounded-[15px] backdrop-blur-[18px] py-14'>
                  <p className='text-[30px] text-center font-bold bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2] uppercase'>PRESALE ENDS IN</p>

                  <div className='flex justify-center gap-x-8 mt-6'>
                    <img src={progressImg1} alt="Image" className='2xl:w-[100px]' />
                    <img src={progressImg2} alt="Image" className='2xl:w-[100px]' />
                    <img src={progressImg3} alt="Image" className='2xl:w-[100px]' />
                    <img src={progressImg4} alt="Image" className='2xl:w-[100px]' />
                  </div>
                </div>

                {/* Content Card */}
                <div className='mt-5'>
                  <div className='bg-[#0A1F24] border-2 border-[#3C7D75] rounded-[15px] backdrop-blur-[18px] px-6 py-5'>
                    <div className='space-y-2'>
                      <div className='flex justify-between items-center'>
                        <p className='text-white'>Token Name:</p>
                        <p className='bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2] font-semibold uppercase'>KEBAB</p>
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
                        <div className='h-3 bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-[70px] mt-[6px]' />
                      </div>
                    </div>
                    
                    <div className='flex justify-between'>
                      <p className='text-white font-normal'>Amount in SOL you pay:</p>
                      <div className='flex items-center'>
                        <img src={walletImg} alt="Image" />
                        <p className='text-white font-normal ml-1'>0.00 SOL</p>
                      </div>
                    </div>

                    <div>
                      <Input type="email" className="rotate-180" />
                    </div>
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