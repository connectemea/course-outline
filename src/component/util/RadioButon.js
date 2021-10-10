import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButton({ radiovalue, value }) {
  const handleChange = (e) => {
    radiovalue(e.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">External Exam paper</FormLabel>
      <RadioGroup
        row
        aria-label="externalExamMark"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          onChange={(e) => handleChange(e)}
          value="col80"
          control={<Radio />}
          label="Total Mark 80"
          checked={value == "col80" && true}
        />
        <FormControlLabel
          onChange={(e) => handleChange(e)}
          value="col60"
          control={<Radio />}
          label="Total Mark 60"
        />
      </RadioGroup>
    </FormControl>
  );
}
