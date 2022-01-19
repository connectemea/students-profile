import { useState, useEffect, useContext } from "react";
// material components
import {
  Typography,
  Grid,
  Card,
  Container,
  Tabs,
  Avatar,
  Tab,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Page from "../../../utils/Page";
import PersonalView from "../../../utils/Student/View/PersonalView";
import EducationalView from "../../../utils/Student/View/EducationalView";
import FamilyView from "../../../utils/Student/View/FamilyView";
import BACKEND_URL from "../../../../constants/BACKEND_URL";
import studentsService from "../../../../services/studentsService";
import { useParams } from "react-router-dom";
//loading
import { loadingContext } from "../../../../context/loadingContext";
import Loader from "../../../utils/Loader";

const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
}));

const Panel = (props) => (
  <div hidden={props.value !== props.index}>
    <Typography>{props.children}</Typography>
  </div>
);

export default function Details() {
  const { loaderToggler } = useContext(loadingContext);
  const [index, setIndex] = useState(0);
  const { id } = useParams();
  const onTabClicked = (event, index) => {
    setIndex(index);
  };
  const [studentDetails, setStudentsDetails] = useState();

  useEffect(() => {
    async function getStudentDetails() {
      try {
        loaderToggler(true);
        const response = await studentsService.getStudentById(id);
        setStudentsDetails(response);
        loaderToggler(false);
      } catch (error) {
        console.error(error.response);
        loaderToggler(false);
      }
    }
    async function getLogedStudent() {
      try {
        loaderToggler(true);
        const response = await studentsService.getStudent();
        setStudentsDetails(response);
        loaderToggler(false);
      } catch (error) {
        console.error(error.response);
        loaderToggler(false);
      }
    }
    if (id && id !== "me") {
      getStudentDetails();
    } else if (id) {
      getLogedStudent();
    }
  }, [id]);

  return (
    <Page title="details">
      {studentDetails && (
        <>
          <Container>
            <Loader />
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
                  item
                  component={Avatar}
                  alt="Remy Sharp"
                  src={`${BACKEND_URL.BASE_URL}upload/${studentDetails.personalDetails.profileImage}`}
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
                    {studentDetails && studentDetails.personalDetails.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(0,0,0,.75)",
                      fontStyle: "normal",
                      fontWeight: 300,
                      fontSize: 15,
                    }}
                  >
                    {studentDetails &&
                      studentDetails.personalDetails.department.name}
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
                <Tabs value={index} onChange={onTabClicked}>
                  <Tab label="Personal" />
                  <Tab label="Educational" />
                  <Tab label="Family" />
                  {/* <Tab label="Dependencies" /> */}
                </Tabs>
              </Grid>
            </Grid>
          </Container>
          <Grid sx={{ mt: 5 }}>
            <Panel value={index} index={0}>
              <PersonalView
                personalDetails={
                  studentDetails && studentDetails.personalDetails
                }
                id={studentDetails._id}
              />
            </Panel>
            <Panel value={index} index={1}>
              <EducationalView
                educationDetails={
                  studentDetails && studentDetails.educationDetails
                }
                id={studentDetails._id}
              />
            </Panel>
            <Panel value={index} index={2}>
              <FamilyView
                familyDetails={studentDetails && studentDetails.familyDetails}
                id={studentDetails._id}
              />
            </Panel>
            {/* <Panel value={index} index={3}>
              <DependenciesView id={studentDetails._id} />
            </Panel> */}
          </Grid>
        </>
      )}
    </Page>
  );
}
