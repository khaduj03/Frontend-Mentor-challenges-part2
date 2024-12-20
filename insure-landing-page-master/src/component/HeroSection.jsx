import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="bg-[#2d2640] text-white flex lg:flex-row flex-col-reverse relative lg:p-5 p-0 pb-14"
      aria-labelledby="hero-heading"
    >
      {/* Background pattern for larger screens */}
      <img
        className="lg:absolute top-0 right-0 z-10 hidden"
        src="/images/bg-pattern-intro-right-desktop.svg"
        alt="Decorative background pattern"
        aria-hidden="true"
      />

      {/* Left Content Section */}
      <div
        className="lg:flex-1 flex justify-center items-center flex-col relative lg:pt-0 lg:pb-0 pb-14 pt-14 lg:p-12 p-3"
      >
        {/* Background pattern for mobile */}
        <img
          className="absolute top-0 left-0 lg:hidden"
          src="/images/bg-pattern-intro-left-mobile.svg"
          alt="Decorative background pattern"
          aria-hidden="true"
        />

        {/* Divider */}
        <span
          className="w-32 h-20 lg:flex hidden border-t border-t-white mt-10"
          aria-hidden="true"
        ></span>

        {/* Hero Heading */}
        <h1
          id="hero-heading"
          className="font-dm-serif lg:text-72px text-5xl text-center lg:text-start font-bold leading-64px text-white"
        >
          Humanizing <br className="lg:flex hidden" />
          your insurance.
        </h1>

        {/* Hero Description */}
        <p className="text-lg mt-5 font-normal text-center lg:text-start">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>

        {/* Call-to-Action Button */}
        <button
          className="uppercase border mt-10 text-white border-white w-52 lg:px-10"
          aria-label="View plans to find your life insurance coverage"
        >
          View plans
        </button>

        {/* Decorative Mobile Background */}
        <img
          className="absolute top-96 right-0"
          src="/images/bg-pattern-intro-right-mobile.svg"
          alt="Decorative background pattern"
          aria-hidden="true"
        />
      </div>

      {/* Right Image Section */}
      <div className="flex-1">
        <img
          className="lg:absolute flex flex-1 lg:top-24 lg:right-10"
          src="/images/image-intro-desktop.jpg"
          alt="A family happily bonding together, representing life insurance coverage"
        />
      </div>
    </section>
  );
};

export default HeroSection;
