import About from '@/components/sections/About/About';
import Banner from '@/components/sections/Banner/Banner';
import WayToJoin from '@/components/sections/WayToJoin/WayToJoin';
import Tokenomics from '@/components/sections/Tokenomics/Tokenomics';
import React from 'react';
import HowToBuy from '@/components/sections/HowToBuy/HowToBuy';

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Tokenomics />
      <HowToBuy />
      <WayToJoin />
    </>
  );
};

export default Home;
