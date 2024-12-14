import React from 'react';
import { motion } from 'framer-motion';

const OverviewCard = ({ title, platform, value, Icon, percentage, isNegative }) => {
  return (
    <motion.div
      // Initial animation state: invisible and slightly below its final position
      initial={{ opacity: 0, y: 20 }}
      // Final animation state: fully visible and at its correct position
      animate={{ opacity: 1, y: 0 }}
      // Motion for hover effect: slight upward movement with a shadow and smooth transition
      whileHover={{
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
        transition: { duration: 0.4, ease: "easeInOut" }, // Smoother and slower hover transition
      }}
      // CSS styles for the card
      className="p-8 rounded-md shadow-md cursor-pointer bg-opacity-10 bg-gray-500 hover:bg-opacity-25"
      
      // Accessibility attributes
      role="button" // Indicates the card is interactive
      tabIndex={0} // Makes the card focusable via keyboard navigation
      aria-label={`${title} on ${platform}: ${value.toLocaleString()} with a ${
        isNegative ? "decrease" : "increase"
      } of ${Math.abs(percentage)}%.`} // Descriptive text for screen readers
    >
      <h3 className="text-sm font-medium flex flex-row justify-between">
        {/* Title and platform icon */}
        {title}
        <Icon aria-hidden="true" /> {/* Hides the icon from assistive technologies as it's decorative */}
      </h3>
      <div className="flex justify-between items-center mt-2">
        {/* Displays the value in bold */}
        <p className="text-xl font-bold">{value.toLocaleString()}</p>
        {/* Percentage change with color indicating positive/negative */}
        <p className={`text-sm ${isNegative ? "text-red-500" : "text-green-500"}`}>
          {isNegative ? `▼ ${Math.abs(percentage)}%` : `▲ ${percentage}%`}
        </p>
      </div>
    </motion.div>
  );
};

export default OverviewCard;
