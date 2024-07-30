// File: src/components/CandidateAnalytics.js
// Date modified: 2024-08-05
// Description: CandidateAnalytics component for displaying comprehensive candidate pool analytics
// This component renders various statistics, tables, and graphs related to job descriptions and candidate pools
// using a vertical tab structure for better organization and user experience

import React, { useState } from "react";
import { Bar, Pie, Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement
);

/**
 * CandidateAnalytics Component
 * Displays comprehensive candidate pool analytics using a vertical tab structure
 * @returns {JSX.Element} Rendered CandidateAnalytics component
 */
const CandidateAnalytics = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("candidatePool");

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

  // Dummy data for skills analysis
  const skillsAnalysisData = {
    topSkills: [
      { skill: "JavaScript", count: 300 },
      { skill: "Python", count: 250 },
      { skill: "Java", count: 200 },
      { skill: "React", count: 180 },
      { skill: "SQL", count: 150 },
    ],
    skillMatchPercentage: 80,
    skillProficiency: {
      Beginner: 20,
      Intermediate: 50,
      Advanced: 30,
    },
  };

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

  // Dummy data for trend analysis
  const trendAnalysisData = {
    qualityScoreTrend: [65, 68, 70, 72, 75, 78],
    diversityTrend: [20, 22, 25, 28, 30, 32],
    timeToHireTrend: [45, 42, 40, 38, 35, 33],
  };

  // Dummy data for candidate comparison
  const candidateComparisonData = [
    {
      name: "Candidate A",
      fitScore: 85,
      skillProficiency: 80,
      experienceLevel: 7,
      location: "New York",
      language: "English",
    },
    {
      name: "Candidate B",
      fitScore: 78,
      skillProficiency: 75,
      experienceLevel: 5,
      location: "London",
      language: "English, French",
    },
    {
      name: "Candidate C",
      fitScore: 82,
      skillProficiency: 85,
      experienceLevel: 6,
      location: "Berlin",
      language: "German, English",
    },
  ];

  // Dummy data for predictive analytics
  const predictiveAnalyticsData = {
    successPrediction: 78,
    turnoverPrediction: 15,
  };

  /**
   * Renders the content for the Candidate Pool tab
   * @returns {JSX.Element} Rendered Candidate Pool content
   */
  const renderCandidatePool = () => (
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

  /**
   * Renders the content for the Demographics tab
   * @returns {JSX.Element} Rendered Demographics content
   */
  const renderDemographics = () => (
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

  /**
   * Renders the content for the Skills Analysis tab
   * @returns {JSX.Element} Rendered Skills Analysis content
   */
  const renderSkillsAnalysis = () => (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow col-span-2">
        <h3 className="text-xl font-semibold mb-4">Top Skills</h3>
        <Bar
          data={{
            labels: skillsAnalysisData.topSkills.map((skill) => skill.skill),
            datasets: [
              {
                label: "Skill Count",
                data: skillsAnalysisData.topSkills.map((skill) => skill.count),
                backgroundColor: "#3B82F6",
              },
            ],
          }}
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Skill Match Percentage</h3>
        <p className="text-4xl font-bold text-green-600">
          {skillsAnalysisData.skillMatchPercentage}%
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Skill Proficiency</h3>
        <Doughnut
          data={{
            labels: Object.keys(skillsAnalysisData.skillProficiency),
            datasets: [
              {
                data: Object.values(skillsAnalysisData.skillProficiency),
                backgroundColor: ["#3B82F6", "#10B981", "#F59E0B"],
              },
            ],
          }}
        />
      </div>
    </div>
  );

  /**
   * Renders the content for the Experience Analysis tab
   * @returns {JSX.Element} Rendered Experience Analysis content
   */
  const renderExperienceAnalysis = () => (
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

  /**
   * Renders the content for the Trend Analysis tab
   * @returns {JSX.Element} Rendered Trend Analysis content
   */
  const renderTrendAnalysis = () => (
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

  /**
   * Renders the content for the Candidate Comparison tab
   * @returns {JSX.Element} Rendered Candidate Comparison content
   */
  const renderCandidateComparison = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Fit Score</th>
            <th className="py-3 px-4 text-left">Skill Proficiency</th>
            <th className="py-3 px-4 text-left">Experience Level</th>
            <th className="py-3 px-4 text-left">Location</th>
            <th className="py-3 px-4 text-left">Language</th>
          </tr>
        </thead>
        <tbody>
          {candidateComparisonData.map((candidate, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="py-3 px-4">{candidate.name}</td>
              <td className="py-3 px-4">{candidate.fitScore}%</td>
              <td className="py-3 px-4">{candidate.skillProficiency}%</td>
              <td className="py-3 px-4">{candidate.experienceLevel} years</td>
              <td className="py-3 px-4">{candidate.location}</td>
              <td className="py-3 px-4">{candidate.language}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  /**
   * Renders the content for the Predictive Analytics tab
   * @returns {JSX.Element} Rendered Predictive Analytics content
   */
  const renderPredictiveAnalytics = () => (
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

  /**
   * Renders the content based on the active tab
   * @returns {JSX.Element} Rendered content for the active tab
   */
  const renderContent = () => {
    switch (activeTab) {
      case "candidatePool":
        return renderCandidatePool();
      case "demographics":
        return renderDemographics();
      case "skillsAnalysis":
        return renderSkillsAnalysis();
      case "experienceAnalysis":
        return renderExperienceAnalysis();
      case "trendAnalysis":
        return renderTrendAnalysis();
      case "candidateComparison":
        return renderCandidateComparison();
      case "predictiveAnalytics":
        return renderPredictiveAnalytics();
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Vertical Tabs */}
      <div className="w-64 bg-white shadow-md">
        <nav className="mt-5">
          {[
            { id: "candidatePool", label: "Candidate Pool" },
            { id: "demographics", label: "Demographics" },
            { id: "skillsAnalysis", label: "Skills Analysis" },
            { id: "experienceAnalysis", label: "Experience Analysis" },
            { id: "trendAnalysis", label: "Trend Analysis" },
            { id: "candidateComparison", label: "Candidate Comparison" },
            { id: "predictiveAnalytics", label: "Predictive Analytics" },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`block w-full text-left px-4 py-2 ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Candidate Analytics</h1>
        {renderContent()}
      </div>
    </div>
  );
};

export default CandidateAnalytics;
