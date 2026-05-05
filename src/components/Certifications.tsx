import React from 'react';
import './Certifications.css';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco Systems • Issued 2022",
      icon: "award"
    },
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services • Issued 2024",
      icon: "award"
    },
    {
      title: "CompTIA Security+",
      issuer: "CompTIA • Issued 2023",
      icon: "award"
    },
    {
      title: "Oracle Database SQL Certified Associate",
      issuer: "Oracle • Issued 2023",
      icon: "award"
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Professional Certifications</h2>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="card cert-card">
              <div className="cert-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              </div>
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer text-muted">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
