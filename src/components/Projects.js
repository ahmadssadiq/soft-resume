// src/components/Projects.js
import React from 'react';
import './Projects.css';
// Import the image for Note Taking Application as before
import NoteAppImage from '../images/NoteTakingApplication.png';
import BPD1 from '../images/BostonPoliceOvertime1.png';
import QZ from '../images/QuizIt.png';
import HW from '../images/healthandweather.png';

const projectData = [
  {
    title: 'QuizIt - Interactive Quiz Application',
    description: `Developed a Django-based web application enabling users to create, edit, and take quizzes dynamically. 
    Implemented user authentication for secure access, a real-time quiz-taking experience, and automatic scoring. 
    Built with Django, HTML, CSS, and JavaScript, the platform supports customizable quizzes with multiple-choice questions 
    and performance tracking.`,
    image: QZ, // assuming you moved this image to the public folder
    link: '#/projects/Quiz-It',  // internal link
  },
  {
    title: 'Boston Police Overtime Data Analysis',
    description: `Worked with American Civil Liberties Union (ACLU) and analyzed 8+ years of BPD overtime data using Python and pandas, uncovering a 260,000-hour annual discrepancy between worked and paid overtime hours.
    Visualized data with matplotlib/seaborn, showing a 75% overlap between overtime and misconduct.`,
    image: BPD1, // assuming you moved this image to the public folder
    link: '#/projects/Boston-Police-Overtime',  // internal link
  },
  {
    title: 'Note Taking Application',
    description: 'Developed a React-based checklist application that enables users to dynamically create, track, and manage their tasks. The app uses the useState hook for real-time state management, features an animated progress bar to reflect task completion, and provides an intuitive interface for adding and editing checklist descriptions.',
    image: NoteAppImage,
    link: '#/projects/Note-Taking-Application',
  },
  {
    title: 'Health And Weather Analyzer',
    description: 'Developed a React and Node.js-based application that integrates real-time weather data with health conditions to provide personalized health recommendations. Utilizes Axios for API requests, React hooks for state management, and Google authentication for secure user login. Features weather alerts, dynamic health condition lookup, and a responsive Tailwind CSS UI for seamless user experience.',
    image: HW,
    link: '#/projects/Health-And-Weather',
  }
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