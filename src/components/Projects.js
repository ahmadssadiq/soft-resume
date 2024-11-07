import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'Note Taking Application',
    description: 'Developed a React web app for note management with CRUD operations and local storage persistence.',
    image: '/path-to-note-app-image.jpg',
    link: 'https://github.com/ahmadssadiq/note-taking-app',
  },
  {
    title: 'Fraud Detection System',
    description: 'Implemented a fraud detection API using Python for transaction data storage and retrieval.',
    image: '/path-to-fraud-detection-image.jpg',
    link: 'https://github.com/ahmadssadiq/fraud-detection-system',
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Work</h2>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className="portfolio-item" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;