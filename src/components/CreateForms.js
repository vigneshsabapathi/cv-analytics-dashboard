// File: src/components/CreateForms.js
// Date modified: 2024-07-24
// Description: Component for creating different types of forms
// This component allows users to choose the type of form and template with a modern, visually pleasing interface

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaWpforms,
  FaStream,
  FaComments,
  FaUserTie,
  FaUsers,
  FaUserGraduate,
} from "react-icons/fa";

// Define form types with additional properties for styling
const formTypes = [
  {
    name: "Vertical Form",
    path: "/create-forms/vertical",
    icon: FaWpforms,
    color: "bg-gradient-to-r from-blue-500 to-blue-600",
    description: "Traditional top-to-bottom form layout",
  },
  {
    name: "Typeform Style",
    path: "/create-forms/typeform",
    icon: FaStream,
    color: "bg-gradient-to-r from-purple-500 to-purple-600",
    description: "Modern, one question at a time approach",
  },
  {
    name: "Conversational Form",
    path: "/create-forms/conversational",
    icon: FaComments,
    color: "bg-gradient-to-r from-green-500 to-green-600",
    description: "Interactive, chat-like form experience",
  },
];

// Define form templates with additional properties for styling
const templates = [
  {
    name: "HR Recruitment",
    id: "hr-template-1",
    icon: FaUserTie,
    color: "bg-gradient-to-r from-red-500 to-red-600",
    description: "Standard job application form",
  },
  {
    name: "Employee Onboarding",
    id: "hr-template-2",
    icon: FaUsers,
    color: "bg-gradient-to-r from-yellow-500 to-yellow-600",
    description: "New employee information collection",
  },
  {
    name: "Training Feedback",
    id: "hr-template-3",
    icon: FaUserGraduate,
    color: "bg-gradient-to-r from-indigo-500 to-indigo-600",
    description: "Post-training evaluation form",
  },
];

// CreateForms component
const CreateForms = () => {
  const [selectedType, setSelectedType] = useState(null);
  const navigate = useNavigate();

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  const handleTemplateSelect = (template) => {
    navigate(`${selectedType.path}/${template.id}`);
  };

  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Create Your Form
      </h1>

      {!selectedType ? (
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
            Choose a form type:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formTypes.map((type, index) => (
              <motion.div
                key={type.name}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className={`${type.color} rounded-lg shadow-lg overflow-hidden cursor-pointer`}
                onClick={() => handleTypeSelect(type)}
              >
                <div className="p-6 text-white">
                  <type.icon className="w-16 h-16 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                  <p className="text-sm opacity-80">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
            Choose a template:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <motion.div
                key={template.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className={`${template.color} rounded-lg shadow-lg overflow-hidden cursor-pointer`}
                onClick={() => handleTemplateSelect(template)}
              >
                <div className="p-6 text-white">
                  <template.icon className="w-16 h-16 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{template.name}</h3>
                  <p className="text-sm opacity-80">{template.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateForms;
