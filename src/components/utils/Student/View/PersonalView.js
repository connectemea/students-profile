// material components
import {
  Grid,
  Card,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Page from "../../../utils/Page";

//   custom component
import Field from "./Field";

const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

export default function PersonalView() {
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
            <Field heading="Name" subHeading="Salman Faris c c" />
          </Grid>
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Email" subHeading="mail@gmail.com" />
          </Grid>
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Department" subHeading="Computer Science" />
          </Grid>
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Admission Number" subHeading="19bscd" />
          </Grid>
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Date of Birth" subHeading="15/05/2001" />
          </Grid>
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Gender" subHeading="Male" />
          </Grid>
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Mobile Number" subHeading="964587525" />
          </Grid>
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Joining Year" subHeading="2019" />
          </Grid>
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Blood Group" subHeading="A+ve" />
          </Grid>
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Marital Status" subHeading="Single" />
          </Grid>
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Religion" subHeading="Muslim" />
          </Grid>
          <Grid item sm={3} xs={12} md={3} lg={3}>
            <Field heading="Caste" subHeading="Islam" />
          </Grid>
          <Grid item sm={12} xs={12} md={12} lg={12}>
            <Field heading="Category Of Admission" subHeading="Management" />
          </Grid>
          <Grid item sm={6} xs={12} md={6} lg={6}>
            <Field
              heading="Identification Mark1"
              subHeading="The black mole on the right chest"
            />
          </Grid>
          <Grid item sm={6} xs={12} md={6} lg={6}>
            <Field
              heading="Identification Mark2"
              subHeading="The black mole on the right chest"
            />
          </Grid>
          <Grid item sm={6} xs={12} md={6} lg={6}>
            <Field
              heading="Permanent Address"
              subHeading="Jk house ,Kozhikode road "
            />
          </Grid>
          <Grid item sm={6} xs={12} md={6} lg={6}>
            <Field
              heading="Present Address"
              subHeading="Jk house ,Kozhikode road "
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
