// Material components
import { TextField } from "@mui/material";

export default function TextInput(props) {
  //props destructuring
  const { label, name, textValue, setTextValue,type } = props;

  const handleTextInputChange = (e) => setTextValue(e.target.value);

  return (
    <TextField
      varient="contained"
      value={textValue}
      name={name}
      label={label}
      type={type}
      error={textValue === "" ? true : false}
      helperText={textValue === "" ? `${label} is required` : null}
      color="info"
      fullWidth
      onChange={handleTextInputChange}
    />
  );
}
