import React from "react";
import "./cardsection.css"; // Importing CSS file

export default function CardSection() {
  const services = [
    {
      title: "IT Staffing",
      description:
        "Dedicated Full-time Staffing, Temporary IT Staffing, Field Service Technicians, On-Demand IT Staffing, Remote IT Staffing",
      icon: "📊",
    },
    {
      title: "IT Infrastructure Management",
      description:
        "LAN/WLAN Management, Systems Management, Cloud Services and Migration",
      icon: "📈",
    },
    {
      title: "Digital Workplace",
      description:
        "End User Computing, 24/7 Service Desk, VIP Support, Work From Home Support, Windows Roll/Out",
      icon: "💡",
      highlight: true,
    },
  ];

  return (
    <div className="card-section">
      {services.map((service, index) => (
        <div
          key={index}
          className={`card ${service.highlight ? "highlight" : ""}`}
        >
          <div className={`icon ${service.highlight ? "icon-highlight" : ""}`}>
            {service.icon}
          </div>
          <h3 className="card-title">{service.title}</h3>
          <p className="card-description">{service.description}</p>
        </div>
      ))}
    </div>
  );
}
