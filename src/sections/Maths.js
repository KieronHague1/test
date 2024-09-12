// src/sections/Maths.js
import React from 'react';
import mathsVideo from "../assets/videos_compressed/counter.mp4"; // Import the maths-related video
import MathPuzzle from "./MathPuzzle"; // Import the MathPuzzle component

function Maths() {
    return (
        <div>
            {/* Section Title */}
            <h1 id="maths" className="section-title">Maths</h1>
            <div className="section">
                {/* Large Box Section for Main Content */}
                <div className="box-large">
                    <h3>What is Maths?</h3>
                    <p>
                        Maths is all about numbers, shapes, and patterns that help us understand the world around us.
                        It’s used in everyday things like counting, measuring, and solving problems. From adding and
                        subtracting to exploring fun shapes and puzzles, maths is everywhere—even in the games we play
                        and the toys we use!
                    </p>

                    {/* Video Element to Display the Maths Video */}
                    <video className="box-video" controls>
                        <source src={mathsVideo} type="video/mp4" />
                    </video>

                    <h3>Why Learning Maths is Fun and Important</h3>
                    <p>
                        Learning maths helps you solve puzzles, play games, and figure out how things work. It’s like
                        having a superpower that helps you with everything from shopping to building Lego towers. Maths
                        makes learning fun with cool challenges, brain teasers, and exciting discoveries every day. So
                        get ready to explore, play, and have fun with maths—it’s an adventure in every number!
                    </p>
                </div>

                {/* Small Boxes for Interactive Content and Fun Facts */}
                <div className="box-small">
                    {/* Interactive Math Puzzle */}
                    <div className="box">
                        <MathPuzzle /> {/* MathPuzzle component for engaging students with puzzles */}
                    </div>

                    {/* Fun Maths Fact Section */}
                    <div className="box">
                        <h3>Did you know?</h3>
                        <p>
                            Here’s a fun maths fact: The number zero didn’t always exist! Ancient civilizations like the
                            Romans didn’t have a symbol for zero. It wasn’t until much later that people started using zero,
                            and it changed the way we do maths forever.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Maths;
