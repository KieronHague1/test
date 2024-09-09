// src/sections/MathPuzzleGame.js
import React, { useState } from 'react';

// Array of math puzzles with questions and correct answers
const puzzles = [
    { question: '5 + _ = 8', correctAnswer: '3' },
    { question: '12 - _ = 7', correctAnswer: '5' },
    { question: '_ x 4 = 16', correctAnswer: '4' },
    { question: '9 ÷ _ = 3', correctAnswer: '3' },
];

function MathPuzzleGame() {
    // State to track the current puzzle, user's answer, and correctness of the answer
    const [currentPuzzle, setCurrentPuzzle] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);

    // Function to check if the user's answer is correct
    const handleSubmit = () => {
        // Compares user's answer with the correct answer
        if (userAnswer === puzzles[currentPuzzle].correctAnswer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    // Function to move to the next puzzle
    const handleNextPuzzle = () => {
        // Resets state for the next puzzle
        setIsCorrect(null);
        setUserAnswer('');
        setCurrentPuzzle((prev) => (prev + 1) % puzzles.length); // Loops back to the first puzzle after the last one
    };

    return (
        <div className="math-puzzle-game">
            {/* Game title */}
            <h3 className="game-title">Solve the Math Puzzle</h3>

            {/* Display current puzzle question */}
            <p className="puzzle-question">{puzzles[currentPuzzle].question}</p>

            {/* Input field for user's answer */}
            <input
                type="text"
                className="answer-input"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)} // Updates userAnswer state with input value
                placeholder="Enter your answer"
            />

            {/* Button to check the answer */}
            <button onClick={handleSubmit} className="submit-button">
                Check Answer
            </button>

            {/* Conditional rendering of feedback messages */}
            {isCorrect === true && (
                <p className="correct-message">Correct! Great job!</p>
            )}
            {isCorrect === false && (
                <p className="incorrect-message">Oops, try again!</p>
            )}

            {/* Button to proceed to the next puzzle */}
            <button onClick={handleNextPuzzle} className="next-puzzle-button">
                Next Puzzle
            </button>
        </div>
    );
}

export default MathPuzzleGame;
