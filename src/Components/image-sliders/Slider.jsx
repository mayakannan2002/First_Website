import React, { useState } from "react";
import "./Slider.css";
import image1 from "./../../Components/assets/Images/image_1.jpg";
import image2 from "./../../Components/assets/Images/image_2.jpg";
import image3 from "./../../Components/assets/Images/image_3.jpg";

const CustomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      bgImage: image1,
      title: "Empower Your Business with",
      highlight: "Innovative Solutions",
      subtitle: "Transforming ideas into digital realities with expertise.",
    },
    {
      bgImage: image2,
      title: "Software Development from",
      highlight: "Conception to Delivery",
      subtitle: "We create and build flexible & creative designs in your budget.",
    },
    {
      bgImage: image3,
      title: "Experience Excellence in",
      highlight: "Agile Development",
      subtitle: "Fostering growth through tailored software solutions.",
    },
  ];

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="custom-slider">
      <div className="slides-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide" style={{ backgroundImage: `url(${slide.bgImage})` }}>
            <div className="content">
              <p className="tagline">/ We Are Here /</p>
              <h1>
                {slide.title} <span>{slide.highlight}</span>
              </h1>
              <p className="subtitle">{slide.subtitle}</p>
              <button className="cta-button">Contact Us</button>
            </div>
          </div>
        ))}
      </div>

      <div className="dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
