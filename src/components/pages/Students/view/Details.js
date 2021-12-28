import { useState,useEffect } from "react";

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
import DependenciesView from "../../../utils/Student/View/Dependencies";
import profile from "../../../../images/test.jpg";
import StudentService from "../../../../services/StudentService";
import { useParams } from "react-router-dom";

// icon import

import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  // paddingBottom: `${theme.spacing(4)} !important`,
}));

const Panel = (props) => (
  <div hidden={props.value !== props.index}>
    <Typography>{props.children}</Typography>
  </div>
);

export default function Details() {
  const [index, setIndex] = useState(0);
  const {id} = useParams();
  const onTabClicked = (event, index) => {
    setIndex(index);
  };
  const [studentDetails,setStudentDetails] = useState();

  useEffect(() => {
    async function getStudentDetails() {
      try {
        const response = await StudentService.getStudent(id);
        setStudentDetails(response)
        console.log("success",response.data.personalDetails.name);
        console.log(response)
      } catch (error) {
        console.log("error",error.response)
      }
    }
    getStudentDetails()
  },[id]);

  return (
    <Page title="details">
    { studentDetails && (<>
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
              src={profile}
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
                  color:"rgba(0,0,0,.75)",
                  fontStyle: "normal",
                  fontWeight: 300,
                  fontSize: 15,
                }}
              >
                UI/UX Designer
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
              <Tab label="Dependencies" />
            </Tabs>
          </Grid>
        </Grid>
      </Container>
      <Grid sx={{ mt: 5 }}>
        <Panel value={index} index={0}>
          <PersonalView personalDetails = {studentDetails && studentDetails.personalDetails} id={studentDetails._id}/>
        </Panel>
        <Panel value={index} index={1}>
          <EducationalView educationDetails = {studentDetails && studentDetails.educationDetails} id={studentDetails._id}/>
        </Panel>
        <Panel value={index} index={2}>
          <FamilyView familyDetails = {studentDetails && studentDetails.familyDetails} id={studentDetails._id}/>
        </Panel>
        <Panel value={index} index={3}>
          <DependenciesView id={studentDetails._id}/>
        </Panel>
      </Grid>
    </>)}
    </Page>
  );
}
