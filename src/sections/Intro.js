// src/sections/Intro.js
import React from 'react';
import introImage from '../assets/images_compressed/mainlogo.jpg'; // Import the image for the intro section

function Intro() {
    return (
        <div className="intro-section">
            {/* Main greeting and title */}
            <h1 className="intro">Hello!</h1>

            {/* Display the intro image with a class for CSS styling */}
            <img
                src={introImage} // Correct path to the image file
                alt="EduLearn logo" // Provide a meaningful alt description for accessibility
                className="intro-image"
            />

            {/* Introductory text welcoming users to the platform */}
            <div className="intro-text">
                <h2>Welcome to EduLearn</h2>
                <p>
                    Explore English, Maths, and Science. Scroll down to explore more!
                </p>
            </div>
        </div>
    );
}

export default Intro;
