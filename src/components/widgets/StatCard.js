// File: src/components/Dashboard/widgets/StatCard.js
// Date modified: 2024-07-17
// Description: StatCard component for displaying key statistics
//
// This component renders a card with a statistic, including a title, value, and optional icon.
//
// Props:
//   - title: String, the title of the statistic
//   - value: String or Number, the main value to display
//   - subtext: String, additional information to display below the value
//   - icon: React component, an optional icon to display
//   - change: Number, an optional percentage change to display

import React from "react";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";

const StatCard = ({ title, value, subtext, icon: Icon, change }) => {
  const isPositive = change >= 0;
  const changeColor = isPositive ? "text-green-600" : "text-red-600";
  const bgColor = "bg-blue-100";

  return (
    <div className="rounded-lg overflow-hidden shadow-sm">
      <div className={`${bgColor} px-4 py-2`}>
        <h2 className="text-sm font-medium text-blue-800 uppercase">{title}</h2>
      </div>
      <div className="bg-white px-4 py-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold text-gray-800">{value}</span>
          {Icon && <Icon className="w-6 h-6 text-blue-500" />}
        </div>
        <div className="flex items-center text-sm">
          {change != null && (
            <span
              className={`font-medium ${changeColor} flex items-center mr-2`}
            >
              {isPositive ? (
                <ArrowUpIcon className="w-4 h-4 mr-1" />
              ) : (
                <ArrowDownIcon className="w-4 h-4 mr-1" />
              )}
              {Math.abs(change)}%
            </span>
          )}
          <span className="text-gray-500">{subtext}</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
