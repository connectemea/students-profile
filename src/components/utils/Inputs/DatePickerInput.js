import { TextField } from "@mui/material";

//Date Picker
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

export default function DatePickerInput(props) {
  const { label, date, setDate, views, name } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={views ? views : undefined}
        label={label}
        value={date}
        onChange={(newDateValue) => {
          setDate(newDateValue);
        }}
        renderInput={(params) => (
          <TextField fullWidth color="info" helperText={date === "" ? `${name} is required` : null}
            {...params} />
        )}
      />
    </LocalizationProvider>
  );
}
