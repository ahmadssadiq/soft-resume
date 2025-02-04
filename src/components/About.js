import React from 'react';
import './About.css';

function About() {
    return (
        <section id="about" className="about">
            <div className="container about-content">
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>
                        I am a <code className="code-block">Software Engineer</code> specializing in multi-agent systems, machine learning, and AI-driven solutions, with hands-on experience in robotics and full-stack development. Currently pursuing a Bachelor of Arts in Computer Science at <code className="code-block">Boston University</code>, I focus on designing efficient algorithms, optimizing system performance, and building innovative applications. Through projects like a multi-agent pathfinding system and real-time fraud detection, I have gained expertise in creating responsive, data-driven applications that address complex challenges. My passion lies in using technology to advance automation, intelligence, and user-centered solutions across diverse fields.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;