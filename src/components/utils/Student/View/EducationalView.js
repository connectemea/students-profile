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
 // custom card
const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

export default function Details() {
  return (
    <Page title="StudentsList">
      {/* Tenth Details */}

      <Container>
        <Grid
          component={ProfileCard}
          sx={{ mt: 2, p: 2 }}
          container
          spacing={2}
        >
          <Grid sx={{}} item sm={12} xs={12} md={12} lg={12}>
            <Typography variant="h5" sx={{}}>
              10th Details
            </Typography>
          </Grid>
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <Field
              heading="School Name"
              subHeading="V.P.K.M.H.S.S Puthur Pallikkal"
            />
          </Grid>
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <Field heading="Medium" subHeading="English" />
          </Grid>
          <Grid sx={{}} item sm={12} xs={12} md={12} lg={12}>
            <Typography>Marks</Typography>
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="English" subHeading="95%" />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Maths" subHeading="78%" />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Science" subHeading="85%" />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Social Science" subHeading="90%" />
          </Grid>
        </Grid>
      </Container>

      {/* PlusTwo Details */}

      <Container>
        <Grid
          component={ProfileCard}
          sx={{ mt: 2, p: 2 }}
          container
          spacing={2}
        >
          <Grid sx={{}} item sm={12} xs={12} md={12} lg={12}>
            <Typography variant="h5">12th Details</Typography>
          </Grid>
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <Field heading="School Name" subHeading="GHSS Peruvallur" />
          </Grid>
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <Field heading="Medium" subHeading="English" />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="English" subHeading="95%" />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Maths" subHeading="78%" />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Science" subHeading="85%" />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Social Science" subHeading="90%" />
          </Grid>
        </Grid>
      </Container>

      {/* Degree Details */}

      <Container>
        <Grid
          component={ProfileCard}
          sx={{ mt: 2, p: 2 }}
          container
          spacing={2}
        >
          <Grid sx={{}} item sm={12} xs={12} md={12} lg={12}>
            <Typography variant="h5">Degree Details</Typography>
          </Grid>
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <Field heading="School Name" subHeading="GHSS Peruvallur" />
          </Grid>
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <Field heading="Medium" subHeading="English" />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="English" subHeading="95%" />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Maths" subHeading="78%" />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Science" subHeading="85%" />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Social Science" subHeading="90%" />
          </Grid>
        </Grid>
      </Container>

      {/* Other Qualfication Details */}

      <Container>
        <Grid
          component={ProfileCard}
          sx={{ mt: 2, p: 2 }}
          container
          spacing={2}
        >
          <Grid sx={{}} item sm={12} xs={12} md={12} lg={12}>
            <Typography variant="h5">Other Qualfication</Typography>
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Course" subHeading="Computer Science" />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Institution" subHeading="GEMS College" />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="University" subHeading="Calicut University" />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Grade/%Mark" subHeading="95%" />
          </Grid>
        </Grid>
      </Container>

      {/* Addition Course Details */}

      <Container>
        <Grid
          component={ProfileCard}
          sx={{ mt: 2, p: 2 }}
          container
          spacing={2}
        >
          <Grid sx={{}} item sm={12} xs={12} md={12} lg={12}>
            <Typography variant="h5">Addition Course</Typography>
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Course" subHeading="Computer Science" />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Institution" subHeading="GEMS College" />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="University" subHeading="Calicut University" />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field heading="Grade/%Mark" subHeading="95%" />
          </Grid>
        </Grid>
      </Container>

      {/* Extra Activities */}

      <Container>
        <Grid
          component={ProfileCard}
          sx={{ mt: 2, p: 2 }}
          container
          spacing={2}
        >
          <Grid sx={{}} item sm={12} xs={12} md={12} lg={12}>
            <Typography variant="h5">Participation in NCC,NSS,Sports,Fine Arts,Hackathon</Typography>
          </Grid>
          <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field heading="Activity" subHeading="Volleyball" />
          </Grid>
          <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field heading="Price" subHeading="State First" />
          </Grid>
          <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field heading="Details of Excellence in performance" subHeading="Best Player" />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
