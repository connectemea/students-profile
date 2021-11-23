import { useState } from "react";

// material components
import { Button, Typography, Grid, Card, Box, Container } from "@mui/material";

// material icons
import { styled } from "@mui/material/styles";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";

//Custom component
import TextInput from "../../../utils/Inputs/TextInput";
import SelectInput from "../../../utils/Inputs/SelectInput";
import DatePickerInput from "../../../utils/Inputs/DatePickerInput";
import ImageUpload from "../../../utils/Inputs/ImageUpload";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(4),
}));

// menu items
const departments = ["BA English", "BSC Computer science", "BSC Microbiology"];
const genders = ["Female", "Male", "Other"];
const status = ["Unmarried", "Married"];

export default function AddDetails() {
  const [profileImage, imageProfileImage] = useState();
  const [name, setName] = useState();
  const [shortName, setShortName] = useState();
  const [email, setEmail] = useState();
  const [department, setDepartment] = useState();
  const [joiningYear, setJoiningYear] = useState();
  const [gender, setGender] = useState();
  const [maritalStatus, setMaritalStatus] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [religion, setRelegion] = useState();
  const [caste, setCaste] = useState();
  const [educationQualification, setEducationQualification] = useState();
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
            <ImageUpload
              image={profileImage}
              setImage={imageProfileImage}
            />
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
              <SelectInput
                label="Department"
                name="department"
                menuItems={departments}
                dropdownValue={department}
                setDropdownValue={setDepartment}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <DatePickerInput
                views={["year"]}
                label="Joining Year"
                date={joiningYear}
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
              name="caste"
              textValue={caste}
              setTextValue={setCaste}
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
            href="/student/details/educational"
            size="large"
            color="info"
            variant="contained"
            disabled={
              !profileImage ||
              !name ||
              !shortName ||
              !email ||
              !department ||
              !joiningYear ||
              !gender ||
              !maritalStatus ||
              !phoneNo ||
              !religion ||
              !caste ||
              !educationQualification
            }
          >
            Next
          </Button>
        </Box>
      </Container>
      {/* </RootStyle> */}
    </Page>
  );
}
