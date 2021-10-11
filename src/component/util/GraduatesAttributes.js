import CheckBox from "./CheckBoxInput";
import TextInput from "./TextInput";
import { useState } from "react";
import {
  Checkbox,
  Grid,
  List,
  FormControlLabel,
  Collapse,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function GraduatesAttributes(props) {
  const {
    textChangeHandler,
    checkBoxChangeHandler,
    courseOutline,
    fieldValues,
  } = props;
  const [collapseState, setCollapseState] = useState({});
  const toggleCollapseView = (collapseName) =>
    setCollapseState({
      ...collapseState,
      [collapseName]: collapseState[collapseName]
        ? !collapseState[collapseName]
        : true,
    });
  return (
    <>
      <Grid item sm={3}>
        {`${fieldValues.subTitle} ${fieldValues.required ? "*" : ""}`}
      </Grid>
      <Grid item sm={9}>
        <TextInput
          label="Name of the course"
          name="gradutesAttributeCourseName"
          onChange={textChangeHandler}
          value={courseOutline["gradutesAttributeCourseName"]}
        />
        <List>
          {Object.keys(fieldValues.collapse).map((collapse) =>
            !fieldValues.collapse[collapse].length ? (
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={checkBoxChangeHandler}
                    name={collapse}
                    value={collapse}
                    checked={courseOutline[collapse]?.includes(collapse)}
                  />
                }
                label={collapse}
                style={{paddingLeft:"15px"}}
              />
            ) : (
              <>
                <ListItemButton style={{width:'60%'}}>
                  <ListItemText
                    primary={collapse}
                    onClick={() => toggleCollapseView(collapse)}
                  />
                  {collapseState[collapse] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                  in={collapseState[collapse]}
                  timeout="auto"
                  unmountOnExit
                  style={{paddingLeft:'30px'}}
                >
                  <CheckBox
                    changeHandler={checkBoxChangeHandler}
                    name={collapse}
                    selectedValue={courseOutline[collapse] || []}
                    values={fieldValues.collapse[collapse] || []}
                  />
                </Collapse>
              </>
            )
          )}
        </List>
      </Grid>
    </>
  );
}
