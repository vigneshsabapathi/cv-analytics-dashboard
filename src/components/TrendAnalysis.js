// File: src/components/TrendAnalysis.js
// Date modified: 2024-08-05
// Description: TrendAnalysis component for displaying trend-related analytics
// This component renders charts showing various trends over time

import React from "react";
import { Line } from "react-chartjs-2";

// Dummy data for trend analysis
const trendAnalysisData = {
  qualityScoreTrend: [65, 68, 70, 72, 75, 78],
  diversityTrend: [20, 22, 25, 28, 30, 32],
  timeToHireTrend: [45, 42, 40, 38, 35, 33],
};

/**
 * TrendAnalysis Component
 * Displays trend analytics including quality score trends, diversity trends, and time-to-hire trends
 * @returns {JSX.Element} Rendered TrendAnalysis component
 */
const TrendAnalysis = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Quality Score Trend</h3>
        <Line
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "Quality Score",
                data: trendAnalysisData.qualityScoreTrend,
                borderColor: "#3B82F6",
                tension: 0.1,
              },
            ],
          }}
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Diversity Trend</h3>
        <Line
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "Diversity Score",
                data: trendAnalysisData.diversityTrend,
                borderColor: "#10B981",
                tension: 0.1,
              },
            ],
          }}
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Time-to-Hire Trend</h3>
        <Line
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "Time-to-Hire (Days)",
                data: trendAnalysisData.timeToHireTrend,
                borderColor: "#F59E0B",
                tension: 0.1,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default TrendAnalysis;
