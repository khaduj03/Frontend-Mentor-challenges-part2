import React from "react";
import { motion } from 'framer-motion';

const Team = () => {
  return (
    <div className="w-full flex p-14 bg-[#181f2b] ">
        <motion.div
        className="w-1/2 p-8"
        initial={{ opacity: 0, y: 100 }} // Start hidden and below the viewport
        whileInView={{
          opacity: 1, // Fade in when in view
          y: 0, // Move to its normal position
        }}
        exit={{
          opacity: 0, // Fade out when leaving view
          y: 100, // Move out of the viewport
        }}
        transition={{ duration: 2 }}
        viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% is in view
      >
        <img
          src="/images/illustration-stay-productive.png"
          alt="illustration-stay-productive"
        />
      </motion.div>
      <motion.div
       className="flex flex-col  w-1/2 p-8"
        initial={{ opacity: 0, y: 100 }} // Start hidden and below the viewport
        whileInView={{
          opacity: 1, // Fade in when in view
          y: 0, // Move to its normal position
        }}
        exit={{
          opacity: 0, // Fade out when leaving view
          y: 100, // Move out of the viewport
        }}
        transition={{ duration: 2 }}
        viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% is in view
      >
        <h2 className="text-white text-3xl font-bold">
          {" "}
          Stay productive,
          <br /> wherever you are
        </h2>
        <p className="text-white  mt-6">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="text-white mt-6 ">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a href="#" className="flex flex-row text-[#5fddd9] text-xs mt-5 border-b border-[#5fddd9] cursor-pointer w-fit ">
        See how Fylo works <span><img src="/images/icon-arrow.svg" alt="" /></span>
        </a>
      </motion.div>
    </div>
  );
};

export default Team;
