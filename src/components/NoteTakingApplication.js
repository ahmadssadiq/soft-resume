import React from 'react';
import Header from './Header'; // Common header
import './NoteTakingApplication.css';
import Footer from './Footer';

// Import images relative to the component's location.
// Assuming NoteTakingApplication.js is in src/components
import Note1 from '../images/NoteTakingApplication1.png';
import Note2 from '../images/NoteTakingApplication2.png';
import Note3 from '../images/NoteTakingApplication3.png';

function NoteTakingApplication() {
    return (
        <div className="project-page">
            {/* Include the global header */}
            <Header />
            {/* Page content wrapper */}
            <div className="project-content-wrapper">
                {/* Simple title */}
                <h1 className="project-title">
                    Note Taking Application <span role="img" aria-label="note">📝</span>
                </h1>

                <section className="project-content">
                    <div className="project-description">
                        <h2>Overview</h2>
                        <p>
                            The Checklist Application is a <code className='code-block'>React</code>-based productivity tool that allows users to dynamically create,
                            track, and manage their tasks. It features a progress bar, dynamic item addition, and the ability to add
                            descriptions to checklist items, providing an intuitive task management experience.
                        </p>
                        <h2>Key Features</h2>
                        <ul>
                            <li>Dynamic item creation using <code className="code-block">useState</code></li>
                            <li>Task completion tracking with an animated progress bar</li>
                            <li>Ability to add and edit descriptions for each checklist item</li>
                            <li>Styled-components for a <code className='code-block'>Modern UI</code></li>
                            <li>Animation effects with <code className="code-block">react-transition-group</code> for smoother user experience</li>
                        </ul>
                        <h2>In Depth</h2>
                        <p>
                            This project demonstrates best practices in React development, incorporating modular component design by breaking down the application into reusable parts such as the checklist creation form, progress bar, and individual checklist items. Efficient state management is achieved using the <code className="code-block">useState</code> hook, allowing real-time updates when users add, remove, or mark checklist items as complete. The progress bar dynamically reflects completion percentage using React state, enhancing user experience. Additionally, <code className="code-block">react-transition-group</code> is used to animate checklist items, providing smooth transitions when items are added or removed. Styled-components are leveraged to maintain a clean and modern UI, while conditional rendering allows users to toggle the description input field for each checklist item, improving organization. These principles together create a seamless and responsive user experience, showcasing effective UI interaction and state-driven updates in React.
                        </p>
                        <div className="project-links">
                            <a
                                href="https://github.com/ahmadssadiq/CS391-checklist-final-project"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>

                    <div className="project-images">
                        <img src={Note1} alt="Screenshot of Note Taking Application" />
                        <p>Users can dynamically add items to their checklist using the input field. This feature is implemented using the <code className='code-block'>useState</code> hook, allowing real-time updates to the checklist.</p>
                        <img src={Note2} alt="Alternate view of Note Taking Application" />
                        <p>Users can add detailed descriptions to each checklist item, enhancing organization. The description field is managed using conditional state and dynamically displayed using the <code className='code-block'>useState</code> hook.</p>
                        <img src={Note3} alt="Alternate view of Note Taking Application" />
                        <p>As tasks are marked complete using the <code className='code-block'>Checkbox</code> component, the animated progress bar updates dynamically to track progress. This utilizes React state updates and smooth transitions for a better user experience.</p>

                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default NoteTakingApplication;