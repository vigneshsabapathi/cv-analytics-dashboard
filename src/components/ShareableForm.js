// File: src/components/ShareableForm.js
// Date modified: 2024-07-22
// Description: Component for displaying and sharing generated forms
// This component renders the generated form and provides sharing options

import React from "react";
import { useLocation, useParams } from "react-router-dom";
import DynamicForm from "./DynamicForm";
import TypeformStyle from "./TypeformStyle";
import ConversationalForm from "./ConversationalForm";

const ShareableForm = () => {
  const location = useLocation();
  const { type } = useParams();
  const { form } = location.state;

  const renderForm = () => {
    switch (type) {
      case "vertical":
        return (
          <DynamicForm questions={form.questions} onSubmit={console.log} />
        );
      case "typeform":
        return <TypeformStyle questions={form.questions} />;
      case "conversational":
        return <ConversationalForm questions={form.questions} />;
      default:
        return <div>Invalid form type</div>;
    }
  };

  const handleShare = () => {
    // Implement sharing functionality here
    console.log("Sharing form:", form);
    alert("Sharing functionality to be implemented");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{form.title}</h1>
      {renderForm()}
      <button
        onClick={handleShare}
        className="mt-6 p-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Share Form
      </button>
    </div>
  );
};

export default ShareableForm;
