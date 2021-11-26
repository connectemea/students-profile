// material components
import {
    Typography,
    Grid,
    Card,
    Container,
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
  
  export default function FamilyView() {
    return (
      <Page title="StudentsList">

        {/* Father Details*/}
  
        <Container>
          <Grid
            component={ProfileCard}
            sx={{ mt: 2, p: 2 }}
            container
            spacing={2}
          >
            <Grid sx={{}} item sm={12} xs={12} md={12} lg={12}>
              <Typography variant="h5" sx={{}}>
                Father Details
              </Typography>
            </Grid>
            <Grid item sm={12} xs={12} md={4} lg={4}>
              <Field
                heading="Name"
                subHeading="Jhon"
              />
            </Grid>
            <Grid item sm={12} xs={12} md={4} lg={4}>
              <Field heading="Educational Qualification" subHeading="Dgree" />
            </Grid>
            <Grid item sm={12} xs={12} md={4} lg={4}>
              <Field heading="Annual Income (Rs)" subHeading="500000" />
            </Grid>
            <Grid item sm={12} xs={12} md={4} lg={4}>
              <Field heading="Occupation" subHeading="Software Developer" />
            </Grid>
            <Grid item sm={12} xs={12} md={8} lg={8}>
              <Field heading="Official Address" subHeading="85%" />
            </Grid>
          </Grid>
        </Container>
  
        {/* Mother Details */}
  
        <Container>
          <Grid
            component={ProfileCard}
            sx={{ mt: 2, p: 2 }}
            container
            spacing={2}
          >
            <Grid sx={{}} item sm={12} xs={12} md={12} lg={12}>
              <Typography variant="h5">Mother Details</Typography>
            </Grid>
            <Grid item sm={12} xs={12} md={4} lg={4}>
              <Field heading="Name" subHeading="Maria" />
            </Grid>
            <Grid item sm={12} xs={12} md={4} lg={4}>
              <Field heading="Educational Qualification" subHeading="Degree" />
            </Grid>
            <Grid item sm={12} xs={12} md={4} lg={4}>
              <Field heading="Annual Income (Rs)" subHeading="100000" />
            </Grid>
            <Grid item sm={12} xs={12} md={4} lg={4}>
              <Field heading="Occupation" subHeading="UI/UX Designer" />
            </Grid>
            <Grid item sm={12} xs={12} md={8} lg={8}>
              <Field heading="Official Address" subHeading="Kochi" />
            </Grid>
          </Grid>
        </Container>
  
        {/* Guardian Details */}
  
        <Container>
          <Grid
            component={ProfileCard}
            sx={{ mt: 2, p: 2 }}
            container
            spacing={2}
          >
            <Grid sx={{}} item sm={12} xs={12} md={12} lg={12}>
              <Typography variant="h5">Guardian Details</Typography>
            </Grid>
            <Grid item sm={12} xs={12} md={4} lg={4}>
              <Field heading="Name" subHeading="Maria" />
            </Grid>
            <Grid item sm={12} xs={12} md={4} lg={4}>
              <Field heading="Educational Qualification" subHeading="Degree" />
            </Grid>
            <Grid item sm={12} xs={12} md={4} lg={4}>
              <Field heading="Annual Income (Rs)" subHeading="100000" />
            </Grid>
            <Grid item sm={12} xs={12} md={4} lg={4}>
              <Field heading="Occupation" subHeading="UI/UX Designer" />
            </Grid>
            <Grid item sm={12} xs={12} md={8} lg={8}>
              <Field heading="Official Address" subHeading="Kochi" />
            </Grid>
          </Grid>
        </Container>
    </Page>
  );
}