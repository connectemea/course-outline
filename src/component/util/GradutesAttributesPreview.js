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
            <Table border="1" width="100%" cellpadding="15">
              <TableBody>
                <TableRow key={courseName}>
                  <TableCell
                    className={`${styles.tableCell} ${styles.headingTable}`}
                  >
                    Graduates Attributes
                  </TableCell>
                  <TableCell className={styles.tableCell}>
                    <h3 className={styles.courseName}>{courseName}</h3>
                    <List className={styles.attributesContainer}>
                      {Object.keys(field.collapse).map((collap) =>
                        previewData[collap]?.length ? (
                          <ListItem className={styles.innerListContainer}>
                            <h5 className={styles.majorTitle}>{collap}</h5>
                            {field.collapse[collap].length ? (
                              <List>
                                {previewData[collap].map((item) => (
                                  <ListItem>{item}</ListItem>
                                ))}
                              </List>
                            ) : null}
                          </ListItem>
                        ) : null
                      )}
                    </List>
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
