import Container from "../Container/Container";
import borderImg from '@/assets/roadmap/Vector 182.png'
import lineBorderImg from '@/assets/roadmap/Line 58.png'
import { FaCheck } from "react-icons/fa6";

const Roadmap = () => {
  return (
    <div>
      <Container>
        <div>
          <h1 className="text-white text-[62px] text-center font-normal">Roadmap</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-9">
            <p className='text-[24px] bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2] font-bold'>Phase - 1</p>

            <p className='text-[24px] bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2] font-bold'>Phase - 2</p>

            <p className='text-[24px] bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2] font-bold'>Phase - 3</p>
          </div>

          {/* Custom border */}
          <div className="relative">
            <img src={borderImg} alt="Image" className="w-full" />
            <div className="absolute top-0">
              <img src={lineBorderImg} alt="Image" className="" />
              <div className=" absolute top-[-15px] left-[-12px]">
                <div className="w-7 h-7 rounded-full bg-gradient-to-l from-[#F4F914] to-[#19C5E2]" />
                <FaCheck className="text-black absolute top-1.5 left-1.5"/>
              </div>
            </div>

            <div className="absolute top-0 left-96 2xl:left-[475px]">
              <img src={lineBorderImg} alt="Image" className="" />
              <div className=" absolute top-[-15px] left-[-12px]">
                <div className="w-7 h-7 rounded-full bg-gradient-to-l from-[#F4F914] to-[#19C5E2]" />
                <FaCheck className="text-black absolute top-1.5 left-1.5"/>
              </div>
            </div>

            <div className="absolute top-0 left-[770px] 2xl:left-[955px]">
              <img src={lineBorderImg} alt="Image" className="" />
              <div className=" absolute top-[-15px] left-[-12px]">
                <div className="w-7 h-7 rounded-full bg-gradient-to-l from-[#F4F914] to-[#19C5E2]" />
                <FaCheck className="text-black absolute top-1.5 left-1.5"/>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4 pl-5">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-full mr-3" />
                <p className="text-white text-[20px] font-normal">Launch on Solana</p>
              </div>

              <div className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-full mr-3" />
                <p className="text-white text-[20px] font-normal">Website Landing Page</p>
              </div>

              <div className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-full mr-3" />
                <p className="text-white text-[20px] font-normal">Presale</p>
              </div>

              <div className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-l from-[#F4F914] to-[#19C5E2] rounded-full mr-3" />
                <p className="text-white text-[20px] font-normal">2500+ Holders</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Roadmap;
