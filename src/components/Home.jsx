import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col  justify-between text-center  bg-gray-100">
      {/* Hero Section */}
      <div className="flex flex-col items-center mt-20 justify-center flex-grow">
        <motion.h1
          className="text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Alertify: AI-Powered Violence Detection
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 max-w-2xl mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A real-time security solution that detects violent activities using AI-powered video analysis.
        </motion.p>

        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link to="/about">
            <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
              Learn More
            </button>
          </Link>

          <Link to="/technicaldetails">
            <button className="px-6 py-2 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition">
              Know How It Works
            </button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="max-w-3xl mx-auto text-gray-800 mt-16 p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-4 ">The Idea Behind Alertify</h2>
        <p className="text-lg text-gray-700 justify-stretch">
          Violence in public spaces, schools, and events remains a major concern. Traditional security systems often lack real-time response capability.
          Alertify leverages artificial intelligence to detect violent activities and send instant alerts, allowing authorities to act swiftly and prevent escalation.
          It enhances surveillance efficiency by continuously monitoring video feeds and identifying threats without human intervention.
          By integrating AI-driven analytics, Alertify minimizes response time, ensuring safer environments and proactive security measures.
        </p>
      </motion.div>

    
      <motion.footer
        className="w-full py-6 mt-16 bg-gray-900 text-white text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-sm">&copy; 2025 Alertify. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

export default Home;
