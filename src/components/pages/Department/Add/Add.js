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
  Tooltip
} from "@mui/material";

// material icons
import PublishIcon from "@mui/icons-material/Publish";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";

export default function Add() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);

  const handleAddDepartment = () => {
    const data = {
      username,
      email,
    };
    console.log(data);
  };
  return (
    <Page title="Add Department">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Typography variant="h5" gutterBottom>
            Add Department
          </Typography>
        </Stack>
        <Card sx={{ padding: 3, marginBottom: 2 }}>
          <Grid container spacing={1} rowSpacing={1}>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                varient="contained"
                name="username"
                label="Department Name"
                color="info"
                fullWidth
                value={username}
                onChange={handleUsernameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                varient="contained"
                name="dpt-name"
                label="Short Form"
                color="info"
                fullWidth
                value=""
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                varient="contained"
                name="username"
                label="HOD name"
                color="info"
                fullWidth
                value={username}
                onChange={handleUsernameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                varient="contained"
                name="dptname"
                label="HOD Contact"
                color="info"
                fullWidth
                value=""
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
            <Tooltip title={(!username || !email)?"fill the fields":"sumbit fields"}>
            <span>
              <Button
                variant="contained"
                color="info"
                //   component={RouterLink}
                onClick={handleAddDepartment}
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
      </Container>
    </Page>
  );
}
