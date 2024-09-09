// src/App.js
import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import routing components
import Intro from './sections/Intro';
import English from './sections/English';
import Maths from './sections/Maths';
import Science from './sections/Science';
import FinalQuiz from './sections/FinalQuiz';
import ExtraContent from './sections/ExtraContent'; // Import the new page component

function App() {
    // State to control the sidebar visibility
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Function to handle smooth scrolling to sections
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll effect
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
                                    className={`toggle-button ${sidebarOpen ? 'open' : ''}`}
                                    onClick={() => setSidebarOpen(!sidebarOpen)}
                                >
                                    {sidebarOpen ? '✖' : '☰'}
                                </button>

                                {/* Sidebar Navigation */}
                                <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                                    <button className="close-button" onClick={() => setSidebarOpen(false)}>
                                        ✖
                                    </button>
                                    <button onClick={() => scrollToSection('intro')}>Intro</button>
                                    <button onClick={() => scrollToSection('english')}>English</button>
                                    <button onClick={() => scrollToSection('maths')}>Maths</button>
                                    <button onClick={() => scrollToSection('science')}>Science</button>
                                    <button onClick={() => scrollToSection('finalquiz')}>Quiz</button>
                                    <Link to="/extracontent" className="nav-button" onClick={() => setSidebarOpen(false)}>
                                        Extra Content
                                    </Link>
                                </div>

                                {/* Main Content Sections */}
                                <section id="intro">
                                    <Intro />
                                </section>
                                <section id="english">
                                    <English />
                                </section>
                                <section id="maths">
                                    <Maths />
                                </section>
                                <section id="science">
                                    <Science />
                                </section>
                                <section id="finalquiz">
                                    <FinalQuiz />
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
