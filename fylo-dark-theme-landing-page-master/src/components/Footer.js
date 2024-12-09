import React, { useState } from "react";
import * as Yup from "yup";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = async (email) => {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email("Please enter a valid email address ")
        .required("Email is required"),
    });

    try {
      await schema.validate({ email });
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);
    setEmail("");
  };

  return (
    <div className="w-full flex lg:flex-row justify-center items-center flex-col pb-20 pt-14 relative bg-gray-900 ">
      <motion.div
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{
          opacity: 1, 
          y: 0, 
        }}
        exit={{
          opacity: 0, 
          y: 0, 
        }}
        transition={{ duration: 2 }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex justify-center items-center flex-col lg:absolute rounded-xl p-5  bg-[#202a3c]  w-[350px] lg:w-[750px] h-[320px] lg:h-[250px] lg:left-64 lg:bottom-64"
      >
        <p className=" text-white text-3xl font-bold lg:mt-0 mt-4">
          Get early access today
        </p>
        <p className=" text-white text-center ">
          {" "}
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div>
          <form onSubmit={handleSubmit} className="flex lg:flex-row flex-col ">
            <label htmlFor="" className="flex flex-col">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@fylo.com"
                className="lg:w-[400px] w-[330px]  h-[40px] rounded-3xl outline-none p-4 mt-6 mr-5 "
              />
              {errorMessage && (
                <p className="text-xs text-red-500 ml-3 mt-2 ">
                  {errorMessage}
                </p>
              )}
            </label>
            <label htmlFor="">
              <input
                type="submit"
                value="Get Started For Free"
                className="bg-gradient-to-r cursor-pointer relative z-20 from-[#95ede4] to-[#38e4d3] lg:w-40 w-[330px] h-10 text-xs    text-white font-bold rounded-3xl mt-2 lg:mt-6"
              />
            </label>
          </form>
        </div>
      </motion.div>

      <div
        className="flex flex-col lg:mt-0 mt-10 "
      >
        <img
          className="w-32 h-10 ml-10"
          src="/images/logo.svg"
          alt="logo_image"
        />
        <div className="flex text-white w-96 mt-8 ml-10">
          <img
            className="w-5 h-5"
            src="/images/icon-location.svg"
            alt="icon-location"
          />
          <p className="ml-6">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>

      <div
        className="space-y-5 lg:ml-10 flex lg:mt-0 mt-10 mr-40 lg:mr-0 justify-center items-center flex-col"
      >
        <div className="flex space-x-7 mr-3 text-white">
          <img src="/images/icon-phone.svg" alt="" /> <p>+1-543-123-4567</p>
        </div>
        <div className="flex space-x-6 text-white">
          <img className="w-5 h-5 " src="/images/icon-email.svg" alt="" />{" "}
          <p>example@fylo.com</p>
        </div>
      </div>

      <div
        className="text-white flex flex-col justify-center  lg:ml-20 mr-52 lg:mr-0 mt-3 lg:mt-0"
      >
        <p className="  text-white cursor-pointer hover:text-[#38e4d3]">
          About Us
        </p>
        <p className="  text-white cursor-pointer hover:text-[#38e4d3]">Jobs</p>
        <p className="  text-white cursor-pointer hover:text-[#38e4d3]">
          Press
        </p>
        <p className="  text-white cursor-pointer hover:text-[#38e4d3]">Blog</p>
      </div>

      <div
        className="flex flex-col  lg:ml-20 mr-52 lg:mr-0 mt-3 lg:mt-0"
      >
        <p className="  text-white cursor-pointer hover:text-[#38e4d3]">
          Contact Us
        </p>
        <p className="  text-white cursor-pointer hover:text-[#38e4d3]">
          Terms
        </p>
        <p className="  text-white cursor-pointer hover:text-[#38e4d3]">
          Privacy
        </p>
      </div>

      <div
        className="flex ml-10 justify-start items-start space-x-2"
      >
        <img
          className="w-5 h-5 cursor-pointer"
          src="/images/facebook-svgrepo-com.svg"
          alt=""
        />
        <img
          className="w-5 h-5 cursor-pointer fill-white "
          src="/images/twitter-logo-bold-svgrepo-com.svg"
          alt=""
        />
        <img
          className="w-5 h-5 cursor-pointer"
          src="/images/instagram-167-svgrepo-com (1).svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
