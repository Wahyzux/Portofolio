import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content card">
          <div className="about-image-wrapper">
            <div className="about-image-placeholder"></div>
          </div>
          <div className="about-text">
            <h3 className="text-purple">Navigating the Digital Cosmos</h3>
            <p>
              I am an Information Systems student with a deep fascination for the underlying
              architecture of the digital world. My journey involves mapping out robust
              networks, designing efficient databases, and building applications that function
              flawlessly within complex ecosystems.
            </p>
            <p>
              Like a spacecraft relying on precise telemetry, I believe in data-driven decisions and
              structural integrity. I specialize in bridging the gap between hardware infrastructure and
              software solutions, ensuring smooth data flow across vast digital distances.
            </p>
            <div className="about-badges">
              <span className="badge">Systems Architecture</span>
              <span className="badge">Network Protocols</span>
              <span className="badge">Database Management</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
