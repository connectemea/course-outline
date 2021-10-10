import * as React from "react";
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";
import { useState } from "react";

import RadioButton from "./RadioButon";

export default function ExternalExamTable(props) {
  const [value, setValue] = useState("col80");
  const { name, cols, rows60, rows80, changeHandler, selectedValue } = props;

  const handleRadio = (val) => {
    setValue(val);
  };

  return (
    <TableContainer component={Paper}>
      <RadioButton value={value} radiovalue={handleRadio} />
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {cols.map((col) => (
              <TableCell>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        {value == "col60" ? (
          <TableBody>
            {rows60.map((row) => (
              <TableRow
                key={row.items}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.questionType}
                </TableCell>
                <TableCell>{row.noQuestion}</TableCell>
                <TableCell>{row.mQ}</TableCell>
                <TableCell>{row.totalMarks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <TableBody>
            {rows80.map((row) => (
              <TableRow
                key={row.items}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.questionType}
                </TableCell>
                <TableCell>{row.noQuestion}</TableCell>
                <TableCell>{row.mQ}</TableCell>
                <TableCell>{row.totalMarks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}
