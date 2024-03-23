import pathImgTop from '@/assets/Banner/LayerTop.png'
import pathImgBottom from '@/assets/Banner/Layer5.png'
import shapeImg from '@/assets/Banner/Vector308.png'
import Container from '../Container/Container';
import { Button } from '@/components/ui/button';

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
              <h1 className='text-[70px] xl:text-[80px] 2xl:text-[80px] text-white font-bebasNeue font-bold tracking-wider uppercase leading-[110px]'>Welcome to <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>Kebab</span> Heaven</h1>

              <p className='text-[18px] text-white font-normal mt-6 pb-12'>Welcome to KEBAB Heaven, where the aroma of sizzling meats and the melody of spices fill the air, beckoning you to embark on a culinary journey like no other.</p>

              <div>
                <Button className="bg-gradient-to-l from-[#5e6c1e] to-[#135a65] border-2 border-[#F3F813] uppercase text-[22px] font-semibold rounded-[10px] px-12 py-7">Buy Now</Button>
              </div>
            </div>

            {/* Card content */}
            <div className='md:w-1/2'>
              <div>
                <div className='bg-[#0A1F24] border border-[#3C7D75] rounded-[15px] backdrop-blur-[18px]'>
                  <p className='text-[30px] text-center font-bold bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2] uppercase'>PRESALE ENDS IN</p>

                  <div className='flex'>
                    <div className='border border-[#]'>
                      
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