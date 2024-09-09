// src/sections/FinalQuiz.js
import React, { useState } from 'react';

function FinalQuiz() {
    // State variables to track the user's score, current question index, and whether to show the result
    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [showResult, setShowResult] = useState(false);

    // Array of quiz questions covering Maths, English, and Science topics
    const questions = [
        {
            question: 'What is 5 + 3?',
            options: ['6', '7', '8', '9'],
            answer: '8',
            subject: 'Maths',
        },
        {
            question: 'What was the last letter to be added to the alphabet?',
            options: ['I', 'A', 'Q', 'J'],
            answer: 'J',
            subject: 'English',
        },
        {
            question: 'What planet is known as the Red Planet?',
            options: ['Earth', 'Venus', 'Mars', 'Jupiter'],
            answer: 'Mars',
            subject: 'Science',
        },
        {
            question: 'What is 12 x 6?',
            options: ['60', '72', '126', '18'],
            answer: '72',
            subject: 'Maths',
        },
        {
            question: 'The occurrence of events by chance in a happy or beneficial way?',
            options: ['Serendipity', 'Unlucky', 'Sad', 'Crazy'],
            answer: 'Serendipity',
            subject: 'English',
        },
        {
            question: 'What planet is the largest?',
            options: ['Earth', 'Venus', 'Mars', 'Jupiter'],
            answer: 'Jupiter',
            subject: 'Science',
        },
    ];

    // Function to handle answer selection
    const handleAnswer = (option) => {
        // Check if the selected option matches the correct answer
        if (option === questions[questionIndex].answer) {
            setScore(score + 1); // Increment the score if the answer is correct
        }
        // Move to the next question or show the final result if all questions are answered
        if (questionIndex + 1 < questions.length) {
            setQuestionIndex(questionIndex + 1);
        } else {
            setShowResult(true); // Show the final score once all questions are answered
        }
    };

    return (
        <div className="quiz-container">
            <h1 className="section-title">Final Quiz!</h1>
            <div className="quiz-box">
                {showResult ? (
                    // Display the final score and a button to restart the quiz
                    <div className="result">
                        <h2>Your Final Score: {score} / {questions.length}</h2>
                        <p>Great job! You have completed the quiz.</p>
                        <button onClick={() => window.location.reload()}>Play Again</button> {/* Reloads the page to reset the quiz */}
                    </div>
                ) : (
                    // Display the current question and answer options
                    <div className="question-section">
                        <h2>{questions[questionIndex].subject} Quiz</h2> {/* Shows the subject of the current question */}
                        <p className="question-text">{questions[questionIndex].question}</p> {/* Displays the question */}
                        <div className="options">
                            {/* Map through the options and create a button for each */}
                            {questions[questionIndex].options.map((option, index) => (
                                <button key={index} onClick={() => handleAnswer(option)}>
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FinalQuiz;
