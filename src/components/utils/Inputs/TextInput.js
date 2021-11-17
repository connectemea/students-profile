// Material components
import { TextField } from "@mui/material";

export default function TextInput(props) {
//props destructuring 
  const { label,name,textValue, setTextValue } = props;

  const handleTextInputChange = (e) => setTextValue(e.target.value);

  return (
    <TextField
      varient="contained"
      name={name}
      label={label}
      error={textValue === "" ? true : false}
      helperText={textValue === "" ? `${name} is required` : null}
      color="info"
      fullWidth
      onChange={handleTextInputChange}
    />
  );
}