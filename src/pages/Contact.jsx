import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaExternalLinkAlt } from "react-icons/fa";
import './ContactPage.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      to_name: 'Divyanshi Pal', 
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID, 
        emailData,
        process.env.REACT_APP_USER_ID 
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Failed to send message:', error);
          setError(true);
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="sidebar">
        <h3>contacts</h3>
        <span> Divyanshipal2808@gmail.com</span>
        <h3>find-me-also-in</h3>
        <ul>
          <li className="social-links">
            <FaExternalLinkAlt />
            <a href="https://www.linkedin.com/in/divyanshi-pal/">Linkedin account</a>
          </li>
          <li className="social-links">
            <FaExternalLinkAlt />
            <a href="https://github.com/Divyanshi2408">Github account</a>
          </li>
          <li className="social-links">
            <FaExternalLinkAlt />
            <a href="https://www.instagram.com/divyanshipal2808/">Instagram account</a>
          </li>
        </ul>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">_name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />

          <label htmlFor="email">_email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
          />

          <label htmlFor="message">_message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit">submit-message</button>
        </form>

        {success && (
          <p className="success">
            <span>Thank you! 🤘</span> <br />
            Your message has been accepted. You will receive an answer really soon!
          </p>
        )}
        {error && <p className="error">Failed to send message. Please try again.</p>}
      </div>
    </div>
  );
};

export default Contact;
