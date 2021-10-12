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

const generateYearStr = () => {
  const year = new Date().getFullYear() - 3;
  return [...Array(6).keys()].map((key) => `${year + key}-${year + key + 1}`);
};
// const yearValues = [
//   "2018-2019",
//   "2019-2020",
//   "2020-2021",
//   "2021-2022",
//   "2022-2023",
//   "2023-2024",
// ];
const yearValues = generateYearStr();

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

const personalDetails = [
  {
    title: "Name of the Stream",
    name: "courseStream",
    label: "select course stream",
    type: "select",
    values: courseStreamValues,
    required: true,
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
    title: "Year",
    name: "year",
    label: "select year",
    type: "select",
    values: yearValues,
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
    title: "Assessment Method",
    name: "assessmentMethod",
    type: "checkbox",
    label: "Assessment Method",
    values: assessmentMethod,
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

const internalExamTable = [
  {
    subTitle: "Internal",
    type: "tableInternal",
    cols: internalExamCols,
    rows: internalExmaRows,
    name: "InternalTable",
  },
];

const externalExamTable = [
  {
    subTitle: "External",
    type: "tableExternal",
    cols: externalExamCols,
    rows60: externalExamRows60,
    rows80: externalExamRows80,
    name: "ExternalTable",
  },
  {
    subTitle: "Graduate Attributes",
    type: "graduateAttributes",
    name: "gradutesAttributeCourseName",
    label: "graduates attributes",
    collapse: {
      Knowledge: [],
      "Acedemic and Intelictual Skill": [
        "Self Learning",
        "Collaberative Learning",
        "Cognitive Skills",
      ],
      "Professional Skills": [
        "Communication Skills",
        "Teamwork and leadership",
        "Decision Making",
        "Critical and aneletical Skills",
        "IT Skills",
        "Cross cultural skills",
        "Problem Solving Skills",
        "Research Skills",
        "Enterpruenur Aptitude",
      ],
      "Personal Skills": [
        "Creative Thinking",
        "Lifelong learning",
        "Application Skills",
        "life Skills",
      ],
      "Aptitude and Values": [
        "Social Responcipility",
        "Ethical commitment",
        "Global Citizen",
        "Nation Building",
        "Secular Outlook",
      ],
    },
    values: ["knowledge", "personal skill"],
  },
];

const courseSchedule = [
  {
    mainTitle: "Course schedule",
    name: "courseSchedule",
    type: "courseSchedule",
    required: true,
    label: "Course schedule",
  },
];

const contactDetails = [
  {
    title: "Name",
    name: "name",
    type: "text",
    label: "Enter your name",
    required: true,
  },
  {
    title: "Phone",
    name: "phone",
    type: "text",
    label: "Enter your phone",
    required: true,
  },
  {
    title: "Email",
    name: "email",
    type: "text",
    label: "Enter your email",
  },
  {
    title: "Website",
    name: "website",
    type: "text",
    label: "Enter your website",
  },
];

const courseOutlineField = [
  {
    heading: "Course Details",
    fields: personalDetails,
  },
  {
    heading: "Internal Exam Pattern",
    fields: internalExamTable,
    innerTable:true
  },
  {
    heading: "External Exam Pattern",
    fields: externalExamTable,
    innerTable:true

  },
  {
    heading: "Course Schedule",
    fields: courseSchedule,
    innerTable:true,
    required: true,
  },
  {
    heading: "Contact Details",
    fields: contactDetails,
  },
];

export const courseOutlineArray = [
  ...personalDetails,
  ...internalExamCols,
  ...externalExamTable,
  ...courseSchedule,
  ...contactDetails
]

export default courseOutlineField;
