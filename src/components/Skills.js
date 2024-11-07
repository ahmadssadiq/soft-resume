import React from 'react';
import './Skills.css';

const skills = [
    'C/C++',
    'Python',
    'Java',
    'React',
    'Node.js',
    'MySQL',
    'Redux',
    'Ruby',
    'Algorithm Development',
    'Data Structures',
    'Distributed Systems',
    'Software Testing',
    // Add more skills as needed
];

function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2>Skills</h2>
                <ul className="skills-list">
                    {skills.map((skill, index) => (
                        <li key={index} className="skill-item">
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Skills;