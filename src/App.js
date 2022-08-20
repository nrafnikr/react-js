import React from 'react';
import Navbar from './Task/Routing/components/navbar/Navbar';
import Hero from './Task/Routing/components/hero/Hero';
import Cloud from './Task/Routing/components/cloud/Cloud';
import Data from './Task/Routing/components/data/Data';
import Footer from './Task/Routing/components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Data />
      <Cloud />
      <Footer />
    </>
  );
}

export default App;