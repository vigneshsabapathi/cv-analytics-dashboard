// File: src/components/Dashboard/widgets/MostViewedItem.js
// Date modified: 2024-07-17
// Description: MostViewedItem component for displaying a list of most viewed items
//
// This component renders a card with a list of items and their view counts.
//
// Props:
//   - items: Array of objects, each containing 'name' and 'views' properties

import React from "react";
import { ChartBarIcon } from "@heroicons/react/24/outline";

const MostViewedItem = ({ items = [] }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <ChartBarIcon className="w-5 h-5 mr-2" />
        Most Viewed Items
      </h3>
      {items.map((item, index) => (
        <div key={index} className="flex justify-between items-center mb-2">
          <span>{item.name}</span>
          <span className="text-sm text-gray-500">{item.views} views</span>
        </div>
      ))}
    </div>
  );
};

export default MostViewedItem;
