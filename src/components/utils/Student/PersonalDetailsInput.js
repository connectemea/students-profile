import { useState } from "react";

// material components
import {
    Stack,
    Typography,
    Grid,
    Card,
    TextField,
    MenuItem,
    Switch,
    FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";


import SelectInput from "../Inputs/SelectInput";
import TextInput from '../Inputs/TextInput';
// material icons
import IconButton from '@mui/material/IconButton';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DatePickerInput from "../Inputs/DatePickerInput";




const AddImage = styled(IconButton)(({ theme }) => ({
    height: theme.spacing(20),
    width: theme.spacing(20),
    outline: "1.5px dotted grey",
    outlineOffset: "10px",
}));
const ProfileCard = styled(Card)(({ theme }) => ({
    paddingRight: `${theme.spacing(4)} !important`,
    paddingBottom: `${theme.spacing(4)} !important`
}));

// menu items
const departments = ["Bsc computer science", "Bsc Microbiology", "BA English"]

export default function PersonalDetailsInput() {
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [joiningYear, setJoiningYear] = useState(null);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [department, setDepartment] = useState();
    const [presentAddress, setPresentAddress] = useState();

    return (
        <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
            {/* Add Image Section */}
            <Grid container direction="column" justifyContent="flex-end" alignItems="center" xs={12} sm={12} md={4} lg={4}>
                <input type="file" id="imageUpload" hidden />
                <AddImage>
                    <label for="imageUpload"><Stack direction="column" spacing={1}>
                        <item><AddAPhotoIcon /></item>
                        <item><Typography variant={"body1"}>Upload photo</Typography></item></Stack>
                    </label>
                </AddImage>

                <Typography sx={{ mt: 3, color: "gray" }} variant={"body2"}>
                    Allowed *.jpeg, *.jpg, *.png, *.gif <br />max size: 1MB
                </Typography>
            </Grid>

            {/* Add Details Section */}
            <Grid item xs={12} sm={12} md={8} lg={8} container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextInput label="Name" name="name" textValue={name} setTextValue={setName} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextInput name="email" label="Email Address" textValue={email} setTextValue={setEmail} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                {/* select input from custom made component */}
                    <SelectInput label="Department" name="department" menuItems={departments} dropdownValue={department} setDropdownValue={setDepartment} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextField fullWidth label="Mobile Number" type="number" id="mobileNumber" color='info' />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <DatePickerInput label="Date Of Birth" date={dateOfBirth} setDate={setDateOfBirth}/>
                    {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Date Of Birth"
                            value={dateOfBirth}
                            onChange={(newDateOfBirth) => {
                                setDateOfBirth(newDateOfBirth);
                            }}
                            renderInput={(params) => <TextField fullWidth color="info" {...params} />}
                        />
                    </LocalizationProvider> */}
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <TextField select fullWidth label="Gender" id="gender" color='info'>
                        <MenuItem>Male</MenuItem>
                        <MenuItem>Female</MenuItem>
                        <MenuItem>Other</MenuItem>
                    </TextField></Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextField fullWidth label="Admission Number" id="admissionNumber" color='info' />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <DatePickerInput views={['year']} label="Joining Year" date={joiningYear} setDate={setJoiningYear}/>
                    {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            views={['year']}
                            label="Joining Year"
                            value={joiningYear}
                            onChange={(newJoiningYear) => {
                                setJoiningYear(newJoiningYear);
                            }}
                            renderInput={(params) => <TextField fullWidth color="info" {...params} helperText={null} />}
                        />
                    </LocalizationProvider> */}
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <TextField select fullWidth label="Blood Group" id="bloodGroup" color='info'>
                    <MenuItem>A+ve</MenuItem>
                    <MenuItem>A+ve</MenuItem>
                    <MenuItem>A+ve</MenuItem>
                    <MenuItem>A+ve</MenuItem>
                    <MenuItem>A+ve</MenuItem>
                </TextField></Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} >
                <TextField select fullWidth label="Marital Status" id="maritalStatus" color='info'>
                    <MenuItem>Unmarried</MenuItem>
                    <MenuItem>Married</MenuItem>
                </TextField></Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <TextField fullWidth label="Religion" id="religion" color='info' />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <TextField fullWidth label="Caste" id="caste" color='info' />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} >
                <TextField select fullWidth label="Category Of Admission" id="categoryOfAdmission" color='info'>
                    <MenuItem>Merrit</MenuItem>
                    <MenuItem>Community Quota</MenuItem>
                    <MenuItem>Management Quota</MenuItem>
                </TextField></Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField fullWidth label="Identification Mark 1" id="identificationMark1" color='info' />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField fullWidth label="Identification Mark 2" id="identificationMark2" color='info' />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ display: "flex", alignItems: "flex-end" }}>
            <TextInput label="Present Address" name="presentAddress" multiline rows={3} textValue={presentAddress} setTextValue={setPresentAddress} />
                {/* <TextField fullWidth multiline rows="3" label="Present Address" id="presentAddress" color='info' /> */}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControlLabel control={<Switch />} label="Same as Present Address" sx={{ color: "#637381" }} />
                <TextField fullWidth multiline rows="3" label="Permanent Address" id="permanentAddress" color='info' />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} >
                <TextField select fullWidth label="Residence" id="residence" color='info'>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Realative House</MenuItem>
                    <MenuItem>Guardian Residence</MenuItem>
                </TextField></Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField fullWidth label="Distance From College" id="distanceFromCollege" color='info' />
            </Grid>
        </Grid>
    )
}