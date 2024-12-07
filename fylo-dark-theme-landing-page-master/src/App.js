import Header from "./components/Header";
import Features from "./components/Features"
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-800">
      <header>
        <Header />
      </header>
      <main>
        <section className="flex relative justify-center items-center flex-col pb-52 ">
          <img
            className="w-1/2"
            src="images/illustration-intro.png"
            alt="illustration_intro"
          />
          <p className="text-white font-medium text-3xl text-center z-20">
            {" "}
            All your files in one secure location,
            <br /> accessible anywhere.
          </p>
          <p
          className="text-white w-2/6 text-center mt-10 z-20"
          >
            {" "}
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          
          <button
          className="bg-gradient-to-r relative z-20 from-[#95ede4] to-[#38e4d3] w-64 h-12 hover:bg-white  hover:text-gradient-to-r  text-white font-bold rounded-3xl mt-6"
           >Get Started</button>
           <img className="absolute z-10  bottom-0" src="/images/bg-curvy-desktop.svg" alt="" />
        </section>
        <section>

          <Features/>

        </section>
        <section>
          <Team/>
        </section>
        <section>
          <Footer/>
        </section>
      </main>
    </div>
  );
}

export default App;
