import React from 'react';
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import Features from './component/Features';
import Footer from './component/Footer';

const App = () => {
  return (
    <div className="font-sans">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <HeroSection/>
      
      {/* Decorative Background Image */}
      <div className="relative">
        <img 
          className="lg:flex absolute top-[90%] hidden " 
          src="/images/bg-pattern-intro-left-desktop.svg" 
          alt="Decorative background pattern"
          aria-hidden="true" 
        />
      </div>

      {/* Features Section */}
      <Features/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default App;
