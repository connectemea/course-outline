import {
  Paper,
  Button,
  Tooltip,
  List,
  ListItem,
  TableBody,
  Table,
  TableRow,
  TableCell,
} from "@mui/material";
import styles from "./styles.module.css";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router";
import TablePreview from "../util/TablePreview";
import GradutesAttributesPreview from "../util/GradutesAttributesPreview";
import courseOutlineField from "../../Const";
import CoveredPortionsPreview from "../util/CoveredPortionsPreview";

export default function Preview(props) {
  const { previewData } = props;
  console.log(previewData);
  const history = useHistory();
  const handleBackEvent = () => history.push("/home");
  const handleExportToWord = () => {
    console.log(previewData);
  };
  const getPreviewComponent = (field, ) => {
    switch (field.type) {
      case "text":
        return (
          <span className={styles.textData}>{previewData[field.name]}</span>
        );
      case "textArea":
        return (
          <span className={styles.textAreaData}>{previewData[field.name]}</span>
        );
      case "select":
        return (
          <span className={styles.selectBoxData}>
            {previewData[field.name]}
          </span>
        );
      case "checkbox":
        return (
          <List>
            {previewData[field.name]?.map((item) => (
              <ListItem>{item}</ListItem>
            ))}
          </List>
        );
      case "tableInternal":
        return (
          <TablePreview
            name={field.name}
            cols={field.cols}
            rows={field.rows}
            type="internal"
          />
        );
      case "tableExternal":
        return (
          <TablePreview
            name={field.name}
            cols={field.cols}
            type="external"
            rows={field[previewData[field.name]]}
          />
        );
      case "courseSchedule":
        return (
          <CoveredPortionsPreview
            coveredPortions={previewData["courseSchedule"]}
          />
        );
      case "graduateAttributes":
        return (
          <GradutesAttributesPreview
            courseName={previewData["gradutesAttributeCourseName"]}
            previewData={previewData}
            field={field}
          />
        );
      default:
        return;
    }
  };
  return (
    <Paper elevation={4} className={styles.formContainer}>
      <h2 className={styles.courseTitleSection}>
        {previewData.courseName || "Python Programming"} (
        {previewData.year || "2020 - 2021"})
      </h2>
      {courseOutlineField.map((section) => (
        <>
          <h3 className={styles.previewSectiontHeading}> {section.heading}</h3>
          <Table sx={styles} className={styles.fieldList}>
            <TableBody>
              {section.fields.map((field) => (
                <>
                  {previewData[field.name] && (
                    <TableRow className={styles.fieldListItem}>
                      {/* <Grid container> */}
                      {field.title ? (
                        <>
                          <TableCell
                            className={`${styles.tableCell} ${styles.headingTable}`}
                          >
                            {field.title}
                          </TableCell>
                          <TableCell className={styles.tableCell}>
                            {getPreviewComponent(field)}
                          </TableCell>
                        </>
                      ) : (
                        getPreviewComponent(field)
                      )}
                      {/* </Grid> */}
                    </TableRow>
                  )}
                </>
              ))}
            </TableBody>
          </Table>
        </>
      ))}

      <div class={styles.btnContainer}>
        <Tooltip disableFocusListener title="Go back to form">
          <Button
            variant="contained"
            className={styles.customBtn}
            onClick={handleBackEvent}
          >
            <ArrowBackIcon className={styles.btnIcon} />
            Back
          </Button>
        </Tooltip>
        <Tooltip disableFocusListener title="export the dcument to word">
          <Button
            variant="contained"
            className={styles.customBtn}
            color="success"
            onClick={handleExportToWord}
          >
            <ImportExportIcon className={styles.btnIcon} />
            Export
          </Button>
        </Tooltip>
      </div>
    </Paper>
  );
}
