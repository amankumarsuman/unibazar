import React from 'react';
import Footer from '../components/Footer/Footer.js';
import Hero from '../components/Hero/Hero.js';
import Enterprises from '../components/Enterprises/Enterprises.js';
import OnlineBooking from '../components/OnlineBooking/OnlineBooking.js';
import Features from '../components/Features/Features.js';
import Facilities from '../components/Facilities/Facilities.js';
import Working from '../components/Working/Working.js';
// import Banner from '../components/Banner/Banner.js';
import Pricing from '../components/Pricing/Pricing.js';
import FAQ from '../components/FAQ/FAQ.js';
import Signup from '../components/Signup/Signup.js';
import AppNavBar from '@/components/common/AppNavBar.js';

export default function Home() {
  return (
    <div>
      <AppNavBar />
      <div className="section">
        {/* <Navbar /> */}
        <Hero />
        <Enterprises />
        <OnlineBooking />
        <Features />
        <Facilities />
        <Working />
        {/* <Banner /> */}
        <Pricing />
        <FAQ />
        <Signup />
      </div>
      <Footer />
    </div>
  );
}
