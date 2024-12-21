import React from "react";

const Features = () => {
  return (
    <section
      className="lg:px-20 px-10 lg:py-32 lg:pt-80 pt-32 lg:text-start text-center flex lg:justify-start lg:items-start justify-center items-center  flex-col"
      aria-labelledby="features-heading"
    >
      {/* Section Heading */}
      <span
        className="w-32 h-20 flex border-t border-t-black"
        aria-hidden="true"
      ></span>
      <h3
        id="features-heading"
        className="font-dm-serif lg:text-72px text-4xl font-bold leading-64px"
      >
        We’re different
      </h3>

      {/* Feature Cards */}
      <div className="grid lg:grid-cols-3 gap-8 mt-20" role="list">
        {/* Card 1 */}
        <div
          className="space-y-7 flex justify-center lg:items-start items-center flex-col"
          role="listitem"
        >
          <img
            src="/images/icon-snappy-process.svg"
            alt="Icon representing snappy process"
          />
          <h4 className="font-semibold text-3xl font-dm-serif">
            Snappy Process
          </h4>
          <p className="text-base font-normal text-gray-400">
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="space-y-7 flex justify-center lg:items-start items-center flex-col"
          role="listitem"
        >
          <img
            src="/images/icon-affordable-prices.svg"
            alt="Icon representing affordable prices"
          />
          <h4 className="font-semibold text-3xl font-dm-serif">
            Affordable Prices
          </h4>
          <p className="text-base font-normal text-gray-400">
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="space-y-7 flex justify-center lg:items-start items-center flex-col"
          role="listitem"
        >
          <img
            src="/images/icon-people-first.svg"
            alt="Icon representing people first"
          />
          <h4 className="font-semibold text-3xl font-dm-serif">People First</h4>
          <p className="text-base font-normal text-gray-400">
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <section
        className="bg-[#2d2640] mt-40 overflow-hidden relative flex lg:flex-row flex-col lg:justify-between lg:w-auto w-screen  items-center text-white lg:px-32 text-center"
        aria-labelledby="cta-heading"
      >
        {/* Decorative Background Patterns */}
        <img
          className="lg:flex absolute top-0 right-0 hidden"
          src="/images/bg-pattern-how-we-work-desktop.svg"
          alt="Decorative background pattern"
          aria-hidden="true"
        />
        <img
          className="lg:hidden top-0 right-0 absolute"
          src="/images/bg-pattern-how-we-work-mobile.svg"
          alt="Decorative background pattern"
          aria-hidden="true"
        />

        {/* CTA Content */}
        <h3
          id="cta-heading"
          className="font-dm-serif lg:text-6xl text-4xl font-bold mb-4 text-start p-14"
        >
          Find out more
          <br /> about how we work
        </h3>
        <button
          className="relative border border-white px-8 py-1 lg:mb-0 mb-10 cursor-pointer overflow-hidden group 
             transition-all duration-300 ease-in-out mr-20"
          aria-label="Learn more about how we work"
        >
          <span
            className="absolute inset-0 bg-white transform scale-x-0 origin-left 
               transition-transform duration-300 ease-in-out group-hover:scale-x-100"
          ></span>
          <span className="relative text-white group-hover:text-[#2d2640] transition-colors duration-300">
            How We Work
          </span>
        </button>
      </section>
    </section>
  );
};

export default Features;
