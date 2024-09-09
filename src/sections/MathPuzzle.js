// src/sections/MathPuzzleGame.js
import React, { useState } from 'react';

const puzzles = [
    { question: '5 + _ = 8', correctAnswer: '3' },
    { question: '12 - _ = 7', correctAnswer: '5' },
    { question: '_ x 4 = 16', correctAnswer: '4' },
    { question: '9 ÷ _ = 3', correctAnswer: '3' },
];

function MathPuzzleGame() {
    const [currentPuzzle, setCurrentPuzzle] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);

    const handleSubmit = () => {
        if (userAnswer === puzzles[currentPuzzle].correctAnswer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    const handleNextPuzzle = () => {
        setIsCorrect(null);
        setUserAnswer('');
        setCurrentPuzzle((prev) => (prev + 1) % puzzles.length);
    };

    return (
        <div className="math-puzzle-game">
            <h3 className="game-title">Solve the Math Puzzle</h3>
            <p className="puzzle-question">{puzzles[currentPuzzle].question}</p>
            <input
                type="text"
                className="answer-input"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Enter your answer"
            />
            <button onClick={handleSubmit} className="submit-button">
                Check Answer
            </button>
            {isCorrect === true && (
                <p className="correct-message">Correct! Great job!</p>
            )}
            {isCorrect === false && (
                <p className="incorrect-message">Oops, try again!</p>
            )}
            <button onClick={handleNextPuzzle} className="next-puzzle-button">
                Next Puzzle
            </button>
        </div>
    );
}

export default MathPuzzleGame;
