import { useState } from "react";

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
import PersonalView from "../../../utils/Student/View/PersonalView";
import EducationalView from "../../../utils/Student/View/EducationalView";
import FamilyView from "../../../utils/Student/View/FamilyView";
import TabPanel from "@mui/lab/TabPanel";
import { typography } from "@mui/system";
import profile from "../../../../images/test.jpg";

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
  const onTabClicked = (event, index) => {
    setIndex(index);
  };

  return (
    <Page title="details">
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
            container
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
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: 18,
                }}
              >
                Salmanul Faris c c
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: 350,
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
            </Tabs>
          </Grid>
        </Grid>
      </Container>
      <Grid sx={{ mt: 5 }}>
        <Panel value={index} index={0}>
          <PersonalView />
        </Panel>
        <Panel value={index} index={1}>
          <EducationalView />
        </Panel>
        <Panel value={index} index={2}>
          <FamilyView />
        </Panel>
      </Grid>
    </Page>
  );
}
