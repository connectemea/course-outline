import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FullWidthTextField(props) {
  // console.log(props);

  return (
    <Box
      sx={{
        // width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField
        fullWidth
        label={props.label}
        id={props.id}
        placeholder={props.placeholder}
        multiline={props.multiline}
        rows={props.rows}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </Box>
  );
}

