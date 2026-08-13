import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Tayyba Fardos</h1>
          <p className="hero-subtitle">Frontend Developer & React Specialist</p>
          <p className="hero-description">
            I build beautiful, responsive web applications using modern technologies.
            Passionate about creating seamless user experiences and clean code.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
            <a href="mailto:tayybafardos527@gmail.com" className="social-link">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
