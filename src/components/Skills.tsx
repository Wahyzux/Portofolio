import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skills = [
    "Network Architecture",
    "Cloud Computing",
    "Database Design (SQL/NoSQL)",
    "Cybersecurity Basics",
    "System Administration",
    "Python & Bash Scripting",
    "Containerization (Docker)"
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container skills-container">
        <h2 className="section-title centered-title">Technical Arsenal</h2>
        <div className="skills-cloud">
          {skills.map((skill, index) => (
            <div key={index} className="skill-pill">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
