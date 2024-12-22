import React from "react";
import Header from "./component/Header";
import HeroContent from "./component/HeroContent ";
// import HeroSection from './component/HeroSection';
// import Features from './component/Features';
// import Footer from './component/Footer';


const App = () => {
  
  return (
    <div className="font-josefin justify-center flex flex-col">
      {/* Header */}
      <Header />

      <div className="w-screen h-screen p-8 ">
        <img
          className="absolute lg:flex  hidden top-0 inset-0 -z-10"
          src="/images/desktop/image-hero.jpg"
          alt=""
        />
        <img
          className="absolute flex  lg:hidden top-0 inset-0 -z-10"
          src="/images/mobile/image-hero.jpg"
          alt=""
        />

        <div className=" lg:w-[600px]  lg:ml-32 mt-14 p-8 border border-white">
          <p className="lg:text-7xl text-5xl  font-thin uppercase text-white">
            Immersive experiences that deliver
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <HeroContent />
      {/* Features Section */}
      {/* <Features/> */}

      {/* Footer */}
      {/* <Footer/> */}
    </div>
  );
};

export default App;
