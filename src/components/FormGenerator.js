// File: src/components/FormGenerator.js
// Date modified: 2024-07-27
// Description: Component for customizing and generating forms
// This component allows users to modify form templates and generate a final form JSON
// Now includes vertical tabs for easier navigation between form sections

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTemplate } from "./FormTemplates";
import { motion } from "framer-motion";

const FormGenerator = () => {
  const { type, templateId } = useParams();
  const navigate = useNavigate();
  const [formTemplate, setFormTemplate] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const template = getTemplate(templateId);
    setFormTemplate(template);
  }, [templateId]);

  const handleQuestionChange = (groupIndex, questionIndex, field, value) => {
    const updatedTemplate = [...formTemplate];
    updatedTemplate[groupIndex].questions[questionIndex][field] = value;
    setFormTemplate(updatedTemplate);
  };

  const handleAddQuestion = (groupIndex) => {
    const updatedTemplate = [...formTemplate];
    updatedTemplate[groupIndex].questions.push({
      id: `question-${Date.now()}`,
      text: "New Question",
      type: "text",
      required: false,
    });
    setFormTemplate(updatedTemplate);
  };

  const handleRemoveQuestion = (groupIndex, questionIndex) => {
    const updatedTemplate = [...formTemplate];
    updatedTemplate[groupIndex].questions.splice(questionIndex, 1);
    setFormTemplate(updatedTemplate);
  };

  const handleGenerateForm = () => {
    const generatedForm = {
      title: "Generated Form",
      questions: formTemplate,
    };
    console.log(JSON.stringify(generatedForm, null, 2));
    navigate(`/share-form/${type}`, { state: { form: generatedForm } });
  };

  if (!formTemplate) return <div>Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Form Generator</h1>
      <div className="flex">
        {/* Vertical Tabs */}
        <div className="w-1/4 pr-4">
          {formTemplate.map((group, index) => (
            <button
              key={index}
              className={`w-full text-left p-3 mb-2 rounded ${
                activeTab === index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {group.groupTitle}
            </button>
          ))}
        </div>

        {/* Form Content */}
        <div className="w-3/4">
          {formTemplate.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`mb-8 p-4 bg-white shadow-md rounded-lg ${
                activeTab === groupIndex ? "block" : "hidden"
              }`}
            >
              <h2 className="text-2xl font-semibold mb-4">
                {group.groupTitle}
              </h2>
              {group.questions.map((question, questionIndex) => (
                <div
                  key={questionIndex}
                  className="mb-4 p-4 bg-gray-100 rounded"
                >
                  <input
                    type="text"
                    value={question.text}
                    onChange={(e) =>
                      handleQuestionChange(
                        groupIndex,
                        questionIndex,
                        "text",
                        e.target.value
                      )
                    }
                    className="w-full p-2 mb-2 border rounded"
                  />
                  <select
                    value={question.type}
                    onChange={(e) =>
                      handleQuestionChange(
                        groupIndex,
                        questionIndex,
                        "type",
                        e.target.value
                      )
                    }
                    className="w-full p-2 mb-2 border rounded"
                  >
                    <option value="text">Text</option>
                    <option value="number">Number</option>
                    <option value="select">Select</option>
                    <option value="radio">Radio</option>
                    <option value="date">Date</option>
                  </select>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={question.required}
                      onChange={(e) =>
                        handleQuestionChange(
                          groupIndex,
                          questionIndex,
                          "required",
                          e.target.checked
                        )
                      }
                      className="mr-2"
                    />
                    Required
                  </label>
                  <button
                    onClick={() =>
                      handleRemoveQuestion(groupIndex, questionIndex)
                    }
                    className="mt-2 p-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove Question
                  </button>
                </div>
              ))}
              <button
                onClick={() => handleAddQuestion(groupIndex)}
                className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Add Question
              </button>
            </div>
          ))}
        </div>
      </div>
      <motion.button
        onClick={handleGenerateForm}
        className="w-full p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mt-6"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Generate Form
      </motion.button>
    </div>
  );
};

export default FormGenerator;
