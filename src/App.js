// src/App.js
import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import routing components
import Intro from './sections/Intro'; // Import Intro section component
import English from './sections/English'; // Import English section component
import Maths from './sections/Maths'; // Import Maths section component
import Science from './sections/Science'; // Import Science section component
import FinalQuiz from './sections/FinalQuiz'; // Import Final Quiz section component
import ExtraContent from './sections/ExtraContent'; // Import Extra Content page component

function App() {
    // State to control the sidebar visibility
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Function to handle smooth scrolling to specific sections on the main page
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId); // Get the section by ID
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
        }
        setSidebarOpen(false); // Close the sidebar after clicking
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Main content with sidebar navigation */}
                    <Route
                        path="/"
                        element={
                            <>
                                {/* Sidebar Toggle Button */}
                                <button
                                    className={`toggle-button ${sidebarOpen ? 'open' : ''}`} // Conditional class for styling the toggle button
                                    onClick={() => setSidebarOpen(!sidebarOpen)} // Toggle sidebar visibility
                                >
                                    {sidebarOpen ? '✖' : '☰'} {/* Display cross or hamburger icon based on sidebar state */}
                                </button>

                                {/* Sidebar Navigation */}
                                <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                                    {/* Close Button Inside Sidebar */}
                                    <button className="close-button" onClick={() => setSidebarOpen(false)}>
                                        ✖
                                    </button>
                                    {/* Navigation Buttons with Smooth Scroll Effect */}
                                    <button onClick={() => scrollToSection('intro')}>Intro</button>
                                    <button onClick={() => scrollToSection('english')}>English</button>
                                    <button onClick={() => scrollToSection('maths')}>Maths</button>
                                    <button onClick={() => scrollToSection('science')}>Science</button>
                                    <button onClick={() => scrollToSection('finalquiz')}>Quiz</button>
                                    {/* Link to Extra Content Page */}
                                    <Link to="/extracontent" className="nav-button" onClick={() => setSidebarOpen(false)}>
                                        Extra Content
                                    </Link>
                                </div>

                                {/* Main Content Sections */}
                                <section id="intro">
                                    <Intro /> {/* Renders the Intro section */}
                                </section>
                                <section id="english">
                                    <English /> {/* Renders the English section */}
                                </section>
                                <section id="maths">
                                    <Maths /> {/* Renders the Maths section */}
                                </section>
                                <section id="science">
                                    <Science /> {/* Renders the Science section */}
                                </section>
                                <section id="finalquiz">
                                    <FinalQuiz /> {/* Renders the Final Quiz section */}
                                </section>
                            </>
                        }
                    />

                    {/* Route for Extra Content without navigation */}
                    <Route path="/extracontent" element={<ExtraContent />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
