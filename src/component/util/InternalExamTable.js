// import * as React from "react";

import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Grid
} from "@mui/material";

export default function InternalExamTable(props) {
  const { name, cols, rows, changeHandler, selectedValue } = props;
  return (
    <Grid container item direction="row">
          <Grid item container>
        <Grid item sm={8}>
          <h3>Internal Exam Pattern</h3>
        </Grid>
      </Grid>
    <Grid container item >
      <Grid sm={12}>


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {cols.map((col) => (
              <TableCell>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.items}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.items}
              </TableCell>
              <TableCell>{row.mark20}</TableCell>
              <TableCell>{row.mark15}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </Grid>
    </Grid>
  );
}
