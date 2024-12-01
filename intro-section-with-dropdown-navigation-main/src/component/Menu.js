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
          <a href="#" className="flex text-gray-500 hover:text-black">
            Features
            <span className="w-4 h-4   justify-center flex items-center relative top-1 left-1">
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
              <motion.li
                className="flex cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  opacity: 0.9,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <span className="mt-1 mr-3">
                  <img src="/images/icon-todo.svg" alt="Todo Icon" />
                </span>{" "}
                Todo
              </motion.li>

              <motion.li
                className="flex cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  opacity: 0.9,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <span className="mt-1 mr-3">
                  <img src="/images/icon-calendar.svg" alt="Calendar Icon" />
                </span>{" "}
                Calendar
              </motion.li>

              <motion.li
                className="flex cursor-pointer "
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  opacity: 0.9,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <span className="mt-1 mr-3">
                  <img src="/images/icon-reminders.svg" alt="Reminders Icon" />
                </span>
                Reminders
              </motion.li>

              <motion.li
                className="flex cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  opacity: 0.9,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <span className="mt-1 mr-3">
                  <img src="/images/icon-planning.svg" alt="Planning Icon" />
                </span>
                Planning
              </motion.li>
            </ul>
          </motion.div>
        )}
      </p>
      <p className="relative">
        <button onClick={handleShowCompany}>
          <a href="#" className="flex  text-gray-500 hover:text-black">
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
              <motion.li
                className="cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  opacity: 0.8,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                History
              </motion.li>

              <motion.li
                className="cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  opacity: 0.8,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                Our Team
              </motion.li>

              <motion.li
                className="cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  opacity: 0.8,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                Blog
              </motion.li>
            </ul>
          </motion.div>
        )}
      </p>
      <p className=" text-gray-500 hover:text-black">
        <a href="#"> Careers</a>
      </p>
      <p className=" text-gray-500 hover:text-black">
        <a href="#">About</a>
      </p>
    </>
  );
};

export default Menu;
