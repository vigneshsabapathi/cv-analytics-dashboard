// File: src/components/Sidebar.js
// Date modified: 2024-07-31
// Description: Sidebar component for the application
// This component renders a collapsible sidebar with navigation items,
// Team Space functionality, and popup menus for additional options.
// The popup menus are positioned above the click point for better visibility.

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFile,
  AiOutlineDashboard,
  AiOutlinePlus,
  AiOutlineSetting,
  AiOutlineUserAdd,
  AiOutlineQuestionCircle,
  AiOutlineOrderedList,
  AiOutlineForm,
  AiOutlineEdit,
  AiOutlineFolder,
  AiOutlineImport,
  AiOutlineFileExcel,
  AiOutlineFileText,
  AiOutlineAppstore,
} from "react-icons/ai";

/**
 * Sidebar component
 * @param {Object} props - Component props
 * @param {boolean} props.collapsed - Whether the sidebar is collapsed
 * @returns {JSX.Element} Rendered Sidebar component
 */
const Sidebar = ({ collapsed }) => {
  // State for expanded menu items
  const [expandedItems, setExpandedItems] = useState({});
  // State for Team Space menu visibility
  const [showTeamSpaceMenu, setShowTeamSpaceMenu] = useState(false);
  // State for Import menu visibility
  const [showImportMenu, setShowImportMenu] = useState(false);
  // State for Team Space menu position
  const [teamSpaceMenuPosition, setTeamSpaceMenuPosition] = useState({
    top: 0,
    left: 0,
  });
  // State for Import menu position
  const [importMenuPosition, setImportMenuPosition] = useState({
    top: 0,
    left: 0,
  });

  // Refs for handling click outside of menus
  const sidebarRef = useRef(null);
  const teamSpaceMenuRef = useRef(null);
  const importMenuRef = useRef(null);
  const teamSpaceButtonRef = useRef(null);

  // Effect for handling clicks outside of menus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        teamSpaceMenuRef.current &&
        !teamSpaceMenuRef.current.contains(event.target) &&
        !teamSpaceButtonRef.current.contains(event.target)
      ) {
        setShowTeamSpaceMenu(false);
      }
      if (
        importMenuRef.current &&
        !importMenuRef.current.contains(event.target)
      ) {
        setShowImportMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /**
   * Handles click on Team Space button
   * Updates menu position and toggles visibility
   * @param {React.MouseEvent} event - The click event
   */
  const handleTeamSpaceClick = (event) => {
    event.preventDefault();
    const sidebarRect = sidebarRef.current.getBoundingClientRect();
    const buttonRect = event.currentTarget.getBoundingClientRect();

    const top = buttonRect.top - sidebarRect.top - 200; // 200px above click point
    const left = buttonRect.right - sidebarRect.left + 10; // 10px to the right of the button

    setTeamSpaceMenuPosition({ top, left });
    setShowTeamSpaceMenu(!showTeamSpaceMenu);
  };

  /**
   * Handles click on Import menu item
   * Updates menu position and toggles visibility
   * @param {React.MouseEvent} event - The click event
   */
  const handleImportClick = (event) => {
    event.stopPropagation();
    const menuItemRect = event.currentTarget.getBoundingClientRect();
    const sidebarRect = sidebarRef.current.getBoundingClientRect();

    const top = menuItemRect.top - sidebarRect.top - 100; // 100px above click point
    const left = menuItemRect.right - sidebarRect.left + 10; // 10px to the right of the menu item

    setImportMenuPosition({ top, left });
    setShowImportMenu(!showImportMenu);
  };

  // Main menu items
  const mainMenuItems = [
    { icon: AiOutlineHome, text: "Home", path: "/" },
    {
      icon: AiOutlineFile,
      text: "Master Data",
      path: "/master-data",
      subItems: [
        { text: "Domain", path: "/domain" },
        { text: "CV", path: "/cv" },
      ],
    },
    {
      icon: AiOutlineFile,
      text: "Data sources",
      path: "/data-sources",
      subItems: [
        { text: "Storage", path: "/storage" },
        { text: "Internet data sources", path: "/cloud-storage" },
      ],
    },
    {
      icon: AiOutlineDashboard,
      text: "Pipeline management",
      path: "/pipeline-management",
      subItems: [
        { text: "Candidate Pipeline", path: "/candidate" },
        { text: "CV Pipeline", path: "/cv-analytics" },
        { text: "JD Pipeline", path: "/master-data/jd" },
      ],
    },
    {
      icon: AiOutlineFile,
      text: "Integrations",
      path: "/integrations",
      subItems: [
        { text: "LinkedIn", path: "/linkedin" },
        { text: "Naukri", path: "/naukri" },
        { text: "Zoho", path: "/zoho" },
        { text: "Workday", path: "/workday" },
      ],
    },
    {
      icon: AiOutlineFile,
      text: "Analytics",
      path: "/analytics",
      subItems: [
        { text: "Analytics 1", path: "/analytics-1" },
        { text: "Analytics 2", path: "/analytics-2" },
        { text: "Analytics 3", path: "/analytics-3" },
      ],
    },
    {
      icon: AiOutlineFile,
      text: "Engagements",
      path: "/engagements",
      subItems: [
        { text: "Clients", path: "/clients" },
        { text: "Orgs", path: "/orgs" },
      ],
    },
    {
      icon: AiOutlineFile,
      text: "Create Forms",
      path: "/create-forms",
    },
  ];

  /**
   * Toggles the expanded state of a menu item
   * @param {string} itemText - The text of the menu item to toggle
   */
  const toggleExpand = (itemText) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemText]: !prev[itemText],
    }));
  };

  /**
   * Renders a menu item
   * @param {Object} item - Menu item object
   * @param {number} index - Index of the menu item
   * @returns {JSX.Element} Rendered menu item
   */
  const renderMenuItem = (item, index) => (
    <div key={index}>
      <Link
        to={item.path}
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
        onClick={() => item.subItems && toggleExpand(item.text)}
      >
        <item.icon className="w-5 h-5 mr-3" />
        {!collapsed && <span>{item.text}</span>}
        {!collapsed && item.subItems && <AiOutlinePlus className="ml-auto" />}
      </Link>
      {item.subItems && expandedItems[item.text] && !collapsed && (
        <div className="ml-4">
          {item.subItems.map((subItem, subIndex) => (
            <Link
              key={subIndex}
              to={subItem.path}
              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200"
            >
              {subItem.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  /**
   * MenuItem component for popup menus
   * @param {Object} props - Component props
   * @param {Function} props.icon - Icon component
   * @param {string} props.text - Menu item text
   * @param {Function} props.onClick - Click handler function
   * @returns {JSX.Element} Rendered MenuItem component
   */
  const MenuItem = ({ icon: Icon, text, onClick }) => (
    <div
      className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer"
      onClick={onClick}
    >
      <Icon className="mr-2" />
      <span>{text}</span>
    </div>
  );

  /**
   * TeamSpaceMenu component
   * @returns {JSX.Element} Rendered TeamSpaceMenu component
   */
  const TeamSpaceMenu = () => (
    <div
      ref={teamSpaceMenuRef}
      className="absolute bg-white rounded-md shadow-lg z-10"
      style={{
        top: `${teamSpaceMenuPosition.top}px`,
        left: `${teamSpaceMenuPosition.left}px`,
        width: "200px",
      }}
    >
      <MenuItem icon={AiOutlineOrderedList} text="List" />
      <div className="border-t border-gray-200 my-2"></div>
      <MenuItem icon={AiOutlineFile} text="Doc" />
      <MenuItem icon={AiOutlineForm} text="Form" />
      <MenuItem icon={AiOutlineEdit} text="Whiteboard" />
      <div className="border-t border-gray-200 my-2"></div>
      <MenuItem icon={AiOutlineFolder} text="Folder" />
      <div className="border-t border-gray-200 my-2"></div>
      <MenuItem icon={AiOutlineForm} text="Form template" />
      <MenuItem
        icon={AiOutlineImport}
        text="Import      ->"
        onClick={handleImportClick}
      />
    </div>
  );

  /**
   * ImportMenu component
   * @returns {JSX.Element} Rendered ImportMenu component
   */
  const ImportMenu = () => (
    <div
      ref={importMenuRef}
      className="absolute bg-white rounded-md shadow-lg z-20"
      style={{
        top: `${importMenuPosition.top}px`,
        left: `${importMenuPosition.left}px`,
        width: "200px",
      }}
    >
      <MenuItem icon={AiOutlineFileExcel} text="Spreadsheet files" />
      <MenuItem icon={AiOutlineFileText} text="Document Files" />
      <MenuItem icon={AiOutlineAppstore} text="Asana" />
      <MenuItem icon={AiOutlineAppstore} text="Basecamp" />
      <MenuItem icon={AiOutlineAppstore} text="Confluence" />
      <MenuItem icon={AiOutlineAppstore} text="Jira" />
      {/* <MenuItem icon={AiOutlineAppstore} text="Monday" />
      <MenuItem icon={AiOutlineAppstore} text="Notion" />
      <MenuItem icon={AiOutlineAppstore} text="Todoist" />
      <MenuItem icon={AiOutlineAppstore} text="Trello" />
      <MenuItem icon={AiOutlineAppstore} text="Wrike" /> */}
    </div>
  );

  return (
    <div
      ref={sidebarRef}
      className={`bg-white text-gray-800 flex flex-col h-screen ${
        collapsed ? "w-16" : "w-64"
      } transition-all duration-300 relative`}
    >
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h1 className={`text-xl font-bold ${collapsed ? "hidden" : ""}`}>
            TrustGrid
          </h1>
        </div>
        {mainMenuItems.map(renderMenuItem)}
        <div className="border-t border-gray-300 my-4"></div>
        <div className="px-4 py-2 text-sm font-semibold text-gray-600">
          Favorites
        </div>
        <div className="px-4 py-2 text-sm text-gray-600">Spaces</div>
        <div className="px-4 py-2 text-sm font-semibold text-gray-600">
          Everything
        </div>
        <div className="flex items-center justify-between px-4 py-2 text-sm font-semibold text-gray-600">
          <span>Domain</span>
          {!collapsed && (
            <button
              ref={teamSpaceButtonRef}
              className="focus:outline-none"
              onClick={handleTeamSpaceClick}
            >
              <AiOutlinePlus className="w-4 h-4 cursor-pointer" />
            </button>
          )}
        </div>
        {showTeamSpaceMenu && <TeamSpaceMenu />}
        {showImportMenu && <ImportMenu />}
        <div className="ml-4">
          <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-600">
            <span>JD List</span>
            {!collapsed && <AiOutlinePlus className="w-4 h-4" />}
          </div>
          <Link
            to="/project-2"
            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200"
          >
            JD List 2
          </Link>
          <Link
            to="/project-1"
            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200"
          >
            JD List 1
          </Link>
          <Link
            to="/project-notes"
            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200"
          >
            JD List Notes
          </Link>
        </div>
        <Link
          to="/view-spaces"
          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200"
        >
          View all Spaces
        </Link>
        <Link
          to="/create-space"
          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200"
        >
          + Create Space
        </Link>
      </div>
      <div className="border-t border-gray-300 py-2">
        <Link
          to="/settings"
          className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-200"
        >
          <AiOutlineSetting className="w-5 h-5 mr-3" />
          {!collapsed && <span>Settings</span>}
        </Link>
        <div className="border-t border-gray-200 my-2"></div>
        <div className="flex justify-around items-center px-4 py-2">
          <Link
            to="/invite"
            className="flex items-center text-sm text-gray-600 hover:text-gray-800"
          >
            <AiOutlineUserAdd className="w-5 h-5 mr-1" />
            {!collapsed && <span>Invite</span>}
          </Link>
          {!collapsed && <span className="text-gray-300">|</span>}
          <Link
            to="/help"
            className="flex items-center text-sm text-gray-600 hover:text-gray-800"
          >
            <AiOutlineQuestionCircle className="w-5 h-5 mr-1" />
            {!collapsed && <span>Help</span>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
