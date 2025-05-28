import React, { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Header from './Header'; // Common header
import Footer from './Footer';
import './Experience.css';

// Reusable SpotlightBox that accepts a custom gradient color
function SpotlightBox({ children, color = 'rgba(249,115,22,0.3)' }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(e) {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    }

    const gradientBackground = useMotionTemplate`
    radial-gradient(650px circle at ${mouseX}px ${mouseY}px,
      ${color},
      transparent 80%
    )
  `;

    return (
        <div className="spotlight-container group" onMouseMove={handleMouseMove}>
            <motion.div
                className="spotlight-overlay pointer-events-none absolute -inset-px rounded transition duration-300 group-hover:opacity-100"
                style={{ background: gradientBackground }}
            />
            {children}
        </div>
    );
}

function Experience() {
    const experiences = [
        {
            company: 'ACTEX Learning',
            role: 'Quality Assurance Engineer',
            duration: 'May 2025 – Present',
            responsibilities: [
                'Ran cross-platform smoke & regression tests on macOS, iOS, and web builds of the Eureka! e-reader.',
                'Logged defects with repro steps, screenshots, and severity tags in Asana; collaborated with devs to triage issues.',
                'Drafted a “Getting Started” README and reusable test-case templates to onboard future testers.',
                'Expanded the suite with edge-case scenarios (offline mode, update-over-install, accessibility compliance).',
            ],
        },
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
            link: '#/experience/DuneAI'
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

    // Define an array of gradient colours for each experience box
    const colors = [
        'rgba(58,134,255,0.3)', // 3a86ff
        'rgba(214,40,40,0.3)',   // d62828
        'rgba(247,127,0,0.3)',    // f77f00
        'rgba(252,191,73,0.3)'    // fcbf49
    ];

    return (
        <section id="experience" className="experience-section">
            <h2>Experience</h2>
            <div className="experience-grid">
                {experiences.map((exp, index) => (
                    <SpotlightBox key={index} color={colors[index % colors.length]}>
                        <div className="experience-item">
                            <h3>{exp.company}</h3>
                            <p>
                                <strong>{exp.role}</strong> | {exp.duration}
                            </p>
                            <ul>
                                {exp.responsibilities.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            {exp.link && (
                                <a href={exp.link} className="btn">
                                    Learn More
                                </a>
                            )}
                        </div>
                    </SpotlightBox>
                ))}
            </div>
        </section>
    );
}

export default Experience;