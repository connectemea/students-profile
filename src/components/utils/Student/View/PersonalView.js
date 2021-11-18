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

const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

export default function Details() {
  return (
    <Grid
      component={ProfileCard}
      sx={{ mt: 2, ml: 2, p: 2 }}
      container
      spacing={2}
    >
      <Grid item sm={12} sx={12} md={3} lg={3}>
        <Field heading="Name" subHeading="Salman Faris c c" />
      </Grid>
      <Grid item sm={12} sx={12} md={3} lg={3}>
        <Field heading="Email" subHeading="mail@gmail.com" />
      </Grid>
      <Grid item sm={12} sx={12} md={3} lg={3}>
        <Field heading="Department" subHeading="Computer Science" />
      </Grid>
      <Grid item sm={12} sx={12} md={3} lg={3}>
        <Field heading="Admission Number" subHeading="19bscd" />
      </Grid>
    </Grid>
  );
}
