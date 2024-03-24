import About from '@/components/sections/About/About';
import Banner from '@/components/sections/Banner/Banner';
import WayToJoin from '@/components/sections/WayToJoin/WayToJoin';
import Tokenomics from '@/components/sections/Tokenomics/Tokenomics';
import React from 'react';
import Roadmap from '@/components/sections/Roadmap/Roadmap';

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Tokenomics />
      <Roadmap />
      <WayToJoin />
    </>
  );
};

export default Home;
