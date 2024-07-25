// File: src/pages/Clips.js
// Date modified: 2024-07-25
// Description: Clips component for managing and viewing video clips
// This component displays a grid of video thumbnails with options to play, edit, and manage clips

import React, { useState } from "react";
import {
  AiOutlineVideoCameraAdd,
  AiOutlineSearch,
  AiOutlineFilter,
  AiOutlinePlayCircle,
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineShareAlt,
  AiOutlineClockCircle,
  AiOutlineEye,
} from "react-icons/ai";

// Dummy data for video clips
const initialClips = [
  {
    id: 1,
    title: "Product Demo",
    duration: "2:30",
    views: 1250,
    thumbnail: "https://via.placeholder.com/300x200?text=Product+Demo",
    date: "2024-07-20",
  },
  {
    id: 2,
    title: "Team Meeting Highlights",
    duration: "5:45",
    views: 890,
    thumbnail: "https://via.placeholder.com/300x200?text=Team+Meeting",
    date: "2024-07-18",
  },
  {
    id: 3,
    title: "Software Tutorial",
    duration: "10:15",
    views: 3500,
    thumbnail: "https://via.placeholder.com/300x200?text=Software+Tutorial",
    date: "2024-07-15",
  },
  {
    id: 4,
    title: "Client Presentation",
    duration: "7:20",
    views: 750,
    thumbnail: "https://via.placeholder.com/300x200?text=Client+Presentation",
    date: "2024-07-12",
  },
  {
    id: 5,
    title: "Bug Fix Walkthrough",
    duration: "3:55",
    views: 620,
    thumbnail: "https://via.placeholder.com/300x200?text=Bug+Fix+Walkthrough",
    date: "2024-07-10",
  },
  {
    id: 6,
    title: "New Feature Overview",
    duration: "4:40",
    views: 1800,
    thumbnail: "https://via.placeholder.com/300x200?text=New+Feature+Overview",
    date: "2024-07-08",
  },
];

const Clips = () => {
  const [clips, setClips] = useState(initialClips);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClips = clips.filter((clip) =>
    clip.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setClips(clips.filter((clip) => clip.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Video Clips</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center">
          <AiOutlineVideoCameraAdd className="mr-2" /> New Clip
        </button>
      </div>

      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center">
          <AiOutlineSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search clips..."
            className="border rounded px-2 py-1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <AiOutlineFilter className="text-xl" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClips.map((clip) => (
          <div
            key={clip.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative">
              <img
                src={clip.thumbnail}
                alt={clip.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <button className="text-white text-5xl">
                  <AiOutlinePlayCircle />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{clip.title}</h3>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span className="flex items-center">
                  <AiOutlineClockCircle className="mr-1" /> {clip.duration}
                </span>
                <span className="flex items-center">
                  <AiOutlineEye className="mr-1" /> {clip.views} views
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-4">Added on {clip.date}</p>
              <div className="flex justify-between">
                <button className="text-blue-500 hover:text-blue-700">
                  <AiOutlineEdit />
                </button>
                <button className="text-green-500 hover:text-green-700">
                  <AiOutlineShareAlt />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(clip.id)}
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clips;
