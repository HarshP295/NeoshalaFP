import React from 'react';
import './ContactForm.css';

const ContactForm = () => (
  <section className="contact" id="contact">
    <form className="contact-form">
      <h3>Send Us a Message</h3>
      <div className="row">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Contact No." />
      </div>
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message" rows={4}></textarea>
      <button type="submit">Send</button>
    </form>
  </section>
);

export default ContactForm;