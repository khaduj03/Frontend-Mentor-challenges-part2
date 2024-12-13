import React from 'react'
import {motion} from 'framer-motion'

const OverviewCard = ({ title, platform, value,Icon, percentage, isNegative }) => {
  return (
  <motion.div
  // initial={{ opacity: 0, y: 20 }}
  // animate={{ opacity: 1, y: 0 }}
  // transition={{ delay: 0.2 }}
  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
   className="p-8 rounded-md shadow-md cursor-pointer bg-opacity-10 bg-gray-500 hover:bg-opacity-25 ">
    <h3 className="text-sm font-medium flex flex-row justify-between">{title}<Icon/></h3>
    <div className="flex justify-between items-center mt-2">
      <p className="text-xl font-bold ">{value.toLocaleString()}</p>
      <p className={`text-sm ${isNegative ? "text-red-500" : "text-green-500"}`}>
        {isNegative ? `▼ ${Math.abs(percentage)}%` : `▲ ${percentage}%`}
      </p>
    </div>
  </motion.div>
  )
}

export default OverviewCard
