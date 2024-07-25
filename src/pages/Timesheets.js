// File: src/pages/Timesheets.js
// Date modified: 2024-07-25
// Description: Timesheets component for managing and viewing work hours
// This component displays a weekly timesheet with options to log hours, edit entries, and view summaries

import React, { useState } from "react";
import {
  AiOutlineCalendar,
  AiOutlinePlus,
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineClockCircle,
  AiOutlineBarChart,
  AiOutlineProject,
} from "react-icons/ai";

// Dummy data for timesheet entries
const initialEntries = [
  {
    id: 1,
    date: "2024-07-22",
    project: "Project A",
    task: "Development",
    hours: 6,
  },
  {
    id: 2,
    date: "2024-07-22",
    project: "Project B",
    task: "Meeting",
    hours: 2,
  },
  {
    id: 3,
    date: "2024-07-23",
    project: "Project A",
    task: "Testing",
    hours: 4,
  },
  {
    id: 4,
    date: "2024-07-23",
    project: "Project C",
    task: "Planning",
    hours: 3,
  },
  {
    id: 5,
    date: "2024-07-24",
    project: "Project B",
    task: "Development",
    hours: 7,
  },
  { id: 6, date: "2024-07-25", project: "Project C", task: "Review", hours: 5 },
];

const Timesheets = () => {
  const [entries, setEntries] = useState(initialEntries);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const addEntry = () => {
    const newEntry = {
      id: entries.length + 1,
      date: selectedDate.toISOString().split("T")[0],
      project: "New Project",
      task: "New Task",
      hours: 0,
    };
    setEntries([...entries, newEntry]);
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const getTotalHours = () => {
    return entries.reduce((total, entry) => total + entry.hours, 0);
  };

  const getEntriesForDate = (date) => {
    return entries.filter((entry) => entry.date === date);
  };

  const renderWeek = () => {
    const week = [];
    const startOfWeek = new Date(selectedDate);
    startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay() + 1);

    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      const dateString = date.toISOString().split("T")[0];
      const dayEntries = getEntriesForDate(dateString);

      week.push(
        <div key={i} className="border p-4">
          <h3 className="font-semibold">{daysOfWeek[i]}</h3>
          <p className="text-sm text-gray-500">{dateString}</p>
          {dayEntries.map((entry) => (
            <div key={entry.id} className="mt-2 p-2 bg-gray-100 rounded">
              <p className="font-medium">
                {entry.project} - {entry.task}
              </p>
              <p className="text-sm">{entry.hours} hours</p>
              <div className="mt-2 flex justify-end space-x-2">
                <button className="text-blue-500 hover:text-blue-700">
                  <AiOutlineEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => deleteEntry(entry.id)}
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={addEntry}
            className="mt-2 text-blue-500 hover:text-blue-700 flex items-center"
          >
            <AiOutlinePlus className="mr-1" /> Add Entry
          </button>
        </div>
      );
    }

    return week;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Timesheets</h1>
        <div className="flex items-center">
          <AiOutlineCalendar className="mr-2" />
          <input
            type="date"
            value={selectedDate.toISOString().split("T")[0]}
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
            className="border rounded px-2 py-1"
          />
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4 mb-8">{renderWeek()}</div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Weekly Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center">
            <AiOutlineClockCircle className="text-2xl mr-2 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Total Hours</p>
              <p className="text-lg font-semibold">{getTotalHours()} hours</p>
            </div>
          </div>
          <div className="flex items-center">
            <AiOutlineProject className="text-2xl mr-2 text-green-500" />
            <div>
              <p className="text-sm text-gray-500">Projects Worked On</p>
              <p className="text-lg font-semibold">
                {new Set(entries.map((e) => e.project)).size}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <AiOutlineBarChart className="text-2xl mr-2 text-purple-500" />
            <div>
              <p className="text-sm text-gray-500">Productivity</p>
              <p className="text-lg font-semibold">85%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timesheets;
