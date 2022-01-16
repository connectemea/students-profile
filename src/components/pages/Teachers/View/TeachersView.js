import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Grid, Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import BACKEND_URL from "../../../../constants/BACKEND_URL";
import Avatar from "@mui/material/Avatar";
import Field from "../utils/Field";

// importing getTech form TeacherService
import TeacherService from "../../../../services/teacherService";
import { getYear } from "../../../helpers/dateTimeHelper";

const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

export default function TeachersView() {
  const [teacherData, setTeacherData] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function getLogedTeacher() {
      try {
        const response = await TeacherService.getTeacher();
        setTeacherData(response);
      } catch (err) {
        console.error(err?.response?.data?.message);
      }
    }
    async function getTeacherById() {
      try {
        const response = await TeacherService.getTeacherById(id);
        setTeacherData(response);
      } catch (err) {
        console.error(err?.response?.data?.message);
      }
    }
    if (id && id === "me") {
      getLogedTeacher();
    } else if (id) {
      getTeacherById();
    }
  }, [id]);

  return (
    <Page title="details">
      {teacherData && (
        <Container maxWidth="xl" sx={{ pl: 4 }}>
          <Container>
            <Grid
              style={{
                backgroundImage:
                  "linear-gradient(to bottom,#038dfd 0%,#038dfd 25%,transparent 25%,transparent 100%)",
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
                  src={`${BACKEND_URL.BASE_URL}upload/${teacherData.profileImage}`}
                  sx={{
                    width: 80,
                    height: 80,
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
                      fontSize: 18,
                    }}
                  >
                    {teacherData.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(0,0,0,.75)",
                      fontStyle: "normal",
                      fontWeight: 300,
                      fontSize: 15,
                    }}
                  >
                    {teacherData.department.name}
                  </Typography>
                </Grid>
              </Grid>
              <Link
                to={`/app/teacher/update/${teacherData._id}`}
                style={{ color: "#333" }}
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
              <Grid
                item
                xs={12}
                md={6}
                sm={6}
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              ></Grid>
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
                  subHeading={teacherData.department.name}
                />
              </Grid>
              <Grid item sm={12} xs={12} md={3} lg={3}>
                <Field
                  heading="Joning Year"
                  subHeading={getYear(teacherData.joinYear)}
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
