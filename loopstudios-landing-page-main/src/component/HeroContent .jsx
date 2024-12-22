
const HeroContent = () => {
    return (
      <section className="flex flex-col pt-32 items-center text-center px-6 py-12 lg:flex-row lg:text-left lg:px-20">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4">The leader in interactive VR</h2>
          <p className="text-gray-500">
            Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
          </p>
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <img src="/images/loopstudios.jpg" alt="Loopstudios VR Showcase" className="rounded-md shadow-md" />
        </div>
      </section>
    );
  };
  
  export default HeroContent;
  