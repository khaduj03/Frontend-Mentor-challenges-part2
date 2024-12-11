import React from 'react'

const Main = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse justify-start items-center lg:p-28 lg:pl-32 lg:pt-10 overflow-x-hidden ">
    <div className="lg:w-1/2 p-8 mt-20 lg:mt-0 lg:p-0">
      <div className="flex flex-row space-x-5">
        <button className="w-12 h-6 rounded-2xl bg-black text-white font-semibold" >NEW</button>
        <p className="text-gray-400  uppercase text-xs lg:mt-0 mt-1 lg:tracking-[4px] tracking-[2px]">Monograph Dashboard</p>
      </div>

      <h1 className="title mt-5 lg:text-5xl text-3xl font-bold text-blue-950  uppercase">Powerful insights into your team</h1>

     
      <p className="text-xl mt-8 w-64 text-gray-500 ">Project planning and time tracking for agile teams</p>

      <div className="mt-6 flex ">
        <button className="lg:w-44 w-32 h-12 text-xs lg:text-xl uppercase rounded-md bg-red-400 text-white font-semibold">Schedule a demo</button>
        <p className="text-gray-400 ml-5 mt-3 lg:tracking-[4px] tracking-[2px] uppercase text-xs">to see a live preview</p>
      </div>
    </div>

    <div className=" mt-10">
      <div className="lg:w-[580px] lg:flex w-[50%] h-[45%]  -z-10 lg:h-[320px] rounded-bl-[40px] bg-gray-100 absolute top-0 right-0"></div>
      <img 
        className=" lg:absolute  lg:bottom-[50px] lg:ml-12 lg:w-[800px] ml-20"
        src="./images/illustration-devices.svg" alt="illustration-devices"/>
    </div>
    </div>
  )
}

export default Main
