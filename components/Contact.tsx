import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [btnText, setBtnText] = useState('Send Message');
  
  const triggerMailto = (mailtoUrl: string) => {
    // Method 1: Try creating and clicking a temporary anchor (most reliable for desktop/mobile)
    const link = document.createElement('a');
    link.href = mailtoUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const nameInput = form.querySelector('#contact-name') as HTMLInputElement;
    const emailInput = form.querySelector('#contact-email-input') as HTMLInputElement;
    const messageInput = form.querySelector('#contact-message') as HTMLTextAreaElement;

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    // Construct mailto URL with encoded parameters
    const mailtoUrl = `mailto:bishnukhojwar18@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setBtnText('Opening Email...');
    
    // Trigger the mailto link using the reliable method
    triggerMailto(mailtoUrl);

    // Reset form UI after a brief delay
    setTimeout(() => {
      setBtnText('Send Message');
      form.reset();
    }, 1500);
  };

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    triggerMailto('mailto:bishnukhojwar18@gmail.com');
  };

  return (
    <section id="contact">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Contact Me</p>
        </div>
        <div className="contact-container">
          {/* Contact Info Side */}
          <div className="contact-info-side">
            <div className="contact-intro-text">
              <p>I am currently available for freelance work or full-time opportunities. If you have a project that needs a DevOps touch or just want to say hi, feel free to reach out!</p>
            </div>
            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  📧
                </div>
                <div className="contact-info-text">
                  <h4>Email</h4>
                  <a id="contact-email" href="mailto:bishnukhojwar18@gmail.com" onClick={handleEmailClick}>bishnukhojwar18@gmail.com</a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <img alt="LinkedIn Icon" src="linkedin.png" height="20" width="20" />
                </div>
                <div className="contact-info-text">
                  <h4>LinkedIn</h4>
                  <a id="contact-linkedin" href="https://www.linkedin.com/in/bishnu-khojwar" target="_blank" rel="noopener noreferrer">bishnu-khojwar</a>
                </div>
              </div>
            </div>
            <div className="contact-social-links">
              <a href="https://www.linkedin.com/in/bishnu-khojwar" target="_blank" rel="noopener noreferrer" className="contact-social-link">
              <img alt="LinkedIn Icon" src="linkedin.png" height="20" width="20" />
              </a>
              <a href="mailto:bishnukhojwar18@gmail.com" onClick={handleEmailClick} className="contact-social-link">📧</a>
              <a href="#about" className="contact-social-link">👤</a>
            </div>
          </div>
          
          {/* Contact Form Side */}
          <div className="contact-form-side">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input type="text" id="contact-name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email-input">Email</label>
                <input type="email" id="contact-email-input" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" placeholder="Hello, I'd like to talk about..." required></textarea>
              </div>
              <button type="submit" className="form-submit-btn">{btnText}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};