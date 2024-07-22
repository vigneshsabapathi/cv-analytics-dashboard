// File: src/components/Dashboard/RevenueDashboard.js
// Date modified: 2024-07-17
// Description: RevenueDashboard component for displaying revenue data
//
// This component renders the revenue dashboard with various charts and widgets.
//
// Dependencies:
//   - React
//   - LineChart component
//   - StatCard, MostViewedItem, InvoiceList, MessageList widgets
//   - Various icons from @heroicons/react

import React from "react";
import LineChart from "../charts/LineChart";
import StatCard from "../StatCard";
import MostViewedItem from "../widgets/MostViewedItem";
import InvoiceList from "../widgets/InvoiceList";
import MessageList from "../widgets/MessageList";
import {
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  CreditCardIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";

/**
 * RevenueDashboard Component
 *
 * Displays the revenue dashboard with various statistics and charts
 *
 * @returns {React.ReactElement} Rendered RevenueDashboard component
 */
const RevenueDashboard = () => {
  const incomeData = [
    { date: new Date("2023-01-01"), value: 12000 },
    { date: new Date("2023-02-01"), value: 19000 },
    { date: new Date("2023-03-01"), value: 15000 },
    { date: new Date("2023-04-01"), value: 17000 },
    { date: new Date("2023-05-01"), value: 22000 },
    { date: new Date("2023-06-01"), value: 18000 },
  ];

  const mostViewedItems = [
    { name: "Product A", views: 1234 },
    { name: "Service B", views: 987 },
    { name: "Package C", views: 765 },
    { name: "Offer D", views: 543 },
  ];

  const invoices = [
    { id: "001", date: "Nov/1234/5/0", status: "PAID" },
    { id: "002", date: "Nov/1235/6/0", status: "PENDING" },
    { id: "003", date: "Nov/1236/7/0", status: "PAID" },
    { id: "004", date: "Nov/1237/8/0", status: "PAID" },
  ];

  const messages = [
    {
      name: "Finance Dept",
      subject: "Monthly Report",
      status: "Review Required",
    },
    { name: "Sales Team", subject: "New Deal", status: "Approval Needed" },
    {
      name: "Customer Support",
      subject: "Feedback Summary",
      status: "For Your Information",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <ChartPieIcon className="w-5 h-5 mr-2" />
          Income
        </h3>
        <LineChart data={incomeData} width={600} height={300} />
      </div>
      <StatCard
        title="Balance"
        value="$15,000"
        subtext="see history"
        icon={CurrencyDollarIcon}
      />
      <StatCard
        title="Growth"
        value="12%"
        subtext="vs last month"
        icon={ArrowTrendingUpIcon}
      />
      <StatCard
        title="Expense"
        value="$8,500"
        subtext="This month"
        icon={CreditCardIcon}
      />
      <MostViewedItem items={mostViewedItems} />
      <div className="col-span-2">
        <InvoiceList invoices={invoices} />
      </div>
      <MessageList messages={messages} />
    </div>
  );
};

export default RevenueDashboard;
