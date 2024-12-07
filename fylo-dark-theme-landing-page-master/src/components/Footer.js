import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex pb-20 pt-14 relative bg-gray-900 ">
      <div className="flex justify-center items-center flex-col absolute rounded-xl p-5  bg-[#202a3c] w-[650px] h-[200px] left-72 bottom-64">
        <p className=" text-white text-3xl font-bold">Get early access today</p>
        <p className=" text-white text-center ">
          {" "}
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="flex ">
            <input type="email" className="w-[400px] h-[40px] rounded-3xl outline-none p-4 mt-6 mr-5 " />
            <button
               className="bg-gradient-to-r relative z-20 from-[#95ede4] to-[#38e4d3] w-40 h-10 hover:bg-white  hover:text-gradient-to-r  text-white font-bold rounded-3xl mt-6"
            >Get Started For Free</button>
        </div>
      </div>

      <div className="flex flex-col ">
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

      <div className="space-y-5 ml-10 flex justify-center items-center flex-col">
        <div className="flex space-x-8 text-white">
          <img src="/images/icon-phone.svg" alt="" /> <p>+1-543-123-4567</p>
        </div>
        <div className="flex space-x-6 text-white">
          <img className="w-5 h-5 " src="/images/icon-email.svg" alt="" />{" "}
          <p>example@fylo.com</p>
        </div>
      </div>

      <div className="text-white flex flex-col justify-center  ml-20">
        <p>About Us</p>
        <p>Jobs</p>
        <p>Press</p>
        <p>Blog</p>
      </div>
    </div>
  );
};

export default Footer;
