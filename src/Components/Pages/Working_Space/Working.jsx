import React from "react";
import { Link } from "react-router-dom";
import "./Working.css"; // Import the CSS file

const Workspace = () => {
  return (
    
      <div className="web-application">
      <header className="header3">
        <div className="breadcrumb">
          <p>  <Link to="/">Home</Link> &gt; Working Space</p>
        </div>
        <h1>Coworking Space</h1>
      </header>
      <div className="workspace-wrapper">
        {/* Header Section */}
        <h2 className="workspace-header">
          We are a community of bold minds
        </h2>
        <p className="workspace-description">
          We have decided to work under the same roof. Our workspace and the
          people around us inspire us to take action, to grow, to do better. We
          offer co-working spaces to bring business industries together—to
          inspire, educate, and share ideas. Supported by a growing member
          network and a diverse program of professional and social lifestyle
          events, we are much more than a workspace; we are a community driven
          towards developing a better and healthier society. Littuss Co-working
          space provides a comfortable, friendly office & storage solution that
          guarantees 100% satisfaction while working here.
        </p>

        {/* Facilities Section */}
        <h3 className="workspace-subheader">Check Our Facilities:</h3>
        <ul className="workspace-list">
          <li>Wifi Ultra Fast Internet</li>
          <li>Meeting Room</li>
          <li>Snack & Coffee</li>
          <li>Printer & Scanner</li>
          <li>Mail Handling</li>
          <li>Coworking + Storage Solutions</li>
        </ul>

        {/* Workspace Options */}
        <h3 className="workspace-subheader">Choose your way of working:</h3>
        <div className="workspace-grid">
          {/* Dedicated Desk */}
          <div className="workspace-card">
            <h4 className="card-title">Dedicated Desk</h4>
            <p className="card-description">
              Your own dedicated desk with lockable storage and full-speed
              internet connectivity.
            </p>
            <h5 className="card-features">Features:</h5>
            <ul className="card-list">
              <li>Ergonomic chairs and lockable storage</li>
              <li>6 free conference room hours per month</li>
              <li>High-speed fiber Internet connectivity</li>
              <li>24/7 office access</li>
            </ul>
          </div>

          {/* 2 Person Private Office */}
          <div className="workspace-card">
            <h4 className="card-title">2 Person Private Office</h4>
            <p className="card-description">
              Private office furnished with sit-to-stand desks, lockable
              storage, and high-speed Internet connectivity. Full access to the
              social lounge and unlimited tea and coffee.
            </p>
            <h5 className="card-features">Features:</h5>
            <ul className="card-list">
              <li>Ergonomic chairs, sit-to-stand desks, and lockable storage</li>
              <li>12 free conference room hours per month</li>
              <li>High-speed fiber Internet connectivity</li>
              <li>24/7 office access</li>
            </ul>
          </div>

          {/* 5 Person Private Office */}
          <div className="workspace-card">
            <h4 className="card-title">5 Person Private Office</h4>
            <p className="card-description">
              Private office furnished with sit-to-stand desks, lockable
              storage, and high-speed Internet connectivity. Full access to the
              social lounge and unlimited tea and coffee.
            </p>
            <h5 className="card-features">Features:</h5>
            <ul className="card-list">
              <li>Ergonomic chairs, sit-to-stand desks, and lockable storage</li>
              <li>12 free conference room hours per month</li>
              <li>High-speed fiber Internet connectivity</li>
              <li>24/7 office access</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="workspace-cta">
          <a href="#" className="workspace-link">
            Click here to book your space today
          </a>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
