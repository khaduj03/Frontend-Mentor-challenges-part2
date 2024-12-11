import React from 'react'

const Main = () => {
  return (
    <div className="flex justify-start items-center p-28 pl-32 pt-14">
    <div className="w-1/2">
      <div className="flex flex-row space-x-5">
        <button className="w-12 h-6 rounded-2xl bg-black text-white font-semibold" >NEW</button>
        <p className="text-gray-400  uppercase tracking-[4px]">Monograph Dashboard</p>
      </div>

      <h1 className="title mt-5 text-6xl font-extrabold  uppercase">Powerful insights into your team</h1>

     
      <p className="text-xl mt-8 w-64 text-gray-500 ">Project planning and time tracking for agile teams</p>

      <div className="mt-6 flex ">
        <button className="w-44 h-12 uppercase rounded-md bg-red-400 text-white font-bold">Schedule a demo</button>
        <p className="text-gray-400 ml-5 mt-3 tracking-[4px] uppercase">to see a live preview</p>
      </div>
    </div>

    <div className="">
      <div className="w-[650px] -z-10 h-[500px] rounded-bl-[80px] bg-gray-100 absolute top-0 right-0"></div>
      <img 
        className=" absolute bottom-[50px] w-[800px]"
        src="./images/illustration-devices.svg" alt="illustration-devices"/>
    </div>
    </div>
  )
}

export default Main
