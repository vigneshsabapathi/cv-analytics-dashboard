// File: src/pages/MasterData.js
// Date modified: 2024-07-31
// Description: MasterData component that displays a project-like interface for managing master data
// This component includes a list view of tasks grouped by status, with various action buttons and filters

import React, { useState } from "react";
import {
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineFlag,
  AiOutlineMessage,
  AiOutlineSetting,
  AiOutlineDown,
} from "react-icons/ai";

// Dummy data for tasks
const initialTasks = [
  {
    id: 1,
    name: "Update employee records",
    status: "IN PROGRESS",
    assignee: "John Doe",
    dueDate: "2024-08-01",
    priority: "High",
    comments: 2,
  },
  {
    id: 2,
    name: "Review new data entries",
    status: "TO DO",
    assignee: "Jane Smith",
    dueDate: "2024-08-05",
    priority: "Medium",
    comments: 0,
  },
  {
    id: 3,
    name: "Validate customer information",
    status: "TO DO",
    assignee: "Alice Johnson",
    dueDate: "2024-08-03",
    priority: "Low",
    comments: 1,
  },
];

const MasterData = () => {
  const [tasks] = useState(initialTasks);
  const [activeTab, setActiveTab] = useState("List");

  const renderTaskRow = (task) => (
    <div key={task.id} className="flex items-center py-2 border-b">
      <div className="w-1/3 flex items-center">
        <span
          className={`mr-2 w-4 h-4 rounded-full ${
            task.status === "IN PROGRESS" ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></span>
        {task.name}
      </div>
      <div className="w-1/6">
        <AiOutlineUser className="inline mr-1" />
        {task.assignee}
      </div>
      <div className="w-1/6">
        <AiOutlineCalendar className="inline mr-1" />
        {task.dueDate}
      </div>
      <div className="w-1/6">
        <AiOutlineFlag className="inline mr-1" />
        {task.priority}
      </div>
      <div className="w-1/6">
        <span
          className={`px-2 py-1 rounded ${
            task.status === "IN PROGRESS"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          {task.status}
        </span>
      </div>
      <div className="w-1/6 flex items-center">
        <AiOutlineMessage className="mr-1" />
        {task.comments}
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Top navigation bar */}
      <div className="bg-gray-100 p-4 flex items-center">
        <span className="text-blue-600 font-bold">Master Data</span>
        <span className="mx-2">/</span>
        <span className="text-gray-600">Projects</span>
        <span className="mx-2">/</span>
        <span className="text-gray-600">Project 2</span>
        <div className="ml-auto">
          <button className="bg-white text-gray-700 px-4 py-2 rounded mr-2">
            Share
          </button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded">
            Automations
          </button>
        </div>
      </div>

      {/* Second navigation bar */}
      <div className="bg-white border-b flex items-center p-4">
        <div className="flex space-x-4">
          {["Board", "List", "Calendar", "Graph", "Table"].map((tab) => (
            <button
              key={tab}
              className={`px-3 py-1 rounded ${
                activeTab === tab
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <button className="ml-4 text-blue-600">+ View</button>
        <div className="ml-auto flex items-center space-x-4">
          <AiOutlineSearch className="text-gray-500" />
          <button className="text-blue-600">Hide</button>
          <AiOutlineSetting className="text-gray-500" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
            <AiOutlinePlus className="mr-2" /> Add Task
          </button>
        </div>
      </div>

      {/* Task list view */}
      <div className="p-4">
        <div className="flex space-x-2 mb-4">
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded flex items-center">
            <span className="mr-1">Group:</span> Status{" "}
            <AiOutlineDown className="ml-1" />
          </button>
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
            Subtasks: Collapse all
          </button>
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
            Columns
          </button>
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
            Filter
          </button>
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
            Me mode
          </button>
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
            Assignees
          </button>
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
            Show closed
          </button>
          <button className="text-gray-500">Hide</button>
        </div>

        {/* IN PROGRESS section */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <span className="text-blue-600 font-bold mr-2">IN PROGRESS</span>
            <span className="bg-gray-200 px-2 py-1 rounded">1</span>
            <button className="ml-2 text-gray-500">...</button>
            <button className="ml-auto text-blue-600">+ Add Task</button>
          </div>
          {tasks
            .filter((task) => task.status === "IN PROGRESS")
            .map(renderTaskRow)}
        </div>

        {/* TO DO section */}
        <div>
          <div className="flex items-center mb-2">
            <span className="text-gray-600 font-bold mr-2">TO DO</span>
            <span className="bg-gray-200 px-2 py-1 rounded">2</span>
            <button className="ml-2 text-gray-500">...</button>
            <button className="ml-auto text-blue-600">+ Add Task</button>
          </div>
          {tasks.filter((task) => task.status === "TO DO").map(renderTaskRow)}
        </div>
      </div>
    </div>
  );
};

export default MasterData;
