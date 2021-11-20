import { useState } from "react";

// material components
import {
    Stack,
    Typography,
    Grid,
    Card,
    Switch,
    FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";

//Custom Components
import SelectInput from "../Inputs/SelectInput";
import TextInput from '../Inputs/TextInput';
import DatePickerInput from "../Inputs/DatePickerInput";

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

// menu items
const departments = ["Bsc computer science", "Bsc Microbiology", "BA English"]
const genders = ["Male", "Female", "Other"]
const bloodGroups = ["O+", "O-", "A+", "A-", "AB+", "AB-", "B+", "B-"]
const maritalStatuses = ["Unmarrird", "Married"]
const categoriesOfAdmission = ["Merit", "Community Quota", "Management Quota", "Sports Quota", "Special Sports Quota"]
const residences = ["House", "Hostel", "Relative's Residence", "Guardian's Residence"]

export default function PersonalDetailsInput() {
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [joiningYear, setJoiningYear] = useState(null);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [department, setDepartment] = useState();
    const [mobileNumber, setMobileNumber] = useState();
    const [gender, setGender] = useState();
    const [admissionNumber, setAdmissionNumber] = useState();
    const [bloodGroup, setBloodGroup] = useState();
    const [maritalStatus, setMaritalStatus] = useState();
    const [religion, setReligion] = useState();
    const [caste, setCaste] = useState();
    const [categoryOfAdmission, setCategoryOfAdmission] = useState();
    const [identificationMark1, setIdentificationMark1] = useState();
    const [identificationMark2, setIdentificationMark2] = useState();
    const [presentAddress, setPresentAddress] = useState();
    const [permanentAddress, setPermanentAdress] = useState();
    const [residence, setResidence] = useState();
    const [distanceFromCollege, setDistanceFromCollege] = useState();

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
                    <TextInput name="mobileNumber" label="Mobile Number" type="number" textValue={mobileNumber} setTextValue={setMobileNumber} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <DatePickerInput label="Date Of Birth" date={dateOfBirth} setDate={setDateOfBirth}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <SelectInput label="Gender" name="gender" menuItems={genders} dropdownValue={gender} setDropdownValue={setGender} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextInput label="Admission Number" name="admissionNumber" textValue={admissionNumber} setTextValue={setAdmissionNumber} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <DatePickerInput views={['year']} label="Joining Year" date={joiningYear} setDate={setJoiningYear}/>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <SelectInput label="Blood Group" name="bloodGroup" menuItems={bloodGroups} dropdownValue={bloodGroup} setDropdownValue={setBloodGroup} />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} >
                <SelectInput label="Marital Status" name="maritalStatus" menuItems={maritalStatuses} dropdownValue={maritalStatus} setDropdownValue={setMaritalStatus} />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <TextInput label="Religion" name="religion" textValue={religion} setTextValue={setReligion} />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <TextInput label="Caste" name="caste" textValue={caste} setTextValue={setCaste} />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} >
                <SelectInput label="Category Of Admission" name="categoryOfAdmission" menuItems={categoriesOfAdmission} dropdownValue={categoryOfAdmission} setDropdownValue={setCategoryOfAdmission} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextInput label="Identification Mark 1" name="identificationMark1" textValue={identificationMark1} setTextValue={setIdentificationMark1} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextInput label="Identification Mark 2" name="identificationMark2" textValue={identificationMark2} setTextValue={setIdentificationMark2} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ display: "flex", alignItems: "flex-end" }}>
                <TextInput label="Present Address" name="presentAddress" multiline rows={3} textValue={presentAddress} setTextValue={setPresentAddress} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControlLabel control={<Switch />} label="Same as Present Address" sx={{ color: "#637381" }} />
                <TextInput label="Permanent Address" name="permanentAddress" multiline rows={3} textValue={permanentAddress} setTextValue={setPermanentAdress} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} >
                <SelectInput label="Residence" name="residence" menuItems={residences} dropdownValue={residence} setDropdownValue={setResidence} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextInput label="Distance From College" name="distanceFromCollege" textValue={distanceFromCollege} setTextValue={setDistanceFromCollege} />
            </Grid>
        </Grid>
    )
}