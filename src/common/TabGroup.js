// File: src/components/common/TabGroup.js
// Date modified: 2024-07-17
// Description: TabGroup component for creating reusable tab functionality
//
// This component renders a group of tabs and manages their selection state.
//
// Props:
//   - tabs: Array of strings, the labels for each tab
//   - selectedIndex: Number, the index of the currently selected tab
//   - onChange: Function, called when a tab is selected, receives the new index

import React from "react";

const TabGroup = ({ tabs, selectedIndex, onChange }) => {
  return (
    <div className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700
            ${
              index === selectedIndex
                ? "bg-white shadow"
                : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
            }`}
          onClick={() => onChange(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabGroup;
