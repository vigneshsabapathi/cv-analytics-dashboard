// File: src/pages/Inbox.js
// Date modified: 2024-07-25
// Description: Inbox component that displays a list of messages
// This component includes a list of emails with options to filter, search, and perform actions on messages

import React, { useState } from "react";
import {
  AiOutlineStar,
  AiOutlineDelete,
  AiOutlineMail,
  AiOutlineSearch,
  AiOutlineFilter,
  AiOutlineReload,
  AiOutlineCheckCircle,
} from "react-icons/ai";

// Dummy data for inbox messages
const initialMessages = [
  {
    id: 1,
    from: "John Doe",
    subject: "Project Update",
    preview: "Hey, I wanted to give you a quick update on the project...",
    date: "2024-07-25",
    read: false,
    starred: false,
  },
  {
    id: 2,
    from: "Jane Smith",
    subject: "Meeting Reminder",
    preview: "Just a reminder that we have a team meeting scheduled for...",
    date: "2024-07-24",
    read: true,
    starred: true,
  },
  {
    id: 3,
    from: "Alex Johnson",
    subject: "New Task Assignment",
    preview:
      "I have assigned you a new task in our project management system...",
    date: "2024-07-23",
    read: false,
    starred: false,
  },
  {
    id: 4,
    from: "Emily Brown",
    subject: "Question about Data Entry",
    preview:
      "I had a quick question about the data entry process we discussed...",
    date: "2024-07-22",
    read: true,
    starred: false,
  },
  {
    id: 5,
    from: "Michael Wilson",
    subject: "Feedback Request",
    preview:
      "Could you please provide some feedback on the latest design iteration?",
    date: "2024-07-21",
    read: false,
    starred: true,
  },
];

const Inbox = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [filter, setFilter] = useState("all");

  const filteredMessages = messages.filter((message) => {
    if (filter === "all") return true;
    if (filter === "unread") return !message.read;
    if (filter === "starred") return message.starred;
    return true;
  });

  const toggleStar = (id) => {
    setMessages(
      messages.map((message) =>
        message.id === id ? { ...message, starred: !message.starred } : message
      )
    );
  };

  const markAsRead = (id) => {
    setMessages(
      messages.map((message) =>
        message.id === id ? { ...message, read: true } : message
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Inbox</h1>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 rounded ${
                filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("unread")}
              className={`px-3 py-1 rounded ${
                filter === "unread" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              Unread
            </button>
            <button
              onClick={() => setFilter("starred")}
              className={`px-3 py-1 rounded ${
                filter === "starred" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              Starred
            </button>
          </div>
          <div className="flex items-center">
            <AiOutlineSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search messages..."
              className="border rounded px-2 py-1"
            />
            <button className="ml-2 text-gray-500 hover:text-gray-700">
              <AiOutlineFilter />
            </button>
            <button className="ml-2 text-gray-500 hover:text-gray-700">
              <AiOutlineReload />
            </button>
          </div>
        </div>

        <ul>
          {filteredMessages.map((message) => (
            <li
              key={message.id}
              className={`border-b p-4 hover:bg-gray-50 ${
                !message.read ? "bg-blue-50" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <button
                    onClick={() => toggleStar(message.id)}
                    className={`mr-2 ${
                      message.starred ? "text-yellow-500" : "text-gray-400"
                    }`}
                  >
                    <AiOutlineStar />
                  </button>
                  <span className="font-semibold">{message.from}</span>
                </div>
                <span className="text-sm text-gray-500">{message.date}</span>
              </div>
              <div className="mt-2">
                <h3 className="font-medium">{message.subject}</h3>
                <p className="text-sm text-gray-600">{message.preview}</p>
              </div>
              <div className="mt-2 flex justify-end space-x-2">
                <button className="text-gray-500 hover:text-gray-700">
                  <AiOutlineDelete />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <AiOutlineMail />
                </button>
                {!message.read && (
                  <button
                    onClick={() => markAsRead(message.id)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <AiOutlineCheckCircle />
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Inbox;
