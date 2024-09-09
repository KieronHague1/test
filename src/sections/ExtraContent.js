// src/sections/ExtraContent.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import englishVideo from "../assets/videos/library.mp4";
import mathsVideo from "../assets/videos/counter.mp4";// Import useNavigate to handle navigation

const ExtraContent = () => {
    const navigate = useNavigate();

    return (
        <div className="extra-content">
            {/* Back button to return to the main page */}
            <button onClick={() => navigate('/')} className="back-button">
                ⬅ Back to Main
            </button>

            {/* Your content here */}
            <div className="video-section">
                <h2>Video 1</h2>
                <video
                    controls
                    width="60%"
                    height="auto"
                >
                    <source src={englishVideo} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="video-section">
                <h2>Video 2</h2>
                <video
                    controls
                    width="60%"
                    height="auto"
                >
                    <source src={mathsVideo} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="text-section">
                <h2>Informative Content</h2>
                <p>Explore the World of Learning! Learning is like going on a grand adventure every day! Imagine being an explorer, discovering new lands, amazing creatures, and cool facts hidden around every corner. Whether you’re solving tricky puzzles in maths, reading exciting stories in English, or conducting fun experiments in science, learning helps you see the world in a whole new way. Just like superheroes have special powers, you have the power to learn something new every day. From counting stars in the night sky to finding out how plants grow, every bit of knowledge makes you braver, smarter, and ready to tackle whatever comes your way! Discover the Magic of Words and Numbers! Did you know that words can be magical? They can take you to far-off places, introduce you to imaginary friends, and teach you about people and cultures from all around the world. English is like a treasure chest full of stories waiting to be told and secrets ready to be uncovered. And numbers? They’re like secret codes that help us understand the universe! Numbers can measure the tallest mountains, help us bake delicious cakes, or even figure out how fast a cheetah runs. Maths isn’t just about adding and subtracting—it’s about finding patterns, solving mysteries, and unlocking new ways to see the world. Dive Into the Wonders of Science! Science is all about asking questions and finding answers, just like a detective on a big case! Have you ever wondered why the sky is blue, how birds fly, or what makes a rainbow? Science helps us figure out the answers to all those big and little questions. You can be a scientist every day—experimenting with water, watching how plants grow, or even just looking at bugs in your garden. It’s all part of discovering the incredible world around us. Science teaches us that being curious is the key to understanding everything, from the smallest ant to the biggest galaxy Learning is Fun and Full of Surprises! There’s always something fun to learn, no matter where you are. You can learn by playing games, watching videos, reading books, or even by asking questions like “Why is the sun so bright?” or “How do fish breathe underwater?” The best part is that you don’t need to be in a classroom to learn—learning happens everywhere, whether you’re at home, in the park, or on a school trip. So keep your eyes open, your mind curious, and your heart ready for adventure. Remember, every time you learn something new, you’re adding a little more magic to your brain and a lot more fun to your day!</p>
                <img className="content-image" src="../assets/images/mainlogo.png" alt="Description 1"/>
                <img className="content-image" src="../assets/images/mainlogo.png" alt="Description 2"/>
            </div>
        </div>
    );
};

export default ExtraContent;
