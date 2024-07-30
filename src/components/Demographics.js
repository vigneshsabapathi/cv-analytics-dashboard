// File: src/components/Demographics.js
// Date modified: 2024-08-05
// Description: Demographics component for displaying demographic analytics
// This component renders charts and statistics related to candidate demographics

import React from "react";
import { Pie, Bar, Doughnut } from "react-chartjs-2";

// Dummy data for demographics
const demographicsData = {
  genderBreakdown: { Male: 60, Female: 35, Other: 5 },
  educationLevels: {
    Bachelors: 50,
    Masters: 30,
    PhD: 15,
    Other: 5,
  },
  ageDistribution: {
    "18-25": 20,
    "26-35": 40,
    "36-45": 25,
    "46+": 15,
  },
  locationDistribution: {
    "North America": 40,
    Europe: 30,
    Asia: 20,
    "South America": 5,
    Africa: 3,
    Australia: 2,
  },
  languageProficiency: {
    English: 95,
    Spanish: 40,
    Mandarin: 25,
    French: 20,
    German: 15,
  },
};

/**
 * Demographics Component
 * Displays demographic analytics including gender breakdown, education levels,
 * age distribution, location distribution, and language proficiency
 * @returns {JSX.Element} Rendered Demographics component
 */
const Demographics = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow col-span-2">
        <h3 className="text-xl font-semibold mb-4">Gender Breakdown</h3>
        <Pie
          data={{
            labels: Object.keys(demographicsData.genderBreakdown),
            datasets: [
              {
                data: Object.values(demographicsData.genderBreakdown),
                backgroundColor: ["#3B82F6", "#EC4899", "#10B981"],
              },
            ],
          }}
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow col-span-2">
        <h3 className="text-xl font-semibold mb-4">Education Levels</h3>
        <Bar
          data={{
            labels: Object.keys(demographicsData.educationLevels),
            datasets: [
              {
                label: "Education Levels",
                data: Object.values(demographicsData.educationLevels),
                backgroundColor: "#3B82F6",
              },
            ],
          }}
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Age Distribution</h3>
        <Doughnut
          data={{
            labels: Object.keys(demographicsData.ageDistribution),
            datasets: [
              {
                data: Object.values(demographicsData.ageDistribution),
                backgroundColor: ["#3B82F6", "#EC4899", "#10B981", "#F59E0B"],
              },
            ],
          }}
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Location Distribution</h3>
        <Pie
          data={{
            labels: Object.keys(demographicsData.locationDistribution),
            datasets: [
              {
                data: Object.values(demographicsData.locationDistribution),
                backgroundColor: [
                  "#3B82F6",
                  "#EC4899",
                  "#10B981",
                  "#F59E0B",
                  "#6366F1",
                  "#8B5CF6",
                ],
              },
            ],
          }}
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow col-span-2">
        <h3 className="text-xl font-semibold mb-4">Language Proficiency</h3>
        <Bar
          data={{
            labels: Object.keys(demographicsData.languageProficiency),
            datasets: [
              {
                label: "Language Proficiency",
                data: Object.values(demographicsData.languageProficiency),
                backgroundColor: "#3B82F6",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Demographics;
