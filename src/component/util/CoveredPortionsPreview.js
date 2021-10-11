import {
  TableCell,
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableRow,
} from "@mui/material";
import styles from "../pages/styles.module.css";

export default function CoveredPortionsPreview(props) {
  const { coveredPortions } = props;
  return (
    <Grid container item direction="row">
      <Grid container item>
        <Grid sm={12}>
          <TableContainer>
            <Table>
              <TableBody>
                {coveredPortions.map((portion) => (
                  <TableRow key={portion.discribtion}>
                    <TableCell
                      className={`${styles.tableCell} ${styles.headingTable}`}
                    >
                      {portion.discribtion}
                    </TableCell>
                    <TableCell className={styles.tableCell}>
                      {portion.duration}
                    </TableCell>
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
