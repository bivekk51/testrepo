import React from 'react';

const TechnicalDetails = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-center">Technical Details: Violence Detection System</h1>
      <p className="text-lg text-center mb-6">
        A deep dive into how the system processes video, detects violence, and triggers alerts.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Frontend Implementation</h2>
      <p className="mb-4">
        The frontend is built using React and includes a video recording component (<span className="font-bold">VideoRecorder.jsx</span>).
        It captures a video stream and uploads it to the backend with a unique filename based on the current timestamp.
      </p>
      <p className="mb-4">
        Once uploaded, the frontend continuously pings the <span className="font-bold">/results/&lt;file_name&gt;</span> endpoint to check for processed results.
        This ensures real-time feedback and alerts once the video is analyzed.
      </p>
      
      <div className="w-full h-72 flex items-center justify-center mb-6">
        <img src="/src/assets/frontend.png" alt="" className='h-72' />
      </div>

      <h2 className="text-2xl font-semibold mb-3">API Call Flow</h2>
      <p className="mb-4">
        <span className="font-bold">Video Upload:</span> The frontend sends a <span className="font-bold">POST</span> request to <span className="font-bold">/upload</span> with video data.
      </p>
      <p className="mb-4">
        <span className="font-bold">Polling for Results:</span> After uploading, it keeps calling <span className="font-bold">/results/&lt;file_name&gt;</span> every few seconds until the backend responds with a processed result.
      </p>
      <p className="mb-4">
        <span className="font-bold">Handling Response:</span> If the response contains <span className="font-bold">average_accuracy &gt; 0.5</span>, an alert is displayed, and a message is sent via Telegram, Email, or SMS.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Backend Implementation</h2>
      <p className="mb-4">
        The backend is built using Flask and consists of two main files:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li><span className="font-bold">server.py:</span> Handles video uploads, invokes the processing script, and returns results.</li>
        <li><span className="font-bold">video.py:</span> Loads the AI model and processes video frames to detect violent activities.</li>
      </ul>
      
      <div className="w-full h-40 bg-gray-200 flex items-center justify-center mb-6">
        <p className="text-gray-500">[Backend Processing Image]</p>
      </div>

      <h2 className="text-2xl font-semibold mb-3">Model Workflow</h2>
      <p className="mb-4">
        - The AI model processes the video frame by frame, checking for violent activities.
      </p>
      <p className="mb-4">
        - It assigns an accuracy score per frame and computes an average accuracy for the entire video.
      </p>
      <p className="mb-4">
        - If the <span className="font-bold">average_accuracy</span> exceeds <span className="font-bold">0.5</span>, an alert is triggered and a message is sent via the configured channel (Telegram, Email, or SMS).
      </p>
      
      <div className="w-full h-40 bg-gray-200 flex items-center justify-center mb-6">
        <p className="text-gray-500">[Model Workflow Image]</p>
      </div>

      <h2 className="text-2xl font-semibold mb-3">Alert Mechanism</h2>
      <p className="mb-4">
        If violence is detected with an average accuracy &gt; 0.5, an alert is sent to configured channels:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li><span className="font-bold">Telegram:</span> Sends a message to a configured bot.</li>
        <li><span className="font-bold">Email:</span> Can be configured to notify administrators.</li>
        <li><span className="font-bold">SMS:</span> Can integrate with Twilio or similar services.</li>
      </ul>
    </div>
  );
};

export default TechnicalDetails;
