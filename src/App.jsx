import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Travel from './components/Travel';
import Explore from './components/Explore';
import Discover from './components/Discover';
import Services from './components/Services';
import TravelAccordion from './components/TravelAccordion';
import Offers from './components/Offers';
import Booking from './components/Booking';
import Footer from './components/Footer';
import "../i18n";

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home" className="scroll-mt-20">
        <Hero />
      </div>
      <Travel />
      <Explore />
      <div id="about" className="scroll-mt-20">
        <Discover />
      </div>
      <div id="tours" className="scroll-mt-20">
        <Services />
      </div>
      <TravelAccordion />
      <Offers />
      <div id="contacts" className="scroll-mt-20">
        <Booking />
        <Footer />
      </div>
    </div>
  );
}

export default App;
