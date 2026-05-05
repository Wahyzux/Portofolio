import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">SYSTEMS & NETWORKS ARCHITECT</p>
          <h1 className="hero-title">
            Bagas Wahyu <br />
            <span className="text-purple">Purwanto</span>
          </h1>
          <p className="hero-description">
            Engineering robust information systems and orchestrating complex networks. Transforming raw data into seamless, scalable digital ecosystems.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">Explore Projects ↗</a>
            <a href="#contact" className="btn btn-outline">Initiate Contact</a>
          </div>
        </div>
        <div className="hero-graphic">
          <div className="nebula-circle">
          <img src="/oranggantenk.jpg" alt="" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
