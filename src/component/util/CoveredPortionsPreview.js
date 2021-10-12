import {
  TableCell,
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableHead,
} from "@mui/material";
import styles from "../pages/styles.module.css";

export default function CoveredPortionsPreview(props) {
  const { coveredPortions } = props;
  return (
    <Grid container item direction="row">
      <Grid container item>
        <Grid sm={12}>
          <TableContainer>
            <Table border="1" width="100%" cellpadding="15">
              <TableHead>
                <TableRow>
                  <TableCell className={styles.tableCell}>
                    <h4 style={{ margin: "0" }}>Discribtion</h4>
                  </TableCell>
                  <TableCell className={styles.tableCell}>
                    <h4 style={{ margin: "0" }}>Duration</h4>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {coveredPortions.map((portion) => (
                  <TableRow key={portion.discribtion}>
                    <TableCell
                      className={`${styles.tableCell} ${styles.headingTable}`}
                    >
                      <h5 style={{ margin: "0", fontWeight: "500", fontSize:"15px" }}>
                        {portion.discribtion}
                      </h5>
                    </TableCell>
                    <TableCell className={styles.tableCell}>
                      <h5 style={{ margin: "0", fontWeight: "500", fontSize:"15px" }}>
                        {portion.duration}
                      </h5>
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
