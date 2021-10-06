import React from "react";
import { useState } from "react";
import SelectBox from "../util/SelectBox";
import TextField from "../util/TextField";
import CheckBox from "../util/CheckBox";
// import RadioButton from "../util/RadioButon";
import InternalExamTable from "../util/InternalExamTable";
import ExternalExamTable from "../util/ExternalExamTable";
import Paper from "@mui/material/Paper";

// import Card from "../util/Card";

// import List from "../../List/List";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { dataFields } from "../../Const";
import { Grid, Container } from "@mui/material";

const style = {
  width: "100%",
  bgcolor: "background.paper",
};

const Home = () => {
  const [courseOutline, setCourseOutline] = useState({});
  const handleFieldValueChange = (event) => {
    setCourseOutline({
      courseOutline,
      [event.target.name]: event.target.value,
    });
    console.log("its loged");
  };
  const getComponent = (field) => {
    switch (field.type) {
      case "text":
        return (
          <TextField
            label={field.label || ""}
            name={field.name}
            onChange={handleFieldValueChange}
            value={courseOutline[field.name]}
            required={`${field.title}${field.required ? "*" : ""}`}
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
            required={`${field.title}${field.required ? "*" : ""}`}
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
      case "checkBox":
        return (
          <CheckBox
            changeHandler={handleFieldValueChange}
            name={field.name}
            label={field.label}
            selectedValue={courseOutline[field.name]}
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
            // rows={field.rows}
            rows60={field.rows60}
            rows80={field.rows80}
            changeHandler={handleFieldValueChange}
            selectedValue={courseOutline[field.name]}
          />
        );
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
                <ListItem style={{ padding: "30px 20px" }}>
                  <Grid item sm={3}>
                    {`${field.title} ${field.required ? "*" : ""}`}
                  </Grid>
                  <Grid item sm={9}>
                    {getComponent(field)}
                  </Grid>
                  {/* <Table /> */}
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
