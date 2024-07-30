// File: src/components/CandidatePool.js
// Date modified: 2024-08-05
// Description: CandidatePool component for displaying candidate pool analytics
// This component renders statistics and charts related to the overall candidate pool

import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";

// Dummy data for candidate pool
const candidatePoolData = {
  totalCandidates: 1000,
  averageFitScore: 75,
  genderDistribution: { Male: 60, Female: 35, Other: 5 },
  geographicalSpread: {
    "North America": 40,
    Europe: 30,
    Asia: 20,
    "South America": 5,
    Africa: 3,
    Australia: 2,
  },
};

/**
 * CandidatePool Component
 * Displays candidate pool analytics including total candidates, average fit score,
 * gender distribution, and geographical spread
 * @returns {JSX.Element} Rendered CandidatePool component
 */
const CandidatePool = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Total Candidates</h3>
        <p className="text-4xl font-bold text-blue-600">
          {candidatePoolData.totalCandidates}
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Average Fit Score</h3>
        <p className="text-4xl font-bold text-green-600">
          {candidatePoolData.averageFitScore}%
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow col-span-2">
        <h3 className="text-xl font-semibold mb-4">Gender Distribution</h3>
        <Pie
          data={{
            labels: Object.keys(candidatePoolData.genderDistribution),
            datasets: [
              {
                data: Object.values(candidatePoolData.genderDistribution),
                backgroundColor: ["#3B82F6", "#EC4899", "#10B981"],
              },
            ],
          }}
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow col-span-2">
        <h3 className="text-xl font-semibold mb-4">Geographical Spread</h3>
        <Doughnut
          data={{
            labels: Object.keys(candidatePoolData.geographicalSpread),
            datasets: [
              {
                data: Object.values(candidatePoolData.geographicalSpread),
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
    </div>
  );
};

export default CandidatePool;
