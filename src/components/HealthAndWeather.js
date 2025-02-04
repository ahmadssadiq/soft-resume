import React from 'react';
import Header from './Header'; // Common header
import './NoteTakingApplication'; // Styling for Health and Weather Analyzer

// Import images
import HW1 from '../images/hw1.png';
import HW2 from '../images/hw2.png';
import HWvideo from '../images/final_submission_411.mp4';

function HealthAndWeather() {
    return (
        <div className="project-page">
            {/* Include the global header */}
            <Header />
            {/* Page content wrapper */}
            <div className="project-content-wrapper">
                {/* Simple title */}
                <h1 className="project-title">
                    Health and Weather Analyzer <span role="img" aria-label="weather">🌦️</span>
                </h1>

                <section className="project-content">
                    <div className="project-description">

                        <h2>Overview</h2>
                        <p>
                            The Health and Weather Analyzer is a React and Node.js-based application designed to correlate real-time weather data with health conditions.
                            By integrating live weather APIs such as OpenWeatherMap and public health data sources, the application provides users with personalized health recommendations.
                            It is particularly useful for individuals with conditions like asthma, cardiovascular diseases, and allergies, offering real-time alerts and precautions based on environmental factors.
                        </p>

                        <h2>Key Features</h2>
                        <ul>
                            <li>Real-time Weather Analysis: Retrieves and displays live weather data, including temperature, humidity, and conditions.</li>
                            <li>Personalized Health Recommendations: Generates tailored advice based on the user's health profile and weather conditions.</li>
                            <li>Third-Party Authentication: Enables secure login using Google authentication to personalize user preferences.</li>
                            <li>Health Condition Lookup: Allows users to search for health conditions via public APIs and receive relevant insights.</li>
                            <li>Weather Alerts System: Fetches official alerts for hazardous weather conditions that may impact health.</li>
                            <li>Responsive UI: Developed with React and Tailwind CSS for a seamless experience across devices.</li>
                        </ul>

                        <h2>In Depth</h2>
                        <p>
                            The Health and Weather Analyzer leverages <code className='code-block'>React</code> for a dynamic and interactive user interface, using hooks such as useState and useEffect to manage real-time updates.
                            The frontend integrates React Router for smooth navigation between components, while the styling is handled using <code className='code-block'>Tailwind CSS</code> for a clean and responsive design.
                        </p>
                        <p>
                            On the backend, the application is powered by <code className='code-block'>Node.js</code>, efficiently handling API requests and user authentication.
                            It employs <code className='code-block'>Axios</code> for fetching real-time weather data from OpenWeatherMap and retrieving health-related insights from public APIs.
                            Additionally, <code className='code-block'>Google Authentication</code> ensures a secure and personalized experience by allowing users to save and access their health preferences.
                        </p>
                        <p>
                            By correlating health data with weather patterns, the system provides users with proactive recommendations, ensuring they can make informed decisions based on environmental conditions.
                        </p>



                        <div className="project-links">
                            <a
                                href="https://github.com/ahmadssadiq/Health-And-Weather-Analysis"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                            >
                                View on GitHub
                            </a>
                        </div>
                        <div className="project-video1">
                            <h2>Project Demo</h2>
                            <div className="video-container1">
                                <video controls>
                                    <source src={HWvideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>

                    <div className="project-images">
                        <img
                            src={HW1}
                            alt="Health and Weather Analyzer Dashboard"
                            style={{ cursor: 'pointer' }}
                        />
                        <p>The dashboard view displays real-time weather data, including temperature, humidity, and weather conditions essential for generating personalized health recommendations.</p>
                    </div>

                    <div className="project-images">
                        <img
                            src={HW2}
                            alt="Health and Weather Analyzer Dashboard"
                            style={{ cursor: 'pointer' }}
                        />
                        <p>This is the signup page where google authentication is an option to sign in using firebase.</p>
                    </div>

                </section>
            </div >
        </div >
    );
}

export default HealthAndWeather;