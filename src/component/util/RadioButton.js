import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function RadioButton({ radiovalue, value }) {
  const handleChange = (e) => {
    radiovalue(e.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        row
        aria-label="externalExamMark"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          onChange={(e) => handleChange(e)}
          value="rows80"
          control={<Radio />}
          label="Total Mark 80"
          checked={value === "rows80" }
        />
        <FormControlLabel
          onChange={(e) => handleChange(e)}
          value="rows60"
          control={<Radio />}
          label="Total Mark 60"
          checked={value === "rows60" }
        />
      </RadioGroup>
    </FormControl>
  );
}
