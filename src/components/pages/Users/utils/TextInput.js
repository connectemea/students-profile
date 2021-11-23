import { TextField } from "@mui/material";

export default function TextInput(props) {
  const { type, label, value, setValue } = props;

  const handleChange = (e) => setValue(e.target.value);

  return (
    <TextField
      fullWidth
      type={type}
      label={label}
      value={value}
      onChange={handleChange}
    />
  );
}
