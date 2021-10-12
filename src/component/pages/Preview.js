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
  const history = useHistory();
  const handleBackEvent = () => history.push("/home");
  const handleExportToWord = () => {
    const preHtml =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    const postHtml = "</body></html>";

    const html = `${preHtml} ${
      document.getElementById("docWrapper").innerHTML
    } ${postHtml}`;

    const blob = new Blob(["\ufeff", html], {
      type: "application/msword",
    });

    const url = `data:application/vnd.ms-word;charset=utf-8,${encodeURIComponent(
      html
    )}`;

    const filename = previewData["courseName"]
      ? `${previewData["courseName"]}.doc`
      : "courseOutline.doc";

    const downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      downloadLink.href = url;
      downloadLink.download = filename;
      downloadLink.click();
    }

    document.body.removeChild(downloadLink);
    history.push("/home");
    // history.go(0);
  };
  const getPreviewComponent = (field) => {
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
      <div id="docWrapper">
        <h1 className={styles.courseTitleSection}>
          {previewData.courseName || "Course outline"} (
          {previewData.year || "2020 - 2021"})
        </h1>
        {courseOutlineField.map((section) => (
          <>
            <h2 className={styles.previewSectiontHeading}>
              {section.heading}
            </h2>
            <Table
              sx={styles}
              className={styles.fieldList}
              style={{border:"1px solid rgba(224, 224, 224, 1) !important"}}
              border={section.innerTable?"0":"1"}
              width="100%"
              cellpadding={section.innerTable?"0":"15"}
            >
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
                              <h4 className={styles.colTitle}>{field.title}</h4>
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
      </div>
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
