// File: src/components/PredictiveAnalytics.js
// Date modified: 2024-08-05
// Description: PredictiveAnalytics component for displaying predictive analytics data
// This component renders predictions for candidate success and turnover rates

import React from "react";

// Dummy data for predictive analytics
const predictiveAnalyticsData = {
  successPrediction: 78,
  turnoverPrediction: 15,
};

/**
 * PredictiveAnalytics Component
 * Displays predictive analytics including success prediction and turnover prediction
 * @returns {JSX.Element} Rendered PredictiveAnalytics component
 */
const PredictiveAnalytics = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Success Prediction</h3>
        <p className="text-4xl font-bold text-green-600">
          {predictiveAnalyticsData.successPrediction}%
        </p>
        <p className="text-gray-600 mt-2">Likelihood of successful placement</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Turnover Prediction</h3>
        <p className="text-4xl font-bold text-red-600">
          {predictiveAnalyticsData.turnoverPrediction}%
        </p>
        <p className="text-gray-600 mt-2">
          Estimated turnover rate within first year
        </p>
      </div>
    </div>
  );
};

export default PredictiveAnalytics;
