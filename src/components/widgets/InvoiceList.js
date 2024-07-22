// File: src/components/Dashboard/widgets/InvoiceList.js
// Date modified: 2024-07-17
// Description: InvoiceList component for displaying a list of invoices
//
// This component renders a card with a list of invoices and their status.
//
// Props:
//   - invoices: Array of objects, each containing 'id', 'date', and 'status' properties

import React from "react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

const InvoiceList = ({ invoices = [] }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <DocumentTextIcon className="w-5 h-5 mr-2" />
        Invoices
      </h3>
      {invoices.map((invoice) => (
        <div
          key={invoice.id}
          className="flex justify-between items-center mb-2"
        >
          <span>
            Invoice {invoice.id}/{invoice.date}
          </span>
          <span
            className={`px-2 py-1 rounded text-xs ${
              invoice.status === "PAID"
                ? "bg-green-500 text-white"
                : "bg-yellow-500 text-white"
            }`}
          >
            {invoice.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default InvoiceList;
