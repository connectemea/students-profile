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
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

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
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Grid
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
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField fullWidth label="Name" id="fullWidth" color="info" />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  fullWidth
                  label="Short Form"
                  id="fullWidth"
                  color="info"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  fullWidth
                  label="Email"
                  id="fullWidth"
                  color="info"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  id="fullWidth"
                  color="info"
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
                    label="Date Of Birth"
                    value={dateOfBirth}
                    onChange={(newDateOfBirth) => {
                      setDateOfBirth(newDateOfBirth);
                    }}
                    renderInput={(params) => (
                      <TextField fullWidth color="info" {...params} />
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
              <TextField
                fullWidth
                label="Relegion"
                id="fullWidth"
                color="info"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <TextField fullWidth label="Caste" id="fullWidth" color="info" />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <TextField
                fullWidth
                label="Educational Qualification"
                id="fullWidth"
                color="info"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
