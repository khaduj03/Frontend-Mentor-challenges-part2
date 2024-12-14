import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ platform, username, count, todayCount, Icon, color, isNegative }) => {
  return (
    <motion.div
      // Initial animation: slightly below the starting position with no opacity
      initial={{ opacity: 0, y: 20 }}
      // Final animation: fully visible and at the correct position
      animate={{ opacity: 1, y: 0 }}
      // Smooth hover effect with upward movement and shadow
      whileHover={{
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
        transition: { duration: 0.4, ease: "easeInOut" }, // Smoother hover transition
      }}
      // Card styling
      className={`p-6 relative rounded-lg cursor-pointer shadow-md text-center bg-opacity-10 bg-gray-500 hover:bg-opacity-25`}
      
      // Accessibility attributes
      role="button" // Marks the card as an interactive element
      tabIndex={0} // Makes it keyboard-focusable
      aria-label={`Card for ${platform}. Username: ${username}, ${count.toLocaleString()} followers. ${
        isNegative ? "Decreased" : "Increased"
      } by ${Math.abs(todayCount)} today.`} // Screen-reader-friendly description
    >
      {/* Gradient bar at the top of the card */}
      <span
        className={`h-1.5 bg-gradient-to-r ${color} absolute top-0 w-full inset-0 rounded-tl-lg rounded-tr-lg`}
        aria-hidden="true" // Decorative element, hidden from assistive tech
      ></span>

      {/* Platform icon and username */}
      <h2 className="text-lg font-medium flex flex-row justify-center items-center">
        <Icon aria-hidden="true" /> {/* Icon is decorative, so hidden from screen readers */}
        @{username}
      </h2>

      {/* Display the follower count */}
      <p className="text-4xl font-bold my-2">{count.toLocaleString()}</p>

      {/* Label for followers */}
      <p>Followers</p>

      {/* Today's change in followers, with color indicating positive/negative */}
      <p className={`text-sm mt-2 ${isNegative ? "text-red-500" : "text-green-500"}`}>
        {isNegative ? `▼ ${Math.abs(todayCount)}` : `▲ ${todayCount}`} Today
      </p>
    </motion.div>
  );
};

export default Card;
