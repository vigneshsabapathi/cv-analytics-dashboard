// File: src/components/FormTemplates.js
// Date modified: 2024-07-22
// Description: Contains templates for different HR forms
// This file exports functions to generate form templates based on the form-data.json file

import formData from "../form-data.json";

const generateTemplate = (groups) => {
  return groups.map((group) => ({
    groupTitle: group.groupTitle,
    questions: group.questions.map((q) => ({
      id: q.id,
      text: q.text,
      type: q.type,
      required: q.required,
      options: q.options || undefined,
      conditional: q.conditional || undefined,
    })),
  }));
};

export const hrTemplate1 = generateTemplate(formData.questions.slice(0, 2));
export const hrTemplate2 = generateTemplate(formData.questions.slice(2, 4));
export const hrTemplate3 = generateTemplate(formData.questions.slice(4));

export const getTemplate = (templateId) => {
  switch (templateId) {
    case "hr-template-1":
      return hrTemplate1;
    case "hr-template-2":
      return hrTemplate2;
    case "hr-template-3":
      return hrTemplate3;
    default:
      return null;
  }
};
