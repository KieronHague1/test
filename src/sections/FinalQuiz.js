// src/sections/FinalQuiz.js
import React, { useState } from 'react';

function FinalQuiz() {
    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [showResult, setShowResult] = useState(false);

    // Questions combining Maths, English, and Science topics
    const questions = [
        {
            question: 'What is 5 + 3?',
            options: ['6', '7', '8', '9'],
            answer: '8',
            subject: 'Maths',
        },
        {
            question: 'What was the last letter to be added to the alphabet"?',
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
            question: 'The occurrence of events by chance in a happy or beneficial way"?',
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
        if (option === questions[questionIndex].answer) {
            setScore(score + 1);
        }
        if (questionIndex + 1 < questions.length) {
            setQuestionIndex(questionIndex + 1);
        } else {
            setShowResult(true);
        }
    };

    return (
        <div className="quiz-container">
            <h1 className="section-title">Final Quiz!</h1>
            <div className="quiz-box">
                {showResult ? (
                    <div className="result">
                        <h2>Your Final Score: {score} / {questions.length}</h2>
                        <p>Great job! You have completed the quiz.</p>
                        <button onClick={() => window.location.reload()}>Play Again</button>
                    </div>
                ) : (
                    <div className="question-section">
                        <h2>{questions[questionIndex].subject} Quiz</h2>
                        <p className="question-text">{questions[questionIndex].question}</p>
                        <div className="options">
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