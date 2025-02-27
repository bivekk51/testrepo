import React from 'react';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 text-gray-800">
     
      <h1 className="text-3xl font-bold mb-4 text-center">Violence Detection System</h1>
      <p className="text-lg text-center mb-6">
        An AI-powered system designed to detect violent activities in video files using machine learning.
      </p>
      
     
      <div className="w-full h-64 bg-gray-200 flex items-center justify-center mb-6">
        <p className="text-gray-500">[Main Image Placeholder]</p>
      </div>
      
      
      <h2 className="text-2xl font-semibold mb-3">Overview</h2>
      <p className="mb-4">
        The Violence Detection System is an innovative solution that leverages AI and deep learning to identify violent activities in videos. 
        It is designed to enhance safety and security in various environments by enabling real-time monitoring and analysis of video feeds.
      </p>
      
     
      <h2 className="text-2xl font-semibold mb-3">Use Cases</h2>
      <p className="mb-4">
        This system can be deployed in various settings to ensure security and rapid response to violent incidents:
      </p>
      
 
      <div className="mb-6">
        <h3 className="text-xl font-semibold">1. Schools & Educational Institutions</h3>
        <p>
          Schools can utilize this system to monitor hallways, classrooms, and playgrounds, ensuring student safety and preventing potential violence.
        </p>
      
        <div className="w-full h-40 bg-gray-200 flex items-center justify-center mt-3">
          <p className="text-gray-500">[School Monitoring Image]</p>
        </div>
      </div>
      

      <div className="mb-6">
        <h3 className="text-xl font-semibold">2. Public Spaces & Secluded Streets</h3>
        <p>
          The system can be integrated with CCTV cameras in parks, streets, and public areas to detect violent activities and alert security personnel.
        </p>
       
        <div className="w-full h-40 bg-gray-200 flex items-center justify-center mt-3">
          <p className="text-gray-500">[Public Space Image]</p>
        </div>
      </div>
      
   
      <div className="mb-6">
        <h3 className="text-xl font-semibold">3. Crowded Areas & Events</h3>
        <p>
          Large gatherings such as concerts, festivals, and stadiums can benefit from real-time video analysis to detect and prevent violent incidents.
        </p>
       
        <div className="w-full h-40 bg-gray-200 flex items-center justify-center mt-3">
          <p className="text-gray-500">[Crowded Area Image]</p>
        </div>
      </div>
      
     
      <h2 className="text-2xl font-semibold mb-3">How It Works</h2>
      <p className="mb-4">
        The system operates by analyzing video frames and applying machine learning models to detect violent activities. 
        It provides accuracy metrics and alerts when a certain threshold is exceeded.
      </p>
      
     
      <div className="w-full h-40 bg-gray-200 flex items-center justify-center mb-6">
        <p className="text-gray-500">[Workflow Diagram Image]</p>
      </div>
      
  
      <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Real-time video analysis using AI</li>
        <li>Supports webcam recording and file uploads</li>
        <li>Displays accuracy metrics and confidence scores</li>
        <li>Integrates with security systems for instant alerts</li>
        <li>Minimalistic UI for easy usage</li>
      </ul>
      
    
      <div className="w-full h-40 bg-gray-200 flex items-center justify-center mb-6">
        <p className="text-gray-500">[Features Overview Image]</p>
      </div>
      
     
      <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
      <p className="mb-4">
        The Violence Detection System is a step towards enhancing security and safety through AI-driven surveillance. 
        By integrating this system, institutions and public spaces can proactively prevent violence and respond swiftly to incidents.
      </p>
    </div>
  );
};

export default Home;
