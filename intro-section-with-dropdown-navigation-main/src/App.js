import "./App.css";
import Header from "./component/Header";
function App() {
  return (
    <div className="w-screen h-screen lg:overflow-hidden">
      <header>
        <Header />
      </header>
      <main className="flex flex-col-reverse  lg:flex-row w-screen ">
        <div className=" flex flex-col lg:w-[600px]  h-fit lg:p-20 lg:ml-10  justify-center lg:items-start items-center lg:mt-0 mt-14">
          <h1 className="lg:text-7xl text-4xl font-bold">
            Make<br className="lg:flex  hidden  "/> remote work
            </h1>
          <p className="lg:mt-10 flex lg:items-start justify-center p-3 lg:p-0 lg:text-start sm:text-center text-xl text-gray-700 items-center">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="w-36 h-14 bg-black  hover:bg-white hover:text-black hover:border-[0.1rem] border-black rounded-xl mt-10 text-white font-bold text-xl">Learn more</button>
          <div className="flex lg:space-x-6 space-x-3 mt-10  ">
            <img className="w-20 h-5" src="/images/client-databiz.svg" alt="client-databiz.svg" />
            <img className="w-20 h-7" src="/images/client-audiophile.svg" alt="client-audiophile.svg" />
            <img className="w-20 h-5" src="/images/client-meet.svg" alt="client-meet.svg" />
            <img className="w-20 h-5" src="/images/client-maker.svg" alt="client-maker.svg" />
          </div>
        </div>


        <div className=" lg:flex lg:w-[500px] lg:h-[500px] mt-5  ">
          <img 
          className=" lg:ml-14 lg:flex w-[500px]  hidden"
          src="/images/image-hero-desktop.png" alt="image-hero-desktop" />
          <img 
          className="lg:hidden mt-6 w-[400px]"
          src="/images/image-hero-mobile.png" alt="image-hero-mobile" />
        </div>
      </main>
    </div>
  );
}

export default App;
