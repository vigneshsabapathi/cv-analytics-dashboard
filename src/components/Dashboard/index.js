// File: src/components/Dashboard/index.js
// Date modified: 2024-07-17
// Description: Main Dashboard component
//
// This component serves as the container for different dashboard views.
// It manages tab selection and renders the appropriate dashboard content.
//
// Dependencies:
//   - React
//   - TabGroup component
//   - AnalyticsDashboard and RevenueDashboard components

import React, { useState } from "react";
import TabGroup from "../../common/TabGroup";
import AnalyticsDashboard from "./AnalyticsDashboard";
import RevenueDashboard from "./RevenueDashboard";

// Define the tabs for the dashboard
const dashboardTabs = [
  "Analytics Dashboard",
  "Revenue",
  "In Progress",
  "Closed",
];

/**
 * Dashboard Component
 *
 * Manages the display of different dashboard views
 *
 * @returns {React.ReactElement} Rendered Dashboard component
 */
const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  /**
   * Renders the content based on the selected tab
   *
   * @returns {React.ReactElement} The content for the selected tab
   */
  const renderDashboardContent = () => {
    switch (selectedTab) {
      case 0:
        return <AnalyticsDashboard />;
      case 1:
        return <RevenueDashboard />;
      case 2:
        return (
          <h2 className="text-2xl font-bold text-gray-800">
            In Progress Dashboard (Coming Soon)
          </h2>
        );
      case 3:
        return (
          <h2 className="text-2xl font-bold text-gray-800">
            Closed Issues Dashboard (Coming Soon)
          </h2>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Tab navigation */}
      <div className="mb-6">
        <TabGroup
          tabs={dashboardTabs}
          selectedIndex={selectedTab}
          onChange={setSelectedTab}
        />
      </div>

      {/* Dashboard content */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        {renderDashboardContent()}
      </div>
    </div>
  );
};

export default Dashboard;
