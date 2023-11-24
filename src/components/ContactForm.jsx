import React from 'react';
import "../assets/styles/contact.css"

const ContactForm = () => {
  const handleSubmit = () => {
    // Use the `mailto` scheme to open the user's default email client
    window.location.href = 'mailto:pattersonal10@gmail.com';
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" required />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
