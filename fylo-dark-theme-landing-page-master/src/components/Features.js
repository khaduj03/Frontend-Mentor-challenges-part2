import React from "react";

const Features = () => {
  return (
    <div className="flex justify-center items-center w-full mt-14">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-8/12 ">
        <div className="flex flex-col justify-center h-64 p-2 items-center w-96 rounded-xl shadow-2xl bg-gray-900 hover:bg-gray-700">
          <img src="/images/icon-access-anywhere.svg" alt="file" />
          <p className="text-white text-2xl font-bold">
            {" "}
            Access your files, anywhere
          </p>
          <p className=" text-white text-center mt-5">
            {" "}
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div className="flex flex-col justify-center h-64 p-2  items-center w-96 rounded-xl shadow-2xl bg-gray-900 hover:bg-gray-700">
          <img src="/images/icon-security.svg" alt="file" />
          <p className="text-white text-2xl font-bold">
            {" "}
            Security you can trust
          </p>
          <p className=" text-white text-center mt-5">
            {" "}
            2-factor authentication and user-controlled encryption are just a couple of the security 
  features we allow to help secure your files.

          </p>
        </div>
        <div className="flex flex-col justify-center h-64  items-center w-96 rounded-xl shadow-2xl bg-gray-900 hover:bg-gray-700">
          <img src="/images/icon-collaboration.svg" alt="file" />
          <p className="text-white text-2xl font-bold">
            {" "}
            Real-time collaboration

          </p>
          <p className=" text-white text-center mt-5">
            {" "}
            Securely share files and folders with friends, family and colleagues for live collaboration. 
            No email attachments required.
          </p>
        </div>
        <div className="flex flex-col justify-center h-64  items-center w-96 rounded-xl shadow-2xl bg-gray-900 hover:bg-gray-700">
          <img src="/images/icon-any-file.svg" alt="file" />
          <p className="text-white text-2xl font-bold">
            {" "}
            Access your files, anywhere
          </p>
          <p className=" text-white text-center mt-5">
            {" "}
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
