import {
  TableHead,
  TableCell,
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  Paper,
} from "@mui/material";

export default function TablePreview(props) {
  const { cols, rows, type } = props;
  return (
    <Grid container item direction="row">
      <Grid container item>
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
                {type === "internal"
                  ? rows.map((row) => (
                      <TableRow
                        key={row.items}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.items}
                        </TableCell>
                        <TableCell>{row.mark20}</TableCell>
                        <TableCell>{row.mark15}</TableCell>
                      </TableRow>
                    ))
                  : rows.map((row) => (
                      <TableRow
                        key={row.items}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
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
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Grid>
  );
}
