// material components
import { Container, Grid, Card, Typography } from "@mui/material";

// material icons
import { styled } from "@mui/material/styles";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";

//  My Imports
import Avatar from "@mui/material/Avatar";
import profile from "../../../../images/avatar.jpg";

// Custuom compoent
import Field from "../utils/Field";

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
      <Container maxWidth="xl" sx={{ pl: 4 }}>
        <Grid
          style={{
            backgroundImage:
              "linear-gradient(to bottom,#038dfd 0%,#038dfd 20%,transparent 20%,transparent 100%)",
          }}
          component={ProfileCard}
          sx={{
            mt: 2,
            p: 2,
            alignContent: "center",
          }}
          container
          spacing={2}
          alignItems="center"
        >
          <Grid>
            <Avatar
              alt="Remy Sharp"
              src={profile}
              sx={{
                width: 80,
                height: 80,
              }}
            />
          </Grid>
          <Grid sx={{ marginLeft: 5 }}>
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: 18,
              }}
            >
              Minshad
            </Typography>
            <Typography
              sx={{
                color: "rgba(0,0,0,.75)",
                fontStyle: "normal",
                fontWeight: 300,
                fontSize: 15,
              }}
            >
              Computer Science
            </Typography>
          </Grid>
        </Grid>

        <Grid
          component={ProfileCard}
          sx={{ mt: 2, p: 2 }}
          container
          spacing={2.3}
          alignItems="flex-end"
        >
          {/* <Container> */}
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Name" subHeading={values.name} />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Email" subHeading={values.email} />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Short Form" subHeading={values.shortForm} />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Phone Number" subHeading={values.phoneNumber} />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Department" subHeading={values.departments} />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Joning Year" subHeading={values.joningYear} />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Gender" subHeading={values.gender} />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Marital Status" subHeading={values.maritalStatus} />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Religion" subHeading={values.religion} />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Caste" subHeading={values.caste} />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field
              heading="Educational Qualification"
              subHeading={values.educationalQualification}
            />
          </Grid>
          {/* </Container> */}
        </Grid>
      </Container>
    </Page>
  );
}
