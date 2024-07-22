// File: src/components/CloudStorage.js
import React from "react";

const CloudStorage = () => (
  <div className="bg-white shadow rounded-lg p-6">
    <h1 className="text-2xl font-bold mb-4">Cloud Storage</h1>
    <p>Connected cloud storage services:</p>
    <ul className="list-disc pl-5">
      <li>Google Drive</li>
      <li>Dropbox</li>
      <li>OneDrive</li>
    </ul>
  </div>
);

export default CloudStorage;
