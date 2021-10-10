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
import { Grid, Container } from "@mui/material";
import CoveredPortions from "../util/CoveredPortions";
import GraduatesAttributes from "../util/GraduatesAttributes";
import TextAreaInput from "../util/TextArea";
import courseOutlineField from "../../Const";
import styles from "./styles.module.css";


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
            sample={field.sample || ""}
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
        return (
          <GraduatesAttributes
            textChangeHandler={handleFieldValueChange}
            checkBoxChangeHandler={handleCheckBoxChange}
            courseOutline={courseOutline}
            fieldValues={field}
          />
        );
      default:
        return;
    }
  };

  return (
    <Container className={styles.formWrapper}>
      <div className={styles.appTitle}>
        <h1 className={styles.pageTitle}>Course Outline</h1>
        <span className={styles.subTitle}>EMEA College</span>
      </div>
      <Paper elevation={4} className={styles.formContainer}>
        {courseOutlineField.map((section) => (
          <>
            <h3 className={styles.sectiontHeading}> {section.heading}</h3>
            <List sx={styles} component="ul" className={styles.fieldList}>
              {section.fields.map((field) => (
                <>
                  <ListItem className={styles.fieldListItem}>
                    <Grid container>
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
                    </Grid>
                  </ListItem>
                  <Divider />
                </>
              ))}
              {/* <ListItem style={{ padding: "30px 20px" }}>

            </ListItem> */}
            </List>
          </>
        ))}
        <div class={styles.btnContainer}>
          <Button
            variant="contained"
            style={{ margin: "0 auto" }}
            onClick={handleFormSubmission}
          >
            Preview
          </Button>
        </div>
      </Paper>
    </Container>
  );
};

export default Home;
