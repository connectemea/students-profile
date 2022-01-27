import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Grid,
  Card,
  Box,
  Container,
  MenuItem,
  TextField,
} from "@mui/material";
import Page from "../../../utils/Page";
import TextInput from "../../../utils/Inputs/TextInput";
import SelectInput from "../../../utils/Inputs/SelectInput";
import DatePickerInput from "../../../utils/Inputs/DatePickerInput";
import ImageUpload from "../../../utils/Inputs/ImageUpload";
// services
import teacherService from "../../../../services/teacherService";
import userService from "../../../../services/userService";
import departemntService from "../../../../services/departmentService";
import LOCAL_KEYS from "../../../../constants/LOCAL_KEY";
import * as dateHelper from "../../../helpers/dateTimeHelper";

// Loader
import { loadingContext } from "../../../../context/loadingContext";
import Loader from "../../../utils/Loader";

export default function AddDetails() {
  const { loaderToggler } = useContext(loadingContext);

  const navigate = useNavigate();
  const { id } = useParams();

  const [profileImage, setProfileImage] = useState();
  const [name, setName] = useState();
  const [shortName, setShortName] = useState();
  const [email, setEmail] = useState();
  const [department, setDepartment] = useState(null);
  const [joinYear, setJoiningYear] = useState();
  const [gender, setGender] = useState(null);
  const [maritalStatus, setMaritalStatus] = useState(null);
  const [phoneNo, setPhoneNo] = useState();
  const [religion, setRelegion] = useState();
  const [cast, setCast] = useState();
  const [educationQualification, setEducationQualification] = useState();

  const [departmentData, setDepartmentData] = useState();

  const [, setErrorMsg] = useState();
  const clearError = () => setErrorMsg("");

  const departmentChangeHandler = (e) => {
    setDepartment(e.target.value);
  };

  useEffect(() => {
    const getDepartment = async () => {
      try {
        loaderToggler(true);
        const departmentList = await departemntService.getDepartment();
        setDepartmentData(departmentList);
        loaderToggler(false);
      } catch (err) {
        console.error(err.response);
        loaderToggler(false);
      }
    };
    getDepartment();
  }, []);

  const addDetailsHandler = async () => {
    try {
      loaderToggler(true);
      if (isError()) return;
      clearError();
      let userData = {
        name,
        shortName,
        email,
        department,
        joinYear: dateHelper.getYear(joinYear),
        gender,
        maritalStatus,
        phoneNo,
        religion,
        cast,
        educationQualification,
      };
      // Converting data into form data format
      const formData = new FormData();
      formData.append("profile", profileImage);
      const response = await userService.updateImage(formData);
      userData.profileImage = response.filepath;

      await teacherService.createTeacher(userData);
      clearUserCredentials();
      navigate("/app/teacher/view/me");
      window.location.reload();
      loaderToggler(false);
    } catch (err) {
      console.error(err);
      loaderToggler(false);
    }
  };
  //To check its an image or not
  const isFile = (file) => file instanceof File;

  const updateHandler = async () => {
    try {
      loaderToggler(true);
      if (isError()) return;
      clearError();
      let userData = {
        profileImage,
        name,
        shortName,
        email,
        department,
        joinYear: dateHelper.getYear(joinYear),
        gender,
        maritalStatus,
        phoneNo,
        religion,
        cast,
        educationQualification,
      };
      if (isFile(profileImage)) {
        const formData = new FormData();
        formData.append("profile", profileImage);
        const imageUrl = await userService.updateImage(formData);
        userData.profileImage = imageUrl.filepath;
      }
      await teacherService.updateTeacher(id, userData);
      clearUserCredentials();
      navigate("/app/teacher/view/me");
      window.location.reload();
      loaderToggler(false);
    } catch (err) {
      console.error(err);
      loaderToggler(false);
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

  const setCurrentDetails = (details) => {
    if (!details) return;
    setProfileImage(details.profileImage);
    setName(details.name);
    setShortName(details.shortName);
    setEmail(details.email);
    setDepartment(details.department._id);
    setJoiningYear(dateHelper.yearToObj(details.joinYear));
    setGender(details.gender);
    setMaritalStatus(details.maritalStatus);
    setPhoneNo(details.phoneNo);
    setCast(details.cast);
    setRelegion(details.religion);
    setEducationQualification(details.educationQualification);
  };
  const isError = () => {
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
      errorSetter();
      return true;
    }
    return false;
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
  useEffect(() => {
    const getTeacherById = async () => {
      try {
        loaderToggler(true);
        const response = await teacherService.getTeacherById(id);
        setCurrentDetails(response);
      } catch (err) {
        console.error(err);
        loaderToggler(false);
      }
    };
    if (id) getTeacherById();
  }, [id]);

  return (
    <Page title="TeacherDetails">
      <Container maxWidth="xl" sx={{ mt: 2, p: 2, pl: 0 }}>
        <Loader />
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
              <TextField
                select
                varient="contained"
                value={department}
                name="deparment"
                label="deparment"
                error={department === "" ? true : false}
                helperText={department === "" ? `${name} is required` : null}
                color="info"
                fullWidth
                onChange={departmentChangeHandler}
                InputLabelProps={{ shrink: department }}
              >
                {departmentData &&
                  departmentData.map((menuItem) => (
                    <MenuItem key={menuItem._id} value={menuItem?._id}>
                      {menuItem?.name}
                    </MenuItem>
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
                menuItems={LOCAL_KEYS.GENDER}
                dropdownValue={gender}
                setDropdownValue={setGender}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <SelectInput
                label="Marital Status"
                name="maritalStatus"
                menuItems={LOCAL_KEYS.MARITAL_STATUS}
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
            onClick={id ? updateHandler : addDetailsHandler}
            size="large"
            color="info"
            variant="contained"
          >
            {id ? "update" : "Submit"}
          </Button>
        </Box>
      </Container>
    </Page>
  );
}
