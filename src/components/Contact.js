import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset the submitted message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out if you'd like to collaborate or just say hello!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:tayybafardos527@gmail.com">tayybafardos527@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+923478734903">+92 347 8734903</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Lahore, Pakistan</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="icon">🔗</span>
                <div>
                  <h4>Social Links</h4>
                  <div className="social-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send Me a Message</h3>

            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
