import React from 'react'

const DashboardHeader = ({ totalFollowers, toggleDarkMode, isDarkMode ,setIsDarkMode}) => {
  const handleChangeBottun=()=>{
    setIsDarkMode(!isDarkMode)
  }
  return (
    <header className="flex flex-row justify-between items-center  p-6">
    <div className='flex flex-col'>
    <h1 className="text-2xl font-bold  ">Social Media Dashboard</h1>
    <p >Total Followers: {totalFollowers.toLocaleString()}</p>
    </div>
    <div className="flex items-center mt-4">
    <span className=" mr-2">Dark Mode</span>
      <div className='w-12 relative h-6 p-1 rounded-2xl bg-green-500'>
        <button 
        onClick={handleChangeBottun}
        className={` ${isDarkMode ?'absolute right-1 w-4 h-4 rounded-full bg-gray-900':'absolute w-4 h-4 rounded-full bg-gray-900'}`}>
        </button>
      </div>
    </div>
  </header>
  )
}

export default DashboardHeader
