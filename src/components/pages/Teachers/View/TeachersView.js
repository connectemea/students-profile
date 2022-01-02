import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// material components
import { Container, Grid, Card, Typography } from "@mui/material";

// material icons
import { styled } from "@mui/material/styles";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";

//  My Imports
import Avatar from "@mui/material/Avatar";
import profile from "../../../../images/avatar.jpg";

// Custom component
import Field from "../utils/Field";

// importing getTech form TeacherService
import TeacherService from "../../../../services/teacherService";
import UserService from "../../../../services/teacherService";

const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`
}));

export default function TeachersView() {
  const { id } = useParams();
  console.log(id);
  const [teacherData, setTeacherData] = useState();
  const [profileImage, setProfileImage] = useState();
  const [image, setImage] = useState();

  const url = useEffect(() => {
    if (id) {
      async function getOne() {
        try {
          console.log("getOne funciton is working");
          const response = await TeacherService.getTeacherOne(id);
          setTeacherData(response);
          setProfileImage(
            `https://student-profile-api.herokuapp.com/upload/${response.userId.profileImage}`
          );
        } catch (err) {
          console.log(err?.response?.data?.message);
        }
      }
      getOne();
    } else {
      async function getMe() {
        try {
          console.log("getme funciton is working");
          const response = await TeacherService.getTeacherMe();
          console.log(response);

          setTeacherData(response);
          setProfileImage(
            `https://student-profile-api.herokuapp.com/upload/${response.userId.profileImage}`
          );
        } catch (err) {
          console.log(err?.response?.data?.message);
        }
      }
      getMe();
    }
  }, []);

  return (
    <Page title="details">
      {teacherData && (
        <Container maxWidth="xl" sx={{ pl: 4 }}>
          <Container>
            <Grid
              style={{
                backgroundImage:
                  "linear-gradient(to bottom,#038dfd 0%,#038dfd 25%,transparent 25%,transparent 100%)"
              }}
              component={ProfileCard}
              sx={{ mt: 2, p: 2 }}
              container
              spacing={2}
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Grid
                item
                container
                sx={{ pl: 5 }}
                xs={12}
                md={6}
                sm={12}
                direction="row"
                justifyContent="flex-start"
                gitItems="center"
              >
                <Grid
                  // xs={12}
                  // md={3}
                  // sm={3}
                  item
                  component={Avatar}
                  alt="Remy Sharp"
                  // src={profile}
                  src={profileImage}
                  sx={{
                    width: 80,
                    height: 80
                  }}
                />
                <Grid
                  xs={12}
                  md={6}
                  sm={6}
                  sx={{ mt: 2.5, ml: 2 }}
                  component={Typography}
                >
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: 18
                    }}
                  >
                    {teacherData.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(0,0,0,.75)",
                      fontStyle: "normal",
                      fontWeight: 300,
                      fontSize: 15
                    }}
                  >
                    {teacherData.department}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                sm={6}
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                {/* <Tabs value={index} onChange={onTabClicked}>
              <Tab label="Personal" />
              <Tab label="Educational" />
              <Tab label="Family" />
              <Tab label="Dependencies" />
            </Tabs> */}
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
                <Field heading="Name" subHeading={teacherData.name} />
              </Grid>
              <Grid item sm={12} xs={12} md={3} lg={3}>
                <Field heading="Email" subHeading={teacherData.email} />
              </Grid>
              <Grid item sm={12} xs={12} md={3} lg={3}>
                <Field
                  heading="Short Form"
                  subHeading={teacherData.shortName}
                />
              </Grid>
              <Grid item sm={12} xs={12} md={3} lg={3}>
                <Field
                  heading="Phone Number"
                  subHeading={teacherData.phoneNo}
                />
              </Grid>
              <Grid item sm={12} xs={12} md={3} lg={3}>
                <Field
                  heading="Department"
                  subHeading={teacherData.department}
                />
              </Grid>
              <Grid item sm={12} xs={12} md={3} lg={3}>
                <Field
                  heading="Joning Year"
                  subHeading={teacherData.joinYear}
                />
              </Grid>
              <Grid item sm={12} xs={12} md={3} lg={3}>
                <Field heading="Gender" subHeading={teacherData.gender} />
              </Grid>
              <Grid item sm={12} xs={12} md={3} lg={3}>
                <Field
                  heading="Marital Status"
                  subHeading={teacherData.maritalStatus}
                />
              </Grid>
              <Grid item sm={12} xs={12} md={3} lg={3}>
                <Field heading="Religion" subHeading={teacherData.religion} />
              </Grid>
              <Grid item sm={12} xs={12} md={3} lg={3}>
                <Field heading="Caste" subHeading={teacherData.cast} />
              </Grid>
              <Grid item sm={12} xs={12} md={3} lg={3}>
                <Field
                  heading="Educational Qualification"
                  subHeading={teacherData.educationQualification}
                />
              </Grid>
              {/* </Container> */}
            </Grid>
          </Container>
        </Container>
      )}
    </Page>
  );
}
