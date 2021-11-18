import { useState } from "react";

// material components
import {
  Stack,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  // Tooltip,
  Box,
} from "@mui/material";

// material icons
import PublishIcon from "@mui/icons-material/Publish";
import { alpha, styled } from "@mui/material/styles";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";

import IconButton from "@mui/material/IconButton";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

//  My Imports
import Avatar from "@mui/material/Avatar";

// Custuom compoent
import Field from "../utils/Field";

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

// value Object
const values = {
  name: "Jhon Doe",
  email: "jonn@doe@email.com",
  shortForm: "JD",
  phoneNumber: "223334444",
  departments: "Computer Science",
  joningYear: "2020",
  gender: "male",
  maritalStatus: "unmaried",
  religion: "Jhon Doe",
  caste: "Jonn Doe",
  educationalQualification: "Pg",
};

export default function TeachersView() {
  return (
    <Page title="details">
      <Container>
        <Grid
          component={ProfileCard}
          sx={{ mt: 2, p: 2 }}
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Grid>
            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar.jpg" /> */}
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 56, height: 56 }}
            />
          </Grid>
        </Grid>

        <Grid
          component={ProfileCard}
          sx={{ mt: 2, p: 2 }}
          container
          spacing={2}
        //   justifyContent="space-between"
          alignItems="flex-end"
        >
          <Grid item sm={12} sx={12} md={3} lg={3}>
            <Field heading="Name" subHeading={values.name} />
          </Grid>
          <Grid item sm={12} sx={12} md={3} lg={3}>
            <Field heading="Email" subHeading={values.email} />
          </Grid>
          <Grid item sm={12} sx={12} md={3} lg={3}>
            <Field heading="Short Form" subHeading={values.shortForm} />
          </Grid>
          <Grid item sm={12} sx={12} md={3} lg={3}>
            <Field heading="Phone Number" subHeading={values.phoneNumber} />
          </Grid>
          <Grid item sm={12} sx={12} md={3} lg={3}>
            <Field heading="Department" subHeading={values.departments} />
          </Grid>
          <Grid item sm={12} sx={12} md={3} lg={3}>
            <Field heading="Joning Year" subHeading={values.joningYear} />
          </Grid>
          <Grid item sm={12} sx={12} md={3} lg={3}>
            <Field heading="Gender" subHeading={values.gender} />
          </Grid>
          <Grid item sm={12} sx={12} md={3} lg={3}>
            <Field heading="Marital Status" subHeading={values.maritalStatus} />
          </Grid>
          <Grid item sm={12} sx={12} md={3} lg={3}>
            <Field heading="Religion" subHeading={values.religion} />
          </Grid>
          <Grid item sm={12} sx={12} md={3} lg={3}>
            <Field heading="Caste" subHeading={values.caste} />
          </Grid>
          <Grid item sm={12} sx={12} md={3} lg={3}>
            <Field
              heading="Educational Qualification"
              subHeading={values.educationalQualification}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
