import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckBox(props) {
  const { name, label, values, required, changeHandler,selectedValue } = props;

  return (
    <FormGroup>
      {values.map((value) => (
        <FormControlLabel control={<Checkbox onChange={changeHandler} name={name} value={value} checked={selectedValue.includes(value)}/>} label={value}/>
      ))}
      {/* <FormControlLabel control={<Checkbox />} label="Label" /> */}
    </FormGroup>
  );
}
