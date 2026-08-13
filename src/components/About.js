import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a motivated Frontend Developer with hands-on experience building responsive,
              user-friendly web applications using modern technologies including HTML5, CSS3,
              JavaScript, and React.
            </p>

            <p>
              My journey in web development started with a passion for creating beautiful interfaces
              and has evolved into a deep expertise in building scalable, maintainable applications.
              I'm adept at translating UI/UX designs into clean, production-ready code.
            </p>

            <p>
              I love collaborating with designers and backend developers to deliver exceptional
              digital experiences. Currently seeking opportunities to contribute to dynamic development
              teams at forward-thinking companies.
            </p>

            <div className="about-info">
              <div className="info-item">
                <span className="label">Location:</span>
                <span className="value">Lahore, Pakistan</span>
              </div>
              <div className="info-item">
                <span className="label">Email:</span>
                <span className="value">tayybafardos527@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="label">Phone:</span>
                <span className="value">+92 347 8734903</span>
              </div>
              <div className="info-item">
                <span className="label">Education:</span>
                <span className="value">B.S. Physics (2026)</span>
              </div>
            </div>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">🎯</div>
              <h3>Problem Solving</h3>
              <p>Breaking down complex problems into elegant solutions</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">💻</div>
              <h3>Clean Code</h3>
              <p>Writing maintainable, well-documented code</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>Working effectively in agile team environments</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">🚀</div>
              <h3>Performance</h3>
              <p>Optimizing applications for speed and efficiency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
