import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="blob-cont">
                <div className="blob blob-one"></div>
                <div className="blob blob-two"></div>
                <div className="blob blob-three"></div>
            </div>

            <nav className="navbar">
                <div className="logo">Sam Ben Johnson.</div>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Work</a></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <Link to="/contact" className="cta-button nav-cta">Let's Talk</Link>
            </nav>

            <main>
                <section className="hero">
                    <div className="hero-content">
                        <span className="greeting">Hello, I'm Sam Ben Johnson</span>
                        <h1>Building <span className="gradient-text">Scalable Solutions</span> <br /> Through Code.</h1>
                        <p className="subtitle">Aspiring Software Developer specializing in Web & App Development, Agile, and DevOps.</p>
                        <div className="hero-actions">
                            <a href="#projects" className="cta-button primary">View My Work</a>
                            <Link to="/contact" className="cta-button secondary">Contact Me</Link>
                        </div>
                    </div>
                </section>

                <section id="about" className="about">
                    <div className="container">
                        <div className="section-header">
                            <h2>About Me</h2>
                            <div className="line"></div>
                        </div>
                        <div className="about-grid">
                            <div className="about-card">
                                <i className="fa-solid fa-code"></i>
                                <h3>Development</h3>
                                <p>Proficient in C, Python, Java, SQL, and Flutter for cross-platform apps.</p>
                            </div>
                            <div className="about-card">
                                <i className="fa-solid fa-layer-group"></i>
                                <h3>Web Technologies</h3>
                                <p>Building responsive web apps with HTML, CSS, Bootstrap, PHP, and MySQL.</p>
                            </div>
                            <div className="about-card">
                                <i className="fa-solid fa-graduation-cap"></i>
                                <h3>Education</h3>
                                <p>B.Tech in CSE from FISAT (2022-Present). Aspiring for roles in TCS.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="skills" className="about">
                    <div className="container">
                        <div className="section-header">
                            <h2>Technical Skills</h2>
                            <div className="line"></div>
                        </div>
                        <div className="about-grid">
                            <div className="about-card">
                                <i className="fa-brands fa-python"></i>
                                <h3>Languages</h3>
                                <p>C, Python, Java, SQL</p>
                            </div>
                            <div className="about-card">
                                <i className="fa-solid fa-globe"></i>
                                <h3>Web & App</h3>
                                <p>HTML, CSS, Bootstrap, PHP, Flutter</p>
                            </div>
                            <div className="about-card">
                                <i className="fa-solid fa-gears"></i>
                                <h3>Tools</h3>
                                <p>Git, MySQL, Agile, DevOps</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects" className="projects">
                    <div className="container">
                        <div className="section-header">
                            <h2>Selected Work</h2>
                            <div className="line"></div>
                        </div>
                        {/* Placeholder for projects */}
                        <div className="project-grid">
                            <article className="project-card">
                                <div className="project-image"></div>
                                <div className="project-info">
                                    <h3>Aidify</h3>
                                    <p>Cross-platform mobile app for differently-abled individuals using Flutter and Express.js.</p>
                                    <a href="#" className="project-link">View Project <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </article>
                            <article className="project-card">
                                <div className="project-image"></div>
                                <div className="project-info">
                                    <h3>Restaurant Management Sys.</h3>
                                    <p>Web app for order and inventory management using HTML, PHP, and MySQL.</p>
                                    <a href="#" className="project-link">View Project <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <section id="contact" className="contact">
                    <div className="container">
                        <div className="contact-wrapper">
                            <h2>Ready to start a project?</h2>
                            <p>Let's build something amazing together.</p>
                            <Link to="/contact" className="cta-button primary">Get in Touch</Link>
                            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>+91 73567 61247 | Nilambur, Kerala</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div className="footer-content">
                    <p>&copy; 2024 Sam Ben Johnson. All rights reserved.</p>
                    <div className="social-links">
                        <a href="https://github.com/saminho496" target="_blank"><i className="fa-brands fa-github"></i></a>
                        <a href="https://linkedin.com/in/sam-ben-johnson" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Home;
