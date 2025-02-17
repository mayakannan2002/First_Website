import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import "./Header2.css";
import logo from "./../../Components/assets/Images/company_pic.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hireOpen, setHireOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);

  return (
    <header className="header2">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Menu */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="/" className="active">Home</a>
        <a href="/About">About</a>

        {/* Services Dropdown */}
        <div 
          className="dropdown" 
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <a href="#">Services ▾</a>
          {servicesOpen && (
            <div className="dropdown-menu">
              <a href="/SWeb">Web Application Development</a>
              <a href="/SWebmoile">Mobile Application Development</a>
            </div>
          )}
        </div>

        {/* Hire Developers Dropdown */}
        <div 
          className="dropdown" 
          onMouseEnter={() => setHireOpen(true)}
          onMouseLeave={() => setHireOpen(false)}
        >
          <a href="#">Hire Developers ▾</a>
          {hireOpen && (
            <div className="dropdown-menu">
              <a href="#">Hire</a>
              <a href="#">Contract/Temporary Employees</a>
              <a href="#">Hire Java Developers</a>
              <a href="#">Hire Dot Net Developers</a>
              <a href="#">Hire PHP Developers</a>
              <a href="#">Hire Salesforce Developers</a>
              <a href="#">Hire SAP Professionals</a>
            </div>
          )}
        </div>

        <a href="/clients">Our Clients</a>
        <a href="/space">Coworking Space</a>

        {/* Careers Dropdown */}
        <div 
          className="dropdown" 
          onMouseEnter={() => setCareersOpen(true)}
          onMouseLeave={() => setCareersOpen(false)}
        >
          <a href="#">Careers ▾</a>
          {careersOpen && (
            <div className="dropdown-menu">
              <a href="/carrer">Career Policy</a>
              <a href="#">Job Openings</a>
            </div>
          )}
        </div>

        <a href="/contact">Contact Us</a>
        <FaSearch className="search-icon" />
      </nav>
    </header>
  );
};

export default Header;
