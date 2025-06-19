import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Header from './Header';
import Footer from './Footer';
import './NoteTakingApplication.css';
import finalAppVideo from '../images/FinalAppShowcase.mp4';
import onboarding1 from '../images/onboarding1.PNG';
import onboarding2 from '../images/onboarding2.PNG';
import onboarding3 from '../images/onboarding3.PNG';
import onboarding4 from '../images/onboarding4.PNG';
import onboarding5 from '../images/onboarding5.PNG';
import onboarding6 from '../images/onboarding6.PNG';

function IWM() {
    return (
        <div className="project-page">
            <Header />
            <div className="project-content-wrapper">
                {/* Hero Section */}
                <div className="medium-hero">
                    <div className="medium-container">
                        <h1 className="medium-title">IWM Waitlist: Building a Production-Ready Fintech Application</h1>
                        <p className="medium-subtitle">
                            How I developed a full-stack mobile banking platform with sophisticated referral algorithms,
                            seamless user experience, and production-ready infrastructure targeting millennial parents.
                        </p>
                        <div className="medium-meta">
                            <span className="medium-author">Ahmad Sadiq</span>
                            <span className="medium-separator">·</span>
                            <span className="medium-read-time">8 min read</span>
                            <span className="medium-separator">·</span>
                            <span className="medium-date">Full-Stack Development</span>
                        </div>
                    </div>
                </div>

                {/* Hero Image Placeholder */}
                <div className="medium-container">
                    <div className="medium-image-container">
                        <div className="image-placeholder">
                            <p>📱 App Hero Image (Coming Soon)</p>
                            <small>Main app interface or splash screen</small>
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <article className="medium-container">
                    <div className="medium-content">

                        <h2 className="medium-heading">The Challenge</h2>
                        <p className="medium-paragraph">
                            Building a fintech application from scratch presents unique challenges: creating trust with users,
                            implementing secure financial systems, and designing an experience that converts skeptical parents
                            into engaged early adopters. When I took on the IWM waitlist project, I wasn't just building an app—I
                            was crafting the foundation for a new kind of kids' banking platform.
                        </p>

                        <p className="medium-paragraph">
                            The vision was ambitious: create a seamless waitlist experience where users could join, refer friends,
                            and track their position in real-time, all while building anticipation for a product that would
                            revolutionize how millennial parents approach their children's financial education.
                        </p>

                        {/* Onboarding Flow Screenshots */}
                        <div className="onboarding-flow-section">
                            <h3 className="medium-subheading">📸 Onboarding Flow: From Sign-Up to Waitlist</h3>
                            <p className="medium-paragraph">
                                The streamlined 6-step onboarding process designed to reduce friction and maximize completion rates.
                            </p>

                            <div className="onboarding-flow-grid">
                                <div className="onboarding-step">
                                    <img src={onboarding1} alt="Onboarding Step 1 - Welcome Screen" />
                                    <p className="step-label">Step 1: Welcome</p>
                                </div>
                                <div className="onboarding-step">
                                    <img src={onboarding2} alt="Onboarding Step 2 - Account Setup" />
                                    <p className="step-label">Step 2: Account Setup</p>
                                </div>
                                <div className="onboarding-step">
                                    <img src={onboarding3} alt="Onboarding Step 3 - Personal Information" />
                                    <p className="step-label">Step 3: Personal Info</p>
                                </div>
                                <div className="onboarding-step">
                                    <img src={onboarding4} alt="Onboarding Step 4 - Verification" />
                                    <p className="step-label">Step 4: Verification</p>
                                </div>
                                <div className="onboarding-step">
                                    <img src={onboarding5} alt="Onboarding Step 5 - Preferences" />
                                    <p className="step-label">Step 5: Preferences</p>
                                </div>
                                <div className="onboarding-step">
                                    <img src={onboarding6} alt="Onboarding Step 6 - Waitlist Confirmation" />
                                    <p className="step-label">Step 6: Waitlist Entry</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="medium-heading">Architecture & Technology Decisions</h2>
                        <p className="medium-paragraph">
                            Choosing the right technology stack was crucial for a fintech application. I opted for
                            <span className="code-inline">React Native</span> with <span className="code-inline">Expo</span>
                            to enable rapid development while maintaining native performance. The backend leverages
                            <span className="code-inline">Node.js/Express</span> with <span className="code-inline">PostgreSQL</span>
                            and <span className="code-inline">Prisma ORM</span> for robust data management.
                        </p>

                        <div className="medium-callout">
                            <h3>Key Technical Decisions</h3>
                            <ul>
                                <li><strong>React Native + Expo:</strong> Cross-platform development with TypeScript for type safety</li>
                                <li><strong>Firebase Authentication:</strong> Secure, scalable auth with upgrade paths</li>
                                <li><strong>PostgreSQL + Prisma:</strong> Robust database with efficient ORM</li>
                                <li><strong>AppsFlyer Integration:</strong> Professional attribution tracking</li>
                            </ul>
                        </div>

                        <h2 className="medium-heading">The Ranking Algorithm: Inspired by Monzo</h2>
                        <p className="medium-paragraph">
                            One of the most challenging aspects was developing a fair yet engaging ranking system. Taking inspiration
                            from Monzo's successful waitlist approach, I implemented a sophisticated algorithm that balances referral
                            rewards with join-time fairness.
                        </p>

                        {/* Algorithm Visualization Placeholder */}
                        <div className="medium-image-container">
                            <div className="image-placeholder">
                                <p>📊 Ranking Algorithm Visualization</p>
                                <small>How users move up the waitlist</small>
                            </div>
                        </div>

                        <p className="medium-paragraph">
                            The algorithm prevents runaway leaders while incentivizing sharing, using logarithmic scaling and
                            tier-based movement. This approach ensures that early adopters maintain their advantage while new
                            users have meaningful opportunities to improve their position through referrals.
                        </p>

                        <h2 className="medium-heading">User Experience: From 17 Minutes to Under 5</h2>
                        <p className="medium-paragraph">
                            Industry research shows that typical financial app onboarding takes 17 minutes on average. This was
                            unacceptable for our target demographic of busy millennial parents. Through careful UX research and
                            iterative design, I reduced our onboarding flow to under 5 minutes.
                        </p>

                        {/* UX Flow Images */}
                        <div className="medium-image-grid">
                            <div className="image-placeholder">
                                <p>🎨 UI Design Screens</p>
                                <small>Dark theme interface</small>
                            </div>
                            <div className="image-placeholder">
                                <p>📱 Social Sharing Features</p>
                                <small>WhatsApp, Instagram, TikTok integration</small>
                            </div>
                        </div>

                        <h3 className="medium-subheading">Frictionless Design Principles</h3>
                        <ul className="medium-list">
                            <li>Progressive disclosure of information</li>
                            <li>Smart defaults and pre-filled forms</li>
                            <li>Visual progress indicators with smooth animations</li>
                            <li>Platform-specific social sharing optimizations</li>
                            <li>Intuitive navigation with clear next steps</li>
                        </ul>

                        <h2 className="medium-heading">Building for Scale</h2>
                        <p className="medium-paragraph">
                            From day one, I designed the application with scalability in mind. The database schema supports
                            efficient rank calculations for thousands of users, while maintaining sub-2-second load times.
                            Comprehensive error handling and input validation ensure reliability at scale.
                        </p>

                        {/* Technical Architecture Diagram */}
                        <div className="medium-image-container">
                            <div className="image-placeholder">
                                <p>🏗️ Technical Architecture Diagram</p>
                                <small>System overview and data flow</small>
                            </div>
                        </div>

                        <h2 className="medium-heading">Results & Impact</h2>
                        <p className="medium-paragraph">
                            The application successfully achieves target KPIs including &gt;40% registration completion rates,
                            matching Monzo's benchmark for fintech onboarding. The viral coefficient exceeds 1.2 users per
                            referral, indicating strong organic growth potential.
                        </p>

                        <div className="medium-stats">
                            <div className="stat-item">
                                <h3>40%+</h3>
                                <p>Registration completion rate</p>
                            </div>
                            <div className="stat-item">
                                <h3>1.2x</h3>
                                <p>Viral coefficient</p>
                            </div>
                            <div className="stat-item">
                                <h3>&lt;2s</h3>
                                <p>Average load time</p>
                            </div>
                            <div className="stat-item">
                                <h3>5min</h3>
                                <p>Onboarding time</p>
                            </div>
                        </div>

                        <h2 className="medium-heading">Technical Deep Dive</h2>
                        <p className="medium-paragraph">
                            The application demonstrates modern mobile development practices with a focus on user experience,
                            technical excellence, and business impact. Key technical achievements include:
                        </p>

                        <div className="medium-technical-grid">
                            <div className="tech-card">
                                <h4>Frontend Excellence</h4>
                                <p>React Native with TypeScript, responsive design, smooth animations, and accessibility features</p>
                            </div>
                            <div className="tech-card">
                                <h4>Backend Reliability</h4>
                                <p>Node.js/Express with PostgreSQL, comprehensive error handling, and security measures</p>
                            </div>
                            <div className="tech-card">
                                <h4>Analytics & Attribution</h4>
                                <p>AppsFlyer integration for professional tracking, conversion analytics, and deep linking</p>
                            </div>
                            <div className="tech-card">
                                <h4>Production Ready</h4>
                                <p>Scalable infrastructure, documentation, testing strategies, and deployment readiness</p>
                            </div>
                        </div>

                        {/* Final App Showcase Video */}
                        <div className="medium-image-container">
                            <h2 className="medium-heading">📱 Final App Showcase</h2>
                            <div className="iwm-video-container">
                                <video
                                    controls
                                    width="100%"
                                    style={{
                                        maxWidth: '600px',
                                        height: 'auto',
                                        borderRadius: '12px',
                                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                                    }}
                                >
                                    <source src={finalAppVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>

                        <h2 className="medium-heading">Lessons Learned</h2>
                        <p className="medium-paragraph">
                            This project challenged me to think holistically about user experience, technical scalability,
                            and business metrics in the competitive fintech space. Working on a complete product from concept
                            to production-ready code gave me invaluable experience in mobile development, backend architecture,
                            and user psychology—particularly around referral incentives and onboarding optimization.
                        </p>

                        <p className="medium-paragraph">
                            The intersection of technology and finance requires careful attention to security, user trust,
                            and regulatory considerations. Building for millennial parents added another layer of complexity,
                            as the user experience needed to be both sophisticated enough for tech-savvy users and simple
                            enough for busy parents.
                        </p>

                        <div className="medium-closing">
                            <p className="medium-paragraph">
                                <em>The IWM waitlist application represents more than just a technical achievement—it's a foundation
                                    for reimagining how families approach financial education and children's banking in the digital age.</em>
                            </p>
                        </div>

                        <div className="project-links">
                            <Link smooth to="/#projects" className="btn medium-btn">← Back to Projects</Link>
                        </div>
                    </div>
                </article>
            </div>
            <Footer />
        </div>
    );
}

export default IWM; 