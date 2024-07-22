// Filename: TypeformStyle.js
// Date modified: July 17, 2024
// Description: This component renders a Typeform-style dynamic form with grouped questions,
//              a progress indicator, company logo, and a footer. It uses the country-state-city
//              package for state and city dropdowns.

// Components:
// - TypeformStyle: The main component that renders the Typeform-style form

// Functions:
// - useEffect hook: Fetches form data and initializes state/city data
// - handleAnswer: Updates the state when an answer changes
// - handleNext: Moves to the next group of questions or submits the form
// - handleSubmit: Sends form data to the server
// - renderQuestionInput: Renders the appropriate input for each question type
// - renderProgressIndicator: Renders the progress indicator

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { State, City } from "country-state-city";
import logo from "../images/logo.png";

const TypeformStyle = () => {
  const [formData, setFormData] = useState(null);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/form-data");
        setFormData(response.data);
        setLoading(false);

        // Initialize states for India
        const indianStates = State.getStatesOfCountry("IN");
        setStates(indianStates);
      } catch (err) {
        console.error("Error fetching form data:", err);
        setError("Failed to load form data. Please try again later.");
        setLoading(false);
      }
    };

    fetchFormData();
  }, []);

  useEffect(() => {
    // Update cities when state changes
    if (answers.currentState) {
      const stateCities = City.getCitiesOfState("IN", answers.currentState);
      setCities(stateCities);
    }
  }, [answers.currentState]);

  const handleAnswer = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleNext = () => {
    if (currentGroupIndex < formData.questions.length - 1) {
      setCurrentGroupIndex((prevIndex) => prevIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/api/submit-form", answers);
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Failed to submit form. Please try again.");
    }
  };

  const renderQuestionInput = (question) => {
    switch (question.type) {
      case "text":
        return (
          <input
            type="text"
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswer(question.id, e.target.value)}
            className="w-full p-3 text-xl border-b-2 border-gray-300 focus:border-blue-500 outline-none"
            placeholder="Type your answer here..."
          />
        );
      case "number":
        return (
          <input
            type="number"
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswer(question.id, e.target.value)}
            className="w-full p-3 text-xl border-b-2 border-gray-300 focus:border-blue-500 outline-none"
            placeholder="Enter a number"
          />
        );
      case "select":
        if (question.id === "currentState") {
          return (
            <select
              value={answers[question.id] || ""}
              onChange={(e) => handleAnswer(question.id, e.target.value)}
              className="w-full p-3 text-xl border-b-2 border-gray-300 focus:border-blue-500 outline-none"
            >
              <option value="">Select a state</option>
              {states.map((state) => (
                <option key={state.isoCode} value={state.isoCode}>
                  {state.name}
                </option>
              ))}
            </select>
          );
        } else if (question.id === "currentCity") {
          return (
            <select
              value={answers[question.id] || ""}
              onChange={(e) => handleAnswer(question.id, e.target.value)}
              className="w-full p-3 text-xl border-b-2 border-gray-300 focus:border-blue-500 outline-none"
            >
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          );
        } else {
          return (
            <select
              value={answers[question.id] || ""}
              onChange={(e) => handleAnswer(question.id, e.target.value)}
              className="w-full p-3 text-xl border-b-2 border-gray-300 focus:border-blue-500 outline-none"
            >
              <option value="">Select an option</option>
              {question.options &&
                question.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          );
        }
      case "radio":
        return (
          <div className="space-y-3">
            {question.options &&
              question.options.map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-3 text-xl"
                >
                  <input
                    type="radio"
                    name={question.id}
                    value={option}
                    checked={answers[question.id] === option}
                    onChange={(e) => handleAnswer(question.id, e.target.value)}
                    className="form-radio h-6 w-6 text-blue-600"
                  />
                  <span>{option}</span>
                </label>
              ))}
          </div>
        );
      case "date":
        return (
          <input
            type="date"
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswer(question.id, e.target.value)}
            className="w-full p-3 text-xl border-b-2 border-gray-300 focus:border-blue-500 outline-none"
          />
        );
      default:
        return null;
    }
  };

  const renderProgressIndicator = () => {
    if (!formData) return null;
    const totalGroups = formData.questions.length;
    const progress = ((currentGroupIndex + 1) / totalGroups) * 100;

    return (
      <div className="fixed top-0 left-0 right-0 h-2 bg-gray-200">
        <div
          className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-2xl">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center h-screen text-2xl text-red-500">
        {error}
      </div>
    );
  if (submitted)
    return (
      <div className="flex items-center justify-center h-screen text-2xl text-green-500">
        Thank you for submitting the form!
      </div>
    );

  if (!formData) return null;

  const currentGroup = formData.questions[currentGroupIndex];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {renderProgressIndicator()}
      <div className="flex-grow flex items-center justify-center px-4 pt-8">
        <motion.div
          key={currentGroupIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-4xl"
        >
          <img src={logo} alt="Company Logo" className="mx-auto mb-8 h-24" />
          <h1 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            NOC Engineer Application Form
          </h1>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            {currentGroup.groupTitle}
          </h2>
          {currentGroup.questions.map((question) => (
            <div key={question.id} className="mb-8">
              <h3 className="text-xl font-bold mb-4">{question.text}</h3>
              {renderQuestionInput(question)}
            </div>
          ))}
          <motion.button
            onClick={handleNext}
            className="mt-10 w-full bg-blue-500 text-white p-4 rounded-lg text-xl font-semibold hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {currentGroupIndex === formData.questions.length - 1
              ? "Submit"
              : "Next"}
          </motion.button>
        </motion.div>
      </div>
      <footer className="bg-gray-200 p-4 text-center">
        Powered by TrustGrid.ai
      </footer>
    </div>
  );
};

export default TypeformStyle;
