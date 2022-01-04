// Material components
import { MenuItem, TextField } from "@mui/material";

export default function SelectInput(props) {
  //props destructuring
  const { label, name, dropdownValue, setDropdownValue, menuItems } = props;

  const handleTextInputChange = (e) => {
    setDropdownValue(e.target.value);
  };
  return (
    <TextField
      select
      varient="contained"
      value={dropdownValue}
      name={name}
      label={label}
      error={dropdownValue === "" ? true : false}
      helperText={dropdownValue === "" ? `${name} is required` : null}
      color="info"
      fullWidth
      onChange={handleTextInputChange}
    >
      {menuItems.map((menuItem) => (
        <MenuItem value={menuItem}>{menuItem.name?menuItem.name:menuItem}</MenuItem>
      ))}
    </TextField>
  );
}
