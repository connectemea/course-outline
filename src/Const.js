const courseNatureValues = [
    "Common course",
    "Core course",
    "Complimentry course",
    "Open course"
  ];

export const dataFields = [
    {
      title: "Name of the Programme",
      name: "programmeName",
      type: "text",
      label: "programme name",
      required: true,
    },
    {
      title: "Name of the Course",
      name: "courseName",
      type: "text",
      label: "Course Name",
      required: true,
    },
    {
      title: "Nature of the Course ",
      name: "courseNature",
      label: "select course nature",
      type: "select",
      values:courseNatureValues
    },
    {
      title: "Semester",
      name: "semester",
      label: "select semester",
      type: "select",
      values:courseNatureValues
    },
    {
      title: "Lecturer(s)",
      name: "lecture",
      type: "textArea",
      label: "Lecturer Name",
    },
    {
      title: "Coordinator Name",
      name: "coordinatorName",
      type: "textArea",
      label: "Coordinator Name ",
    },
    {
      title: "Year",
      name: "year",
      label: "select year",
      type: "select",
      values:courseNatureValues
    },
    {
      title: "No of Credits ",
      name: "noCredits",
      type: "text",
      label: "No of Credits ",
    },
    {
      title: "No of Contact Hours ",
      name: "noContactHours",
      type: "text",
      label: "No of Contact Hours ",
    },
    {
      title: "Course Description ",
      name: "courseDescription",
      type: "text",
      label: "Course Description",
    },
    {
      title: "Course Objectives ",
      name: "courseObjectives",
      type: "text",
      label: "Course Objectives",
    },
    {
      title: "Course Outcome ",
      name: "courseOutcome",
      type: "text",
      label: "Course Outcome",
    },
    {
      title: "Text Book",
      name: "textBook",
      type: "textArea",
      label: "Text Book",
    },
    {
      title: "References",
      name: "references",
      type: "textArea",
      label: "References",
    },
    {
      title: "Internet Resources",
      name: "internetResources",
      type: "text",
      label: "Internet Resources",
    },
  ];
