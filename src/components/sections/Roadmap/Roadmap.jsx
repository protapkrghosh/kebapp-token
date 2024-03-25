import Container from "../Container/Container";
import borderImg from '@/assets/roadmap/Vector 182.png'
import lineBorderImg from '@/assets/roadmap/Line 58.png'
import { FaCheck } from "react-icons/fa6";

const Roadmap = () => {
  return (
    <div className="pt-10 lg:pt-16 pb-32 lg:pb-60 bg-[#040D1B] relative overflow-hidden" id="roadmap">
      <Container>
        <div>
          <h1 className="text-white text-[62px] text-center font-semibold">Roadmap</h1>

          {/* Phase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 mb-9">
            <p className='text-[24px] font-bold'><span className="bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2]">Phase - 1</span></p>

            <p className='text-[24px] font-bold'><span className="bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2] hidden lg:block">Phase - 2</span></p>

            <p className='text-[24px] font-bold'><span className="bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2] hidden lg:block">Phase - 3</span></p>
          </div>

          {/* Custom border */}
          <div className="relative">
            <div>
              <div className="w-full">
                <div>
                  {/* Large border */}
                  <img src={borderImg} alt="Image" className="w-full hidden lg:block" />

                  <div className="absolute top-0 left-4 md:left-0">
                    <img src={lineBorderImg} alt="Image" className="h-[180px] xl:h-auto" />
                    <div className=" absolute top-[-15px] left-[-13px]">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-l from-[#F4F914] to-[#19C5E2]" />
                      <FaCheck className="text-black absolute top-1.5 left-1.5" />
                    </div>
                  </div>

                  <div className="absolute top-[320px] md:top-0 left-4 md:left-[345px] lg:left-[300px] xl:left-96 2xl:left-[475px]">
                    <img src={lineBorderImg} alt="Image" className="h-[180px] xl:h-auto" />
                    <div className=" absolute top-[-15px] left-[-13px]">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-l from-[#F4F914] to-[#19C5E2]" />
                      <FaCheck className="text-black absolute top-1.5 left-1.5" />
                    </div>
                  </div>

                  <div className="absolute top-[640px] md:top-[320px] lg:top-0 left-4 md:left-0 lg:left-[600px] xl:left-[770px] 2xl:left-[955px]">
                    <img src={lineBorderImg} alt="Image" className="h-[180px] xl:h-auto" />
                    <div className=" absolute top-[-15px] left-[-13px]">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-l from-[#F4F914] to-[#19C5E2]" />
                      <FaCheck className="text-black absolute top-1.5 left-1.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:-mt-[205px] xl:-mt-[265px] 2xl:-mt-[325px]">
              {/* Phase One */}
              <div className="space-y-2 xl:space-y-4 ml-10 md:ml-6 xl:ml-9 mt-7 xl:mt-9">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-full mr-3" />
                  <p className="text-[#ced1d2] xl:text-[20px] font-normal">Launch on Solana</p>
                </div>

                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-full mr-3" />
                  <p className="text-[#ced1d2] xl:text-[20px] font-normal">Website Landing Page</p>
                </div>

                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-full mr-3" />
                  <p className="text-[#ced1d2] xl:text-[20px] font-normal">Presale</p>
                </div>

                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-full mr-3" />
                  <p className="text-[#ced1d2] xl:text-[20px] font-normal">2500+ Holders</p>
                </div>
              </div>

              {/* Phase Two */}
              <div>
                <p className='text-[24px] font-bold mt-24 md:-mt-[72px] lg:mt-0 block lg:hidden'><span className="bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2]">Phase - 2</span></p>

                <div className="space-y-2 xl:space-y-4 ml-10 md:ml-6 xl:ml-9 mt-[68px] lg:mt-7 xl:mt-9">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-full mr-3" />
                    <p className="text-[#ced1d2] xl:text-[20px] font-normal">Public Presale</p>
                  </div>

                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-full mr-3" />
                    <p className="text-[#ced1d2] xl:text-[20px] font-normal">Dexscreener and Birdseye Update</p>
                  </div>

                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-full mr-3" />
                    <p className="text-[#ced1d2] xl:text-[20px] font-normal">$20M+ Daily Volume</p>
                  </div>

                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-full mr-3" />
                    <p className="text-[#ced1d2] xl:text-[20px] font-normal">10000+ Holders</p>
                  </div>
                </div>
              </div>

              {/* Phase Three */}
              <div>
                <p className='text-[24px] font-bold mt-24 block lg:hidden'><span className="bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2]">Phase - 3</span></p>

                <div className="space-y-2 xl:space-y-4 ml-10 md:ml-6 xl:ml-9 mt-[68px] lg:mt-7 xl:mt-9">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-full mr-3" />
                    <p className="text-[#ced1d2] xl:text-[20px] font-normal">Trending on X</p>
                  </div>

                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-full mr-3" />
                    <p className="text-[#ced1d2] xl:text-[20px] font-normal">CG CMC Listing</p>
                  </div>

                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-full mr-3" />
                    <p className="text-[#ced1d2] xl:text-[20px] font-normal">NFT Airdrop</p>
                  </div>

                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-full mr-3" />
                    <p className="text-[#ced1d2] xl:text-[20px] font-normal">100000+ Holders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Shadow */}
      <div className="w-[1326px] h-[155px] mapShadow absolute bottom-0 left-[10%] rotate-180" />
    </div>
  );
};

export default Roadmap;
