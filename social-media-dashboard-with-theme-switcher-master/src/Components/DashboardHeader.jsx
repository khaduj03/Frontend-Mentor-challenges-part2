import React from 'react';

const DashboardHeader = ({ totalFollowers,  isDarkMode, setIsDarkMode }) => {
  const handleChangeButton = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="flex flex-row justify-between items-center p-10">
      {/* Accessible header section */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Social Media Dashboard</h1>
        {/* Adding aria-live to make the total followers count dynamically announced */}
        <p aria-live="polite">
          Total Followers: {totalFollowers.toLocaleString()}
        </p>
      </div>

      {/* Accessible toggle button for dark mode */}
      <div className="flex items-center mt-4">
        <span className="mr-2">Dark Mode</span>
        {/* Wrapper div for the toggle button */}
        <div
          className={`${
            isDarkMode
              ? "w-12 relative h-6 p-1 transition-opacity rounded-2xl bg-sky-400"
              : "w-12 relative h-6 p-1 rounded-2xl bg-gray-400"
          }`}
          role="switch"
          onClick={handleChangeButton}
          aria-checked={isDarkMode}
          aria-label={`Toggle dark mode. Currently ${isDarkMode ? "enabled" : "disabled"}`}
        >
          <button
            onClick={handleChangeButton}
            className={`absolute w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out ${
              isDarkMode ? "lg:translate-x-6 translate-x-4 md:translate-x-6" : "translate-x-0"
            }`}
            aria-hidden="true" /* Indicates this button is visually interactive but managed by the parent `div` */
          >
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
