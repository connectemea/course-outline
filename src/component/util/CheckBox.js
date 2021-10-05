import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxLabels(props) {
  const { name, label, values, required, chageHandler } = props;
  return (
    <FormGroup>
      {values.map((value) => (
        <FormControlLabel control={<Checkbox />} label={value} />
      ))}
      {/* <FormControlLabel control={<Checkbox />} label="Label" /> */}
    </FormGroup>
  );
}
