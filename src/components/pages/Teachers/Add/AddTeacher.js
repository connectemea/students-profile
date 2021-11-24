import { useState } from "react";

// material components
import {
  Stack,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Tooltip,
} from "@mui/material";

// material icons
import PublishIcon from "@mui/icons-material/Publish";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import DataTable from "../../../utils/DataTable";

// table header cell config
const TABLE_HEAD = [
  { id: "username", label: "Name", alignRight: false, type: "text" },
  { id: "email", label: "Company", alignRight: false, type: "text" },
];

const TABLE_DATA = [
  {
    id: "134doojon",
    username: "Aseel",
    email: "aseelhacker@microsoft.com",
  },
  {
    id: "ounr34343",
    username: "Noof",
    email: "noof@google.com",
  },
  {
    id: "343433ojnn",
    username: "Nahyan",
    email: "nahyan@facebook.com",
  },
  {
    id: "eonkn2434",
    username: "Dilshad",
    email: "dilshad@amazon.com",
  },
];

export default function AddTeacher() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);

  const handleAddTeacher = () => {
    const data = {
      username,
      email,
    };
    console.log(data);
  };
  return (
    <Page title="AddTeacher">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Typography variant="h5" gutterBottom>
            Add Teachers
          </Typography>
        </Stack>
        <Card sx={{ padding: 3, marginBottom: 2 }}>
          <Grid container spacing={1} rowSpacing={1}>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                varient="contained"
                name="username"
                label="Username"
                color="info"
                fullWidth
                value={username}
                onChange={handleUsernameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                varient="contained"
                name="email"
                label="Email"
                color="info"
                fullWidth
                value={email}
                onChange={handleEmailChange}
              />
            </Grid>
          </Grid>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            mt={2}
          >
            <Tooltip
              title={!username || !email ? "fill the fields" : "sumbit fields"}
            >
              <span>
                <Button
                  variant="contained"
                  color="info"
                  //   component={RouterLink}
                  onClick={handleAddTeacher}
                  disabled={!username || !email}
                  //   to="#"
                  startIcon={<PublishIcon />}
                >
                  Add
                </Button>
              </span>
            </Tooltip>
          </Stack>
        </Card>
        <DataTable TABLE_DATA={TABLE_DATA} TABLE_HEAD={TABLE_HEAD} />
      </Container>
    </Page>
  );
}
