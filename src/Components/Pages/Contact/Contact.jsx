import React, { useState } from "react";
import "./Contact.css";
import contact from "./../../assets/Images/contacts.jpg"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [currentError, setCurrentError] = useState(""); 
  const [showModal, setShowModal] = useState(false);

  const validateForm = () => {
    if (!formData.name) return "Name is required";
    if (!formData.phone) return "Phone number is required";
    if (!formData.email) return "Email is required";
    if (!formData.message) return "Message is required";
    return null; 
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
    if (currentError.includes(e.target.name)) {
      const nextError = validateForm();
      setCurrentError(nextError || "");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();

    if (error) {
      setCurrentError(error);
    } else {
      localStorage.setItem("contactFormData", JSON.stringify(formData));
      setShowModal(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
      setCurrentError(""); 
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="contact-wrapper1">
    
      <div className="contact-box">
        
        <h2>Contact <span>Us</span></h2>
        <p>Reach out to Virtue Builders for expert construction and innovative designs.</p>
        <div className="contact-info-section">
          <div className="info-box">
          
            <h3>Contact Information</h3>
            <p><strong>Phone:</strong> +12457836913, +12457836913</p>
            <p><strong>Email:</strong> buildervirtue@info.com</p>
            <p><strong>Address:</strong> 6743 Last Street, Under Bypass Road, Karnataka, Bengaluru</p>
          </div>
          <div className="form-box">
            <form onSubmit={handleSubmit}>
              <div className="row-group">
                <div className="input-wrapper">
                  <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                  {currentError === "Name is required" && <span className="error-text">{currentError}</span>}
                </div>
                <div className="input-wrapper">
                  <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                  {currentError === "Phone number is required" && <span className="error-text">{currentError}</span>}
                </div>
              </div>
              <div className="input-wrapper">
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                {currentError === "Email is required" && <span className="error-text">{currentError}</span>}
              </div>
              <div className="input-wrapper">
                <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
                {currentError === "Message is required" && <span className="error-text">{currentError}</span>}
              </div>
              <button type="submit" className="submit-btn">Contact Us</button>
            </form>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Form Submitted</h2>
            <p>Your details have been successfully submitted.</p>
            <button onClick={handleCloseModal} className="close-btn">Close</button>
          </div>
        </div>
      )}
      <div className="map-container">
        <h3>Our Location</h3>
        <iframe
  title="Google Map"
  src="https://www.google.com/maps?q=Electronic+City+Toll+Plaza,+Bangalore,+Karnataka&output=embed"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
></iframe>


      </div>
    </div>
  );
};

export default ContactForm;
