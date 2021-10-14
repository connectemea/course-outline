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
import courseOutlineField, { semesterValues } from "../../Const";
import CoveredPortionsPreview from "../util/CoveredPortionsPreview";
import emeaLogo from "../images/emeaLogo.png";
import domtoimage from "dom-to-image";
import $ from "jquery";

export default function Preview(props) {
  const { previewData } = props;
  const history = useHistory();
  const handleBackEvent = () => history.push("/home");

  const exportHtmlWithImgToDoc = (element, filename = "courseOutline") => {
    //  _html_ will be replace with custom html
    const meta =
      "Mime-Version: 1.0\nContent-Base: " +
      window.location.href +
      '\nContent-Type: Multipart/related; boundary="NEXT.ITEM-BOUNDARY";type="text/html"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset="utf-8"\nContent-Location: ' +
      window.location.href +
      "\n\n<!DOCTYPE html>\n<html>\n_html_</html>";
    //  _styles_ will be replaced with custome css
    const head =
      '<head>\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n<style>\n_styles_\n</style>\n</head>\n';

    const html = document.getElementById(element).innerHTML;

    const blob = new Blob(["\ufeff", html], {
      type: "application/msword",
    });

    const css =
      "<style>" +
      "img {width:300px;}table {border-collapse: collapse; border-spacing: 0;}td{padding: 6px;}" +
      "</style>";
    //  Image Area %%%%
    let options = { maxWidth: 624 };
    let images = [];
    let img = $("#" + element).find("img");
    for (let i = 0; i < img.length; i++) {
      // Calculate dimensions of output image
      let w = Math.min(img[i].width, options.maxWidth);
      let h = img[i].height * (w / img[i].width);
      // Create canvas for converting image to data URL
      let canvas = document.createElement("CANVAS");
      canvas.width = w;
      canvas.height = h;
      // Draw image to canvas
      let context = canvas.getContext("2d");
      context.drawImage(img[i], 0, 0, w, h);
      // Get data URL encoding of image
      let uri = canvas.toDataURL("image/png");
      $(img[i]).attr("src", img[i].src);
      img[i].width = w;
      img[i].height = h;
      // Save encoded image to array
      images[i] = {
        type: uri.substring(uri.indexOf(":") + 1, uri.indexOf(";")),
        encoding: uri.substring(uri.indexOf(";") + 1, uri.indexOf(",")),
        location: $(img[i]).attr("src"),
        data: uri.substring(uri.indexOf(",") + 1),
      };
    }

    // Prepare bottom of mhtml file with image data
    let imgMetaData = "\n";
    for (let i = 0; i < images.length; i++) {
      imgMetaData += "--NEXT.ITEM-BOUNDARY\n";
      imgMetaData += "Content-Location: " + images[i].location + "\n";
      imgMetaData += "Content-Type: " + images[i].type + "\n";
      imgMetaData +=
        "Content-Transfer-Encoding: " + images[i].encoding + "\n\n";
      imgMetaData += images[i].data + "\n\n";
    }
    imgMetaData += "--NEXT.ITEM-BOUNDARY--";
    // end Image Area %%

    let output =
      meta.replace("_html_", head.replace("_styles_", css) + html) +
      imgMetaData;

    let url =
      "data:application/vnd.ms-word;charset=utf-8," +
      encodeURIComponent(output);

    filename = filename ? filename + ".doc" : "document.doc";

    let downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      downloadLink.href = url;
      downloadLink.download = filename;
      downloadLink.click();
    }

    document.body.removeChild(downloadLink);
  }
  const handleExportToWord = () => {
    const element = document.getElementById("coverImage");
    domtoimage
      .toJpeg(element)
      .then(function (dataUrl) {
        let img = new Image();
        img.src = dataUrl;
        document.getElementById("docWrapper").prepend(img);
        exportHtmlWithImgToDoc("docWrapper", previewData["programmeName"]);
        history.push("/home");
        history.go(0);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });

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
      <div className={styles.coverPageWrapper}>
        <div id="coverImage" className={styles.coverImageContainer}>
          <div className={styles.imgContainer}>
            <img className={styles.emeaLogo} src={emeaLogo} alt="emeaLogo"/>
          </div>
          <div className={styles.courseDetails}>
            {/* <div className={styles.courseTitle}>Course Outline</div> */}
            <div className={styles.courseTime}>
              <span className={styles.semType}>
                {semesterValues.indexOf(previewData["semester"] || 0) % 2 === 1
                  ? "Even"
                  : "Odd"}{" "}
                Sem
              </span>
              <span className={styles.courseYear}>
                {previewData["year"]?.split("-")[0]}
              </span>
            </div>
            <div className={styles.courseHeading}>
              <span>{previewData["programmeName"] || "Programe name"}</span>
              <span>{previewData["courseStream"] || "Course Stream"}</span>
            </div>
          </div>
          <div className={styles.courseInfo}>
            Dear students: course outline is indented to provide students with
            the overall plan for the course to enable them function efficiently
            and effectively in the course.
          </div>
        </div>
      </div>
      <div id="docWrapper">
        {/* <img id="coverImgHidden" /> */}
        <h1 className={styles.courseTitleSection}>
          {previewData.courseName || "Course outline"} (
          {previewData.year || "2020 - 2021"})
        </h1>
        {courseOutlineField.map((section) => (
          <>
            <h2 className={styles.previewSectiontHeading}>{section.heading}</h2>
            <Table
              sx={styles}
              className={styles.fieldList}
              style={{ border: "1px solid rgba(224, 224, 224, 1) !important" }}
              border={section.innerTable ? "0" : "1"}
              width="100%"
              cellpadding={section.innerTable ? "0" : "15"}
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
