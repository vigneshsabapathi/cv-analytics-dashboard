// File: src/components/SkillsAnalysis.js
// Date modified: 2024-08-05
// Description: SkillsAnalysis component for displaying skills-related analytics
// This component renders charts and statistics related to candidate skills

import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";

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

/**
 * SkillsAnalysis Component
 * Displays skills analytics including top skills, skill match percentage, and skill proficiency
 * @returns {JSX.Element} Rendered SkillsAnalysis component
 */
const SkillsAnalysis = () => {
  return (
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
};

export default SkillsAnalysis;
