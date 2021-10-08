// import * as React from "react";

import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";

import RadioButton from "./RadioButon";

export default function ExternalExamTable(props) {
  const { name, cols, rows60, rows80, changeHandler, selectedValue } = props;

  const isLodded = false;

  return (
    <TableContainer component={Paper}>
      <RadioButton />
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {cols.map((col) => (
              <TableCell>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        {isLodded ? (
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
        ) : (
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
        )}
      </Table>
    </TableContainer>
  );
}
