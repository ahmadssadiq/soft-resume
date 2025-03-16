import React from 'react';
import Header from './Header'; // Common header
import './NoteTakingApplication.css'; // Reusing the same CSS for layout and styling
import './DeveloperTok.css'; // Import the custom CSS
import Footer from './Footer';

// Import placeholder images - replace with actual images when available
// You can use the same images temporarily for placeholder purposes
// import DevTok1 from '../images/NoteTakingApplication1.png'; // Placeholder
// import DevTok2 from '../images/NoteTakingApplication2.png'; // Placeholder
// import DevTok3 from '../images/NoteTakingApplication3.png'; // Placeholder

function DeveloperTok() {
    return (
        <div className="project-page developer-tok-page">
            {/* Include the global header */}
            <Header />
            {/* Page content wrapper */}
            <div className="container project-content-wrapper">
                <h1 className="project-title">DeveloperTok</h1>

                <div className="project-description">
                    <p>
                        DeveloperTok is a cutting-edge microlearning platform designed to revolutionize
                        the way coding is taught and learned. Inspired by the engaging, scrollable user
                        experience of TikTok, DeveloperTok delivers bite-sized, one-minute coding lessons
                        across various topics—such as algorithms, basic Python, and web development—in a
                        fun, interactive, and highly accessible format.
                    </p>

                    <h2>Project Overview</h2>
                    <p>
                        In today's fast-paced world, learning to code can often seem overwhelming.
                        DeveloperTok addresses this challenge by breaking down complex concepts into
                        short, digestible lessons that fit into your busy schedule. Each micro-lesson
                        is followed by an interactive coding challenge, allowing you to immediately
                        apply what you've learned.
                    </p>

                    <h2>Key Features</h2>
                    <ul>
                        <li>
                            <strong>Engaging, TikTok-Inspired Interface:</strong> Enjoy an endless
                            vertical feed of micro-lessons that auto-play as you scroll, ensuring a
                            smooth and immersive learning experience.
                        </li>
                        <li>
                            <strong>Diverse Content Categories:</strong> Explore lessons in multiple
                            coding areas, including Algorithms, Basic Python, and Basic Web Development.
                        </li>
                        <li>
                            <strong>Interactive Coding Challenges:</strong> After each lesson, test your
                            understanding with quick coding exercises and receive immediate feedback.
                        </li>
                        <li>
                            <strong>User Profiles & Progress Tracking:</strong> Sign up, create a profile,
                            and track your learning journey through progress dashboards, achievements, and history.
                        </li>
                        <li>
                            <strong>Modern Tech Stack:</strong> Built using React for the front end and
                            Node.js for the back end, with MongoDB for efficient data management.
                        </li>
                    </ul>

                    <h2>Why DeveloperTok?</h2>
                    <ul>
                        <li>
                            <strong>Bite-Sized Learning:</strong> Perfect for beginners and busy
                            professionals alike—learn in small chunks that fit into your day.
                        </li>
                        <li>
                            <strong>Interactive & Engaging:</strong> The platform's innovative design
                            keeps you engaged and motivated to continue learning.
                        </li>
                        <li>
                            <strong>Immediate Application:</strong> Reinforce your knowledge immediately
                            through practical challenges and coding exercises.
                        </li>
                        <li>
                            <strong>Community & Gamification:</strong> Track your progress, earn badges,
                            and share your achievements with a vibrant community of fellow learners.
                        </li>
                    </ul>

                    <h2>Technical Implementation</h2>
                    <p>
                        The frontend is built with <span className="code-block">React</span>, utilizing
                        modern hooks and context API for state management. The backend uses
                        <span className="code-block">Node.js</span> with <span className="code-block">Express</span>,
                        and data is stored in <span className="code-block">MongoDB</span>.
                    </p>
                    <p>
                        Video processing is handled with <span className="code-block">FFmpeg</span> for
                        compression and format conversion. Code snippets are stored with metadata for
                        language-specific syntax highlighting and searchability.
                    </p>

                    <h2>Project Status</h2>
                    <p>
                        DeveloperTok is currently in active development. The core functionality for
                        video playback and lesson navigation is complete, and I'm now working on the
                        interactive coding challenges and user profile features.
                    </p>
                </div>

                {/* Comment out the images section until we have actual screenshots */}
                {/* <div className="project-images">
                    <img src={DevTok1} alt="DeveloperTok interface showing video feed" />
                    <img src={DevTok2} alt="DeveloperTok code challenge interface" />
                    <img src={DevTok3} alt="DeveloperTok user profile dashboard" />
                </div> */}

                <div className="project-links">
                    <a href="https://github.com/ahmadssadiq/DeveloperTok" className="btn" target="_blank" rel="noopener noreferrer">
                        View on GitHub
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DeveloperTok; 