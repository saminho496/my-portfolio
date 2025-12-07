import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="contact-page-container">
            <div className="blob-cont">
                <div className="blob blob-one"></div>
                <div className="blob blob-two"></div>
                <div className="blob blob-three"></div>
            </div>

            <div className="contact-card-wrapper">
                <h2>Get in Touch</h2>
                <div className="line"></div>

                <div className="contact-details">
                    <div className="contact-item">
                        <i className="fa-solid fa-location-dot"></i>
                        <div>
                            <h3>Address</h3>
                            <p>Nilambur, Malappuram, Kerala, India</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <i className="fa-solid fa-envelope"></i>
                        <div>
                            <h3>Email</h3>
                            <a href="mailto:sambenjohnson17004@gmail.com">sambenjohnson17004@gmail.com</a>
                        </div>
                    </div>

                    <div className="contact-item">
                        <i className="fa-solid fa-phone"></i>
                        <div>
                            <h3>Phone</h3>
                            <a href="tel:+917356761247">+91 73567 61247</a>
                        </div>
                    </div>
                </div>

                <Link to="/" className="cta-button primary back-home-btn">
                    <i className="fa-solid fa-arrow-left"></i> Back to Home
                </Link>
            </div>
        </div>
    );
};

export default Contact;
