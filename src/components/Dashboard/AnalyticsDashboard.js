// File: src/components/Dashboard/AnalyticsDashboard.js
// Date modified: 2024-07-17
// Description: AnalyticsDashboard component for displaying analytics data
//
// This component renders the main analytics dashboard with various widgets and charts.
//
// Dependencies:
//   - React
//   - StatCard, BarChart, LineChart components
//   - MostViewedItem, InvoiceList, MessageList widgets
//   - Various icons from @heroicons/react

import React from "react";
import StatCard from "../StatCard";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import MostViewedItem from "../widgets/MostViewedItem";
import InvoiceList from "../widgets/InvoiceList";
import MessageList from "../widgets/MessageList";
import {
  DocumentTextIcon,
  BriefcaseIcon,
  ServerIcon,
  CogIcon,
  DocumentDuplicateIcon,
  UsersIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

/**
 * AnalyticsDashboard Component
 *
 * Displays the main analytics dashboard with various statistics and charts
 *
 * @returns {React.ReactElement} Rendered AnalyticsDashboard component
 */
const AnalyticsDashboard = () => {
  // Sample data - replace with real data in a production environment
  const stats = [
    {
      title: "Number of CVs",
      value: "15,234",
      subtext: "vs last month",
      change: 2.5,
      icon: DocumentTextIcon,
    },
    {
      title: "Number of JDs",
      value: "1,876",
      subtext: "Active jobs",
      change: 5.2,
      icon: BriefcaseIcon,
    },
    {
      title: "Data Sources",
      value: "23",
      subtext: "platforms",
      change: 0,
      icon: ServerIcon,
    },
    {
      title: "CV Processed",
      value: "14,567",
      subtext: "95% processed",
      change: 1.8,
      icon: CogIcon,
    },
    {
      title: "CV Extracted",
      value: "13,890",
      subtext: "95.3% extraction",
      change: -0.5,
      icon: DocumentDuplicateIcon,
    },
    {
      title: "Resource Pipeline",
      value: "3,456",
      subtext: "candidates",
      change: 7.2,
      icon: UsersIcon,
    },
    {
      title: "Short Listed CV",
      value: "789",
      subtext: "5.4% shortlist rate",
      change: 3.1,
      icon: ClipboardDocumentCheckIcon,
    },
    {
      title: "Success Ratio",
      value: "68%",
      subtext: "Placement rate",
      change: 1.5,
      icon: ChartBarIcon,
    },
  ];

  const barChartData = [
    { label: "Jan", value: 65 },
    { label: "Feb", value: 59 },
    { label: "Mar", value: 80 },
    { label: "Apr", value: 81 },
    { label: "May", value: 56 },
    { label: "Jun", value: 55 },
  ];

  const lineChartData = [
    { date: new Date("2023-01-01"), value: 12000 },
    { date: new Date("2023-02-01"), value: 19000 },
    { date: new Date("2023-03-01"), value: 15000 },
    { date: new Date("2023-04-01"), value: 17000 },
    { date: new Date("2023-05-01"), value: 22000 },
    { date: new Date("2023-06-01"), value: 18000 },
  ];

  const mostViewedItems = [
    { name: "Item 01", views: 1234 },
    { name: "Item 02", views: 987 },
    { name: "Item 03", views: 765 },
    { name: "Item 04", views: 543 },
  ];

  const invoices = [
    { id: "001", date: "Nov/1234/5/0", status: "PAID" },
    { id: "002", date: "Nov/1235/6/0", status: "PENDING" },
    { id: "003", date: "Nov/1236/7/0", status: "PAID" },
    { id: "004", date: "Nov/1237/8/0", status: "PAID" },
  ];

  const messages = [
    {
      name: "Johnson, Mark",
      subject: "Invoice November",
      status: "Status Update: Success",
    },
    {
      name: "Adelia, Nadia",
      subject: "Project Assignment",
      status: "Presentation Material",
    },
    {
      name: "Amelia, Laura",
      subject: "Meeting Schedule",
      status: "Project: interior design",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-2">Monthly Applications</h3>
          <BarChart data={barChartData} width={500} height={300} />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-2">Revenue Trend</h3>
          <LineChart data={lineChartData} width={500} height={300} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MostViewedItem items={mostViewedItems} />
        <InvoiceList invoices={invoices} />
        <MessageList messages={messages} />
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
