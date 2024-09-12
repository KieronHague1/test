// src/sections/ExtraContent.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to handle navigation
import fishVideo from "../assets/videos_compressed/fish.mp4"; // Importing the first video asset
import mapVideo from "../assets/videos_compressed/map.mp4"; // Importing the second video asset

const mainLogo = require('../assets/images_compressed/mainlogo.jpg');

const ExtraContent = () => {
    const navigate = useNavigate(); // Hook for programmatic navigation

    return (
        <div className="extra-content">
            {/* Back button to navigate back to the main page */}
            <button onClick={() => navigate('/')} className="back-button">
                ⬅ Back to Main
            </button>

            {/* Section for the first video */}
            <div className="video-section">
                <h2>Video 1</h2>
                <video
                    controls
                    width="60%" // Sets the video width to 60% of the container
                    height="auto" // Keeps the video height proportional to its width
                >
                    <source src={fishVideo} type="video/mp4"/> {/* Specifies the video source and type */}
                </video>
            </div>

            {/* Section for the second video */}
            <div className="video-section">
                <h2>Video 2</h2>
                <video controls width="60%" height="auto">
                    <source src={mapVideo} type="video/mp4"/>
                </video>
            </div>

            {/* Informative text section with embedded images */}
            <div className="text-section">
                <h2>Informative Content</h2>
                <p>
                    Explore the World of Learning! Learning is like going on a grand adventure every day! Imagine being an explorer, discovering new lands, amazing creatures, and cool facts hidden around every corner. Whether you’re solving tricky puzzles in maths, reading exciting stories in English, or conducting fun experiments in science, learning helps you see the world in a whole new way. Just like superheroes have special powers, you have the power to learn something new every day. From counting stars in the night sky to finding out how plants grow, every bit of knowledge makes you braver, smarter, and ready to tackle whatever comes your way!
                    Explore the World of Learning! Learning is like going on a grand adventure every day! Imagine being an explorer, discovering new lands, amazing creatures, and cool facts hidden around every corner. Whether you’re solving tricky puzzles in maths, reading exciting stories in English, or conducting fun experiments in science, learning helps you see the world in a whole new way. Just like superheroes have special powers, you have the power to learn something new every day. From counting stars in the night sky to finding out how plants grow, every bit of knowledge makes you braver, smarter, and ready to tackle whatever comes your way!
                    Explore the World of Learning! Learning is like going on a grand adventure every day! Imagine being an explorer, discovering new lands, amazing creatures, and cool facts hidden around every corner. Whether you’re solving tricky puzzles in maths, reading exciting stories in English, or conducting fun experiments in science, learning helps you see the world in a whole new way. Just like superheroes have special powers, you have the power to learn something new every day. From counting stars in the night sky to finding out how plants grow, every bit of knowledge makes you braver, smarter, and ready to tackle whatever comes your way!
                    Explore the World of Learning! Learning is like going on a grand adventure every day! Imagine being an explorer, discovering new lands, amazing creatures, and cool facts hidden around every corner. Whether you’re solving tricky puzzles in maths, reading exciting stories in English, or conducting fun experiments in science, learning helps you see the world in a whole new way. Just like superheroes have special powers, you have the power to learn something new every day. From counting stars in the night sky to finding out how plants grow, every bit of knowledge makes you braver, smarter, and ready to tackle whatever comes your way!
                    Explore the World of Learning! Learning is like going on a grand adventure every day! Imagine being an explorer, discovering new lands, amazing creatures, and cool facts hidden around every corner. Whether you’re solving tricky puzzles in maths, reading exciting stories in English, or conducting fun experiments in science, learning helps you see the world in a whole new way. Just like superheroes have special powers, you have the power to learn something new every day. From counting stars in the night sky to finding out how plants grow, every bit of knowledge makes you braver, smarter, and ready to tackle whatever comes your way!

                </p>
                {/* Images related to the text section */}
                <img className="content-image" src={mainLogo} alt="logo 1"/>
                <img className="content-image" src={mainLogo} alt="logo 2"/>
            </div>
        </div>
    );
};

export default ExtraContent;
