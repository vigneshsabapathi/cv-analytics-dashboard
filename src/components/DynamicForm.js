// Filename: DynamicForm.js
// Date modified: July 17, 2024
// Description: This component renders a dynamic form for NOC Engineer applications.
//              It includes state and city selection using data from a backend API,
//              and handles form submission.

import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../images/logo.png";
import logoRight from "../images/download.png";

// StateSelect Component
// Renders a dropdown for selecting Indian states
const StateSelect = ({ onChange, required }) => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/states");
        console.log("Fetched states:", response.data);
        setStates(response.data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchStates();
  }, []);

  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 border rounded"
      required={required}
    >
      <option value="">Select a state</option>
      {states.map((state) => (
        <option key={state.isoCode} value={state.isoCode}>
          {state.name}
        </option>
      ))}
    </select>
  );
};

// CitySelect Component
// Renders a dropdown for selecting cities based on the chosen state
const CitySelect = ({ stateCode, onChange, required }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      if (stateCode) {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/cities/${stateCode}`
          );
          console.log("Fetched cities for", stateCode, ":", response.data);
          setCities(response.data);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      } else {
        setCities([]);
      }
    };
    fetchCities();
  }, [stateCode]);

  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 border rounded"
      required={required}
    >
      <option value="">Select a city</option>
      {cities.map((city) => (
        <option key={city.name} value={city.name}>
          {city.name}
        </option>
      ))}
    </select>
  );
};

// Main DynamicForm Component
const DynamicForm = ({ questions, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  // Handles changes in form inputs
  const handleInputChange = (e, questionId) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData((prevData) => ({ ...prevData, [questionId]: value }));
    if (errors[questionId]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[questionId];
        return newErrors;
      });
    }
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  // Validates the form before submission
  const validateForm = () => {
    // TODO: Implement form validation logic
    return true;
  };

  // Returns appropriate placeholder text for each question type
  const getPlaceholder = (question) => {
    switch (question.id) {
      case "currentLocation":
        return "e.g., Bangalore";
      case "expectedSalary":
        return "e.g., 10,00,000 INR per annum";
      default:
        return `Enter ${question.text.toLowerCase()}`;
    }
  };

  // Renders the appropriate input for each question type
  const renderQuestion = (question) => {
    switch (question.type) {
      case "text":
      case "number":
      case "date":
        return (
          <input
            type={question.type}
            id={question.id}
            value={formData[question.id] || ""}
            onChange={(e) => handleInputChange(e, question.id)}
            className="w-full p-2 border rounded"
            required={question.required}
            placeholder={getPlaceholder(question)}
          />
        );
      case "radio":
        return (
          <div className="space-y-2">
            {question.options.map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={formData[question.id] === option}
                  onChange={(e) => handleInputChange(e, question.id)}
                  className="mr-2"
                  required={question.required}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        );
      case "select":
        if (question.id === "currentState") {
          return (
            <StateSelect
              onChange={(value) =>
                handleInputChange({ target: { value } }, question.id)
              }
              required={question.required}
            />
          );
        } else if (question.id === "currentCity") {
          return (
            <CitySelect
              stateCode={formData.currentState}
              onChange={(value) =>
                handleInputChange({ target: { value } }, question.id)
              }
              required={question.required}
            />
          );
        } else {
          return (
            <select
              id={question.id}
              value={formData[question.id] || ""}
              onChange={(e) => handleInputChange(e, question.id)}
              className="w-full p-2 border rounded"
              required={question.required}
            >
              <option value="">{getPlaceholder(question)}</option>
              {question.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          );
        }
      default:
        return null;
    }
  };

  // Main render method for the DynamicForm component
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <img src={logo} alt="Company Logo" className="h-16" />
        <img src={logoRight} alt="Second Logo" className="h-16" />
      </div>
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600">
        NOC Engineer Application Form
      </h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        {questions.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="bg-gray-50 p-6 rounded-lg border border-gray-200"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {group.groupTitle}
            </h2>
            {group.questions.map((question) => (
              <div key={question.id} className="mb-4">
                <label
                  htmlFor={question.id}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {question.text}
                  {question.required && <span className="text-red-500">*</span>}
                </label>
                {renderQuestion(question)}
                {errors[question.id] && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors[question.id]}
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
