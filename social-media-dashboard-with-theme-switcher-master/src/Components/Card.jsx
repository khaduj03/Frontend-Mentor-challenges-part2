import React from 'react'

const Card =  ({ platform, username, count, todayCount, isNegative }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${platform}-bg dark:${platform}-dark-bg text-center bg-opacity-10 bg-gray-500  `}>
    <h2 className="text-lg font-medium ">@{username}</h2>
    <p className="text-4xl font-bold my-2 ">{count.toLocaleString()}</p>
    <p className="">Followers</p>
    <p className={`text-sm mt-2 ${isNegative ? "text-red-500" : "text-green-500"}`}>
      {isNegative ? `▼ ${Math.abs(todayCount)}` : `▲ ${todayCount}`} Today
    </p>
  </div>
  )
}

export default Card
