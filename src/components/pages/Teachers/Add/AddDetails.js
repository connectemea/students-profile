import { useState } from "react";

// material components
import {
  Stack,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Tooltip,
  MenuItem,
  Box,
} from "@mui/material";

// material icons
import PublishIcon from "@mui/icons-material/Publish";
import { alpha, styled } from "@mui/material/styles";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import DataTable from "../../../utils/DataTable";
import { grid } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

//Date Picker
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

//Custom component
import TextInput from "../../../utils/Input/TextInput";

const AddImage = styled(IconButton)(({ theme }) => ({
  height: theme.spacing(20),
  width: theme.spacing(20),
  outline: "1.5px dotted grey",
  outlineOffset: "10px",
}));
const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));
export default function AddDetails() {
  const [joiningYear, setJoiningYear] = useState(null);
  const [name, setName] = useState();
  const [shortForm, setShortForm] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [relegion, setRelegion] = useState();
  const [caste, setCaste] = useState();
  const [educationalQualification, setEducationalQualification] = useState();
  return (
    <Page title="TeacherDetails">
      <Container sx={{ m: 0, p: "0 important" }}>
        <Grid
          component={ProfileCard}
          sx={{ mt: 2, p: 2 }}
          container
          spacing={2}
        >
          <Typography variant={"h3"}>Personal Details</Typography>
          <Grid component={Card} sx={{ mt: 2, p: 2 }} container spacing={2}>
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
              <input type="file" id="imageUpload" hidden />
              <AddImage>
                <label for="imageUpload">
                  <Stack direction="column" spacing={1}>
                    <item>
                      <AddAPhotoIcon />
                    </item>
                    <item>
                      <Typography variant={"body1"}>Upload photo</Typography>
                    </item>
                  </Stack>
                </label>
              </AddImage>

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
                  textValue={shortForm}
                  setTextValue={setShortForm}
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
                  name="phoneNumber"
                  textValue={phoneNumber}
                  setTextValue={setPhoneNumber}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  select
                  fullWidth
                  label="Department"
                  id="fullWidth"
                  color="info"
                >
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
                {/* <TextField
                  fullWidth
                  label="Joining Year"
                  id="fullWidth"
                  color="info"
                /> */}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    views={["year"]}
                    label="Joining Year"
                    value={joiningYear}
                    onChange={(newJoiningYear) => {
                      setJoiningYear(newJoiningYear);
                    }}
                    renderInput={(params) => (
                      <TextField
                        fullWidth
                        color="info"
                        {...params}
                        helperText={null}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  select
                  fullWidth
                  label="Gender"
                  id="fullWidth"
                  color="info"
                >
                  <MenuItem>Male</MenuItem>
                  <MenuItem>Female</MenuItem>
                  <MenuItem>Other</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  select
                  fullWidth
                  label="Marital Status"
                  id="fullWidth"
                  color="info"
                >
                  <MenuItem>Married</MenuItem>
                  <MenuItem>Unmarried</MenuItem>
                </TextField>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
            <TextInput
                  label="Relegion"
                  name="relegion"
                  textValue={relegion}
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
                  name="educationalQualification"
                  textValue={educationalQualification}
                  setTextValue={setEducationalQualification}
                />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          sx={{ mt: 2 }}
          href="/student/details/educational"
          size="large"
          color="info"
          variant="contained"
        >
          Next
        </Button>
      </Box>
    </Page>
  );
}
