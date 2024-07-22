// Filename: Form.js
// Date modified: July 16, 2024
// Description: This component renders a dynamic form for NOC Engineer applications
//              It fetches form data from a server and submits form responses

import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
  // State to hold the form structure data
  const [formData, setFormData] = useState(null);
  // State to hold user's answers
  const [answers, setAnswers] = useState({});
  // State to hold validation errors
  const [errors, setErrors] = useState({});

  // Fetch form data from server on component mount
  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/form-data");
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching form data:", error);
        // TODO: Handle error (e.g., show error message to user)
      }
    };

    fetchFormData();
  }, []);

  // Updates the state when an answer changes
  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: answer }));
    // Clear error for this field if it exists
    if (errors[questionId]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[questionId];
        return newErrors;
      });
    }
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/submit-form",
        answers
      );
      console.log(response.data.message);
      // TODO: Handle successful submission (e.g., show success message, reset form)
    } catch (error) {
      console.error("Error submitting form:", error);
      // TODO: Handle submission error (e.g., show error message)
    }
  };

  // Renders an individual question based on its type
  const renderQuestion = (question) => {
    switch (question.type) {
      case "boolean":
        return (
          <div className="flex items-center">
            <input
              type="checkbox"
              id={question.id}
              checked={answers[question.id] || false}
              onChange={(e) =>
                handleAnswerChange(question.id, e.target.checked)
              }
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2">{question.label}</span>
          </div>
        );
      case "number":
        return (
          <input
            type="number"
            id={question.id}
            value={answers[question.id] || ""}
            onChange={(e) =>
              handleAnswerChange(question.id, parseInt(e.target.value, 10))
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        );
      case "select":
        return (
          <select
            id={question.id}
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="">Select an option</option>
            {question.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case "text":
        return (
          <input
            type="text"
            id={question.id}
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        );
      case "date":
        return (
          <input
            type="date"
            id={question.id}
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        );
      default:
        return null;
    }
  };

  // Show loading state while fetching form data
  if (!formData) {
    return <div className="text-center py-4">Loading...</div>;
  }

  // Render the form
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">NOC Engineer Application Form</h1>
      {formData.questions.map((question) => (
        <div key={question.id} className="mb-4">
          <label htmlFor={question.id} className="block text-lg mb-2">
            {question.label}
            {question.required && <span className="text-red-500"> *</span>}
          </label>
          {renderQuestion(question)}
          {errors[question.id] && (
            <p className="mt-2 text-sm text-red-600">{errors[question.id]}</p>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit Application
      </button>
    </form>
  );
};

export default Form;
