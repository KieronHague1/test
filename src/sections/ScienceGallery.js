// src/sections/SolarSystemGallery.js
import React, { useState } from 'react';

// Data array for planets in the solar system with their details
const planets = [
    {
        name: 'Mercury',
        image: '../assets/images/mercury.png',
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
    const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0); // State to track the currently displayed planet

    // Function to navigate to the next planet in the list
    const handleNext = () => {
        setCurrentPlanetIndex((prevIndex) =>
            prevIndex === planets.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to navigate to the previous planet in the list
    const handlePrev = () => {
        setCurrentPlanetIndex((prevIndex) =>
            prevIndex === 0 ? planets.length - 1 : prevIndex - 1
        );
    };

    // Variables to track touch coordinates for swipe detection
    let touchStartX = 0;
    let touchEndX = 0;

    // Handle touch start event to get initial touch coordinate
    const handleTouchStart = (e) => {
        touchStartX = e.touches[0].clientX;
    };

    // Update touchEndX as the user moves their finger across the screen
    const handleTouchMove = (e) => {
        touchEndX = e.touches[0].clientX;
    };

    // Handle the end of a touch event to determine swipe direction
    const handleTouchEnd = () => {
        if (touchStartX - touchEndX > 50) handleNext(); // Detect left swipe for next
        if (touchEndX - touchStartX > 50) handlePrev(); // Detect right swipe for previous
    };

    return (
        <div
            className="solar-system-gallery"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Display the current planet's name, image, and description */}
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

            {/* Navigation buttons for cycling through the planets */}
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
