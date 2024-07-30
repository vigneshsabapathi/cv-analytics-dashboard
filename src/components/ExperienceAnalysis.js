// File: src/components/ExperienceAnalysis.js
// Date modified: 2024-08-05
// Description: ExperienceAnalysis component for displaying experience-related analytics
// This component renders charts and statistics related to candidate experience

import React from "react";
import { Pie, Bar } from "react-chartjs-2";

// Dummy data for experience analysis
const experienceAnalysisData = {
  averageExperience: 5.7,
  industryBreakdown: {
    Technology: 45,
    Finance: 20,
    Healthcare: 15,
    Retail: 10,
    Other: 10,
  },
  roleExperience: {
    "0-2 years": 25,
    "3-5 years": 35,
    "6-10 years": 30,
    "10+ years": 10,
  },
};

/**
 * ExperienceAnalysis Component
 * Displays experience analytics including average experience, industry breakdown, and role experience
 * @returns {JSX.Element} Rendered ExperienceAnalysis component
 */
const ExperienceAnalysis = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Average Experience</h3>
        <p className="text-4xl font-bold text-blue-600">
          {experienceAnalysisData.averageExperience} years
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Industry Breakdown</h3>
        <Pie
          data={{
            labels: Object.keys(experienceAnalysisData.industryBreakdown),
            datasets: [
              {
                data: Object.values(experienceAnalysisData.industryBreakdown),
                backgroundColor: [
                  "#3B82F6",
                  "#EC4899",
                  "#10B981",
                  "#F59E0B",
                  "#6366F1",
                ],
              },
            ],
          }}
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow col-span-2">
        <h3 className="text-xl font-semibold mb-4">Role Experience</h3>
        <Bar
          data={{
            labels: Object.keys(experienceAnalysisData.roleExperience),
            datasets: [
              {
                label: "Experience Distribution",
                data: Object.values(experienceAnalysisData.roleExperience),
                backgroundColor: "#3B82F6",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default ExperienceAnalysis;
