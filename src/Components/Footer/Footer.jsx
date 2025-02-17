import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-card">
          <h3>Coworking Space in Bangalore</h3>
          <p>Own an Office Space for you and your team in Bangalore.</p>
        </div>
        <div className="footer-card">
          <h3>Career Opportunities</h3>
          <p>Build a career that suits your lifestyle, in a company where your voice matters.</p>
        </div>
      </div>

      <div className="footer-middle">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            pixalive-tech Services is a provider of IT consulting and software
            services. After starting as a small IT services company, we
            transitioned to global services in March 2022 and have since been
            helping non-IT organizations and software companies improve their
            business performance and quickly acquire new customers.
          </p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/pixalive_official" className="social-icon"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/pixalive" className="social-icon"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Our Services</h3>
          <ul>
            <li><a href="/SWeb" className="footer-link">Mobile Application Development</a></li>
            <li><a href="/SWebmoile" className="footer-link">Web Application Development</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Hire Developers</h3>
          <ul>
            <li><a href="#" className="footer-link">Hire SAP Professionals</a></li>
            <li><a href="#" className="footer-link">Hire Salesforce Developers</a></li>
            <li><a href="#" className="footer-link">Hire PHP Developers</a></li>
            <li><a href="#" className="footer-link">Hire Dot Net Developers</a></li>
            <li><a href="#" className="footer-link">Hire Java Developers</a></li>
            <li><a href="#" className="footer-link">Hire Contract/Temporary Employees</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>
            Want to be notified of the latest LIT-Truly news right away? We are
            happy to provide you with new information regularly.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 PIXALIVETECH SERVICES</p>
      </div>
    </footer>
  );
};

export default Footer;
