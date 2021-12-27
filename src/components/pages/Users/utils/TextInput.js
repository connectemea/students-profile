import { TextField } from "@mui/material";

export default function TextInput(props) {
  const { type, label, value, setValue, authErrors } = props;

  const handleChange = (e) => setValue(e.target.value);

  return (
    <TextField
      fullWidth
      type={type}
      label={label}
      error={value === "" || authErrors ? true : false}
      value={value}
      onChange={handleChange}
      helperText={value === "" && `${label} is required`}
    />
  );
}
