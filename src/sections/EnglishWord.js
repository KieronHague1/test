// src/sections/WordOfTheDay.js
import React, { useState } from 'react';

// Sample word of the day data
const wordOfTheDay = {
    word: 'Serendipity',
    definition: 'The occurrence of events by chance in a happy or beneficial way.',
};

function WordOfTheDay() {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <h2 className="flip-card-word">{wordOfTheDay.word}</h2>
                </div>
                <div className="flip-card-back">
                    <p className="flip-card-definition">{wordOfTheDay.definition}</p>
                </div>
            </div>
        </div>
    );
}

export default WordOfTheDay;
