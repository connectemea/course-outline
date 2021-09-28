import React from "react";

import Select from "../../utilities/Select";
import RadioButon from "../../utilities/RadioButon";
import TextField from "../../utilities/TextField";
import Accordion from "../../utilities/Accordian";
import Button from "../../utilities/Button";
import CheckBox from "../../utilities/CheckBox";
import TextArea from "../../utilities/TextArea";
import Layout from "../../utilities/Layout";
import Table from "../../utilities/Table";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import Card from "../../utilities/Card";

// import List from "../../List/List";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import { Grid, Container } from "@mui/material";

const style = {
  width: "100%",
  bgcolor: "background.paper",
};

const Home = () => {
  return (
    <Container>
      <Paper elevation={24} >
        <Grid container>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem>
              <Grid item sm={3}>
                Name of the Stream
              </Grid>
              <Grid item sm={9}>
                <Select />
              </Grid>
            </ListItem>
            <Divider />
            <ListItem>
              <Grid item sm={3}>
                Name of the Programme
              </Grid>
              <Grid item sm={9}>
                <Select />
              </Grid>
            </ListItem>
            <Divider />
            <ListItem>
              <Grid item sm={3}>
                Name of the Course
              </Grid>
              <Grid item sm={9}>
                <TextField
                  label="Course Name *"
                  id="courseNamew"
                  placeholder="Course Name"
                  multiline={false}
                  rows={3}
                />
              </Grid>
            </ListItem>
            <Divider />
            <ListItem>
              <Grid item sm={3}>
                Nature of the Course
              </Grid>
              <Grid item sm={9}>
                <Select />
              </Grid>
            </ListItem>
            <Divider />
            <ListItem>
              <Grid item sm={3}>
                Semester
              </Grid>
              <Grid item sm={9}>
                <Select />
              </Grid>
            </ListItem>
            <Divider />
            <ListItem>
              <Grid item sm={3}>
                Lecturer(s)
              </Grid>
              <Grid item sm={9}>
                <TextField
                  label="Lecturer *"
                  id="lecturer"
                  placeholder="Lecturer"
                  multiline={true}
                  rows={3}
                />
                {/* <Select /> */}
              </Grid>
            </ListItem>
            <Divider />
            <ListItem>
              <Grid item sm={3}>
                Name of the Coordinator
              </Grid>
              <Grid item sm={9}>
                <TextField
                  label="Coordinator Name *"
                  id="coordinatorName"
                  placeholder="Coordinator Name"
                  multiline={false}
                  rows={3}
                />
              </Grid>
            </ListItem>
            <Divider />
            <ListItem>
              <Grid item sm={3}>
                Year
              </Grid>
              <Grid item sm={9}>
                <Select />
              </Grid>
            </ListItem>
            <Divider />
            <ListItem>
              <Grid item sm={3}>
                No of Credits
              </Grid>
              <Grid item sm={9}>
                <TextField
                  label="No of Credits *"
                  id="noCredits"
                  placeholder="No of Credits"
                  multiline={false}
                  rows={3}
                />
              </Grid>
            </ListItem>
            <Divider />
            <ListItem>
              <Grid item sm={3}>
                No of Contact Hours
              </Grid>
              <Grid item sm={9}>
                <TextField
                  label="No of Contact Hours *"
                  id="noContactHours"
                  placeholder="No of Contact Hours"
                  multiline={false}
                  rows={3}
                />
              </Grid>
            </ListItem>
            <Divider />
            <ListItem>
              <Grid item sm={3}>
                Course Description
              </Grid>
              <Grid item sm={9}>
                <TextField
                  label="Course Description *"
                  id="courseDescription"
                  placeholder="Course Description"
                  multiline={true}
                  rows={3}
                />
              </Grid>
            </ListItem>
            <Divider />
            <ListItem>
              <Grid item sm={3}>
                Course Objectives
              </Grid>
              <Grid item sm={9}>
                <TextField
                  label="Course Objectives *"
                  id="courseObjectives"
                  placeholder="Course Objectives"
                  multiline={true}
                  rows={3}
                />
              </Grid>
            </ListItem>
            <Divider />
            <ListItem>
              <Grid item sm={3}>
                Course Outcome
              </Grid>
              <Grid item sm={9}>
                <TextField
                  label="Course Outcome *"
                  id="courseOutcome"
                  placeholder="Course Outcome"
                  multiline={true}
                  rows={3}
                />
              </Grid>
            </ListItem>
            <Divider />
            <ListItem>
              <Grid item sm={3}>
                Assessment Method
              </Grid>
              <Grid item sm={9}>
                <CheckBox color="primary" value="" />
                <CheckBox color="primary" value="" />
              </Grid>
            </ListItem>
            <Divider />
            <ListItem>
              <Grid item sm={3}>
                Textbook
              </Grid>
              <Grid item sm={9}>
                <TextField
                  label="Text Book *"
                  id="textbook"
                  placeholder="Text Book"
                  multiline={true}
                  rows={3}
                />
              </Grid>
            </ListItem>
            <Divider />
            <ListItem>
              <Grid item sm={3}>
                References
              </Grid>
              <Grid item sm={9}>
                <TextField
                  label="References *"
                  id="references"
                  placeholder="References"
                  multiline={true}
                  rows={3}
                />
              </Grid>
            </ListItem>
            <Divider />
            <ListItem>
              <Grid item sm={3}>
                Internet Resources
              </Grid>
              <Grid item sm={9}>
                <TextField
                  label="Internet Resources *"
                  id="internetResources"
                  placeholder="Internet Resources"
                  multiline={true}
                  rows={3}
                />
              </Grid>
            </ListItem>
            <Divider />
          </List>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;
