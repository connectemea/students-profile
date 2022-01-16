// material components
import { Typography, Grid, Card, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Page from "../../../utils/Page";
import { Link } from "react-router-dom";

//   custom component
import Field from "./Field";
// icon import
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
// custom card
const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

export default function FamilyView(props) {
  const { familyDetails, id } = props;

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
          {" "}
          <Grid
            item
            sm={12}
            xs={12}
            md={12}
            lg={12}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {" "}
            <Typography variant="h5" sx={{}}>
              Father Details
            </Typography>
            <Link
              to={`/app/student/update/${id}/family`}
              style={{ color: "none" }}
            >
              <ModeEditOutlineOutlinedIcon
                sx={{
                  margin: "8px",
                  opacity: "",
                  height: "3vh",
                  width: "2vw",
                }}
              />
            </Link>
          </Grid>
          <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field
              heading="Name"
              subHeading={familyDetails && familyDetails.father.name}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field
              heading="Educational Qualification"
              subHeading={
                familyDetails && familyDetails.father.educationQualification
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field
              heading="Annual Income (Rs)"
              subHeading={familyDetails && familyDetails.father.annualIncome}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field
              heading="Occupation"
              subHeading={familyDetails && familyDetails.father.occupation}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={8} lg={8}>
            <Field
              heading="Official Address"
              subHeading={familyDetails && familyDetails.father.officialAddress}
            />
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
            <Field
              heading="Name"
              subHeading={familyDetails && familyDetails.mother.name}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field heading="Educational Qualification" subHeading="Degree" />
          </Grid>
          <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field
              heading="Annual Income (Rs)"
              subHeading={familyDetails && familyDetails.mother.annualIncome}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field
              heading="Occupation"
              subHeading={familyDetails && familyDetails.mother.occupation}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={8} lg={8}>
            <Field
              heading="Official Address"
              subHeading={familyDetails && familyDetails.mother.officialAddress}
            />
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
            <Field
              heading="Name"
              subHeading={familyDetails && familyDetails.guardian.name}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field
              heading="Educational Qualification"
              subHeading={
                familyDetails && familyDetails.guardian.educationQualification
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field
              heading="Annual Income (Rs)"
              subHeading={familyDetails && familyDetails.guardian.annualIncome}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field
              heading="Occupation"
              subHeading={familyDetails && familyDetails.guardian.occupation}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={8} lg={8}>
            <Field
              heading="Official Address"
              subHeading={
                familyDetails && familyDetails.guardian.officialAddress
              }
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
