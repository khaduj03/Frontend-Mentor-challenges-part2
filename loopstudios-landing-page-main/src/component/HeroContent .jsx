const HeroContent = () => {
  return (
    <section
      className="flex flex-col relative items-center text-center px-6 lg:flex-row lg:text-left lg:px-20"
      aria-labelledby="unique-hero-heading"
    >
      {/* Hero Image */}
      <div className="relative">
        <img
          className="-z-10"
          src="/images/desktop/image-interactive.jpg"
          alt="Interactive VR experience"
        />
      </div>

      {/* Hero Content */}
      <div
        className="lg:absolute flex flex-col p-24 justify-center items-center w-[550px] h-80 bg-white right-20 bottom-0"
        role="region"
        aria-labelledby="unique-hero-heading"
      >
        <h2
          id="unique-hero-heading"
          className="lg:text-[44px] text-3xl  font-josefin p-6 leading-10 font-thin uppercase text-center"
        >
          The leader in interactive VR
        </h2>
        <p className="text-center text-gray-500 font-josefin text-sm px-10">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default HeroContent;
