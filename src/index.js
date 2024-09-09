// src/index.js
import React from 'react'; // Import React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering the React app
import App from './App'; // Import the main App component
import './index.css'; // Import the main CSS file for global styles

// Create the root element to render the React app
const root = ReactDOM.createRoot(document.getElementById('root')); // Targets the HTML element with the id 'root'
root.render(
    <React.StrictMode>
        <App /> {/* Renders the main App component wrapped in StrictMode for highlighting potential issues */}
    </React.StrictMode>
);

// Service Worker registration for PWA functionality
// Checks if the browser supports service workers
if ('serviceWorker' in navigator) {
    // Listens for the window 'load' event to register the service worker
    window.addEventListener('load', () => {
        // Registers the service worker located at '/service-worker.js'
        navigator.serviceWorker.register('/service-worker.js').then(
            (registration) => {
                // Logs a success message and the scope of the registered service worker
                console.log('Service Worker registered with scope:', registration.scope);
            },
            (error) => {
                // Logs an error message if the service worker registration fails
                console.log('Service Worker registration failed:', error);
            }
        );
    });
}
