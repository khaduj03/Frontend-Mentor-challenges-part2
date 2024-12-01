import { useState } from "react";
import { motion } from "framer-motion";
const Menu = () => {
  const [featuer, setFeatuer] = useState(false);
  const [company, setCompany] = useState(false);

  const handleShowFeatuer = () => {
    setFeatuer(!featuer);
  };

  const handleShowCompany = () => {
    setCompany(!company);
  };

  return (
    <>
      <p className="relative">
        <button onClick={handleShowFeatuer}>
          <a href="#" className="flex">
            Features
            <span className="w-4 h-4  justify-center flex items-center relative top-1 left-1">
              {!featuer ? (
                <img src="/images/icon-arrow-down.svg" alt="" />
              ) : (
                <img src="/images/icon-arrow-up.svg" alt="" />
              )}
            </span>
          </a>
        </button>
        {featuer && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="lg:absolute w-40 h-44 bg-white lg:rounded-2xl lg:shadow-2xl flex justify-center items-center top-10 lg:left-[-5rem]"
          >
            <ul className="space-y-4">
              <li className="flex ">
                <span className="mt-1 mr-3">
                  <img src="/images/icon-todo.svg" alt="" />
                </span>{" "}
                Todo
              </li>
              <li className="flex ">
                <span className="mt-1 mr-3">
                  <img src="/images/icon-calendar.svg" alt="" />
                </span>{" "}
                Calender
              </li>
              <li className="flex ">
                <span className="mt-1 mr-3">
                  <img src="/images/icon-reminders.svg" alt="" />
                </span>
                Remainder
              </li>
              <li className="flex ">
                <span className="mt-1 mr-3">
                  <img src="/images/icon-planning.svg" alt="" />
                </span>
                Planing
              </li>
            </ul>
          </motion.div>
        )}
      </p>
      <p className="relative">
        <button onClick={handleShowCompany}>
          <a href="#" className="flex">
            {" "}
            Company
            <span className="w-4 h-4  justify-center flex items-center relative top-1 left-1">
              {!company ? (
                <img src="/images/icon-arrow-down.svg" alt="" />
              ) : (
                <img src="/images/icon-arrow-up.svg" alt="" />
              )}
            </span>
          </a>
        </button>
        {company && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="lg:absolute w-32 h-36 bg-white lg:rounded-2xl lg:shadow-2xl flex justify-center items-center lg:top-10 "
          >
            <ul className="space-y-4">
              <li> History</li>
              <li>Our Team</li>
              <li>Blog</li>
            </ul>
          </motion.div>
        )}
      </p>
      <p>
        <a href="#"> Careers</a>
      </p>
      <p>
        <a href="#">About</a>
      </p>
    </>
  );
};

export default Menu;
