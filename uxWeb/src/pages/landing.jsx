import React from 'react';
import '../styles/landing.css';

function Landing() {
    return (
        <div className="landing-container">
            <div>
                <img className="ux-logo" src="../ux.png" alt="UX" />
            </div>


            <div className="welcome-container">
                <div className="nav-bar-container">
                    <div className="nav-bar">
                        <p className="nav-bar-text">Home</p>
                        <p className="nav-bar-text">Our Team</p>
                        <p className="nav-bar-text">Events</p>
                        <p className="nav-bar-text">Hackathon</p>
                        <p className="nav-bar-text">Sponsors</p>
                        <p className="nav-bar-text">Projects</p>
                    </div>
                </div>

            </div>

            <h1>Landing</h1>
        </div>
    )
}

export default Landing;