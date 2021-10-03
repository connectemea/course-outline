import React from "react";
import { useState } from "react";
import Select from "../util/Select";
// import RadioButon from "../util/RadioButon";
import TextField from "../util/TextField";
// import Accordion from "../util/Accordian";
// import Button from "../util/Button";
// import CheckBox from "../util/CheckBox";
// import TextArea from "../util/TextArea";
// import Layout from "../util/Layout";
// import Table from "../util/Table";

// import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

// import Card from "../util/Card";

// import List from "../../List/List";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import { Grid, Container } from "@mui/material";

const style = {
  width: "100%",
  bgcolor: "background.paper",
};

// const listItem = (props) => {
//   const { compType, field } = props;
//   const getComponent = (type) => {
//     switch (type) {
//       case "text":
//         return (
//           <TextField
//             label={field.label || ""}
//             placeholder={field.placeHolder || ""}
//           />
//         );
//       case "textArea":
//         return (
//           <TextField
//             label={field.label || ""}
//             placeholder={field.placeHolder || ""}
//             multiline
//             rows={3}
//           />
//         );
//       case "select":
//         return <Select />;
//     }
//   };
//   return (
//     <>
//       <ListItem>
//         <Grid item sm={3}>
//           Name of the Stream
//         </Grid>
//         <Grid item sm={9}>
//           {/* <Select /> */}
//           {getComponent(compType)}
//         </Grid>
//       </ListItem>
//       <Divider />
//     </>
//   );
// };

const Home = () => {
  const [courseOutline, setCourseOutline] = useState({});
  const handleFieldValueChange = (event) =>
    setCourseOutline({
      ...courseOutline,
      [event.target.name]: event.target.value,
    });

  const getComponent = (field) => {
    switch (field.type) {
      case "text":
        return (
          <TextField
            label={field.label || ""}
            name={field.name}
            onChange={handleFieldValueChange}
            value={courseOutline[field.name]}
          />
        );
      case "textArea":
        return (
          <TextField
            label={field.label || ""}
            multiline
            rows={3}
            onChange={handleFieldValueChange}
            name={field.name}
            value={courseOutline[field.name]}
          />
        );
      case "select":
        return (
          <Select
            onChange={handleFieldValueChange}
            name={field.name}
            value={courseOutline[field.name]}
            test={field.drop}
          />
        );
    }
  };

  const dropDownTest = [
    { value: "value1", label: "label 1" },
    { value: "value2", label: "label 2" },
    { value: "value3", label: "label 3" },
    { value: "value4", label: "label 4" },
  ];
  const dataFields = [
    {
      title: "Name of the Programme",
      name: "programmeName",
      type: "select",
      drop: dropDownTest,
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
      type: "select",
    },
    {
      title: "Semester",
      name: "semester",
      type: "select",
    },
    {
      title: "Lecturer(s)",
      name: "lecture",
      type: "textArea",
      label: "Lecturer Name",
    },
    {
      title: "Coordinator Name *",
      name: "coordinatorName",
      type: "textArea",
      label: "Coordinator Name ",
    },
    {
      title: "Year",
      name: "year",
      type: "select",
    },
    {
      title: "No of Credits *",
      name: "noCredits",
      type: "text",
      label: "No of Credits *",
    },
    {
      title: "No of Contact Hours *",
      name: "noContactHours",
      type: "text",
      label: "No of Contact Hours *",
    },
    {
      title: "Course Description *",
      name: "courseDescription",
      type: "text",
      label: "Course Description",
    },
    {
      title: "Course Objectives *",
      name: "courseObjectives",
      type: "text",
      label: "Course Objectives",
    },
    {
      title: "Course Outcome *",
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
  return (
    <Container>
      <Paper elevation={24}>
        <Grid container>
          <List sx={style} component="nav" aria-label="mailbox folders">
            {dataFields.map((field) => (
              <>
                <ListItem style={{ padding: "30px 20px" }}>
                  <Grid item sm={3}>
                    {field.title}
                  </Grid>
                  <Grid item sm={9}>
                    {getComponent(field)}
                  </Grid>
                </ListItem>
                <Divider />
              </>
            ))}
            {/* 
           
              <Grid item sm={3}>
                Assessment Method
              </Grid>
              <Grid item sm={9}>
                <CheckBox color="primary" value="" />
                <CheckBox color="primary" value="" />
              </Grid>
            </ListItem>
*/}
          </List>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;
