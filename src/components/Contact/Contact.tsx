import React from 'react';
import './Contact.css';
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll.ts';

import facebookIcon from '../../assets/fb.png';
import emailIcon from '../../assets/email.png';
import telegramIcon from '../../assets/tg.png';

const Contact: React.FC = () => {
  const { ref: contactRef, isVisible: contactVisible } = useAnimateOnScroll(0.1, false);

  return (
    <section 
      id="contact" 
      className={`contact-section ${contactVisible ? 'is-visible' : ''}`}
      ref={contactRef}
    >
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-subtitle">Get a question? Send a message.</p>
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={6} required></textarea>
          </div>
          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </div>

      <div className="contact-social-icons">
        <a href="https://web.facebook.com/profile.php?id=61578412056633" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="mailto:grimreape381@gmail.com">
          <img src={emailIcon} alt="Email" />
        </a>
        <a href="https://t.me/reaprg" target="_blank" rel="noopener noreferrer">
          <img src={telegramIcon} alt="Telegram" />
        </a>
      </div>
    </section>
  );
};

export default Contact;