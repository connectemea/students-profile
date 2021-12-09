// material components
import {
  Stack,
  Typography,
  Grid,
  Card,
  Container,
  Tabs,
  TextField,
  Avatar,
  Tab,
  MenuItem,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Page from "../../../utils/Page";

//   custom component
import Field from "./Field";

const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

export default function PersonalView(props) {

  const {personalDetails} = props;

  return (
    <Page title="StudentsList">
      <Container>
        <Grid
          component={ProfileCard}
          sx={{ mt: 2, p:2}}
          container
          spacing={2}
        >
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Name" subHeading={personalDetails && personalDetails.name} />
          </Grid>
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Email" subHeading={personalDetails && personalDetails.email} />
          </Grid>
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Department" subHeading={personalDetails && personalDetails.department} />
          </Grid>
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Admission Number" subHeading={personalDetails && personalDetails.admissionNO} />
          </Grid>
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Date of Birth" subHeading={personalDetails && personalDetails.dateOfBirth} />
          </Grid>
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Gender" subHeading={personalDetails && personalDetails.gender}/>
          </Grid>
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Mobile Number" subHeading={personalDetails && personalDetails.mobileNo} />
          </Grid>
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Joining Year" subHeading={personalDetails && personalDetails.yearOfJoin} />
          </Grid>
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Blood Group" subHeading={personalDetails && personalDetails.bloodGroup} />
          </Grid>
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Marital Status" subHeading={personalDetails && personalDetails.maritalStatus} />
          </Grid>
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Religion" subHeading={personalDetails && personalDetails.religion} />
          </Grid>
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Caste" subHeading={personalDetails && personalDetails.cast} />
          </Grid>
          <Grid item sm={12} xs={12} md={12} lg={12}>
            <Field heading="Category Of Admission" subHeading={personalDetails && personalDetails.categoryOfAdmission} />
          </Grid>
          <Grid item sm={6} xs={12} md={6} lg={6}>
            <Field
              heading="Identification Mark1"
              subHeading={personalDetails && personalDetails.identificationMarkOne}
            />
          </Grid>
          <Grid item sm={6} xs={12} md={6} lg={6}>
            <Field
              heading="Identification Mark2"
              subHeading={personalDetails && personalDetails.identificationMarkTwo}
            />
          </Grid>
          <Grid item sm={6} xs={12} md={6} lg={6}>
            <Field
              heading="Permanent Address"
              subHeading={personalDetails && personalDetails.presentAddress}
            />
          </Grid>
          <Grid item sm={6} xs={12} md={6} lg={6}>
            <Field
              heading="Present Address"
              subHeading={personalDetails && personalDetails.permenentAddress}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
