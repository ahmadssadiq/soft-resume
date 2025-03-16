import React from 'react';
import Header from './Header'; // Common header
import './NoteTakingApplication.css'; // Reusing the same CSS for layout and styling
import './DeveloperTok.css'; // Import the custom CSS
import Footer from './Footer';

// Import placeholder images - replace with actual images when available
// You can use the same images temporarily for placeholder purposes
import DevTok1 from '../images/NoteTakingApplication1.png'; // Placeholder
import DevTok2 from '../images/NoteTakingApplication2.png'; // Placeholder
import DevTok3 from '../images/NoteTakingApplication3.png'; // Placeholder

function DeveloperTok() {
    return (
        <div className="project-page developer-tok-page">
            {/* Include the global header */}
            <Header />
            {/* Page content wrapper */}
            <div className="project-content-wrapper">
                {/* Simple title */}
                <h1 className="project-title">
                    DeveloperTok <span role="img" aria-label="video">📱</span>
                </h1>

                <section className="project-content">
                    <div className="project-description">
                        <h2>Overview</h2>
                        <p>
                            DeveloperTok is a <code className='code-block'>React</code> and <code className='code-block'>Node.js</code>-based 
                            social media platform designed specifically for developers to share short-form coding tips, tricks, and solutions. 
                            The platform enables users to upload short videos, share code snippets, and discover content through a 
                            personalized recommendation algorithm.
                        </p>
                        <h2>Key Features</h2>
                        <ul>
                            <li>Short-form video sharing focused on coding and development</li>
                            <li>Code snippet integration with syntax highlighting using <code className="code-block">Prism.js</code></li>
                            <li>User authentication and profile management</li>
                            <li>Content recommendation algorithm based on user interests</li>
                            <li>Responsive design for mobile and desktop using <code className="code-block">Tailwind CSS</code></li>
                        </ul>
                        <h2>In Depth</h2>
                        <p>
                            DeveloperTok leverages modern web technologies to create an engaging platform for developers to share knowledge. 
                            The frontend is built with <code className="code-block">React</code> and <code className="code-block">Redux</code> for state management, 
                            providing a smooth and responsive user experience. The backend uses <code className="code-block">Node.js</code> with 
                            <code className="code-block">Express</code> and <code className="code-block">MongoDB</code> for data storage.
                        </p>
                        <p>
                            The video processing pipeline utilizes <code className="code-block">FFmpeg</code> for compression and format conversion, 
                            ensuring optimal performance across devices. Code snippets are stored with metadata that allows for language-specific 
                            syntax highlighting and searchability.
                        </p>
                        <p>
                            The recommendation system analyzes user interactions and preferences to suggest relevant content, 
                            improving discovery and engagement within the platform.
                        </p>
                        <div className="project-links">
                            <a
                                href="https://github.com/ahmadssadiq/developer-tok"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>

                    <div className="project-images">
                        <img src={DevTok1} alt="Screenshot of DeveloperTok feed" />
                        <p>The main feed interface displays short-form videos with code snippets, allowing users to quickly browse through developer content.</p>
                        <img src={DevTok2} alt="Code snippet sharing interface" />
                        <p>Users can easily share code snippets with syntax highlighting for various programming languages, making it easy to demonstrate solutions.</p>
                        <img src={DevTok3} alt="Profile and analytics dashboard" />
                        <p>The analytics dashboard provides insights into content performance, helping creators understand what resonates with the developer community.</p>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default DeveloperTok; 