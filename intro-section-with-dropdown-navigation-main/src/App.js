import "./App.css";
import Header from "./component/Header";
function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="flex h-screen w-screen ">
        <div className=" flex flex-col w-1/2 h-fit">
          <h1 className="text-7xl font-bold">Make remote work</h1>
          <p className="mt-10">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="w-36 h-14 bg-black rounded-xl mt-10 text-white">Learn more</button>
          <div className="flex space-x-6 mt-10">
            <img src="/images/client-databiz.svg" alt="" />
            <img src="/images/client-databiz.svg" alt="" />
            <img src="/images/client-databiz.svg" alt="" />
            <img src="/images/client-databiz.svg" alt="" />
          </div>
        </div>
        <div className="h-fit w-1/2 ">
          <img 
          className=" w-1/2"
          src="/images/image-hero-desktop.png" alt="" />
        </div>
      </main>
    </div>
  );
}

export default App;
