import React from 'react'

const OverviewCard = ({ title, platform, value,Icon, percentage, isNegative }) => {
  return (
  <div className="p-4 rounded-lg shadow-md bg-opacity-10 bg-gray-500">
    <h3 className="text-sm font-medium flex flex-row justify-between">{title}<Icon/></h3>
    <div className="flex justify-between items-center mt-2">
      <p className="text-xl font-bold ">{value.toLocaleString()}</p>
      <p className={`text-sm ${isNegative ? "text-red-500" : "text-green-500"}`}>
        {isNegative ? `▼ ${Math.abs(percentage)}%` : `▲ ${percentage}%`}
      </p>
    </div>
  </div>
  )
}

export default OverviewCard
