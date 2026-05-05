import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education Journey</h2>
        <div className="education-grid">
          <div className="card education-card">
            <div className="education-header">
              <div className="education-info">
                <span className="education-year text-purple">2023 — Present</span>
                <h3 className="education-degree">SISTEM INFORMASI JARINGAN</h3>
                <p className="education-school">SMK NEGERI 2 YOGYAKARTA</p>
              </div>
              <img src="/smk.png" alt="SMK Negeri 2 Yogyakarta" className="education-logo" />
            </div>
            <p className="education-desc text-muted">
              Focusing on enterprise architecture, network engineering, and complex database systems.
              Leading research on scalable distributed networks.
            </p>
          </div>
          
          <div className="card education-card">
            <span className="education-year text-purple">2017 — 2020</span>
            <h3 className="education-degree">High School - Science & IT</h3>
            <p className="education-school">Stellar Academy</p>
            <p className="education-desc text-muted">
              Built foundational knowledge in computer science, basic networking principles,
              and fundamental programming concepts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
