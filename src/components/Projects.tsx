import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Nebula Mesh Network",
      description: "A resilient, self-healing mesh network topology designed for high-latency environments. Implements advanced routing protocols.",
      tags: ["Networking", "Python"],
      link: "#",
      icon: "router"
    },
    {
      title: "Quasar Data Pipeline",
      description: "Distributed data processing pipeline handling terabytes of telemetry data. Utilizes Apache Kafka and clustered database nodes.",
      tags: ["Big Data", "SQL"],
      link: "#",
      icon: "database"
    },
    {
      title: "Aegis Security Protocol",
      description: "Automated intrusion detection system utilizing machine learning to identify anomalous network traffic patterns.",
      tags: ["Security", "ML"],
      link: "#",
      icon: "shield"
    }
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'router':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><path d="M6 18h.01"></path><path d="M10 18h.01"></path><path d="M15 18h.01"></path><path d="M12 14v-4"></path><path d="M8 6.5a6 6 0 0 1 8 0"></path><path d="M5.5 3a10 10 0 0 1 13 0"></path></svg>
        );
      case 'database':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
        );
      case 'shield':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Stellar Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="card project-card">
              <div className="project-icon-wrapper">
                {getIcon(project.icon)}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc text-muted">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Repository ↗</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
