import { useState } from "react";
import {
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function PasswordField(props) {
  const [showPassword, setShowPassword] = useState(false);

  const { label, value, setValue } = props;

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => setValue(e.target.value);

  return (
    <FormControl fullWidth  variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        value={value}
        onChange={handleChange}
        id="outlined-adornment-password"
        fullWidth
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword} edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  );
}
