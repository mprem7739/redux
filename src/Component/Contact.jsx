import React from 'react';
import './Contact.css'; 

const Contact = () => {
  const contactDetails = {
    phone: "+91 9900123650",
    email: "prem21@gmail.com.com",
    address: "Rai university SH144, Saroda, Gujarat",
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
     
      <div className="contact-details">
        <h3>
        <p><strong>Phone:</strong> {contactDetails.phone}</p>
        <p><strong>Email:</strong> <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></p>
        <p><strong>Address:</strong> {contactDetails.address}</p>
        </h3>
      </div>
    </div>
  );
};

export default Contact;