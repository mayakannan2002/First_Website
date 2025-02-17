import React from "react";
import { Link } from "react-router-dom";
import "./Webdevelopement.css";

const WebApplication = () => {
  return (
    <div className="web-application">
      <header className="header3">
        <div className="breadcrumb">
          <p>  <Link to="/">Home</Link> &gt; Mobile Application Development</p>
        </div>
        <h1>Mobile Application Development</h1>
      </header>

      <section className="intro">
        <p>
        Mobility is the call of the market and when it comes to applications, enterprises, budding
         businesses and startups all want to be IN-THE-RACE with an app. L-IT Truly Services avail 
         highly chiseled and feature-rich Mobile Application development services which will entertain 
         and leave you spell-bound asking for more.


        </p>
        <p>
        Our rich experiences in app development, promises a kick-start to your business with our
         tech-geniuses and comprehensive life cycle management processes. We develop elegant and 
         user-friendly mobile apps which can be used by a non-techie! Mobile apps development
        includes:
        </p>
      </section>

      <section className="expertise">
        

        <div className="expertise-category">
          <h3>Our Expertise in Mobile Development Services:</h3>
          <table>
            <tbody>
              <tr>
                <td>iOS (iPhone/iPad)</td>
                <td>iPhone SDK, Xcode, Objective-C</td>
              </tr>
              <tr>
                <td>Android</td>
                <td>Eclipse, Android SDK, Android Native Development,  Java</td>
              </tr>
              <tr>
                <td>Windows Mobile</td>
                <td>MS Visual Studio, .NET Compact Framework, Visual Basic, C#</td>
              </tr>
              <tr>
                <td>Blackberry</td>
                <td>Eclipse, BlackBerry Theme Studio, Java ME, BlackBerry SDK</td>
              </tr>
            </tbody>
          </table>
        </div>

              </section>

      <footer className="footer1">
        <p>
          If you are looking for the right company to outsource, we are the
          best in the market. Why late, <a href="#">Let’s talk</a>.
        </p>
      </footer>
    </div>
  );
};

export default WebApplication;
