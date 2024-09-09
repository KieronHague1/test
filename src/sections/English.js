// src/sections/English.js
import React from 'react';
import englishVideo from '../assets/videos/library.mp4';
import EnglishWord from "./EnglishWord";

function English() {
    return (
        <div><h1 className="section-title">English</h1>
            <div className="section">
                <div className="box-large">
                    <h3>What is English?</h3>
                    <p>
                        English is a language spoken by millions of people all around the world. It started in England and has become the main language for talking, reading, and writing in many countries. English is used in schools, on TV, in games, and even on the internet, making it a super important language to know!
                    </p>
                    <video
                        className="box-video"
                        controls
                        width="100%"
                        height="auto"
                    >
                        <source src={englishVideo} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <h3>Why Learning English is Fun and Important</h3>
                    <p>
                        Learning English helps you connect with friends everywhere and explore cool books, games, and shows. It’s fun because you get to learn new words, play language games, and understand jokes from your favorite cartoons. Plus, English opens up a world of fun stories, songs, and new adventures—so let’s start learning and have fun with English!
                    </p>
                </div>
                <div className="box-small">
                    <div className="box">
                        <h3>Daily Vocabulary</h3>
                        <EnglishWord/>
                    </div>
                    <div className="box">
                        <h3>Did you know?</h3>
                        <p>The English alphabet wasn’t always 26 letters! The letter “J” was one of the last to be added. Before it came along, people used the letter “I” for both sounds. So, if you had a friend named Jack, they might have been called “Iack” a long time ago!</p>
                    </div>
                </div>
            </div>
        </div>
            );
            }

            export default English;
