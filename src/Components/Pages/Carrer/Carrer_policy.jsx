import React from "react";
import { Link } from "react-router-dom";
import "./../Servicespage/Webdevelopement.css";

const WebApplication = () => {
  return (
    <div className="web-application">
      <header className="header3">
        <div className="breadcrumb">
          <p>  <Link to="/">Home</Link> &gt; Career Policy</p>
        </div>
        <h1>Carrer Policy</h1>
      </header>

      <section className="intro">
        <p>
        The evolution of IT continues to provide new challenges and opportunities – that’s what we thrive on. Our business is enjoying considerable success and we are actively recruiting to support the growth of our international operations.

We are looking for individuals in a number of key areas and we would be delighted to receive an application from you.


        </p>
        <p>
        Mail to: hr@littuss.com or click here to submit your resume.

Click here for our latest opening job requirements
        </p>
      </section>

      
    </div>
  );
};

export default WebApplication;
