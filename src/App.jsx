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
      <Hero />
      <Travel />
      <Explore />
      <Discover />
      <Services />
      <TravelAccordion />
      <Offers />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
