import { useState, useEffect } from "react";

// material components
import {
    Typography,
    Grid,
    Card,
    Switch,
    FormControlLabel,
    Button
} from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";

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

export default function PersonalDetailsInput() {
    const [profileImage, setProfileImage] = useState();
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [yearOfJoin, setYearOfJoin] = useState(null);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [department, setDepartment] = useState();
    const [mobileNO, setMobileNO] = useState();
    const [gender, setGender] = useState();
    const [admissionNO, setAdmissionNO] = useState();
    const [bloodGroup, setBloodGroup] = useState();
    const [maritalStatus, setMaritalStatus] = useState();
    const [religion, setReligion] = useState();
    const [caste, setCaste] = useState();
    const [categoryOfAdmission, setCategoryOfAdmission] = useState();
    const [identificationMarkOne, setIdentificationMarkOne] = useState();
    const [identificationMarkTwo, setIdentificationMarkTwo] = useState();
    const [presentAddress, setPresentAddress] = useState();
    const [permanentAddress, setPermanentAdress] = useState();
    const [residence, setResidence] = useState();
    const [distanceFromCollege, setDistanceFromCollege] = useState();

    //Set presenr adress as permanent
    const [isAddressSame, setIsAddressSame] = useState(false);
    const handleIsAddressChecked = () => {
        if (!isAddressSame) setPermanentAdress(presentAddress);
        setIsAddressSame(!isAddressSame)
    };
    useEffect(() => {
        const setPresentAsPermanent = () => setPermanentAdress(presentAddress);
        if (isAddressSame) setPresentAsPermanent();
    }, [presentAddress, isAddressSame])

    // To Check if the form is filled
    const navigate = useNavigate()
    const hadleNextBtn = () => {
        if(!dateOfBirth || !yearOfJoin || !name || !email || !department || !mobileNO || !gender || !admissionNO || !bloodGroup || !maritalStatus || !religion || !caste || !categoryOfAdmission || !identificationMarkOne || !setIdentificationMarkTwo || !presentAddress || !permanentAddress || !residence || !distanceFromCollege ){
            return errorSetter()
        }
        console.log("namall jayichu");
        return navigate("/student/details/educational")
    }

    //Set error for empty field
    const errorSetter = () => {
        if(!dateOfBirth) setDateOfBirth("")
        if(!yearOfJoin) setYearOfJoin("")
        if(!name) setName("")
        if(!email) setEmail("")
        if(!department) setDepartment("")
        if(!mobileNO) setMobileNO("")
        if(!gender) setGender("")
        if(!admissionNO) setAdmissionNO("")
        if(!bloodGroup) setBloodGroup("")
        if(!maritalStatus) setMaritalStatus("")
        if(!religion) setReligion("")
        if(!caste) setCaste("")
        if(!categoryOfAdmission) setCategoryOfAdmission("")
        if(!identificationMarkOne) setIdentificationMarkOne("")
        if(!identificationMarkTwo) setIdentificationMarkTwo("")
        if(!presentAddress) setPresentAddress("")
        if(!permanentAddress) setPermanentAdress("")
        if(!residence) setResidence("")
        if(!distanceFromCollege) setDistanceFromCollege("")
    }


    return (
        <>
            <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
                {/* Add Image Section */}
                <Grid container direction="column" justifyContent="center" alignItems="center" xs={12} sm={12} md={4} lg={4}>
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
                        <TextInput label="Admission Number" name="Admission Number" textValue={admissionNO} setTextValue={setAdmissionNO} />
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
                    <TextInput label="Permanent Address" name="Permanent Address" multiline rows={3} textValue={permanentAddress} disabled={isAddressSame} setTextValue={setPermanentAdress} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <SelectInput label="Residence" name="Residence" menuItems={residences} dropdownValue={residence} setDropdownValue={setResidence} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextInput label="Distance From College" name="Distance From College" textValue={distanceFromCollege} setTextValue={setDistanceFromCollege} />
                </Grid>
            </Grid>
            {/* Buttons */}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button sx={{ mt: 2 }}
                    onClick={hadleNextBtn}
                    size="large" color="info" variant="contained">Next</Button>
            </Box>
        </>
    )
}