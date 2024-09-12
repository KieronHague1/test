// src/sections/Science.js
import React from 'react';
import ScienceGallery from "./ScienceGallery"; // Import the ScienceGallery component for displaying science-related content
import scienceVideo from "../assets/videos_compressed/microscope.mp4"; // Import the science-related video

function Science() {
    return (
        <div>
            {/* Section Title */}
            <h1 id="science" className="section-title">Science</h1>
            <div className="section">
                {/* Large Box Section for Main Science Content */}
                <div className="box-large">
                    <h3>What is Science?</h3>
                    <p>
                        Science is all about exploring the world around us, from the tiniest bugs to the vast stars in
                        the sky. It helps us understand how things work, why the sky is blue, and what makes plants grow.
                        Science is everywhere—in the air we breathe, the food we eat, and even in the games we play!
                    </p>

                    {/* Video Element to Display the Science Video */}
                    <video className="box-video" controls>
                        <source src={scienceVideo} type="video/mp4" />
                    </video>

                    <h3>Why Learning Science is Fun and Important</h3>
                    <p>
                        Learning science is like being a detective—discovering how things work, experimenting with cool
                        stuff, and asking big questions. It’s fun because you get to do exciting experiments, watch things
                        fizz and bubble, and explore amazing facts about animals, space, and more. Science makes the world
                        a big, fun playground for curious minds—let’s explore it together!
                    </p>
                </div>

                {/* Small Boxes for Interactive Content and Fun Facts */}
                <div className="box-small">
                    {/* Interactive Science Gallery */}
                    <div className="box">
                        <ScienceGallery /> {/* ScienceGallery component for engaging students with visuals */}
                    </div>

                    {/* Fun Science Fact Section */}
                    <div className="box">
                        <h3>Did you know?</h3>
                        <p>
                            Here’s a cool science fact: The tallest tree in the world is called Hyperion, and it’s taller
                            than the Statue of Liberty! It’s a giant redwood tree in California, and it stands over 380 feet
                            tall. Trees like Hyperion are amazing examples of how incredible nature can be—science helps us
                            discover these awesome wonders!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Science;

