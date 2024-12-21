import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-gray-100 text-gray-700 px-6 py-12 relative flex justify-center items-center flex-col"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      {/* Decorative Background */}
      <img
        className="absolute left-0 top-0"
        src="/images/bg-pattern-footer-desktop.svg"
        alt="Decorative background pattern"
        aria-hidden="true"
      />

      {/* Logo and Social Media Links */}
      <div className="lg:w-[90%] border-b border-b-gray-400 justify-between flex lg:flex-row flex-col p-7">
        <img src="/images/logo.svg" alt="Insure Logo" />
        <div className="flex space-x-4 mt-5 lg:mt-0">
          <a
            href="#"
            aria-label="Visit our Facebook page"
            className="transition-transform transform hover:scale-110 hover:opacity-80 duration-300 ease-in-out"
          >
            <img src="/images/icon-facebook.svg" alt="Facebook" />
          </a>
          <a
            href="#"
            aria-label="Visit our Twitter page"
            className="transition-transform transform hover:scale-110 hover:opacity-80 duration-300 ease-in-out"
          >
            <img src="/images/icon-twitter.svg" alt="Twitter" />
          </a>
          <a
            href="#"
            aria-label="Visit our Pinterest page"
            className="transition-transform transform hover:scale-110 hover:opacity-80 duration-300 ease-in-out"
          >
            <img src="/images/icon-pinterest.svg" alt="Pinterest" />
          </a>
          <a
            href="#"
            aria-label="Visit our Instagram page"
            className="transition-transform transform hover:scale-110 hover:opacity-80 duration-300 ease-in-out"
          >
            <img src="/images/icon-instagram.svg" alt="Instagram" />
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex lg:flex-row flex-col items-center lg:space-y-0 space-y-5 lg:space-x-40 lg:items-start w-full lg:pl-20 mt-8">
        <div>
          <h4
            className="font-bold text-gray-400 tracking-wider"
            id="company-heading"
          >
            OUR COMPANY
          </h4>
          <ul
            className="mt-4 uppercase tracking-wider lg:text-start text-center"
            aria-labelledby="company-heading"
          >
            <li>
              <a href="#" className="hover:underline">
                How We Work
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Why Insure?
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                View Plans
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Reviews
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4
            className="font-bold text-gray-400 tracking-wider lg:text-start text-center"
            id="help-heading"
          >
            HELP ME
          </h4>
          <ul
            className="mt-4 uppercase tracking-wider lg:text-start text-center"
            aria-labelledby="help-heading"
          >
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cookies
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4
            className="font-bold text-gray-400 tracking-wider"
            id="contact-heading"
          >
            CONTACT
          </h4>
          <ul
            className="mt-4 uppercase tracking-wider lg:text-start text-center"
            aria-labelledby="contact-heading"
          >
            <li>
              <a href="#" className="hover:underline">
                Sales
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Live Chat
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4
            className="font-bold text-gray-400 tracking-wider"
            id="others-heading"
          >
            OTHERS
          </h4>
          <ul
            className="mt-4 uppercase tracking-wider lg:text-start text-center"
            aria-labelledby="others-heading"
          >
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Licenses
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-12 text-center">
        <p>&copy; 2024 Insure. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
