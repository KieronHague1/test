// src/sections/Intro.js
import React from 'react';
import introImage from '../assets/images/mainlogo.png';

function Intro() {
    return (
        <div className="intro-section">
            <h1 className="intro">Hello!</h1>
            <img
                src={introImage} // Update with the correct path to your image
                alt="Description of the image"
                className="intro-image" // Add a class for styling the image
            />
            <div className="intro-text">
                <h2>Welcome to EduLearn</h2>
                <p>
                    Explore English, Maths and Science. Scroll down to explore more!
                </p>
            </div>
        </div>
    );
}

export default Intro;

