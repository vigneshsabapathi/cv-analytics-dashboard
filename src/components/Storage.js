// File: src/components/Storage.js
// Filename: Storage.js
// Date modified: 2024-08-05
// Description: Storage component with horizontal tabs for Local Storage and Cloud Storage.
// This component includes options for batch uploading files or uploading folders with a visually appealing UI.

import React, { useState } from "react";
import {
  AiOutlineCloudUpload,
  AiOutlineFolderOpen,
  AiOutlineUpload,
} from "react-icons/ai";

/**
 * Storage Component
 * Provides UI for managing local storage and cloud storage with options to upload files or folders.
 * @returns {JSX.Element} Rendered Storage component
 */
const Storage = () => {
  const [activeTab, setActiveTab] = useState("Local Storage");

  // Tab content for Local Storage
  const renderLocalStorageContent = () => (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Local Storage</h2>
      <div className="flex flex-col items-center justify-center space-y-4">
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
          <AiOutlineUpload className="mr-2 text-2xl" />
          Batch Upload Files
        </button>
        <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
          <AiOutlineFolderOpen className="mr-2 text-2xl" />
          Upload Folder
        </button>
      </div>
    </div>
  );

  // Tab content for Cloud Storage
  const renderCloudStorageContent = () => (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Cloud Storage</h2>
      <div className="flex flex-col items-center justify-center space-y-4">
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
          <AiOutlineCloudUpload className="mr-2 text-2xl" />
          Batch Upload Files
        </button>
        <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
          <AiOutlineFolderOpen className="mr-2 text-2xl" />
          Upload Folder
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Storage Management
      </h1>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Horizontal Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            className={`w-1/2 text-center p-4 ${
              activeTab === "Local Storage"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("Local Storage")}
          >
            Local Storage
          </button>
          <button
            className={`w-1/2 text-center p-4 ${
              activeTab === "Cloud Storage"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("Cloud Storage")}
          >
            Cloud Storage
          </button>
        </div>
        <div className="p-6">
          {activeTab === "Local Storage" && renderLocalStorageContent()}
          {activeTab === "Cloud Storage" && renderCloudStorageContent()}
        </div>
      </div>
    </div>
  );
};

export default Storage;
