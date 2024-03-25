import Container from '@/components/sections/Container/Container';
import logo from '@/assets/Banner/kebappcoin11.png';
import { Link } from "react-scroll";
import { PiTelegramLogoThin } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from 'react';

const Footer = () => {
const [activeLink, setActiveLink] = useState("home");

  return (
    <div>
      {/* Footer menu */}
      <div className='bg-[#0A1E25]'>
        <Container>
          <div>
            <div className='lg:flex justify-between items-center py-6'>
              <Link to="home" smooth={true} offset={-30} duration={600} className='cursor-pointer'>
                <img src={logo} alt="Image" className='w-auto' />
              </Link>

              {/* Menu */}
              <div>
                <ul className='lg:flex items-center space-y-3 lg:space-y-0 lg:space-x-10 my-5 lg:my-0'>
                  <li>
                    <Link to="home" smooth={true} offset={-30} duration={600} className={`text-[18px] font-semibold uppercase cursor-pointer ${activeLink === "home" ? 'bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df] hover:from-[#f2f817] hover:to-[#1bc5df]' : 'bg-clip-text text-transparent bg-gradient-to-l from-[#FFF] to-[#FFF] hover:from-[#f2f817] hover:to-[#1bc5df] duration-300'}`} onClick={() => setActiveLink("home")}>Home</Link>
                  </li>

                  <li>
                    <Link to="aboutToken" smooth={true} offset={-30} duration={600} className={`text-[18px] font-semibold uppercase cursor-pointer ${activeLink === "aboutToken" ? 'bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df] hover:from-[#f2f817] hover:to-[#1bc5df]' : 'bg-clip-text text-transparent bg-gradient-to-l from-[#FFF] to-[#FFF] hover:from-[#f2f817] hover:to-[#1bc5df] duration-300'}`} onClick={() => setActiveLink("aboutToken")}>About</Link>
                  </li>

                  <li>
                    <Link to="tokenomics" smooth={true} offset={-115} duration={600} className={`text-[18px] font-semibold uppercase cursor-pointer ${activeLink === "tokenomics" ? 'bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df] hover:from-[#f2f817] hover:to-[#1bc5df]' : 'bg-clip-text text-transparent bg-gradient-to-l from-[#FFF] to-[#FFF] hover:from-[#f2f817] hover:to-[#1bc5df] duration-300'}`} onClick={() => setActiveLink("tokenomics")}>tokenomics</Link>
                  </li>

                  <li>
                    <Link to="buy" smooth={true} offset={-120} duration={600} className={`text-[18px] font-semibold uppercase cursor-pointer ${activeLink === "buy" ? 'bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df] hover:from-[#f2f817] hover:to-[#1bc5df]' : 'bg-clip-text text-transparent bg-gradient-to-l from-[#FFF] to-[#FFF] hover:from-[#f2f817] hover:to-[#1bc5df] duration-300'}`} onClick={() => setActiveLink("buy")}>How to buy</Link>
                  </li>

                  <li>
                    <Link to="roadmap" smooth={true} offset={-30} duration={600} className={`text-[18px] font-semibold uppercase cursor-pointer ${activeLink === "roadmap" ? 'bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df] hover:from-[#f2f817] hover:to-[#1bc5df]' : 'bg-clip-text text-transparent bg-gradient-to-l from-[#FFF] to-[#FFF] hover:from-[#f2f817] hover:to-[#1bc5df] duration-300'}`} onClick={() => setActiveLink("roadmap")}>Roadmap</Link>
                  </li>
                </ul>
              </div>

              {/* Action button */}
              <div className='flex items-center'>
                <a href="" target='_blank' className='text-black mr-4'>
                  <div className='bg-gradient-to-l from-[#F4F914] to-[#19C5E2] hover:from-[#f5f914e5] hover:to-[#19c4e2e1] p-4 rounded-full duration-300'>
                    <PiTelegramLogoThin className='text-[25px]' />
                  </div>
                </a>

                <a href="" target='_blank' className='text-black'>
                  <div className='bg-gradient-to-l from-[#F4F914] to-[#19C5E2] hover:from-[#f5f914e5] hover:to-[#19c4e2e1] p-4 rounded-full duration-300'>
                    <FaXTwitter className='text-[25px]' />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Copyright */}
      <div className='bg-[#040813]'>
        <p className='text-[#fff] text-center font-inter py-6'>©{new Date().getFullYear()} All Rights Reserved KEBAB Token</p>
      </div>
    </div>
  );
};

export default Footer;
