import {
  TableHead,
  TableCell,
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableRow,
} from "@mui/material";
import styles from "../pages/styles.module.css";
export default function TablePreview(props) {
  const { cols, rows, type } = props;
  return (
    <Grid container item direction="row">
      <Grid container item>
        <Grid sm={12}>
          <TableContainer >
            <Table
              sx={{ minWidth: 500 }}
              aria-label="simple table"
              border="1"
              width="100%"
              cellpadding="15"
            >
              <TableHead>
                <TableRow>
                  {cols.map((col) => (
                    <TableCell className={styles.tableCell}>{col}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {type === "internal"
                  ? rows.map((row) => (
                      <TableRow
                        key={row.items}
                        // sx={{
                        //   "&:last-child td, &:last-child th": { border: 0 },
                        // }}
                      >
                        <TableCell className={styles.tableCell}>{row.items}</TableCell>
                        <TableCell className={styles.tableCell}>{row.mark20}</TableCell>
                        <TableCell className={styles.tableCell}>{row.mark15}</TableCell>
                      </TableRow>
                    ))
                  : rows.map((row) => (
                      <TableRow
                        key={row.items}
                        // sx={{
                        //   "&:last-child td, &:last-child th": { border: 0 },
                        // }}
                      >
                        <TableCell className={styles.tableCell}>{row.questionType}</TableCell >
                        <TableCell className={styles.tableCell}>{row.noQuestion}</TableCell>
                        <TableCell className={styles.tableCell}>{row.mQ}</TableCell>
                        <TableCell className={styles.tableCell}>{row.totalMarks}</TableCell>
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
