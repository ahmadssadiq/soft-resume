import React, { useState } from 'react';
import Header from './Header'; // Common header
import Footer from './Footer';
import './NoteTakingApplication.css'; // Reusing the same CSS for layout and styling

// Import video file for DuneAI
import DuneAIImage from '../images/duneai_robot.png';
import DuneAiVideo from '../images/MAPF.mp4';

function DuneAI() {
    const [modalImage, setModalImage] = useState(null);

    return (
        <div className="project-page">
            <Header />

            <div className="project-content-wrapper">
                <h1 className="project-title">
                    DuneAI - Robotics Software Engineer <span role="img" aria-label="robot">🤖</span>
                </h1>
                <section className="project-content">
                    <div className="project-description">
                        <h2>Overview</h2>
                        <p>
                            During my internship at DuneAI—a fast-paced startup—I played a key role in developing and implementing multi-agent pathfinding algorithms. The project involved creating sophisticated task allocation and conflict-based search algorithms to optimize robot operations on a simulated grid.
                        </p>
                        <p>
                            The vision for the product was to integrate multiple agents on a grid where they are assigned to collect packages after being scanned by a barcode. Once scanned, the robots queue to pick up the incoming package and then proceed to their designated drop-off point on the grid. Depending on the grid size, our algorithm efficiently managed operations for up to 100 robots, with a minimum of 20 robots active in the environment.
                        </p>
                        <h2>Key Contributions</h2>
                        <ul>
                            <li>Designed and implemented multi-agent pathfinding algorithms using C++ and OpenGL.</li>
                            <li>Developed sophisticated task allocation and conflict-based search methods to prevent robot collisions and optimize delivery routes.</li>
                            <li>Integrated a Python-based barcode scanner that automated task assignments, streamlining the overall workflow.</li>
                            <li>Enabled robots to autonomously detect low charging levels and navigate to charging stations, and wait in queue when no task was assigned.</li>
                        </ul>
                        <h2>Impact</h2>
                        <p>
                            Working in a startup environment, I embraced multiple roles and took initiative in leadership and technical problem solving. This project challenged me technically and honed my collaborative skills, marking it as one of the most rewarding experiences of my career.
                        </p>
                    </div>

                    <div className="project-images">
                        {/* Replace the image with a video element */}
                        <video
                            src={DuneAiVideo}
                            controls
                            style={{ cursor: 'pointer', width: '100%' }}
                        >
                            Your browser does not support the video tag.
                        </video>
                        <p>
                            The video illustrates the simulation environment, which we made, where multi-agent pathfinding algorithms were implemented. Robots were designed to efficiently collect and deliver packages, avoiding collisions and optimizing routes.
                        </p>
                        {/*
                        Uncomment if you have a second image
                        <img
                            src={DuneAIImage2}
                            alt="Alternate view of DuneAI project"
                            onClick={() => setModalImage(DuneAIImage2)}
                            style={{ cursor: 'pointer' }}
                        />
                        <p>Additional details on the algorithm visualization.</p>
                        */}
                    </div>
                </section>
            </div>

            {modalImage && (
                <div className="modal" onClick={() => setModalImage(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={modalImage} alt="Enlarged view" />
                        <button onClick={() => setModalImage(null)}>Close</button>
                    </div>
                </div>
            )}

            <div className="project-image-container">
                <img
                    src={DuneAIImage}
                    alt="DuneAI project visualization"
                    onClick={() => setModalImage(DuneAIImage)}
                    style={{ cursor: 'pointer' }}
                />
            </div>

            <Footer />
        </div>
    );
}

export default DuneAI;