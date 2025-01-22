import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Navigation Links */}
      <Box className="footer-navigation">
        <Link href="/" className="footer-link">
          Home
        </Link>
        <Link href="/#about" className="footer-link">
          About Us
        </Link>
        <Link href="/#services" className="footer-link">
          Services
        </Link>
      </Box>

      {/* Social Icons */}
      <Box className="footer-icons">
        <Link
          href="https://www.linkedin.com/company/104631706/admin/page-posts/published/"
          target="_blank"
          className="footer-icon-link"
        >
          <FaLinkedin className="footer-icon" />
        </Link>
        <Link href="mailto:info@omaeva.com" className="footer-icon-link">
          <FaEnvelope className="footer-icon" />
        </Link>
      </Box>

      {/* Copyright Section */}
      <Typography variant="body2" className="footer-copyright">
        © {new Date().getFullYear()} All Rights Reserved | Designed and Developed by{" "}
        <Link href="https://www.omaeva.com/" target="_blank" className="footer-highlight !underline">
          Omaeva LTD, UK
        </Link>{" "}
        |{" "}
        <Link href="/privacy-policy" className="footer-highlight">
          Privacy Policy & Cookies
        </Link>
      </Typography>

      {/* Wave Animation */}

      <div className=" lg:h-[250px] w-full">
      
      <svg viewBox="0 0 120 28" className="footer-wave">
        <defs>
          <mask id="xxx">
            <circle cx="7" cy="12" r="40" fill="#fff" />
          </mask>

          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                  1 0 0 0 0  
                  0 1 0 0 0  
                  0 0 1 0 0  
                  0 0 0 13 -9"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
          <path
            id="wave"
            d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
          />
        </defs>

        <use id="wave3" className="wave" xlinkHref="#wave" x="0" y="-2"></use>
        <use id="wave2" className="wave" xlinkHref="#wave" x="0" y="0"></use>

        <g className="gooeff">
          <circle className="drop drop1" cx="20" cy="2" r="1.8" />
          <circle className="drop drop2" cx="25" cy="2.5" r="1.5" />
          <circle className="drop drop3" cx="16" cy="2.8" r="1.2" />
          <use id="wave1" className="wave" xlinkHref="#wave" x="0" y="1" />
        </g>
      </svg>
      </div>
    </footer>
  );
};

export default Footer;
