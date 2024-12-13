import React from 'react'

const DashboardHeader = ({ totalFollowers, toggleDarkMode, isDarkMode ,setIsDarkMode}) => {
  const handleChangeBottun=()=>{
    setIsDarkMode(!isDarkMode)
  }
  return (
    <header className="flex flex-row justify-between items-center   p-6">
    <div className='flex flex-col'>
    <h1 className="text-2xl font-bold  ">Social Media Dashboard</h1>
    <p >Total Followers: {totalFollowers.toLocaleString()}</p>
    </div>
    <div className="flex items-center mt-4">
    <span className=" mr-2">Dark Mode</span>
      <div className={` ${isDarkMode ? "w-12 relative h-6 p-1 transition-opacity rounded-2xl bg-sky-400":"w-12 relative h-6 p-1 rounded-2xl bg-gray-400"}`}>
        <button 
        onClick={handleChangeBottun}
        className={`absolute w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out ${
          isDarkMode ? "lg:translate-x-6 translate-x-4 md:translate-x-6" : "translate-x-0"
        }`}
        >
        </button>
      </div>
    </div>
  </header>
  )
}

export default DashboardHeader
