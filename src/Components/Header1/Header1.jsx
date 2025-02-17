import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaFacebookF, FaLinkedinIn,FaInstagram  } from "react-icons/fa";
import "./Header1.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <span className="location">
          <FaMapMarkerAlt className="icon1" /> Bengaluru, India
        </span>
        <span className="email">
          <FaEnvelope className="icon1" /> hr@pixalive.com
        </span>
      </div>
      <div className="header-right">
        <span className="time">
          <FaClock className="icon1" /> 9:30 AM - 6:00 PM
        </span>
        <div className="social-icons">
          <a href="https://www.instagram.com/pixalive_official" className="facebook">
            <FaInstagram  />
          </a>
          <a href="https://www.linkedin.com/company/pixalive" className="linkedin" target="blank">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
