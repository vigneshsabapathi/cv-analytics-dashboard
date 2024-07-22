// File: src/components/Topbar.js
// Date modified: 2024-07-16
// Description: Topbar component for the Analytics Dashboard
//
// This component renders a responsive topbar with additional navigation elements.
// It includes an upgrade button, search input, navigation icons, and a user avatar.
//
// Props:
//   - onMenuClick: Function to toggle the sidebar in mobile view

import React from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  PlusIcon,
  BellIcon,
  QuestionMarkCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import avatarImage from "../images/avatar.png";

const IconButton = ({ Icon, label }) => (
  <button
    className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </button>
);

const Topbar = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Mobile menu button */}
        <button
          className="p-2 rounded-md lg:hidden"
          onClick={onMenuClick}
          aria-label="Open sidebar"
        >
          <Bars3Icon className="w-6 h-6 text-gray-500" />
        </button>

        {/* Placeholder for left side if needed */}
        <div></div>

        {/* Right side elements */}
        <div className="flex items-center space-x-4">
          {/* Upgrade button */}
          <button className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            Upgrade
          </button>

          <IconButton Icon={PlusIcon} label="Add new" />
          <IconButton Icon={MagnifyingGlassIcon} label="Search" />
          <IconButton Icon={BellIcon} label="Notifications" />
          <IconButton Icon={QuestionMarkCircleIcon} label="Help" />
          <IconButton Icon={Cog6ToothIcon} label="Settings" />

          {/* User avatar */}
          <img
            className="w-8 h-8 rounded-full"
            src={avatarImage}
            alt="User avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
