// File: src/App.js
// Date modified: 2024-07-23
// Description: Main App component for the Analytics Dashboard and Dynamic Form
// This component sets up the routing and overall layout for the application.

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import MasterData from "./components/MasterData";
import JDOpen from "./components/JDOpen";
import JDInProgress from "./components/JDInProgress";
import JDClosed from "./components/JDClosed";
import Domain from "./components/Domain";
import DataSource from "./components/DataSource";
import CloudStorage from "./components/CloudStorage";
import LocalStorage from "./components/LocalStorage";
import LinkedIn from "./components/LinkedIn";
import WebSource from "./components/WebSource";
import Analytics from "./components/Analytics";
import DynamicForm from "./components/DynamicForm";
import TypeformStyle from "./components/TypeformStyle";
import CreateForms from "./components/CreateForms";
import FormGenerator from "./components/FormGenerator";
import ShareableForm from "./components/ShareableForm";

function App() {
  // State to control sidebar visibility on mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // State to store form data fetched from API
  const [formData, setFormData] = useState(null);
  // State to indicate loading status
  const [loading, setLoading] = useState(true);
  // State to store any error messages
  const [error, setError] = useState(null);

  // Effect to fetch form data from API on component mount
  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/form-data");
        setFormData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching form data:", err);
        setError("Failed to load form data. Please try again later.");
        setLoading(false);
      }
    };

    fetchFormData();
  }, []);

  // Function to handle form submission
  const handleSubmit = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/submit-form",
        formData
      );
      console.log("Form submitted successfully", response.data);
      // TODO: Handle successful submission (e.g., show success message)
    } catch (error) {
      console.error("Error submitting form:", error);
      // TODO: Handle submission error (e.g., show error message)
    }
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Topbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
            {loading && <div className="text-center py-4">Loading...</div>}
            {error && (
              <div className="text-center py-4 text-red-500">{error}</div>
            )}
            {!loading && !error && (
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/master-data" element={<MasterData />} />
                <Route path="/jd/open" element={<JDOpen />} />
                <Route path="/jd/in-progress" element={<JDInProgress />} />
                <Route path="/jd/closed" element={<JDClosed />} />
                <Route path="/domain" element={<Domain />} />
                <Route path="/data-source" element={<DataSource />} />
                <Route path="/cloud-storage" element={<CloudStorage />} />
                <Route path="/local-storage" element={<LocalStorage />} />
                <Route path="/linkedin" element={<LinkedIn />} />
                <Route path="/websource" element={<WebSource />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route
                  path="/DynamicForm"
                  element={
                    <div className="max-w-4xl mx-auto">
                      <DynamicForm
                        questions={formData?.questions}
                        onSubmit={handleSubmit}
                      />
                    </div>
                  }
                />
                <Route path="/TypeformStyle" element={<TypeformStyle />} />
                <Route path="/create-forms/*" element={<CreateForms />} />
                <Route
                  path="/create-forms/:type/:templateId"
                  element={<FormGenerator />}
                />
                <Route path="/share-form/:type" element={<ShareableForm />} />
              </Routes>
            )}
          </main>
          <footer className="mt-8 text-center py-4 bg-gray-200">
            <p className="text-gray-600">Powered by TRUSTGRID.AI</p>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
