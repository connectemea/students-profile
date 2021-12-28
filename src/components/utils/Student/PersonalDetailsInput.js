import { useState, useEffect } from "react";

// material components
import {
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
import ImageUpload from "../Inputs/ImageUpload";


const ProfileCard = styled(Card)(({ theme }) => ({
    paddingRight: `${theme.spacing(4)} !important`,
    paddingBottom: `${theme.spacing(4)} !important`
}));

// menu items
const departments = ["Bsc computer science", "Bsc Microbiology", "BA English"]
const genders = ["Male", "Female", "Other"]
const bloodGroups = ["O+", "O-", "A+", "A-", "AB+", "AB-", "B+", "B-"]
const maritalStatuses = ["Unmarried", "Married"]
const categoriesOfAdmission = ["Merit", "Community Quota", "Management Quota", "Sports Quota", "Special Sports Quota", "PH Quota"]
const residences = ["House", "Hostel", "Relative's Residence", "Guardian's Residence"]

export default function PersonalDetailsInput(props) {
    const {currentData} = props;
    const [profileImage, setProfileImage] = useState();
    const [dateOfBirth, setDateOfBirth] = useState(currentData?currentData.dateOfBirth:null);
    const [yearOfJoin, setYearOfJoin] = useState(currentData?currentData.yearOfJoin:null);
    const [name, setName] = useState(currentData?currentData.name:null);
    const [email, setEmail] = useState(currentData?currentData.email:null);
    const [department, setDepartment] = useState(currentData?currentData.department:null);
    const [mobileNO, setMobileNO] = useState(currentData?currentData.mobileNo:null);
    const [gender, setGender] = useState(currentData?currentData.gender:null);
    const [admissionNO, setAdmissionNO] = useState(currentData?currentData.admissionNO:null);
    const [bloodGroup, setBloodGroup] = useState(currentData?currentData.bloodGroup:null);
    const [maritalStatus, setMaritalStatus] = useState(currentData?currentData.maritalStatus:null);
    const [religion, setReligion] = useState(currentData?currentData.religion:null);
    const [caste, setCaste] = useState(currentData?currentData.caste:null);
    const [categoryOfAdmission, setCategoryOfAdmission] = useState(currentData?currentData.categoryOfAdmission:null);
    const [identificationMarkOne, setIdentificationMarkOne] = useState(currentData?currentData.identificationMarkOne:null);
    const [identificationMarkTwo, setIdentificationMarkTwo] = useState(currentData?currentData.identificationMarkTwo:null);
    const [presentAddress, setPresentAddress] = useState(currentData?currentData.presentAddress:null);
    const [permanentAddress, setPermanentAdress] = useState(currentData?currentData.permenentAddress:null);
    const [residence, setResidence] = useState(currentData?currentData.residence:null);
    const [distanceFromCollege, setDistanceFromCollege] = useState(currentData?currentData.distanceFromCollege:null);
    const [isAddressSame, setIsAddressSame] = useState(false);
    const handleIsAddressChecked = () => {
        if (!isAddressSame) setPermanentAdress(presentAddress);
        setIsAddressSame(!isAddressSame)
    };
    useEffect(() => {
        const setPresentAsPermanent = () => setPermanentAdress(presentAddress);
        if (isAddressSame) setPresentAsPermanent();
    }, [presentAddress, isAddressSame])

    return (
        <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
            {/* Add Image Section */}
            <Grid container direction="column" justifyContent="flex-end" alignItems="center" xs={12} sm={12} md={4} lg={4}>
                <ImageUpload image={profileImage} setImage={setProfileImage} />

                <Typography sx={{ mt: 3, color: "gray" }} variant={"body2"}>
                    Allowed *.jpeg, *.jpg, *.png, *.gif <br />max size: 1MB
                </Typography>
            </Grid>

            {/* Add Details Section */}
            <Grid item xs={12} sm={12} md={8} lg={8} container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextInput label="Name" name="Name" textValue={name} setTextValue={setName} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextInput name="Email" label="Email Address" textValue={email} setTextValue={setEmail} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    {/* select input from custom made component */}
                    <SelectInput label="Department" name="Department" menuItems={departments} dropdownValue={department} setDropdownValue={setDepartment} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextInput name="Mobile Number" label="Mobile Number" type="number" textValue={mobileNO} setTextValue={setMobileNO} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <DatePickerInput label="Date Of Birth" name="Date of Birth" date={dateOfBirth} setDate={setDateOfBirth} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <SelectInput label="Gender" name="Gender" menuItems={genders} dropdownValue={gender} setDropdownValue={setGender} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextInput label="Admission Number" name="Sdmission Number" textValue={admissionNO} setTextValue={setAdmissionNO} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <DatePickerInput views={['year']} label="Joining Year" name="Joining Year" date={yearOfJoin} setDate={setYearOfJoin} />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <SelectInput label="Blood Group" name="Blood Group" menuItems={bloodGroups} dropdownValue={bloodGroup} setDropdownValue={setBloodGroup} />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} >
                <SelectInput label="Marital Status" name="Marital Status" menuItems={maritalStatuses} dropdownValue={maritalStatus} setDropdownValue={setMaritalStatus} />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <TextInput label="Religion" name="Religion" textValue={religion} setTextValue={setReligion} />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <TextInput label="Caste" name="Caste" textValue={caste} setTextValue={setCaste} />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} >
                <SelectInput label="Category Of Admission" name="Category Of Admission" menuItems={categoriesOfAdmission} dropdownValue={categoryOfAdmission} setDropdownValue={setCategoryOfAdmission} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextInput label="Identification Mark 1" name="Identification Mark" textValue={identificationMarkOne} setTextValue={setIdentificationMarkOne} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextInput label="Identification Mark 2" name="Identification Mark" textValue={identificationMarkTwo} setTextValue={setIdentificationMarkTwo} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ display: "flex", alignItems: "flex-end" }}>
                <TextInput label="Present Address" name="Present Address" multiline rows={3} textValue={presentAddress} setTextValue={setPresentAddress} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControlLabel control={<Switch onClick={handleIsAddressChecked} />} label="Same as Present Address" sx={{ color: "#637381" }} />
                <TextInput  label="Permanent Address" name="Permanent Address" multiline rows={3} textValue={permanentAddress} disabled={isAddressSame} setTextValue={setPermanentAdress}  />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} >
                <SelectInput label="Residence" name="Residence" menuItems={residences} dropdownValue={residence} setDropdownValue={setResidence} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextInput label="Distance From College" name="Distance From College" textValue={distanceFromCollege} setTextValue={setDistanceFromCollege} />
            </Grid>
        </Grid>
    )
}