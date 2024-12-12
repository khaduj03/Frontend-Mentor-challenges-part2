import React from "react";

const Footer = () => {
  return (
    <footer className="relative bottom-0" aria-labelledby="footer-heading">
      <p
        id="footer-heading"
        className="font-sans text-xs flex justify-center items-center"
      >
        Challenge by{" "}
        <a
          className="text-blue-400"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Frontend Mentor's challenge page"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="text-blue-400"
          href="https://www.frontendmentor.io/profile/khaduj03"
          aria-label="Visit Khaduj's Frontend Mentor profile"
        >
          Khaduj
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
