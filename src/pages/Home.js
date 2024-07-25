// File: src/pages/Home.js
// Date modified: 2024-07-25
// Description: Home page component (former Dashboard)
// This component displays the main dashboard content with statistics and charts

import React from "react";
import {
  AiOutlineUser,
  AiOutlineFile,
  AiOutlineDatabase,
  AiOutlineSetting,
  AiOutlineUsergroupAdd,
  AiOutlineCheckCircle,
  AiOutlineBarChart,
} from "react-icons/ai";
import { Line, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

const StatCard = ({ title, value, icon: Icon, change }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <Icon className="w-8 h-8 text-blue-500" />
    </div>
    <p className="text-3xl font-bold text-gray-900">{value}</p>
    <p className={`text-sm ${change >= 0 ? "text-green-500" : "text-red-500"}`}>
      {change >= 0 ? "+" : ""}
      {change}% from last month
    </p>
  </div>
);

const Home = () => {
  const stats = [
    {
      title: "Number of CVs",
      value: "15,234",
      icon: AiOutlineUser,
      change: 2.5,
    },
    {
      title: "Number of JDs",
      value: "1,876",
      icon: AiOutlineFile,
      change: 5.2,
    },
    { title: "Data Sources", value: "23", icon: AiOutlineDatabase, change: 0 },
    {
      title: "CV Processed",
      value: "14,567",
      icon: AiOutlineSetting,
      change: 1.8,
    },
    {
      title: "Resource Pipeline",
      value: "3,456",
      icon: AiOutlineUsergroupAdd,
      change: 7.2,
    },
    {
      title: "Short Listed CV",
      value: "789",
      icon: AiOutlineCheckCircle,
      change: 3.1,
    },
    {
      title: "Success Ratio",
      value: "68%",
      icon: AiOutlineBarChart,
      change: 1.5,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Revenue Overview</h2>
          <Line
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              datasets: [
                {
                  label: "Revenue",
                  data: [12000, 19000, 15000, 25000, 22000, 30000],
                  borderColor: "rgb(75, 192, 192)",
                  tension: 0.1,
                },
              ],
            }}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">CV Sources</h2>
          <Doughnut
            data={{
              labels: [
                "LinkedIn",
                "Job Boards",
                "Direct Applications",
                "Referrals",
              ],
              datasets: [
                {
                  data: [300, 200, 150, 100],
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
