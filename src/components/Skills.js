import React from 'react';
import './Skills.css';

const skills = [
    ' ', // intentional empty string for spacing (will be styled)
    'C/C++',
    'Python',
    'Java',
    'JavaScript',
    ' ', // intentional empty string
    'React',
    'Node.js',
    'Django',
    'LangChain',
    ' ', // intentional empty string
    'MySQL',
    'Database Management',
    ' ', // intentional empty string
    'Pandas',
    'Matplotlib',
    'SKlearn',
    ' ', // intentional empty string
    'Algorithm Development',
    'Data Structures',
    'Distributed Systems',
    'Unit Testing',
    'Problem Solving',
    ' ', // intentional empty string
    'LLMs',
    'AI Full Stack Development',
    'Research Paper Implementation',
    ' '  // intentional empty string
];

function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2>Technical Expertise & Skills</h2>
                <ul className="skills-list">
                    {skills.map((skill, index) => (
                        <li
                            key={index}
                            className="skill-item"
                            style={skill.trim() === '' ? { backgroundColor: 'orangered' } : {}}
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Skills;