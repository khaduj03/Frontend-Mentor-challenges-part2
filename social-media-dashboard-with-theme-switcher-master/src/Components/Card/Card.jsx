import React from 'react'
import {motion} from 'framer-motion'
const Card =  ({ platform, username, count, todayCount,Icon,color, isNegative }) => {
  return (
    <motion.div
    // initial={{ opacity: 0, y: 20 }}
    // animate={{ opacity: 1, y: 0 }}
    // transition={{ delay: 0.2 }}
    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
     className={`p-6 relative 00 rounded-lg cursor-pointer shadow-md text-center bg-opacity-10 bg-gray-500 hover:bg-opacity-25   `}>
      <span className={` h-1.5 bg-gradient-to-r ${color} absolute top-0 w-full inset-0 rounded-tl-lg rounded-tr-lg `}></span>
    <h2 className="text-lg font-medium flex flex-row  justify-center items-center s ">
      <Icon /> @{username}</h2>
    <p className="text-4xl font-bold my-2 ">{count.toLocaleString()}</p>
    <p className="">Followers</p>
    <p className={`text-sm mt-2 ${isNegative ? "text-red-500" : "text-green-500"}`}>
      {isNegative ? `▼ ${Math.abs(todayCount)}` : `▲ ${todayCount}`} Today
    </p>
  </motion.div>
  )
}

export default Card;
