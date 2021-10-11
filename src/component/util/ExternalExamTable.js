import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Grid,
} from "@mui/material";
import { useState } from "react";

import RadioButton from "./RadioButton";

export default function ExternalExamTable(props) {
  const [value, setValue] = useState("rows80");
  const { cols, rows60, rows80, changeHandler } = props;

  const handleRadio = (val) => {
    setValue(val);
    changeHandler(val);
  };

  return (
    <Grid item sm={12}>
      <RadioButton value={value} radiovalue={handleRadio} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {cols.map((col) => (
                <TableCell>{col}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          {value === "rows60" ? (
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
    </Grid>
  );
}
