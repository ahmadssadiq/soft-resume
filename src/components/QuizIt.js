// src/components/QuizIt.js
import React, { useState } from 'react';
import Header from './Header'; // Common header
import './NoteTakingApplication.css'; // Styling for QuizIt project
import Footer from './Footer';

// Import images
import QZ1 from '../images/QuizItSignUp.png';
import QZ2 from '../images/QuizItResult.png';
import QZ3 from '../images/QuizItCreate.png';

function QuizIt() {
    // State to hold the currently selected image for modal display
    const [modalImage, setModalImage] = useState(null);

    return (
        <div className="project-page">
            {/* Global header */}
            <Header />

            {/* Page content wrapper */}
            <div className="project-content-wrapper">
                {/* Page title */}
                <h1 className="project-title">
                    QuizIt - Interactive Quiz Platform <span role="img" aria-label="quiz">🧠</span>
                </h1>

                <section className="project-content">
                    <div className="project-description">
                        <h2>Overview</h2>
                        <p>
                            QuizIt is a dynamic quiz creation and participation platform that allows users to create, edit, and take quizzes on various topics.
                            This web application enables seamless user authentication, real-time quiz interactions, and score tracking.
                            The goal is to provide an engaging learning experience, whether for casual users or educators who want to create structured quizzes.
                        </p>
                        <h2>Key Features</h2>
                        <ul>
                            <li>User authentication system allowing sign-up and login.</li>
                            <li>Ability to create custom quizzes with multiple-choice questions.</li>
                            <li>Dynamic quiz-taking experience with real-time answer validation.</li>
                            <li>Scoring and performance tracking for completed quizzes.</li>
                            <li>Quiz management features including editing and deleting quizzes.</li>
                            <li>Filter quizzes by difficulty and category.</li>
                        </ul>
                        <h2>In Depth</h2>
                        <p>
                            Users can build quizzes by defining questions and multiple answer choices. The app provides an intuitive form interface
                            to dynamically add new questions and answers. Users can take quizzes interactively, selecting answers and receiving feedback.
                            Scores are recorded, and users can review their past performance. The backend is built with <code className='code-block'>Django</code> and <code className='code-block'>Python</code> handling user authentication,
                            database management, and quiz logic, while the frontend uses <code className='code-block'>HTML</code>, <code className='code-block'>CSS</code>, and <code className='code-block'>JavaScript</code> for a responsive experience.
                        </p>

                        {/* New Video Section */}
                        <div className="project-video">
                            <h2>Project Demo</h2>
                            <div className="video-container">
                                <iframe
                                    src="https://www.youtube.com/embed/z-QY1SXypGw"
                                    title="QuizIt Demo Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="project-links">
                            <a
                                href="https://github.com/ahmadssadiq/cs412-restaurant/tree/main/quiz_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                            >
                                View on GitHub
                            </a>
                        </div>

                    </div>


                    <div className="project-images">
                        <img
                            src={QZ1}
                            alt="QuizIt Sign-Up Page"
                            onClick={() => setModalImage(QZ1)}
                            style={{ cursor: 'pointer' }}
                        />
                        <p>The <strong>sign-up page</strong> allows new users to create an account, providing authentication features that enable secure quiz participation.</p>

                        <img
                            src={QZ2}
                            alt="QuizIt Quiz Results Page"
                            onClick={() => setModalImage(QZ2)}
                            style={{ cursor: 'pointer' }}
                        />
                        <p>The <strong>results page</strong> provides users with instant feedback on their quiz performance, displaying scores and correct answers.</p>

                        <img
                            src={QZ3}
                            alt="QuizIt Quiz Creation Page"
                            onClick={() => setModalImage(QZ3)}
                            style={{ cursor: 'pointer' }}
                        />
                        <p>The <strong>quiz creation page</strong> enables users to design custom quizzes by adding questions, defining answers, and selecting correct options dynamically.</p>
                    </div>
                </section>
            </div>

            {/* Modal for enlarged image view */}
            {modalImage && (
                <div className="modal" onClick={() => setModalImage(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={modalImage} alt="Enlarged view" />
                        <button onClick={() => setModalImage(null)}>Close</button>
                    </div>
                </div>
            )}
            {/* Global footer */}
            <Footer />
        </div>
    );
}

export default QuizIt;