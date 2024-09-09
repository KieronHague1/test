// src/sections/SolarSystemGallery.js
import React, { useState } from 'react';

// Data for the planets in the solar system
const planets = [
    {
        name: 'Mercury',
        image: '../assets/images/mercury.png', // Update with the correct path to your image
        description: 'Mercury is the closest planet to the Sun and the smallest in the Solar System.',
    },
    {
        name: 'Venus',
        image: '../assets/images/venus.png',
        description: 'Venus has a thick atmosphere that traps heat, making it the hottest planet in our solar system.',
    },
    {
        name: 'Earth',
        image: '../assets/images/earth.png',
        description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life.',
    },
    {
        name: 'Mars',
        image: '../assets/images/mars.png',
        description: 'Mars is known as the Red Planet because of its reddish appearance due to iron oxide on its surface.',
    },
    {
        name: 'Jupiter',
        image: '../assets/images/jupiter.png',
        description: 'Jupiter is the largest planet in the solar system and has a giant storm called the Great Red Spot.',
    },
    {
        name: 'Saturn',
        image: '../assets/images/saturn.png',
        description: 'Saturn is known for its extensive ring system, made mostly of ice particles and rocky debris.',
    },
    {
        name: 'Uranus',
        image: '../assets/images/uranus.png',
        description: 'Uranus is an ice giant with a unique tilt that makes it rotate on its side.',
    },
    {
        name: 'Neptune',
        image: '../assets/images/neptune.png',
        description: 'Neptune is the farthest planet from the Sun and is known for its deep blue color and strong winds.',
    },
];

function SolarSystemGallery() {
    const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);

    // Function to handle swiping or clicking to the next and previous planets
    const handleNext = () => {
        setCurrentPlanetIndex((prevIndex) =>
            prevIndex === planets.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentPlanetIndex((prevIndex) =>
            prevIndex === 0 ? planets.length - 1 : prevIndex - 1
        );
    };

    // Touch event handlers for mobile swiping
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
        touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX - touchEndX > 50) handleNext(); // Swipe left
        if (touchEndX - touchStartX > 50) handlePrev(); // Swipe right
    };

    return (
        <div
            className="solar-system-gallery"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="planet-slide">
                <h3 className="planet-title">{planets[currentPlanetIndex].name}</h3>
                <img
                    src={planets[currentPlanetIndex].image}
                    alt={planets[currentPlanetIndex].name}
                    className="planet-image"
                />
                <p className="planet-description">
                    {planets[currentPlanetIndex].description}
                </p>
            </div>
            <div className="navigation-buttons">
                <button onClick={handlePrev} className="prev-button">
                    &#10094; {/* Left arrow */}
                </button>
                <button onClick={handleNext} className="next-button">
                    &#10095; {/* Right arrow */}
                </button>
            </div>
        </div>
    );
}

export default SolarSystemGallery;
