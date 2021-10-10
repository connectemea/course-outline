import CheckBox from "./CheckBoxInput";
import TextInput from "./TextInput";
export default function GraduatesAttributes(props) {
  const {
    textChangeHandler,
    checkBoxChangeHandler,
    courseOutline,
    fieldValues,
  } = props;
  return (
    <>
      <TextInput
        label="Name of the course"
        name="gradutesAttributeCourseName"
        onChange={textChangeHandler}
        value={courseOutline["gradutesAttributeCourseName"]}
      />
      <CheckBox
        changeHandler={checkBoxChangeHandler}
        name="gradutesAttributes"
        selectedValue={courseOutline["gradutesAttributes"] || []}
        values={fieldValues.values || []}
      />
    </>
  );
}
