// Filename: App.js
// Date modified: 2024-08-05
// Description: Main application component that sets up the overall layout and routing.
// This component serves as the entry point for the application, managing the main layout and routing between different pages and components.

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

// Component imports
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
import CV from "./components/CV";
import DataSources from "./components/DataSources";
import Storage from "./components/Storage";
import PipelineManagement from "./components/PipelineManagement";
import Candidate from "./components/Candidate";
import CVAnalytics from "./components/CVAnalytics";
import Integrations from "./components/Integrations";
import Naukri from "./components/Naukri";
import Zoho from "./components/Zoho";
import Workday from "./components/Workday";
import Analytics1 from "./components/Analytics1";
import Analytics2 from "./components/Analytics2";
import Analytics3 from "./components/Analytics3";
import Engagements from "./components/Engagements";
import Clients from "./components/Clients";
import Orgs from "./components/Orgs";
import JD from "./components/JD";

// CandidateAnalytics components
import CandidateAnalytics from "./components/CandidateAnalytics";
import CandidatePool from "./components/CandidatePool";
import Demographics from "./components/Demographics";
import SkillsAnalysis from "./components/SkillsAnalysis";
import ExperienceAnalysis from "./components/ExperienceAnalysis";
import TrendAnalysis from "./components/TrendAnalysis";
import CandidateComparison from "./components/CandidateComparison";
import PredictiveAnalytics from "./components/PredictiveAnalytics";

/**
 * App Component
 * Main component that sets up the application structure and routing
 * @returns {JSX.Element} Rendered App component
 */
function App() {
  // State for sidebar toggle
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // State for form data
  const [formData, setFormData] = useState(null);
  // State for loading indicator
  const [loading, setLoading] = useState(true);
  // State for error message
  const [error, setError] = useState(null);

  /**
   * Fetch form data from the API
   */
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

  /**
   * Handle form submission
   * @param {Object} formData - The form data to be submitted
   */
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

  /**
   * Toggle sidebar open/close
   */
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
            {loading && <p className="text-center py-4">Loading...</p>}
            {error && <p className="text-center py-4 text-red-500">{error}</p>}
            <Routes>
              <Route path="/" element={<Dashboard />} />
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
              <Route path="/cv" element={<CV />} />
              <Route path="/data-sources" element={<DataSources />} />
              <Route path="/storage" element={<Storage />} />
              <Route
                path="/pipeline-management"
                element={<PipelineManagement />}
              />
              <Route path="/candidate" element={<Candidate />} />
              <Route path="/cv-analytics" element={<CVAnalytics />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/naukri" element={<Naukri />} />
              <Route path="/zoho" element={<Zoho />} />
              <Route path="/workday" element={<Workday />} />
              <Route path="/analytics-1" element={<Analytics1 />} />
              <Route path="/analytics-2" element={<Analytics2 />} />
              <Route path="/analytics-3" element={<Analytics3 />} />
              <Route path="/engagements" element={<Engagements />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/orgs" element={<Orgs />} />
              <Route path="/master-data/jd" element={<JD />} />

              {/* CandidateAnalytics Routes */}
              <Route
                path="/candidate-analytics"
                element={<CandidateAnalytics />}
              />
              <Route path="/candidate-pool" element={<CandidatePool />} />
              <Route path="/demographics" element={<Demographics />} />
              <Route path="/skills-analysis" element={<SkillsAnalysis />} />
              <Route
                path="/experience-analysis"
                element={<ExperienceAnalysis />}
              />
              <Route path="/trend-analysis" element={<TrendAnalysis />} />
              <Route
                path="/candidate-comparison"
                element={<CandidateComparison />}
              />
              <Route
                path="/predictive-analytics"
                element={<PredictiveAnalytics />}
              />
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
