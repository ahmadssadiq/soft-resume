// src/components/BostonPoliceOvertime.js
import React, { useState } from 'react';
import Header from './Header'; // Common header
import './NoteTakingApplication.css'; // Reusing the same CSS for layout and styling
import Footer from './Footer';


// Import images (adjust these imports as needed)
import BPD1 from '../images/BostonPoliceOvertime1.png';
import BPD2 from '../images/BostonPoliceOvertime2.png';
// Optionally import a third image if available
// import BPD3 from '../images/BostonPoliceOvertime3.png';

// Import the PDF file
import FinalReport from '../images/Police Overtime F - Final Report-2.pdf';

function BostonPoliceOvertime() {
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
                    Boston Police Overtime Data Analysis <span role="img" aria-label="analysis">📊</span>
                </h1>

                <section className="project-content">
                    <div className="project-description">
                        <h2>Overview</h2>
                        <p>
                            This project analyzes the Boston Police Department's budget and overtime usage over the past decade to identify inefficiencies and trends.
                            By conducting this analysis, we sought to determine if police spending aligns with community safety needs. We Worked with American Civil Liberties Union (ACLU)
                            to conduct this research which they used and presented in their <code className='code-block'>lawsuit</code>.
                        </p>
                        <h2>Key Findings</h2>
                        <ul>
                            <li>The number of field reports often exceeded actual reported crimes, indicating that police presence did not impact crime rates.</li>
                            <li>There was no significant correlation between crime rates and police overtime hours or the BPD's operating budget.</li>
                            <li>BPD funding has increased consistently since 2014, primarily allocated to personnel services, including overtime pay.</li>
                            <li>Officers with frequent overtime usage were often among the highest-paid and those with internal complaints or misconduct records.</li>
                            <li>Discrepancies were found in overtime hours worked versus paid, with instances where officers were compensated for significantly more hours than recorded work.</li>
                        </ul>
                        <h2>In Depth</h2>
                        <p>
                            The project utilized multiple datasets, including earnings, crime incidents, field activity, and budget records from the City of Boston.
                            Using <code className='code-block'>Python</code> utilizing libraries including <code className='code-block'>Pandas</code>, <code className='code-block'>Matplotlib</code>, and <code className='code-block'>Sklearn</code>, we processed and analyzed these datasets to uncover spending inefficiencies.
                            Regression models indicated that crime rates were not a predictor of overtime hours or police budget allocations.
                            Further analysis of specific officers revealed that some of the most frequent overtime users were also officers with past complaints and high salaries.
                        </p>
                        <div className="project-links">
                            <a
                                href="https://github.com/BU-Spark/ds-police-overtime/tree/main/fa23-team-f"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                            >
                                View on GitHub
                            </a>
                            {/* Button to view the final report PDF */}
                            <a
                                href={FinalReport}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{ marginLeft: '1rem' }}
                            >
                                View Final Report
                            </a>
                        </div>
                    </div>

                    <div className="project-images">
                        <img
                            src={BPD1}
                            alt="Visualization of overtime data"
                            onClick={() => setModalImage(BPD1)}
                            style={{ cursor: 'pointer' }}
                        />
                        <p>Findings show that BPD's budget has steadily increased, primarily funding personnel services, but there is no clear correlation between crime rates and police spending. A significant overlap was found between frequent overtime users and officers with misconduct complaints, suggesting potential abuse. Additionally, officers regularly claimed more overtime hours than they worked, especially in court-related duties, where those working under four hours often billed for a full four. These insights raise concerns about wasteful spending and overtime policies, indicating a need for further scrutiny and reform in police budget allocation.</p>
                        <img
                            src={BPD2}
                            alt="Alternate view of overtime data analysis"
                            onClick={() => setModalImage(BPD2)}
                            style={{ cursor: 'pointer' }}
                        />
                        <p>This section of the project examines the relationship between police spending, officer presence, and community safety. The Extension Project Questions focus on whether higher police presence correlates with lower crime rates and whether police spending improves community safety. Findings reveal that police reports per zip code were often lower than actual reported crime, suggesting that police presence did not significantly impact crime rates. A Venn diagram analysis showed little overlap between officers with frequent overtime and those with high field report activity, indicating that extra hours worked did not directly contribute to community safety. Additionally, trend analysis of BPD’s operating budget, overtime hours, and crime rates from 2015-2022 found no clear correlation, reinforcing the conclusion that higher police spending does not equate to improved safety outcomes.</p>
                        {/* Uncomment and adjust if you have a third image */}
                        {/*
            <img
              src={BPD3}
              alt="Additional insight from the data analysis"
              onClick={() => setModalImage(BPD3)}
              style={{ cursor: 'pointer' }}
            />
            <p>Further details are revealed in this visualization.</p>
            */}
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

export default BostonPoliceOvertime;