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

//Date Picker
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


// material icons
import IconButton from '@mui/material/IconButton';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


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

export default function PersonalDetailsInput() {
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [joiningYear, setJoiningYear] = useState(null);

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
                    <TextField fullWidth label="Name" id="name" color='info' />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextField fullWidth label="Email Address" id="emailAddress" color='info' />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <TextField select fullWidth label="Department" id="department" color='info'>
                        <MenuItem>BSc CS</MenuItem>
                        <MenuItem>BSc MB</MenuItem>
                        <MenuItem>BSc BT</MenuItem>
                        <MenuItem>BSc</MenuItem>
                        <MenuItem>cs</MenuItem>
                        <MenuItem>cs</MenuItem>
                        <MenuItem>cs</MenuItem>
                        <MenuItem>cs</MenuItem>
                        <MenuItem>cs</MenuItem>
                        <MenuItem>cs</MenuItem>
                        <MenuItem>cs</MenuItem>
                        <MenuItem>cs</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextField fullWidth label="Mobile Number" type="number" id="mobileNumber" color='info' />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Date Of Birth"
                            value={dateOfBirth}
                            onChange={(newDateOfBirth) => {
                                setDateOfBirth(newDateOfBirth);
                            }}
                            renderInput={(params) => <TextField fullWidth color="info" {...params} />}
                        />
                    </LocalizationProvider>
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
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        views={['year']}
                        label="Joining Year"
                        value={joiningYear}
                        onChange={(newJoiningYear) => {
                            setJoiningYear(newJoiningYear);
                        }}
                        renderInput={(params) => <TextField fullWidth color="info" {...params} helperText={null} />}
                    />
                    </LocalizationProvider>
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
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{display:"flex", alignItems:"flex-end"}}>
                <TextField fullWidth multiline rows="3" label="Present Address" id="presentAddress" color='info' />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControlLabel control={<Switch/>} label="Same as Present Address" sx={{color:"#637381"}} />
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