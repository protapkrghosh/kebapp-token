import React from 'react';
import Container from '../Container/Container';
import card1logo from '@/assets/howtobuy/Black.png'
import card2logo from '@/assets/howtobuy/Black (1).png'
import card3logo from '@/assets/howtobuy/Black (2).png'
import card4logo from '@/assets/howtobuy/icon 41.png'

const HowToBuy = () => {
  return (
    <div className='mt-[90px] mb-[139px]' id='buy'>
      <Container>

        <div>
          {/* token title  */}
          <p className='text-[#FFF] text-[58px] font-bold leading-[58px] text-center mb-[22px]'>How To Buy <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df] uppercase'>kebapp</span> Token</p>
          <p className='text-[#c7c6c6] text-[18px] leading-[28.4px] text-center mb-20'>Berlin Meme Coin’s tokenomics is a well-balanced structure that ensures sustainability <br /> and growth. Our total token supply is currently divided into various segments</p>
        </div>

        {/* card contain section  */}
        <div className='lg:flex border-t-[2px] border-[#418077] mb-8'>
          {/* card icon section  */}
          <div className='lg:w-[50%] my-[18px] flex items-center gap-8'>
            <img src={card1logo} alt="" />
            <p className='text-[28px] font-bold leading-[33.6px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>Click on Buy Button</span></p>
          </div>
          {/* card contain section  */}
          <div className='lg:w-[50%] bg-[#0A1E25] rounded-b-md'>
            <p className='text-[18px] text-[#C7C6C6] xl:max-w-[600px] py-5 pl-[40px]'>Ready to invest in the next big thing? Head to our buy section now and grab your share of the kebapp coin revolution. Don't miss out on the moon ride!</p>
          </div>
        </div>
        <div className='lg:flex border-t-[2px] border-[#418077] mb-8'>
          {/* card icon section  */}
          <div className='lg:w-[50%] my-[18px] flex items-center gap-8'>
            <img src={card2logo} alt="" />
            <p className='text-[28px] font-bold leading-[33.6px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>Connect your Phantom wallet</span></p>
          </div>
          {/* card contain section  */}
          <div className='lg:w-[50%] bg-[#0A1E25] rounded-b-md'>
            <p className='text-[18px] text-[#C7C6C6] xl:max-w-[600px] py-5 pl-[40px]'>Connect your wallet to join the meme coin revolution! Seamlessly participate in the fun and wild ride of our community-driven token. Don't miss out!</p>
          </div>
        </div>
        <div className='lg:flex border-t-[2px] border-[#418077] mb-8'>
          {/* card icon section  */}
          <div className='lg:w-[50%] my-[18px] flex items-center gap-8'>
            <img src={card3logo} alt="" />
            <p className='text-[28px] font-bold leading-[33.6px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>Choose Amount to Buy</span></p>
          </div>
          {/* card contain section  */}
          <div className='lg:w-[50%] bg-[#0A1E25] rounded-b-md'>
            <p className='text-[18px] text-[#C7C6C6] xl:max-w-[600px] py-11 pl-[40px]'>Choose the amount to buy and join the meme coin frenzy!</p>
          </div>
        </div>
        <div className='lg:flex border-t-[2px] border-[#418077]'>
          {/* card icon section  */}
          <div className='lg:w-[50%] my-[18px] flex items-center gap-8'>
            <img src={card4logo} alt="" />
            <p className='text-[28px] font-bold leading-[33.6px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>Buy  kebapp token</span></p>
          </div>
          {/* card contain section  */}
          <div className='lg:w-[50%] bg-[#0A1E25] rounded-b-md'>
            <p className='text-[18px] text-[#C7C6C6] xl:max-w-[600px] py-5 pl-[40px]'>Buy kebapp token and join the meme revolution! Embrace the laughter, fun and potential gains. Secure your spot in the meme coin world. Hurry up!</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowToBuy;