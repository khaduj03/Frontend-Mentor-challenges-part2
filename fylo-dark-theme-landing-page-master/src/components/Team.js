import React from "react";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <div className="bg-[#181f2b]  pb-64">
      <div className="w-full flex p-14 ">
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
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="text-white mt-6 ">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a
            href="#"
            className="flex flex-row text-[#5fddd9] text-xs mt-5 border-b border-[#5fddd9] cursor-pointer w-fit "
          >
            See how Fylo works{" "}
            <span>
              <img src="/images/icon-arrow.svg" alt="" />
            </span>
          </a>
        </motion.div>
      </div>
      <div className="flex relative justify-center items-center  space-x-7">
        <img 
        className="absolute z-10 bottom-40 left-10"
        src="/images/bg-quotes.png" alt="" />
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
      }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      className="w-[380px] z-20 p-5 h-44 rounded-md flex justify-center flex-col text-white bg-[#202a3c]"
      >
        <p>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="flex ">
        <img
        className="w-7 h-7 rounded-full m-2"
         src="/images/profile-1.jpg" alt="" />
        <div className="text-xs mt-1">
        <p className="font-bold"> Satish Patel</p>
        <p> Founder & CEO, Huddle</p>
        </div>
        </div>
      </motion.div>
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
      }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      className="w-[380px] z-20  p-5 h-44 rounded-md flex justify-center flex-col text-white bg-[#202a3c]"
      >
        <p>
        Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine.

        </p>
        <div className="flex ">
        <img
        className="w-7 h-7 rounded-full m-2"
         src="/images/profile-2.jpg" alt="" />
        <div className="text-xs mt-1">
        <p className="font-bold"> Bruce McKenzie</p>
        <p> Founder & CEO, Huddle</p>
        </div>
        </div>
      </motion.div>
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
      }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      className="w-[380px] z-20 p-5 h-44 rounded-md flex justify-center flex-col text-white bg-[#202a3c]"
      >
        <p>
        Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
        become a well-oiled collaboration machine.
        </p>
        <div className="flex ">
        <img
        className="w-7 h-7 rounded-full m-2"
         src="/images/profile-3.jpg" alt="" />
        <div className="text-xs mt-1">
        <p className="font-bold"> Iva Boyd</p>
        <p> Founder & CEO, Huddle</p>
        </div>
        </div>
      </motion.div>
      </div>
    </div>
  );
};

export default Team;
