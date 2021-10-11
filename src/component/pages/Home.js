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
import PreviewIcon from "@mui/icons-material/Preview";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { Grid, Tooltip } from "@mui/material";
import CoveredPortions from "../util/CoveredPortions";
import GraduatesAttributes from "../util/GraduatesAttributes";
import TextAreaInput from "../util/TextArea";
import courseOutlineField from "../../Const";
import styles from "./styles.module.css";
import { useHistory } from "react-router";

const Home = (props) => {
  const { setPreviewData, previewData } = props;
  const [courseOutline, setCourseOutline] = useState(previewData);
  const history = useHistory();
  const handleFieldValueChange = (event) => {
    setCourseOutline({
      ...courseOutline,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmission = (event) => {
    setPreviewData({
      ...courseOutline,
      InternalTable:"created",
      ExternalTable: courseOutline["ExternalTable"] || "rows80",
    });
    history.push("/preview");
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
  const handleTableChange = (value) =>
    setCourseOutline({
      ...courseOutline,
      ExternalTable: value,
    });
  const handleFormReset = () => history.go(0);

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
            changeHandler={handleTableChange}
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
          </List>
        </>
      ))}

      <div class={styles.btnContainer}>
        <Tooltip disableFocusListener title="Show your word document model">
          <Button
            variant="contained"
            className={styles.customBtn}
            onClick={handleFormSubmission}
          >
            <PreviewIcon className={styles.btnIcon} />
            Preview
          </Button>
        </Tooltip>
        <Tooltip disableFocusListener title="Clear all input field">
          <Button
            variant="contained"
            color="error"
            className={styles.customBtn}
            onClick={handleFormReset}
          >
            <BackspaceIcon className={styles.btnIcon} />
            Reset
          </Button>
        </Tooltip>
      </div>
    </Paper>
  );
};

export default Home;
