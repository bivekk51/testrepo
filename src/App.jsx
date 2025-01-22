import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import VideoRecorder from './components/VideoRecorder';
import VideoUploader from './components/VideoUploader';

// About page component
const About = () => (
  <div className="flex flex-col items-center mt-8">
    <h2 className="text-3xl font-bold mb-4">About</h2>
    <p className="text-gray-700">
      This system helps to detect violent activities in videos and provides accuracy
      metrics. Ideal for security and monitoring systems.
    </p>
  </div>
);

const App = () => {
  // Registering the service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope: ', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed: ', error);
      });
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<VideoRecorder />} />
          <Route path="/about" element={<About />} />
          <Route path="/upload" element={<VideoUploader />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
