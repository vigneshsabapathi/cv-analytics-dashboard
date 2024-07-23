// File: src/components/ConversationalForm.js
// Date modified: 2024-07-22
// Description: Conversational Form component for interactive form filling
// This component presents form questions in a chat-like interface

import React, { useState } from "react";
import { motion } from "framer-motion";

const ConversationalForm = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion.id]: answer });
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const renderInput = () => {
    switch (currentQuestion.type) {
      case "text":
      case "number":
        return (
          <input
            type={currentQuestion.type}
            className="w-full p-2 border rounded"
            onChange={(e) => handleAnswer(e.target.value)}
          />
        );
      case "select":
        return (
          <select
            className="w-full p-2 border rounded"
            onChange={(e) => handleAnswer(e.target.value)}
          >
            <option value="">Select an option</option>
            {currentQuestion.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          <h2 className="text-xl mb-4">{currentQuestion.text}</h2>
          {renderInput()}
        </motion.div>
      </div>
      <div className="flex justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() =>
            setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))
          }
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() =>
            setCurrentQuestionIndex(
              Math.min(questions.length - 1, currentQuestionIndex + 1)
            )
          }
          disabled={currentQuestionIndex === questions.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ConversationalForm;
