// Drop down vales
const courseStreamValues = [
  "Commerce and Management",
  "Humanities and Social Science",
  "Science",
  "Physical Education",
  "B.voc",
];

const courseNatureValues = [
  "Common course",
  "Core course",
  "Complimentry course",
  "Open course",
];

const semesterValues = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth"];

const yearValues = [
  "2018-2019",
  "2019-2020",
  "2020-2021",
  "2021-2022",
  "2022-2023",
  "2023-2024",
];

// Check box values

const assessmentMethod = [
  "Assignments",
  "Homeworks",
  "Class Tests",
  "Unit Tests",
  "Practical Tests",
  "Term Exam",
  "Seminars",
  "Lab Experiments",
];

// Tabele Data
const internalExamCols = ["Items", "Mark 20", "Mark 15"];

const internalExmaRows = [
  { items: "Assignment", mark20: "4", mark15: "3" },
  { items: "Test Paper(s)/Viva voce", mark20: "8", mark15: "6" },
  { items: "Seminar/Presentation", mark20: "4", mark15: "3" },
  {
    items: "Class Room Particpation based on Attendance",
    mark20: "4",
    mark15: "3",
  },
  { items: "Total", mark20: "20", mark15: "15" },
];

const externalExamCols = [
  "Question Type",
  "No of Question",
  "Mark/Question",
  "Total Marks",
];

const externalExamRows60 = [
  {
    questionType: "Short Questions(2-3 Sentences)",
    noQuestion: "12",
    mQ: "2",
    totalMarks: "Ceiling 20",
  },
  {
    questionType: "Paragraph / Problem Type",
    noQuestion: "7",
    mQ: "5",
    totalMarks: "Ceiling 30",
  },
  {
    questionType: "Essay Type",
    noQuestion: "2 out of 4",
    mQ: "10",
    totalMarks: "10",
  },
  {
    questionType: "Total",
    noQuestion: " ",
    mQ: " ",
    totalMarks: "60",
  },
  {
    questionType: "Time",
    noQuestion: " ",
    mQ: " ",
    totalMarks: "2 hrs",
  },
];

const externalExamRows80 = [
  {
    questionType: "Short Questions(2-3 Sentences)",
    noQuestion: "15",
    mQ: "2",
    totalMarks: "Ceiling 25",
  },
  {
    questionType: "Paragraph / Problem Type",
    noQuestion: "8",
    mQ: "5",
    totalMarks: "Ceiling 35",
  },
  {
    questionType: "Essay Type",
    noQuestion: "2 out of 4",
    mQ: "10",
    totalMarks: "10",
  },
  {
    questionType: "Total",
    noQuestion: " ",
    mQ: " ",
    totalMarks: "80",
  },
  {
    questionType: "Time",
    noQuestion: " ",
    mQ: " ",
    totalMarks: "2.5 hrs",
  },
];

// const externalExam60Cols =
export const dataFields = [
  {
    title: "Name of the Stream",
    name: "courseStream",
    label: "select course stream",
    type: "select",
    values: courseStreamValues,
  },
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
    values: courseNatureValues,
  },
  {
    title: "Semester",
    name: "semester",
    label: "select semester",
    type: "select",
    values: semesterValues,
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
    values: yearValues,
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

  {
    title: "Assessment Method",
    name: "assessmentMethod",
    type: "checkbox",
    label: "Assessment Method",
    values: assessmentMethod,
  },
  {
    title: "Internal",
    type: "tableInternal",
    cols: internalExamCols,
    rows: internalExmaRows,
    name: "Internal",
  },
  {
    title: "External",
    type: "tableExternal",
    cols: externalExamCols,
    rows60: externalExamRows60,
    rows80: externalExamRows80,
    name: "External",
  },
];
