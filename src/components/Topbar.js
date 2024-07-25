// File: src/components/TopBar.js
// Date modified: 2024-08-01
// Description: TopBar component that displays the top navigation bar and notification center
// This component includes search, AI assistant, upgrade button, user profile, and a popup menu for notifications

import React, { useState, useRef, useEffect } from "react";
import avatar from "../images/avatar.png";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlinePlus,
  AiOutlineBell,
  AiOutlineQuestionCircle,
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlineBgColors,
  AiOutlineNotification,
  AiOutlineKey,
  AiOutlineDownload,
  AiOutlineShareAlt,
  AiOutlineDelete,
  AiOutlineLogout,
  AiOutlineFile,
  AiOutlineMessage,
  AiOutlineExclamationCircle,
  AiOutlineClockCircle,
} from "react-icons/ai";

/**
 * TopBar component
 * @param {Object} props - Component props
 * @param {function} props.toggleSidebar - Function to toggle sidebar visibility
 */
const TopBar = ({ toggleSidebar }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeNotificationTab, setActiveNotificationTab] =
    useState("Work Items");
  const userMenuRef = useRef(null);
  const notificationRef = useRef(null);

  // Mock notifications data
  const notifications = {
    "Work Items": [
      {
        id: 1,
        type: "task",
        content: "New task assigned: Update user dashboard",
        time: "2 hours ago",
      },
      {
        id: 2,
        type: "comment",
        content: "John commented on your report",
        time: "5 hours ago",
      },
    ],
    Favorites: [
      {
        id: 3,
        type: "project",
        content: "Project X deadline approaching",
        time: "1 day ago",
      },
    ],
    System: [
      {
        id: 4,
        type: "update",
        content: "System maintenance scheduled for tonight",
        time: "3 hours ago",
      },
      {
        id: 5,
        type: "alert",
        content: "Security update available",
        time: "1 day ago",
      },
    ],
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /**
   * Renders a menu item for the user profile dropdown
   * @param {Object} props - MenuItem props
   * @param {React.ComponentType} props.icon - Icon component
   * @param {string} props.text - Menu item text
   */
  const MenuItem = ({ icon: Icon, text }) => (
    <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
      <Icon className="mr-2" />
      <span>{text}</span>
    </div>
  );

  /**
   * Renders the icon for a notification based on its type
   * @param {string} type - Notification type
   * @returns {React.ReactElement} Icon component
   */
  const NotificationIcon = ({ type }) => {
    switch (type) {
      case "task":
        return <AiOutlineFile className="text-blue-500" />;
      case "comment":
        return <AiOutlineMessage className="text-green-500" />;
      case "project":
        return <AiOutlineClockCircle className="text-orange-500" />;
      case "update":
        return <AiOutlineNotification className="text-purple-500" />;
      case "alert":
        return <AiOutlineExclamationCircle className="text-red-500" />;
      default:
        return <AiOutlineBell className="text-gray-500" />;
    }
  };

  /**
   * Renders the notification center
   * @returns {React.ReactElement} Notification center component
   */
  const NotificationCenter = () => (
    <div
      className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-10"
      ref={notificationRef}
    >
      <div className="flex border-b">
        {["Work Items", "Favorites", "System"].map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-2 ${
              activeNotificationTab === tab ? "bg-gray-100 font-semibold" : ""
            }`}
            onClick={() => setActiveNotificationTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2">Assigned to me</h3>
        <div className="border-t pt-2">
          {notifications[activeNotificationTab].map((notification) => (
            <div key={notification.id} className="flex items-start py-2">
              <NotificationIcon type={notification.type} />
              <div className="ml-3">
                <p className="text-sm">{notification.content}</p>
                <p className="text-xs text-gray-500">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left section */}
          <div className="flex items-center">
            <button onClick={toggleSidebar} className="mr-4">
              <AiOutlineMenu className="h-6 w-6" />
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-200 text-gray-800 placeholder-gray-500 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <AiOutlineSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
            </div>
            <button className="ml-4 flex items-center bg-gray-200 rounded-md px-3 py-2">
              <span className="mr-2">AI</span>
            </button>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 mr-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Upgrade
            </button>
            <button className="text-gray-800 hover:text-gray-600">
              <AiOutlinePlus className="h-6 w-6" />
            </button>
            <div className="relative">
              <button
                className="text-gray-800 hover:text-gray-600"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <AiOutlineBell className="h-6 w-6" />
              </button>
              {showNotifications && <NotificationCenter />}
            </div>
            <button className="text-gray-800 hover:text-gray-600">
              <AiOutlineQuestionCircle className="h-6 w-6" />
            </button>
            <button className="text-gray-800 hover:text-gray-600">
              <AiOutlineSetting className="h-6 w-6" />
            </button>
            <div className="relative" ref={userMenuRef}>
              <img
                className="h-8 w-8 rounded-full cursor-pointer"
                src={avatar}
                alt="User avatar"
                onClick={() => setShowUserMenu(!showUserMenu)}
              />
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <MenuItem icon={AiOutlineUser} text="Profile" />
                  <MenuItem icon={AiOutlineBgColors} text="Themes" />
                  <MenuItem icon={AiOutlineSetting} text="Settings" />
                  <MenuItem
                    icon={AiOutlineNotification}
                    text="Notification Settings"
                  />
                  <div className="border-t border-gray-200 my-2"></div>
                  <MenuItem icon={AiOutlineKey} text="Keyboard shortcuts" />
                  <MenuItem icon={AiOutlineDownload} text="Download Apps" />
                  <MenuItem icon={AiOutlineShareAlt} text="Referrals" />
                  <MenuItem icon={AiOutlineQuestionCircle} text="Help" />
                  <div className="border-t border-gray-200 my-2"></div>
                  <MenuItem icon={AiOutlineDelete} text="Trash" />
                  <MenuItem icon={AiOutlineLogout} text="Log out" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
