// src/sections/WordOfTheDay.js
import React, { useState } from 'react'; // Import React and the useState hook for managing component state

// Sample word of the day data
const wordOfTheDay = {
    word: 'Serendipity', // The word to be displayed on the front of the flip card
    definition: 'The occurrence of events by chance in a happy or beneficial way.', // The definition displayed on the back of the flip card
};

function WordOfTheDay() {
    // State to manage whether the card is flipped or not
    const [flipped, setFlipped] = useState(false);

    // Function to handle the flip action when the card is clicked
    const handleFlip = () => {
        setFlipped(!flipped); // Toggle the flipped state
    };

    return (
        // Main flip-card container with dynamic class based on the flipped state
        <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="flip-card-inner">
                {/* Front side of the card displaying the word */}
                <div className="flip-card-front">
                    <h2 className="flip-card-word">{wordOfTheDay.word}</h2>
                </div>
                {/* Back side of the card displaying the definition */}
                <div className="flip-card-back">
                    <p className="flip-card-definition">{wordOfTheDay.definition}</p>
                </div>
            </div>
        </div>
    );
}

export default WordOfTheDay;
