import "./App.css";
import Header from "./component/Header";
function App() {
  return (
    <div className="w-screen h-screen">
      <header>
        <Header />
      </header>
      <main className="flex flex-col-reverse  lg:flex-row w-screen">
        <div className=" flex flex-col lg:w-1/2 h-fit lg:p-20 lg:ml-10  justify-center lg:items-start items-center lg:mt-0 mt-14">
          <h1 className="lg:text-7xl text-4xl font-bold">
            Make<br className="lg:flex  hidden"/> remote work
            </h1>
          <p className="lg:mt-10 flex lg:items-start justify-center p-3 lg:p-0 lg:text-start text-center text-xl text-gray-700 items-center">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="w-36 h-14 bg-black  hover:bg-white hover:text-black hover:border-[0.1rem] border-black rounded-xl mt-10 text-white font-bold text-xl">Learn more</button>
          <div className="flex lg:space-x-6 space-x-3 mt-10  ">
            <img className="w-20 h-5" src="/images/client-databiz.svg" alt="" />
            <img className="w-20 h-7" src="/images/client-audiophile.svg" alt="" />
            <img className="w-20 h-5" src="/images/client-meet.svg" alt="" />
            <img className="w-20 h-5" src="/images/client-maker.svg" alt="" />
          </div>
        </div>
        <div className="h-fit flex lg:w-[50rem] lg:ml-10 ">
          <img 
          className="lg:flex  lg:ml-14 hidden lg:w-[26rem] lg:h-[30rem] mt-8"
          src="/images/image-hero-desktop.png" alt="" />
          <img 
          className="lg:hidden mt-6"
          src="/images/image-hero-mobile.png" alt="" />
        </div>
      </main>
    </div>
  );
}

export default App;
