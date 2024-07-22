// File: src/components/Sidebar.js
// Date modified: 2024-07-15
// Description: Sidebar component for the Analytics Dashboard
//
// This component renders a responsive sidebar with navigation items.
// It supports both mobile and desktop layouts, with a toggle functionality for mobile view.
//
// Props:
//   - isOpen: Boolean indicating whether the sidebar is open in mobile view
//   - setIsOpen: Function to update the isOpen state
//
// Components:
//   - Sidebar: The main sidebar component
//
// Helper constants:
//   - menuItems: An array of objects representing the navigation items

import React from "react";
import { Link } from "react-router-dom";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

// Navigation menu items
const menuItems = [
  {
    name: "Dashboard",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    path: "/",
  },
  {
    name: "Master Data",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    path: "/master-data",
  },
  {
    name: "JD",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    subItems: [
      { name: "Open", path: "/jd/open" },
      { name: "InProgress", path: "/jd/in-progress" },
      { name: "Closed", path: "/jd/closed" },
    ],
  },
  {
    name: "Domain",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    path: "/domain",
  },
  {
    name: "Data Source",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    path: "/data-source",
  },
  {
    name: "Cloud Storage",
    icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
    path: "/cloud-storage",
  },
  {
    name: "Local Storage",
    icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
    path: "/local-storage",
  },
  {
    name: "LinkedIn",
    icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
    path: "/linkedin",
  },
  {
    name: "WebSource",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    path: "/websource",
  },
  {
    name: "Analytics",
    icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    path: "/analytics",
  },
  {
    name: "Generate Forms",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    subItems: [
      { name: "Simple", path: "/DynamicForm" },
      { name: "TypeForm", path: "/TypeformStyle" },
      { name: "ConversationalForm", path: "/jd/closed" },
    ],
  },
];

/**
 * MenuItem Component
 *
 * Renders a single menu item, which can be either a link or a dropdown
 *
 * @param {Object} props - Component props
 * @param {Object} props.item - The menu item object
 * @param {function} props.setIsOpen - Function to set the sidebar open state
 * @returns {React.ReactElement} Rendered MenuItem component
 */
const MenuItem = ({ item, setIsOpen }) => {
  const [isOpen, setIsItemOpen] = React.useState(false);

  if (item.subItems) {
    return (
      <div>
        <button
          className="flex items-center justify-between w-full px-4 py-2 text-gray-100 hover:bg-blue-700"
          onClick={() => setIsItemOpen(!isOpen)}
        >
          <div className="flex items-center">
            <svg
              className="w-6 h-6 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={item.icon}
              />
            </svg>
            {item.name}
          </div>
          <ChevronDownIcon
            className={`w-5 h-5 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div className="pl-8">
            {item.subItems.map((subItem, index) => (
              <Link
                key={index}
                to={subItem.path}
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-blue-700"
                onClick={() => setIsOpen(false)}
              >
                {subItem.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={item.path}
      className="flex items-center px-4 py-2 text-gray-100 hover:bg-blue-700"
      onClick={() => setIsOpen(false)}
    >
      <svg
        className="w-6 h-6 mr-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={item.icon}
        />
      </svg>
      {item.name}
    </Link>
  );
};

/**
 * Sidebar Component
 *
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Indicates if the sidebar is open on mobile
 * @param {function} props.setIsOpen - Function to set the isOpen state
 * @returns {React.ReactElement} Rendered Sidebar component
 */
const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <React.Fragment>
      {/* Main sidebar container */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-blue-600 text-white transition duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:inset-0`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between h-16 px-6 bg-blue-700">
          <span className="text-2xl font-semibold">Dashboard</span>
          <button
            className="p-1 lg:hidden"
            onClick={() => setIsOpen(false)}
            aria-label="Close sidebar"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation menu */}
        <nav className="mt-4">
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} setIsOpen={setIsOpen} />
          ))}
        </nav>
      </div>

      {/* Overlay for mobile view */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </React.Fragment>
  );
};

export default Sidebar;
