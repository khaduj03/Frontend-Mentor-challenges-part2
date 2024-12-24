import React from "react";
import Header from "./component/Header";
import HeroContent from "./component/HeroContent ";
import Footer from "./component/Footer"
import Creations from "./component/Creations"

const App = () => {
  
  return (
    <div className="font-josefin justify-center flex flex-col">
     
  {/* Header */}
  <Header />

  {/* Hero Section */}
  <main>
  <section
    className="w-screen lg:h-[600px] h-[600px] p-8"
    aria-labelledby="hero-title"
  >
    <h1 id="hero-title" className="sr-only">
      Immersive experiences that deliver
    </h1>
    <img
      className="absolute lg:flex hidden top-0 inset-0 -z-10"
      src="/images/desktop/image-hero.jpg"
      alt="Hero desktop background"
    />
    
    <img
      className="absolute flex lg:hidden top-0 inset-0 -z-10"
      src="/images/mobile/image-hero.jpg"
      alt="Hero mobile background"
    />
    <div className="lg:w-[600px] lg:ml-32 mt-14 p-8 border border-white">
      <p className="lg:text-7xl text-4xl font-thin uppercase text-white">
        Immersive experiences that deliver
      </p>
    </div>
  </section>

  <HeroContent/>

  {/* Creations Section */}
  <Creations />
  </main>

  {/* Footer */}
  <Footer />


    </div>
  );
};

export default App;
