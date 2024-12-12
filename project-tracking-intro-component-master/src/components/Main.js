const Main = () => {
  return (
    <main
      className="flex lg:flex-row flex-col-reverse justify-start items-center lg:p-28 lg:pl-32 lg:pt-10 overflow-x-hidden"
      aria-labelledby="main-heading"
    >
      {/* Text and Button Section */}
      <div className="lg:w-1/2 p-8 mt-20 lg:mt-0 lg:p-0">
        <div className="flex flex-row space-x-5">
          <button
            className="w-12 h-6 rounded-2xl bg-black text-white font-semibold"
            aria-label="This is a new feature"
          >
            NEW
          </button>
          <p
            className="text-gray-400 uppercase text-xs lg:mt-0 mt-1 lg:tracking-[4px] tracking-[2px]"
            aria-hidden="true"
          >
            Monograph Dashboard
          </p>
        </div>

        <h1
          id="main-heading"
          className="title mt-5 lg:text-5xl text-3xl font-bold text-blue-950 uppercase"
        >
          Powerful insights into your team
        </h1>

        <p className="text-xl mt-8 w-64 text-gray-500">
          Project planning and time tracking for agile teams
        </p>

        <div className="mt-6 flex">
          <button
            className="lg:w-44 w-32 h-12 text-xs uppercase rounded-md bg-red-400 text-white font-semibold hover:bg-white hover:text-red-400 hover:border-red-400 hover:border"
            aria-label="Click to schedule a demo"
          >
            Schedule a demo
          </button>
          <p
            className="text-gray-400 ml-5 mt-3 lg:tracking-[4px] tracking-[2px] uppercase text-xs"
            aria-hidden="true"
          >
            to see a live preview
          </p>
        </div>
      </div>

      {/* Illustration Section */}
      <div className="mt-10 lg:w-1/2 w-full" role="presentation">
        <div
          className="lg:w-[580px] lg:flex w-[50%] h-[45%] -z-10 lg:h-[320px] rounded-bl-[40px] bg-gray-100 absolute top-0 right-0"
          aria-hidden="true"
        ></div>
        <img
          className="lg:absolute relative w-[1200px] left-20 -z-10 lg:w-[800px] lg:left-[680px] lg:top-32"
          src="./images/illustration-devices.svg"
          alt="Illustration of devices showcasing dashboard functionality"
        />
      </div>
    </main>
  );
};

export default Main;
