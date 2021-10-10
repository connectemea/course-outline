import React from "react";
import { useState } from "react";
import SelectBox from "../util/SelectInput";
import TextInput from "../util/TextInput";
import CheckBox from "../util/CheckBoxInput";
import InternalExamTable from "../util/InternalExamTable";
import ExternalExamTable from "../util/ExternalExamTable";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import { dataFields } from "../../Const";
import { Grid, Container } from "@mui/material";
import CoveredPortions from "../util/CoveredPortions";
import GraduatesAttributes from "../util/GraduatesAttributes"
import TextAreaInput from "../util/TextArea";

const style = {
  width: "100%",
  bgcolor: "background.paper",
};

const Home = () => {
  const [courseOutline, setCourseOutline] = useState({});
  const handleFieldValueChange = (event) => {
    setCourseOutline({
      ...courseOutline,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmission = (event) => {
    console.log(courseOutline);
  };

  const handleAddMoreCoveredPortion = (value) =>
    setCourseOutline({
      ...courseOutline,
      courseSchedule: courseOutline.courseSchedule
        ? [...courseOutline.courseSchedule, value]
        : [value],
    });
  const handleCheckBoxChange = (event) => {
    setCourseOutline(
      courseOutline[event.target.name]
        ? {
            ...courseOutline,
            [event.target.name]: courseOutline[event.target.name].includes(
              event.target.value
            )
              ? courseOutline[event.target.name].filter(
                  (value) => value !== event.target.value
                )
              : [...courseOutline[event.target.name], event.target.value],
          }
        : {
            ...courseOutline,
            [event.target.name]: [event.target.value],
          }
    );
  };

  const getComponent = (field) => {
    switch (field.type) {
      case "text":
        return (
          <TextInput
            label={field.label || ""}
            name={field.name}
            onChange={handleFieldValueChange}
            value={courseOutline[field.name]}
            required={`${field.title}${field.required ? "*" : ""}`}
          />
        );
      case "textArea":
        return (
          <TextAreaInput
            label={field.label || ""}
            onChange={handleFieldValueChange}
            name={field.name}
            value={courseOutline[field.name]}
            required={`${field.title}${field.required ? "*" : ""}`}
            // sample={"this is an sample"}
          />
        );
      case "select":
        return (
          <SelectBox
            changeHandler={handleFieldValueChange}
            name={field.name}
            label={field.label}
            selectedValue={courseOutline[field.name]}
            values={field.values}
            required={field.required}
          />
        );
      case "checkbox":
        return (
          <CheckBox
            changeHandler={handleCheckBoxChange}
            name={field.name}
            label={field.label}
            selectedValue={courseOutline[field.name] || []}
            values={field.values}
            required={field.required}
          />
        );
      case "tableInternal":
        return (
          <InternalExamTable
            name={field.name}
            cols={field.cols}
            rows={field.rows}
            changeHandler={handleFieldValueChange}
            selectedValue={courseOutline[field.name]}
          />
        );
      case "tableExternal":
        return (
          <ExternalExamTable
            name={field.name}
            cols={field.cols}
            rows60={field.rows60}
            rows80={field.rows80}
            changeHandler={handleFieldValueChange}
            selectedValue={courseOutline[field.name]}
          />
        );
      case "courseSchedule":
        return (
          <CoveredPortions
            addMoreHandler={handleAddMoreCoveredPortion}
            addedPortion={courseOutline["courseSchedule"] || []}
          />
        );
      case "graduateAttributes":
        return(
          <GraduatesAttributes
            textChangeHandler={handleFieldValueChange}
            checkBoxChangeHandler={handleCheckBoxChange}
            courseOutline={courseOutline}
            fieldValues={field}
          />
        )
      default:
        return;
    }
  };

  return (
    <Container style={{ margin: "40px auto" }}>
      <Paper elevation={4}>
        <Grid container>
          <List sx={style} component="nav" aria-label="mailbox folders">
            {dataFields.map((field) => (
              <>
                <ListItem style={{ padding: "20px" }}>
                  {field.title ? (
                    <>
                      <Grid item sm={3}>
                        {`${field.title} ${field.required ? "*" : ""}`}
                      </Grid>
                      <Grid item sm={9}>
                        {getComponent(field)}
                      </Grid>
                    </>
                  ) : (
                    getComponent(field)
                  )}
                </ListItem>
                <Divider />
              </>
            ))}
            <ListItem style={{ padding: "30px 20px" }}>
              <Button
                variant="contained"
                style={{ margin: "0 auto" }}
                onClick={handleFormSubmission}
              >
                Preview
              </Button>
            </ListItem>
          </List>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;
