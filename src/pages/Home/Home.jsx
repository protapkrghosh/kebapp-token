import About from '@/components/sections/About/About';
import Banner from '@/components/sections/Banner/Banner';
import WayToJoin from '@/components/sections/WayToJoin/WayToJoin';
import Tokenomics from '@/components/sections/Tokenomics/Tokenomics';
import React from 'react';
import Roadmap from '@/components/sections/Roadmap/Roadmap';
import Faq from '@/components/sections/Faq/Faq';
import HowToBuy from '@/components/sections/HowToBuy/HowToBuy';

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Tokenomics />
      <Roadmap />
      <HowToBuy />
      <WayToJoin />
      <Faq />
    </>
  );
};

export default Home;
