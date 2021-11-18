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

const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

export default function Details() {
  return (
    <Page title="details">
      <Container>
        <Grid
          component={ProfileCard}
          sx={{ mt: 2, p: 2 }}
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Grid>
            <Avatar alt="Remy Sharp" src="/static/images/avatar.jpg" />
          </Grid>
          <Grid>
            <Tabs centered>
              <Tab label="Personal" />
              <Tab label="Education" />
              <Tab label="Family" />
            </Tabs>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
