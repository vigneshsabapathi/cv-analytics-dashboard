// File: src/pages/Docs.js
// Date modified: 2024-07-25
// Description: Docs component that displays a list of documents
// This component includes a grid view of documents with options to search, filter, and perform actions on documents

import React, { useState } from "react";
import {
  AiOutlineFile,
  AiOutlineFileText,
  AiOutlineFilePdf,
  AiOutlineFileExcel,
  AiOutlineFileWord,
  AiOutlineFileImage,
  AiOutlineSearch,
  AiOutlineFilter,
  AiOutlinePlus,
  AiOutlineDelete,
  AiOutlineShareAlt,
  AiOutlineDownload,
} from "react-icons/ai";

// Dummy data for documents
const initialDocuments = [
  {
    id: 1,
    name: "Project Proposal",
    type: "doc",
    lastModified: "2024-07-25",
    size: "2.5 MB",
  },
  {
    id: 2,
    name: "Financial Report",
    type: "xlsx",
    lastModified: "2024-07-24",
    size: "1.8 MB",
  },
  {
    id: 3,
    name: "Meeting Minutes",
    type: "pdf",
    lastModified: "2024-07-23",
    size: "567 KB",
  },
  {
    id: 4,
    name: "Product Roadmap",
    type: "ppt",
    lastModified: "2024-07-22",
    size: "3.2 MB",
  },
  {
    id: 5,
    name: "User Research",
    type: "txt",
    lastModified: "2024-07-21",
    size: "125 KB",
  },
  {
    id: 6,
    name: "Logo Design",
    type: "png",
    lastModified: "2024-07-20",
    size: "4.1 MB",
  },
];

const Docs = () => {
  const [documents] = useState(initialDocuments); // Removed setDocuments
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getFileIcon = (type) => {
    switch (type) {
      case "doc":
      case "docx":
        return <AiOutlineFileWord className="text-blue-500" />;
      case "xlsx":
        return <AiOutlineFileExcel className="text-green-500" />;
      case "pdf":
        return <AiOutlineFilePdf className="text-red-500" />;
      case "txt":
        return <AiOutlineFileText className="text-gray-500" />;
      case "png":
      case "jpg":
      case "jpeg":
        return <AiOutlineFileImage className="text-purple-500" />;
      default:
        return <AiOutlineFile className="text-gray-500" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Documents</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center">
          <AiOutlinePlus className="mr-2" /> New Document
        </button>
      </div>

      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center">
          <AiOutlineSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search documents..."
            className="border rounded px-2 py-1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <AiOutlineFilter className="text-xl" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredDocuments.map((doc) => (
          <div
            key={doc.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              {getFileIcon(doc.type)}
              <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-gray-700">
                  <AiOutlineShareAlt />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <AiOutlineDownload />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 truncate">{doc.name}</h3>
            <p className="text-sm text-gray-500">
              Last modified: {doc.lastModified}
            </p>
            <p className="text-sm text-gray-500">Size: {doc.size}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Docs;
