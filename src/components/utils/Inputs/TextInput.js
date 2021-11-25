// Material components
import { TextField } from "@mui/material";

export default function TextInput(props) {
    //props destructuring 
    const { label, name, textValue, setTextValue, multiline, rows, type,disabled } = props;

    const handleTextInputChange = (e) => setTextValue(e.target.value);

    return (
        <TextField
            
            multiline={multiline ? true : false}
            rows={rows ? rows : 1}
            disabled={disabled}
            varient="contained"
            type={type}
            value={textValue}
            name={name}
            label={label}
            error={textValue === "" ? true : false}
            helperText={textValue === "" ? `${name} is required` : null}
            color="info"
            fullWidth
            onChange={handleTextInputChange}
            InputLabelProps={{shrink:textValue}}
        />
    );
}