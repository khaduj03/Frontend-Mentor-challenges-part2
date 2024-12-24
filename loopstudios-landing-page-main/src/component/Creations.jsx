import React from "react";
import images from "./imagesData";
import ImageCart from "./ImageCart";

const Creations = () => {
  return (
    <div
      className="flex flex-col justify-center items-center lg:px-28 px-6 lg:pb-44"
      aria-labelledby="creations-heading"
    >
      <header className="flex flex-col lg:flex-row lg:justify-between justify-center items-center w-full py-20">
        <h1
          className="text-4xl py-5 lg:py-0 uppercase font-thin"
          id="creations-heading"
        >
          Our Creations
        </h1>

              {/* Mobile Grid */}
      <section className="grid grid-cols-1 gap-6 lg:hidden">
        {images &&
          images.map((cart, index) => (
            <div key={index} className="relative" >
              <img src={cart.imgMobile} alt={cart.name} />
              <div className="text-center absolute inset-0 bg-black bg-opacity-40 flex items-end text-gray-700">
                <p className="text-white p-3 w-32  uppercase text-xl font-thin">{cart.name}</p>
              </div>
            </div>
          ))}
      </section>

        <button
          className="border border-black p-2 lg:w-44 w-32 m-3 relative tracking-widest font-semibold uppercase"
          aria-label="See all creations"
        >
          See All
        </button>
      </header>



      {/* Desktop Grid */}
      <section className="lg:grid grid-cols-4 lg:gap-7 hidden">
        {images &&
          images.map((item, index) => (
            <div key={index}>
              <ImageCart url={item.img} name={item.name}/>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Creations;
