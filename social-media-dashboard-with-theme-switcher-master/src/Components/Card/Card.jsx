import React from 'react'

const Card =  ({ platform, username, count, todayCount,Icon,color, isNegative }) => {
  return (
    <div className={`p-6 relative 00 rounded-lg shadow-md text-center bg-opacity-10 bg-gray-500 hover:bg-opacity-25  `}>
      <span className={` h-1.5 bg-gradient-to-r ${color} absolute top-0 w-full inset-0 rounded-tl-lg rounded-tr-lg `}></span>
    <h2 className="text-lg font-medium flex flex-row  justify-center items-center s ">
      <Icon /> @{username}</h2>
    <p className="text-4xl font-bold my-2 ">{count.toLocaleString()}</p>
    <p className="">Followers</p>
    <p className={`text-sm mt-2 ${isNegative ? "text-red-500" : "text-green-500"}`}>
      {isNegative ? `▼ ${Math.abs(todayCount)}` : `▲ ${todayCount}`} Today
    </p>
  </div>
  )
}

export default Card;
