import React from 'react';
import Container from '../Container/Container';

const HowToBuy = () => {
  return (
    <div>
      <Container>
        <div className='mt-[51px]'>
          {/* token title  */}
          <p className='text-[#FFF] text-[58px] font-bold leading-[58px] text-center mb-[22px]'>How To Buy <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>KEBAB</span> Token</p>
          <p className='text-[#c7c6c6] text-[18px] leading-[28.4px] text-center mb-20'>Berlin Meme Coin’s tokenomics is a well-balanced structure that ensures sustainability <br /> and growth. Our total token supply is currently divided into various segments</p>
        </div>
      </Container>
    </div>
  );
};

export default HowToBuy;