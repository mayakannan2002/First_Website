import React from "react";
import { Link } from "react-router-dom";
import "./Webdevelopement.css";

const WebApplication = () => {
  return (
    <div className="web-application">
      <header className="header3">
        <div className="breadcrumb">
          <p>  <Link to="/">Home</Link> &gt; Web Application Development</p>
        </div>
        <h1>Web Application Development</h1>
      </header>

      <section className="intro">
        <p>
          L-IT Truly Services is a full-service web application development
          services company focused on building world-class web applications
          using the latest technology trends. It’s a crucial online channel and
          its development must begin with clear goals, objectives, and a
          detailed scope of work. Choosing the right web development platform
          to meet your objectives is vital – then the process of front-end
          design and back-end development can proceed. With expertise in a wide
          range of scripting languages and web technologies, L-IT Truly
          Services will ensure your website is a hard-working business tool
          from day one.
        </p>
        <p>
          We are experienced in developing advanced systems with complex
          business logic dealing with large amounts of data and transactions.
          We will provide you with an innovative, trustworthy web application
          solution to complement your business ideas.
        </p>
      </section>

      <section className="expertise">
        <h3>Our Expertise in Web Application Development:</h3>
        <p>
          LITTUSS specialists use up-to-date technologies to deliver technically
          complex and yet easy-to-use solutions with the minimal cost/performance
          ratio.
        </p>

        <div className="expertise-category">
          <h3>PHP Development Services:</h3>
          <table>
            <tbody>
              <tr>
                <td>Frameworks</td>
                <td>CodeIgniter (CI), Zend, Symfony, YII, CakePHP, Laravel</td>
              </tr>
              <tr>
                <td>Open Source</td>
                <td>WordPress, Joomla, Magento, Drupal</td>
              </tr>
              <tr>
                <td>Databases</td>
                <td>MySQL 5.x, PostgreSQL</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="expertise-category">
          <h3>Java Development Services:</h3>
          <table>
            <tbody>
              <tr>
                <td>Java Programming</td>
                <td>JSP, EJB, JSF, Java Applets, Java Servlets, Java Messaging Services</td>
              </tr>
              <tr>
                <td>Application Server</td>
                <td>Apache/Tomcat, BEA WebLogic, IBM WebSphere, JBoss Application Server</td>
              </tr>
              <tr>
                <td>MVC Frameworks</td>
                <td>STRUTS, Spring</td>
              </tr>
              <tr>
                <td>Databases</td>
                <td>MySQL, Oracle, Hibernate</td>
              </tr>
              <tr>
                <td>IDE’s</td>
                <td>Eclipse, Netbeans, JDeveloper</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="expertise-category">
          <h3>Asp.Net Development Services:</h3>
          <table>
            <tbody>
              <tr>
                <td>Web and Desktop Applications</td>
                <td>
                  ASP.NET, AJAX, Windows Workflow Foundation, Silverlight,
                  Sharepoint
                </td>
              </tr>
              <tr>
                <td>Open Source</td>
                <td>NHibernate, Log4Net, Spring.NET, Quartz.NET</td>
              </tr>
              <tr>
                <td>Databases</td>
                <td>SQL Server 2005/2008, Oracle 8i/9i/10g</td>
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
