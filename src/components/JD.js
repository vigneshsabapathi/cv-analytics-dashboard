// Filename: CandidateAnalytics.js
// Date modified: 2024-08-08
// Description: CandidateAnalytics component for displaying comprehensive candidate pool analytics
// This component renders various statistics, tables, and graphs related to job descriptions and candidate pools
// using a vertical tab structure for better organization and user experience

import React, { useState, useEffect } from "react";
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
import {
  DocumentTextIcon,
  UserGroupIcon,
  ChartPieIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ArrowTrendingUpIcon,
  UsersIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

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
  const [activeTab, setActiveTab] = useState("jdAnalysis");

  // State to manage selected JD for graph view
  const [selectedJD, setSelectedJD] = useState(null);

  // Dummy data for JD statistics
  const jdStats = [
    { name: "JD's Received", value: 150 },
    { name: "JD's Processed", value: 120 },
    { name: "JD's Shortlisted", value: 50 },
    { name: "JD's Rejected", value: 30 },
  ];

  // Dummy data for JD table
  const jdTableData = [
    {
      id: 1,
      title: "Senior React Developer",
      received: 50,
      processed: 40,
      shortlisted: 10,
    },
    {
      id: 2,
      title: "UX Designer",
      received: 30,
      processed: 25,
      shortlisted: 8,
    },
    {
      id: 3,
      title: "Data Analyst",
      received: 40,
      processed: 35,
      shortlisted: 12,
    },
    {
      id: 4,
      title: "Product Manager",
      received: 25,
      processed: 20,
      shortlisted: 7,
    },
    {
      id: 5,
      title: "DevOps Engineer",
      received: 35,
      processed: 30,
      shortlisted: 9,
    },
  ];

  // Effect to set initial selected JD
  useEffect(() => {
    if (jdTableData.length > 0) {
      setSelectedJD(jdTableData[0]);
    }
  }, []);

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
   * Renders the JD Analysis tab content
   * @returns {JSX.Element} Rendered JD Analysis content
   */
  const renderJDAnalysis = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {jdStats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">{stat.name}</h3>
            <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">JD Table</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  JD
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CV Received
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CV Processed
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CV Shortlisted
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {jdTableData.map((jd) => (
                <tr
                  key={jd.id}
                  className={`hover:bg-gray-100 cursor-pointer ${
                    selectedJD?.id === jd.id ? "bg-blue-100" : ""
                  }`}
                  onClick={() => setSelectedJD(jd)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">{jd.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{jd.received}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {jd.processed}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {jd.shortlisted}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">JD Graph View</h3>
        {selectedJD && (
          <Bar
            data={{
              labels: ["CV Received", "CV Processed", "CV Shortlisted"],
              datasets: [
                {
                  label: selectedJD.title,
                  data: [
                    selectedJD.received,
                    selectedJD.processed,
                    selectedJD.shortlisted,
                  ],
                  backgroundColor: ["#3B82F6", "#10B981", "#F59E0B"],
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );

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

  // Define tab content
  const tabContent = [
    {
      id: "jdAnalysis",
      name: "JD Analysis",
      icon: DocumentTextIcon,
      content: renderJDAnalysis,
    },
    {
      id: "candidatePool",
      name: "Candidate Pool",
      icon: UserGroupIcon,
      content: renderCandidatePool,
    },
    {
      id: "demographics",
      name: "Demographics",
      icon: ChartPieIcon,
      content: renderDemographics,
    },
    {
      id: "skillsAnalysis",
      name: "Skills Analysis",
      icon: AcademicCapIcon,
      content: renderSkillsAnalysis,
    },
    {
      id: "experienceAnalysis",
      name: "Experience Analysis",
      icon: BriefcaseIcon,
      content: renderExperienceAnalysis,
    },
    {
      id: "trendAnalysis",
      name: "Trend Analysis",
      icon: ArrowTrendingUpIcon,
      content: renderTrendAnalysis,
    },
    {
      id: "candidateComparison",
      name: "Candidate Comparison",
      icon: UsersIcon,
      content: renderCandidateComparison,
    },
    {
      id: "predictiveAnalytics",
      name: "Predictive Analytics",
      icon: LightBulbIcon,
      content: renderPredictiveAnalytics,
    },
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Vertical Tabs */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">JD Pipeline</h2>
        </div>
        <nav className="mt-5">
          {tabContent.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center w-full text-left px-4 py-2 ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          {tabContent.find((tab) => tab.id === activeTab)?.name}
        </h1>
        {tabContent.find((tab) => tab.id === activeTab)?.content()}
      </div>
    </div>
  );
};

export default CandidateAnalytics;
