// File: src/components/Dashboard/widgets/MessageList.js
// Date modified: 2024-07-17
// Description: MessageList component for displaying a list of messages
//
// This component renders a card with a list of messages and their details.
//
// Props:
//   - messages: Array of objects, each containing 'name', 'subject', and 'status' properties

import React from "react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

const MessageList = ({ messages = [] }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
        Messages
      </h3>
      {messages.map((message, index) => (
        <div key={index} className="mb-2">
          <p className="font-semibold">{message.name}</p>
          <p className="text-sm text-gray-600">{message.subject}</p>
          <p className="text-sm text-gray-500">{message.status}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
