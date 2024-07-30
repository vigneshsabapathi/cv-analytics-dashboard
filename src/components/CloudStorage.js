// Filename: CloudStorage.js
// Date modified: 2024-08-05
// Description: Cloud Storage component displaying various cloud storage options.
// This component renders vertical tabs for different cloud storage sources and their details.

import React, { useState } from "react";
import {
  AiOutlineDropbox,
  AiOutlineGoogle,
  AiOutlineAmazon,
  AiOutlineCloudServer,
} from "react-icons/ai";

/**
 * CloudStorage Component
 * Displays information about various cloud storage sources using vertical tabs.
 * @returns {JSX.Element} Rendered CloudStorage component
 */
const CloudStorage = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Cloud storage sources data
  const cloudSources = [
    {
      name: "Dropbox",
      icon: AiOutlineDropbox,
      description:
        "Secure file sharing and storage solution with easy collaboration features.",
      features: [
        "File Synchronization",
        "Version History",
        "Team Collaboration",
        "Mobile Access",
      ],
      capacity: "2TB - Unlimited",
      price: "From $9.99/month",
    },
    {
      name: "Google Drive",
      icon: AiOutlineGoogle,
      description:
        "Cloud storage integrated with Google Workspace, offering real-time collaboration.",
      features: [
        "Real-time Editing",
        "AI-powered Search",
        "Google Docs Integration",
        "Secure Sharing",
      ],
      capacity: "15GB - 30TB",
      price: "From Free to $299.99/month",
    },
    {
      name: "Amazon S3",
      icon: AiOutlineAmazon,
      description:
        "Scalable object storage with industry-leading durability and availability.",
      features: [
        "99.999999999% Durability",
        "Versioning",
        "Lifecycle Management",
        "Data Transfer Acceleration",
      ],
      capacity: "Unlimited",
      price: "Pay only for what you use",
    },
    {
      name: "Azure Blob Storage",
      icon: AiOutlineCloudServer,
      description:
        "Microsoft's object storage solution for the cloud, optimized for storing massive amounts of unstructured data.",
      features: [
        "Hot, Cool, and Archive tiers",
        "Data Lake Storage",
        "Strong Consistency",
        "Disaster Recovery",
      ],
      capacity: "Up to 500TB per storage account",
      price: "Varies based on usage and tier",
    },
    {
      name: "OneDrive",
      icon: AiOutlineCloudServer,
      description:
        "Microsoft's file hosting service integrated with Office 365 for personal and business use.",
      features: [
        "Office Integration",
        "File Sharing",
        "Personal Vault",
        "Files On-Demand",
      ],
      capacity: "5GB - 6TB",
      price: "From Free to $9.99/month",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Internet data sources
      </h1>
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Vertical Tabs */}
        <div className="w-1/4 bg-gray-200">
          {cloudSources.map((source, index) => (
            <button
              key={index}
              className={`w-full text-left p-4 flex items-center ${
                activeTab === index
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {React.createElement(source.icon, { className: "mr-3 text-2xl" })}
              <span>{source.name}</span>
            </button>
          ))}
        </div>
        {/* Content Area */}
        <div className="w-3/4 p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            {React.createElement(cloudSources[activeTab].icon, {
              className: "mr-3 text-3xl text-blue-500",
            })}
            {cloudSources[activeTab].name}
          </h2>
          <p className="mb-4 text-gray-600">
            {cloudSources[activeTab].description}
          </p>
          <h3 className="font-semibold mb-2 text-lg">Key Features:</h3>
          <ul className="list-disc list-inside mb-4 text-gray-600">
            {cloudSources[activeTab].features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="flex justify-between text-gray-600">
            <p>
              <strong>Capacity:</strong> {cloudSources[activeTab].capacity}
            </p>
            <p>
              <strong>Pricing:</strong> {cloudSources[activeTab].price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudStorage;
