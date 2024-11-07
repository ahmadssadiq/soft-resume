import React from 'react';
import './Experience.css';

function Experience() {
    const experiences = [
        {
            company: 'DuneAI',
            role: 'Robotics Software Engineer',
            duration: 'Jun 2024 - Aug 2024',
            responsibilities: [
                'Designed and implemented multi-agent pathfinding algorithms leveraging C++ and OpenGL.',
                'Optimized robot sorting operations on a simulated grid.',
                'Constructed a Python barcode scanner to automate task assignment.',
                'Developed unit tests with Google Test for code reliability.',
            ],
        },
        {
            company: 'AheadCare',
            role: 'Startup Technical Engineer',
            duration: 'Jun 2023 - Mar 2024',
            responsibilities: [
                'Developed an ML Predictive FAQ system using LangChain.',
                'Streamlined customer database updates with adaptive learning algorithms.',
                'Improved real-time response accuracy by 30%.',
                'Collaborated with investors to secure $25,000 in funding.',
            ],
        },
        {
            company: 'Starlink',
            role: 'Full Stack Developer',
            duration: 'Jun 2022 - Aug 2022',
            responsibilities: [
                'Executed a responsive e-commerce platform using React and Python/Django.',
                'Increased user engagement and sales by 20%.',
                'Optimized database queries and achieved real-time data synchronization.',
                'Reduced load times by 30%.',
            ],
        },
    ];

    return (
        <section id="experience" className="experience-section">
            <h2>Experience</h2>
            <div className="experience-grid">
                {experiences.map((exp, index) => (
                    <div className="experience-item" key={index}>
                        <h3>{exp.company}</h3>
                        <p><strong>{exp.role}</strong> | {exp.duration}</p>
                        <ul>
                            {exp.responsibilities.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;