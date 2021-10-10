import * as React from "react";
import { Box, TextField, Button, Tooltip } from "@mui/material";

export default function TextAreaInput(props) {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        textAlign:"right"
      }}
    >
      <TextField
        fullWidth
        label={props.label}
        id={props.id}
        placeholder={props.placeholder}
        multiline
        rows="3"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      { props.sample && (
        <Tooltip disableFocusListener title={props.sample}>
        <Button>sample</Button>
      </Tooltip>
      )}
    </Box>
  );
}
