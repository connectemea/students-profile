import { DatePicker, LocalizationProvider } from "@mui/lab";
import { TextField } from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';


export default function DatePickerInput(props) {
    const { label, date, setDate, views } = props
    console.log(date)
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                views={views ? views : undefined}
                label={label}
                value={date}
                onChange={(newDateValue) => {
                    setDate(newDateValue);
                }}
                renderInput={(params) => <TextField fullWidth color="info" {...params} />}
            />
        </LocalizationProvider>

    )
}
