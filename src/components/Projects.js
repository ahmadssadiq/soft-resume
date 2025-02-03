// src/components/Projects.js
import React from 'react';
import './Projects.css';
// Import the image for Note Taking Application as before
import NoteAppImage from '../images/NoteTakingApplication.png';

const projectData = [
  {
    title: 'Note Taking Application',
    description: 'Developed a React web app for note management with CRUD operations and local storage persistence.',
    image: NoteAppImage,
    link: '#/projects/Note-Taking-Application',  // internal link
  },
  {
    title: 'Boston Police Overtime Data Analysis',
    description: `Worked with American Civil Liberties Union (ACLU) and analyzed 8+ years of BPD overtime data using Python and pandas, uncovering a 260,000-hour annual discrepancy between worked and paid overtime hours.
    Visualized data with matplotlib/seaborn, showing a 75% overlap between overtime and misconduct.`,
    image: '/images/BostonPoliceOvertime.png', // assuming you moved this image to the public folder
    link: '#/projects/Boston-Police-Overtime',  // internal link
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
                <a href={project.link} className="btn">
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