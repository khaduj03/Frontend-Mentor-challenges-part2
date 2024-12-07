import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className="flex justify-center items-center w-full  bg-[#181f2b]">
      <div className="grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-4 lg:w-8/12  ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: -100,
          }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="flex flex-col justify-center h-64 p-2 items-center w-96 rounded-xl shadow-2xl  bg-[#181f2b] hover:bg-gray-800">
            <img src="/images/icon-access-anywhere.svg" alt="file" />
            <p className="text-white text-2xl font-bold">
              {" "}
              Access your files, anywhere
            </p>
            <p className=" text-white text-center mt-5">
              {" "}
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1, 
            x: 0,
          }}
          exit={{
            opacity: 0, 
            x: 100, 
          }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="flex flex-col justify-center h-64 p-2  items-center w-96 rounded-xl shadow-2xl  bg-[#181f2b] hover:bg-gray-800">
            <img src="/images/icon-security.svg" alt="file" />
            <p className="text-white text-2xl font-bold">
              {" "}
              Security you can trust
            </p>
            <p className=" text-white text-center mt-5">
              {" "}
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{
            opacity: 1,
            x: 0, 
          }}
          exit={{
            opacity: 0, 
            x: -100, 
          }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.2 }} 
        >
          <div className="flex flex-col justify-center h-64  items-center w-96 rounded-xl shadow-2xl  bg-[#181f2b] hover:bg-gray-800">
            <img src="/images/icon-collaboration.svg" alt="file" />
            <p className="text-white text-2xl font-bold">
              {" "}
              Real-time collaboration
            </p>
            <p className=" text-white text-center mt-5">
              {" "}
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }} 
          whileInView={{
            opacity: 1, 
            x: 0, 
          }}
          exit={{
            opacity: 0, 
            x: 100, 
          }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.2 }} 
        >
          <div className="flex flex-col justify-center h-64  items-center w-96 rounded-xl shadow-2xl  bg-[#181f2b] hover:bg-gray-800">
            <img src="/images/icon-any-file.svg" alt="file" />
            <p className="text-white text-2xl font-bold">
              {" "}
              Store any type of file
            </p>
            <p className=" text-white text-center mt-5">
              {" "}
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
