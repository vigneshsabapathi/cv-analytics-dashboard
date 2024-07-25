// File: src/App.js
// Date modified: 2024-08-02
// Description: Main application component that sets up the overall layout and routing
// This component now includes all created pages and components, with Dashboard as the main route

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboards";
import MasterData from "./pages/MasterData";
import Inbox from "./pages/Inbox";
import Docs from "./pages/Docs";
import Clips from "./pages/Clips";
import Timesheets from "./pages/Timesheets";
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
import ConversationalForm from "./components/ConversationalForm";
import CreateForms from "./components/CreateForms";
import FormGenerator from "./components/FormGenerator";
import ShareableForm from "./components/ShareableForm";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar collapsed={sidebarOpen} setCollapsed={setSidebarOpen} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Topbar toggleSidebar={toggleSidebar} />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <Routes>
              <Route path="/" element={<Dashboard />} />{" "}
              {/* Set Dashboard as the main route */}
              <Route path="/master-data" element={<MasterData />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/clips" element={<Clips />} />
              <Route path="/timesheets" element={<Timesheets />} />
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
              <Route path="/create-forms/vertical" element={<DynamicForm />} />
              <Route
                path="/create-forms/typeform"
                element={<TypeformStyle />}
              />
              <Route
                path="/create-forms/conversational"
                element={<ConversationalForm />}
              />
              <Route path="/create-forms" element={<CreateForms />} />
              <Route
                path="/create-forms/:type/:templateId"
                element={<FormGenerator />}
              />
              <Route path="/share-form/:type" element={<ShareableForm />} />
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
            </Routes>
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
