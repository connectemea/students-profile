import { useContext } from "react";
// material components
import { Typography, Grid, Card, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Page from "../../../utils/Page";
import { Link } from "react-router-dom";
import { profileContext } from "../../../../context/profileContext";
//   custom component
import Field from "./Field";
// icon import
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

// custom card
const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

export default function EducationalView(props) {
  const { educationDetails, id } = props;
  const { profile } = useContext(profileContext);
  return (
    <Page title="EducationalView">
      {/* Tenth Details */}

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
              10th Details
            </Typography>
            {profile?.userType && (
              <Link
                to={`/app/student/update/${id}/educational`}
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
            )}
          </Grid>
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <Field
              heading="School Name"
              subHeading={
                educationDetails && educationDetails.tenthStd.schoolName
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <Field
              heading="Medium"
              subHeading={
                educationDetails && educationDetails.tenthStd.syllabus
              }
            />
          </Grid>
          <Grid sx={{}} item sm={12} xs={12} md={12} lg={12}>
            <Typography>Marks</Typography>
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field
              heading="English"
              subHeading={educationDetails && educationDetails.tenthStd.english}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field
              heading="Maths"
              subHeading={educationDetails && educationDetails.tenthStd.maths}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field
              heading="Science"
              subHeading={educationDetails && educationDetails.tenthStd.science}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field
              heading="Social Science"
              subHeading={
                educationDetails && educationDetails.tenthStd.socialScience
              }
            />
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
            <Field
              heading="School Name"
              subHeading={
                educationDetails && educationDetails.twelthStd.schoolName
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field
              heading="Syllabus"
              subHeading={
                educationDetails && educationDetails.twelthStd.syllabus
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field
              heading="Course"
              subHeading={educationDetails && educationDetails.twelthStd.course}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field
              heading={educationDetails && educationDetails.twelthStd.sub[0]}
              subHeading={
                educationDetails && educationDetails.twelthStd.subMark[0]
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={2} lg={2}>
            <Field
              heading={educationDetails && educationDetails.twelthStd.sub[1]}
              subHeading={
                educationDetails && educationDetails.twelthStd.subMark[1]
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={2} lg={2}>
            <Field
              heading={educationDetails && educationDetails.twelthStd.sub[2]}
              subHeading={
                educationDetails && educationDetails.twelthStd.subMark[2]
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={2} lg={2}>
            <Field
              heading={educationDetails && educationDetails.twelthStd.sub[3]}
              subHeading={
                educationDetails && educationDetails.twelthStd.subMark[3]
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={2} lg={2}>
            <Field
              heading={educationDetails && educationDetails.twelthStd.sub[4]}
              subHeading={
                educationDetails && educationDetails.twelthStd.subMark[4]
              }
            />
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
            <Field
              heading="College Name"
              subHeading={
                educationDetails && educationDetails.degree[0].college
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field
              heading="University"
              subHeading={
                educationDetails && educationDetails.degree[0].university
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field
              heading="Course"
              subHeading={educationDetails && educationDetails.degree[0].course}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={4} lg={4}>
            <Field
              heading="Core"
              subHeading={educationDetails && educationDetails.degree[0].core}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={2} lg={2}>
            <Field
              heading="Complementary (Sub)"
              subHeading={
                educationDetails && educationDetails.degree[0].complementary
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={2} lg={2}>
            <Field
              heading="Common (English)"
              subHeading={
                educationDetails && educationDetails.degree[0].commonOne
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={2} lg={2}>
            <Field
              heading="Common (Language)"
              subHeading={
                educationDetails && educationDetails.degree[0].commonTwo
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={2} lg={2}>
            <Field
              heading="Open Course"
              subHeading={educationDetails && educationDetails.degree[0].open}
            />
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
            <Field
              heading="Course"
              subHeading={
                educationDetails &&
                educationDetails.otherQualifications[0].courseType
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field
              heading="Institution"
              subHeading={
                educationDetails &&
                educationDetails.otherQualifications[0].institutionName
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field
              heading="University"
              subHeading={
                educationDetails &&
                educationDetails.otherQualifications[0].university
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field
              heading="Grade / Mark%"
              subHeading={
                educationDetails &&
                educationDetails.otherQualifications[0].Grade
              }
            />
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
            <Typography variant="h5">Additional Course</Typography>
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field
              heading="Course"
              subHeading={
                educationDetails &&
                educationDetails.additionalCourse[0].courseName
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field
              heading="Institution"
              subHeading={
                educationDetails &&
                educationDetails.additionalCourse[0].institutionName
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field
              heading="University"
              subHeading={
                educationDetails &&
                educationDetails.additionalCourse[0].university
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field
              heading="Grade / Mark%"
              subHeading={
                educationDetails && educationDetails.additionalCourse[0].cgp
              }
            />
          </Grid>
        </Grid>
      </Container>

      {/* Extra Caricaular Activities */}

      <Container>
        <Grid
          component={ProfileCard}
          sx={{ mt: 2, p: 2 }}
          container
          spacing={2}
        >
          <Grid sx={{}} item sm={12} xs={12} md={12} lg={12}>
            <Typography variant="h5" sx={{}}>
              Extra Caricaular Activities
            </Typography>
          </Grid>
          <Grid item sm={12} xs={12} md={2} lg={2}>
            <Field
              heading="Activties"
              subHeading={
                educationDetails && educationDetails.extraCurricular[0].activity
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={2} lg={2}>
            <Field
              heading="Price"
              subHeading={
                educationDetails && educationDetails.extraCurricular[0].Price
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Field
              heading="Year of Participation"
              subHeading={
                educationDetails &&
                educationDetails.extraCurricular[0].yearOfParticipation
              }
            />
          </Grid>
          <Grid item sm={12} xs={12} md={5} lg={5}>
            <Field
              heading="Details of Execellence"
              subHeading={
                educationDetails &&
                educationDetails.extraCurricular[0]
                  .detailsOfExcellenceInPerformance
              }
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
