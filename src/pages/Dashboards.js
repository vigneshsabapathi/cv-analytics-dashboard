// File: src/pages/Dashboards.js
// Date modified: 2024-08-01
// Description: Comprehensive Dashboard component with Analytics, Revenue, and Network views
// This component combines features from both previous versions and sets up tabs for different dashboard views

import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import {
  DocumentTextIcon,
  BriefcaseIcon,
  ServerIcon,
  CogIcon,
  DocumentDuplicateIcon,
  UsersIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  ChartPieIcon,
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  CreditCardIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import StatCard from "../components/widgets/StatCard";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

const upperTabs = [
  "Analytics Dashboard",
  "Revenue",
  "Network",
  "Notifications",
];
const lowerTabs = [
  "Candidate Pool",
  "Recruitment Pipeline",
  "Trend Analysis",
  "Candidate Comparison",
];

const Dashboard = () => {
  const [upperSelectedTab, setUpperSelectedTab] = useState(0);
  const [lowerSelectedTab, setLowerSelectedTab] = useState(0);

  const stats = [
    {
      title: "Number of CVs",
      value: "15,234",
      subtext: "vs last month",
      change: 2.5,
      icon: DocumentTextIcon,
    },
    {
      title: "Number of JDs",
      value: "1,876",
      subtext: "Active jobs",
      change: 5.2,
      icon: BriefcaseIcon,
    },
    {
      title: "Data Sources",
      value: "23",
      subtext: "platforms",
      change: 0,
      icon: ServerIcon,
    },
    {
      title: "CV Processed",
      value: "14,567",
      subtext: "95% processed",
      change: 1.8,
      icon: CogIcon,
    },
    {
      title: "CV Extracted",
      value: "13,890",
      subtext: "95.3% extraction",
      change: -0.5,
      icon: DocumentDuplicateIcon,
    },
    {
      title: "Resource Pipeline",
      value: "3,456",
      subtext: "candidates",
      change: 7.2,
      icon: UsersIcon,
    },
    {
      title: "Short Listed CV",
      value: "789",
      subtext: "5.4% shortlist rate",
      change: 3.1,
      icon: ClipboardDocumentCheckIcon,
    },
    {
      title: "Success Ratio",
      value: "68%",
      subtext: "Placement rate",
      change: 1.5,
      icon: ChartBarIcon,
    },
  ];

  const lowerTabsContent = [
    {
      title: "Candidate Pool",
      content:
        "Total Candidates: 10,567 | New This Week: 423 | Top Skills: React, Python, AWS",
    },
    {
      title: "Recruitment Pipeline",
      content:
        "Applied: 1,245 | Screening: 567 | Interview: 189 | Offer: 45 | Hired: 23",
    },
    {
      title: "Trend Analysis",
      content:
        "Job Market Trends: Remote work +15% | AI & ML roles +25% | Cybersecurity demand +30%",
    },
    {
      title: "Candidate Comparison",
      content:
        "Top Candidate Score: 95/100 | Average Score: 72/100 | Skill Gap Analysis Available",
    },
  ];

  const renderAnalyticsDashboard = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-6">
        <ChartPieIcon className="w-8 h-8 text-blue-500 mr-3" />
        <h2 className="text-2xl font-bold text-gray-800">
          Analytics Dashboard
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
      <div className="bg-gray-50 rounded-lg p-4">
        <Tab.Group
          selectedIndex={lowerSelectedTab}
          onChange={setLowerSelectedTab}
        >
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 mb-4">
            {lowerTabs.map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  `w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all duration-200
                  ${
                    selected
                      ? "bg-white text-blue-700 shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  }`
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {lowerTabsContent.map((tab, idx) => (
              <Tab.Panel
                key={idx}
                className="rounded-xl bg-white p-4 shadow-md ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              >
                <h3 className="text-lg font-semibold mb-2">{tab.title}</h3>
                <p className="text-gray-600">{tab.content}</p>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );

  const renderRevenueContent = () => (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <ChartPieIcon className="w-5 h-5 mr-2" />
          Income
        </h3>
        <Line
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                data: [12000, 19000, 15000, 17000, 22000, 18000],
                fill: true,
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                borderColor: "rgba(59, 130, 246, 1)",
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: { legend: { display: false } },
          }}
        />
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <CurrencyDollarIcon className="w-5 h-5 mr-2" />
          Balance
        </h3>
        <p className="text-4xl font-bold text-blue-600">$ 15,000</p>
        <button className="text-blue-500 text-sm mt-2">see history</button>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <ArrowTrendingUpIcon className="w-5 h-5 mr-2" />
          Growth
        </h3>
        <Bar
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: "rgba(59, 130, 246, 0.6)",
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: { legend: { display: false } },
          }}
        />
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <CreditCardIcon className="w-5 h-5 mr-2" />
          Expense
        </h3>
        <div className="flex justify-around">
          {[80, 75, 50].map((value, index) => (
            <div key={index} className="relative w-20 h-20">
              <Doughnut
                data={{
                  datasets: [
                    {
                      data: [value, 100 - value],
                      backgroundColor: ["#3B82F6", "#E5E7EB"],
                    },
                  ],
                }}
                options={{
                  cutout: "70%",
                  responsive: true,
                  plugins: { legend: { display: false } },
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-semibold">{value}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <ChartPieIcon className="w-5 h-5 mr-2" />
          Most Viewed Item
        </h3>
        {["Item 01", "Item 02", "Item 03", "Item 04"].map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <span>{item}</span>
            <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
              BOOST
            </button>
          </div>
        ))}
      </div>
      <div className="col-span-2 bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <DocumentTextIcon className="w-5 h-5 mr-2" />
          Invoices
        </h3>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <span>Invoice {index + 1}/November/1234/5/0</span>
            <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
              PAID
            </button>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
          Message
        </h3>
        {[
          {
            name: "Johnson, Mark",
            subject: "Invoice November",
            status: "Status Update: Success",
          },
          {
            name: "Adelia, Nadia",
            subject: "Project Assignment",
            status: "Presentation Material",
          },
          {
            name: "Amelia, Laura",
            subject: "Meeting Schedule",
            status: "Project: interior design",
          },
        ].map((message, index) => (
          <div key={index} className="mb-2">
            <p className="font-semibold">{message.name}</p>
            <p className="text-sm text-gray-600">{message.subject}</p>
            <p className="text-sm text-gray-500">{message.status}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderNetworkContent = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-6">
        <ChartPieIcon className="w-8 h-8 text-blue-500 mr-3" />
        <h2 className="text-2xl font-bold text-gray-800">Network Activities</h2>
      </div>
      <img
        src={require("../images/avatar.png")}
        alt="Network Activities"
        className="w-full h-auto rounded-lg shadow"
      />
    </div>
  );

  const renderDashboardContent = () => {
    switch (upperSelectedTab) {
      case 0:
        return renderAnalyticsDashboard();
      case 1:
        return renderRevenueContent();
      case 2:
        return renderNetworkContent();
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <Tab.Group
        selectedIndex={upperSelectedTab}
        onChange={setUpperSelectedTab}
      >
        <Tab.List className="flex space-x-1 rounded-xl bg-white shadow-lg p-1 mb-6">
          {upperTabs.map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                `w-full rounded-lg py-3 text-sm font-medium leading-5 transition-all duration-200
                 ${
                   selected
                     ? "bg-blue-500 text-white shadow"
                     : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                 }`
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
      {renderDashboardContent()}
    </div>
  );
};

export default Dashboard;
