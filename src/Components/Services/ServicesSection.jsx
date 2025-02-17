import React from "react";
import "./ServicesSection.css";
import Contact from "./contactus";
import services1 from "./../assets/Images/service1.png";
import services2 from "./../assets/Images/services2.png";
import services3 from "./../assets/Images/services3.jpg";
import services4 from "./../assets/Images/services4.jpg";
import services5 from "./../assets/Images/services5.jpg"

export default function ServicesSection() {
  const services = [
    {
      title: "IT Consulting Services",
      description:
        "L-IT Truly Services has achieved many milestones while providing IT Consulting Services to clients. The ability to render service as per client requirement has made us a favored and proven company in India.",
      image: services1,
    },
    {
      title: "Product Development",
      description:
        "Whether you are a small startup or an established company, to bring any new product to the market or develop existing ones, you need a structured and efficient planning that minimizes risks.",
      image: services2,
    },
    {
      title: "Mobile App Development",
      description:
        "Smartphones are where consumers connect to the business they need. In today's instant world, it is important that businesses catch up to consumers' changing demands and establish visibility.",
      image: services3,
    },
    {
      title: "Consulting",
      description:
        "Strong Requirement Team, Expert in Temp Staffing, Domain experience of over 16 years, Immediate Joining, Experienced Developers in multiple technologies.",
      image: services4, // Replace with actual image if needed
      contact: {
        label: "Talk to us",
        mobile: "+91 9008770035",
      },
    },
    {
      title: "Our Process",
      description:
        "Send us your detailed project requirements, select candidates for screening process, take interview of selected candidates, initiate project on-boarding.",
      image: services5, // Replace with actual image if needed
      button: {
        text: "Send Us",
      },
    },
  ];

  return (
    <div className="services-section1">
      <div className="services-header1">
        <p className="services-breadcrumb1">/ Services /</p>
        <h2 className="services-title1">Here is what we provide</h2>
        <p className="services-subtitle1">
          Best Out Sourcing, IT Staffing, and Software Development Company in India
        </p>
      </div>
      <div className="services-grid1">
        {services.map((service, index) => (
          <div key={index} className="service-card1">
            <img src={service.image} alt={service.title} className="service-image1" />
            <h3 className="service-title1">{service.title}</h3>
            <hr className="service-divider1" />
            <p className="service-description1">{service.description}</p>
         
            {/* Contact Section for Consulting */}
            {service.contact && (
              <div className="service-contact1">
                <p className="contact-label1">{service.contact.label}</p>
                <p className="contact-mobile1">
                  Mobile No: <span className="contact-highlight1">{service.contact.mobile}</span>
                </p>
              </div>
            )}

            {/* Button Section for Our Process */}
            {service.button && (
              <button className="service-button1">{service.button.text}</button>
            )}
          </div>
        ))}
      </div>
      <Contact/>
    </div>
  );
}
