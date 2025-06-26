// src/components/About.js
import React from 'react';
import './About.css';

// import PS1 from '../images/wedding.jpeg';
// import PS2 from '../images/family.jpeg';
// import PS3 from '../images/wimbeldon.jpeg';
// import PS4 from '../images/suited.jpeg';

function About() {
    return (
        <section id="about" className="about">
            <div className="container about-content">
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>
                        Hi, I’m Ahmad Sadiq – a passionate Software Engineer with a flair for turning complex challenges into innovative, user-centered solutions. I was born and raised in Qatar 🇶🇦, where the vibrant culture and fast-paced environment taught me early on the value of creativity and resilience. My journey led me to <code className='code-block'>Boston University</code>, where I graduated with a Bachelor of Arts in Computer Science. At BU, I channel my technical skills into cutting-edge projects—whether it’s designing multi-agent systems or crafting AI-driven applications—that drive innovation and solve real-world problems.
                    </p>
                    <p>
                        When I’m not immersed in code, debugging, or architecting efficient algorithms, you’ll find me on the sports field. I’m an avid football player ⚽️, enjoy a good match of tennis 🎾, and have recently taken up padel 🏓. These activities not only keep me active but also fuel my creativity and collaborative spirit, qualities that I bring into every project.
                    </p>
                    <p>
                        I believe that technology should not only be about efficiency and performance but also about enhancing our daily lives with fun and engaging experiences. Welcome to my portfolio – where innovation meets passion, and every line of code tells a story.
                    </p>
                </div>
                {/*                 
                <div className="project-images">
                    <img src={PS1} alt="Wedding" />
                    <img src={PS2} alt="Family" />
                    <img src={PS3} alt="Wimbledon" />
                    <img src={PS4} alt="Suited" />
                </div> */}
            </div>
        </section>
    );
}

export default About;