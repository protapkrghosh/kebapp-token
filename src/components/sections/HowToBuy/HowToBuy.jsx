import React from 'react';
import Container from '../Container/Container';
import card1logo from '@/assets/howtobuy/Black.png'
import card2logo from '@/assets/howtobuy/Black.png'
import card3logo from '@/assets/howtobuy/Black.png'

const HowToBuy = () => {
  return (
    <div>
      <Container>

        <div className='mt-[51px]'>
          {/* token title  */}
          <p className='text-[#FFF] text-[58px] font-bold leading-[58px] text-center mb-[22px]'>How To Buy <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>KEBAB</span> Token</p>
          <p className='text-[#c7c6c6] text-[18px] leading-[28.4px] text-center mb-20'>Berlin Meme Coin’s tokenomics is a well-balanced structure that ensures sustainability <br /> and growth. Our total token supply is currently divided into various segments</p>
        </div>

        {/* card contain section  */}
        <div>
          {/* card icon section  */}
          <div>
            <img src={card1logo} alt="" />
            <p className='text-[28px] font-bold leading-[33.6px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>Click on Buy Button</span></p>
          </div>
          {/* card contain section  */}
          <div>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowToBuy;