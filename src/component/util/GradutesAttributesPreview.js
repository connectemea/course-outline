import {
  TableCell,
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  List,
  ListItem,
} from "@mui/material";
import styles from "../pages/styles.module.css";

export default function GradutesAttributesPreview(props) {
  const { courseName, previewData, field } = props;
  return (
    <Grid container item direction="row">
      <Grid container item>
        <Grid sm={12}>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow key={courseName}>
                  <TableCell
                    className={`${styles.tableCell} ${styles.headingTable}`}
                  >
                    Graduates Attributes
                  </TableCell>
                  <TableCell className={styles.tableCell}>
                    <div className={styles.courseName}>{courseName}</div>
                    <div className={styles.attributesContainer}>
                      {Object.keys(field.collapse).map((collap) =>
                        previewData[collap]?.length ? (
                          <>
                            <div className={styles.majorTitle}>{collap}</div>
                            {field.collapse[collap].length ? (
                              <List>
                                {previewData[collap].map((item) => (
                                  <ListItem>{item}</ListItem>
                                ))}
                              </List>
                            ) : null}
                          </>
                        ) : null
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Grid>
  );
}
