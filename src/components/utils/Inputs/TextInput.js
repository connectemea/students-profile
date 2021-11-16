import { useState } from "react";

// material components
import { TextField } from "@mui/material";
export default function TextInput(props) {
  const [textValue, setTextValue] = useState();

  const { label, name } = props;
  const handleChange = (e) => setTextValue(e.target.value);
  console.log(textValue);

  return (
    <TextField
      varient="contained"
      name={name}
      label={label}
      error={textValue === "" ? true : false}
      helperText={textValue === "" ? "This field is required" : null}
      color="info"
      fullWidth
      onChange={handleChange}
    />
  );
}
