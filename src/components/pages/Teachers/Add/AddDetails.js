import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

// material components
import { Button, Typography, Grid, Card, Box, Container } from "@mui/material";

import { MenuItem, TextField } from "@mui/material";

// material icons
import { styled } from "@mui/material/styles";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";

//Custom component
import TextInput from "../../../utils/Inputs/TextInput";
import SelectInput from "../../../utils/Inputs/SelectInput";
import DatePickerInput from "../../../utils/Inputs/DatePickerInput";
import ImageUpload from "../../../utils/Inputs/ImageUpload";

// importing backend services
import teacherService from "../../../../services//teacherService";
import userService from "../../../../services/userService";
import departemntService from "../../../../services/departmentService";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(4)
}));

// menu items || dropdown items
const departments = ["BA English", "BSC Computer science", "BSC Microbiology"];
const genders = ["Female", "Male", "Other"];
const status = ["Unmarried", "Married"];

export default function AddDetails() {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  // const [teacherData, setTeacherData] = useState();

  const [profileImage, setProfileImage] = useState();
  const [name, setName] = useState();
  const [shortName, setShortName] = useState();
  const [email, setEmail] = useState();
  const [department, setDepartment] = useState();
  const [joinYear, setJoiningYear] = useState();
  const [gender, setGender] = useState();
  const [maritalStatus, setMaritalStatus] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [religion, setRelegion] = useState();
  const [cast, setCast] = useState();
  const [educationQualification, setEducationQualification] = useState();

  const [departmentData, setDepartmentData] = useState();

  const [errorMsg, setErrorMsg] = useState();
  const clearError = () => setErrorMsg("");

  // menu items || dropdown items
  const [dropdownValue, setDropdownValue] = useState();
  const handleTextInputChange = (e) => {
    setDropdownValue(e.target.value);
    setDepartment(e.target.value);
  }

  useEffect(() => {
    console.log("Useffect");

    const getDepartment = async () => {
      try {
        console.log("get Deparment");
        const departmentList = await departemntService.getDepartment();
        setDepartmentData(departmentList);
        console.log(departmentData);
      } catch (err) {
        console.error(err.response);
      }
    };

    // console.log(departmentData);

    // to Populate fields  for update
    async function getMe() {
      try {
        console.log("getme funciton is working");
        const response = await teacherService.getTeacherMe();
        console.log(response);
        const setTeacherData = (response) => {
          console.log(response);
          setProfileImage(
            `https://student-profile-api.herokuapp.com/upload/${response.userId.profileImage}`
          );
          setName(response.name);
          setShortName(response.shortName);
          setEmail(response.email);
          setDepartment(response.department);
          setJoiningYear(response.joinYear);
          setGender(response.gender);
          setMaritalStatus(response.maritalStatus);
          setPhoneNo(response.phoneNo);
          setRelegion(response.religion);
          setCast(response.cast);
          setEducationQualification(response.educationQualification);
        };

        setTeacherData(response);
      } catch (err) {
        console.log(err?.response?.data?.message);
      }
    }
    if (id) getMe();
    getDepartment();
  }, [id]);

  // console.log(gender);
  // console.log(maritalStatus);
  // console.log(joinYear);
  console.log(profileImage);
  // console.log(teacherData.cast);

  console.log("welcome to the add details page");

  const handleAddTeacherDetails = async () => {
    try {
      clearError();
      const userData = {
        // profileImage,
        name,
        shortName,
        email,
        department,
        joinYear,
        gender,
        maritalStatus,
        phoneNo,
        religion,
        cast,
        educationQualification
      };

      // Converting data into form data format
      const formData = new FormData();
      formData.append("profile", profileImage);

      // adding user to db

      if (id) {
        console.log("hi forom response update");
        const response = await teacherService.updateTeacher(userData, id);
        console.log(response);
      } else {
        console.log("hi forom response create");
        const response = await teacherService.createTeacher(userData);
        console.log(response);
        const imageRes = await userService.uploadImage(formData);
      }

      // clearing the form
      clearUserCredentials();

      // Navigating to next page
      // __________________________________________________________ Needed fixing
      navigate("http://localhost:3001/");
    } catch (err) {
      console.log(err);
    }
  };

  // clearing the form
  const clearUserCredentials = () => {
    setProfileImage("");
    setName("");
    setShortName("");
    setEmail("");
    setDepartment("");
    setJoiningYear("");
    setGender("");
    setMaritalStatus("");
    setPhoneNo("");
    setCast("");
    setEducationQualification("");
  };

  // const navigate = useNavigate();
  const handleNextBtn = () => {
    if (
      !profileImage ||
      !name ||
      !shortName ||
      !email ||
      !department ||
      !joinYear ||
      !gender ||
      !maritalStatus ||
      !phoneNo ||
      !religion ||
      !cast ||
      !educationQualification
    ) {
      return errorSetter();
    }
    handleAddTeacherDetails();
  };

  const errorSetter = () => {
    if (!profileImage) setProfileImage("");
    if (!name) setName("");
    if (!shortName) setShortName("");
    if (!email) setEmail("");
    if (!department) setDepartment("");
    if (!joinYear) setJoiningYear("");
    if (!gender) setGender("");
    if (!maritalStatus) setMaritalStatus("");
    if (!phoneNo) setPhoneNo("");
    if (!religion) setRelegion("");
    if (!cast) setCast("");
    if (!educationQualification) setEducationQualification("");
  };

  console.log(departmentData);
  console.log(department)

  // departmentData.map((menuItem) => {
  //   console.log(menuItem);
  // });
  // departmentData.map((menuItem) => {
  //   console.log(menuItem._id);
  // });

  // console.log(departmentData[0]._id)

  return (
    <Page title="TeacherDetails">
      <Container maxWidth="xl" sx={{ mt: 2, p: 2, pl: 0 }}>
        {/* <RootStyle> */}
        <Typography variant={"h3"}>Personal Details</Typography>
        <Grid
          component={Card}
          sx={{ mt: 2, p: 2, pl: 0 }}
          container
          spacing={2}
        >
          <Grid
            item
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
            xs={12}
            sm={12}
            md={4}
            lg={4}
          >
            <ImageUpload image={profileImage} setImage={setProfileImage} />
            <Typography sx={{ mt: 3, color: "gray" }} variant={"body2"}>
              Allowed *.jpeg, *.jpg, *.png, *.gif <br />
              max size: 1MB
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TextInput
                label="Name"
                name="name"
                textValue={name}
                setTextValue={setName}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TextInput
                label="Short Form"
                name="shortform"
                textValue={shortName}
                setTextValue={setShortName}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TextInput
                label="Email"
                name="email"
                textValue={email}
                setTextValue={setEmail}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TextInput
                label="Phone Number"
                name="phoneNo"
                textValue={phoneNo}
                setTextValue={setPhoneNo}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              {/* <SelectInput
                label="Department"
                name="department"
                menuItems={departments}
                dropdownValue={department}
                setDropdownValue={setDepartment}
              /> */}
              <TextField
                select
                varient="contained"
                value={dropdownValue}
                name="deparment"
                label="deparment"
                error={dropdownValue === "" ? true : false}
                helperText={dropdownValue === "" ? `${name} is required` : null}
                color="info"
                fullWidth
                onChange={handleTextInputChange}
              >
                {departmentData && departmentData.map((menuItem) => (
                  <MenuItem value={menuItem?._id}>{menuItem?.name}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <DatePickerInput
                views={["year"]}
                label="Joining Year"
                date={joinYear}
                setDate={setJoiningYear}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <SelectInput
                label="Gender"
                name="gender"
                menuItems={genders}
                dropdownValue={gender}
                setDropdownValue={setGender}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <SelectInput
                label="Marital Status"
                name="maritalStatus"
                menuItems={status}
                dropdownValue={maritalStatus}
                setDropdownValue={setMaritalStatus}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <TextInput
              label="Religion"
              name="religion"
              textValue={religion}
              setTextValue={setRelegion}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <TextInput
              label="Caste"
              name="cast"
              textValue={cast}
              setTextValue={setCast}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <TextInput
              label="Educational Qualification"
              name="educationQualification"
              textValue={educationQualification}
              setTextValue={setEducationQualification}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            sx={{ mt: 2 }}
            onClick={handleNextBtn}
            size="large"
            color="info"
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </Container>
      {/* </RootStyle> */}
    </Page>
  );
}
