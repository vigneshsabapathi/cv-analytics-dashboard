// File: src/components/CandidateComparison.js
// Date modified: 2024-08-05
// Description: CandidateComparison component for displaying candidate comparison data
// This component renders a table comparing various attributes of candidates

import React from "react";

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

/**
 * CandidateComparison Component
 * Displays a comparison table of candidates, including their fit score, skill proficiency,
 * experience level, location, and language skills
 * @returns {JSX.Element} Rendered CandidateComparison component
 */
const CandidateComparison = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4">Candidate Comparison</h3>
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
    </div>
  );
};

export default CandidateComparison;
