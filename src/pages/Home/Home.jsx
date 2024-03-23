import About from '@/components/sections/About/About';
import Banner from '@/components/sections/Banner/Banner';
import Tokenomics from '@/components/sections/Tokenomics/Tokenomics';
import React from 'react';

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Tokenomics />
    </>
  );
};

export default Home;
