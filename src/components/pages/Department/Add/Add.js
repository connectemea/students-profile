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
  const [dptname, setDptname] = useState();
  const [shortname, setShortname] = useState();
  const [hodname, setHodname] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const handleDptnameChange = (event) => setDptname(event.target.value);
  const handleShortnameChange = (event) => setShortname(event.target.value);
  const handleHodnameChange = (event) => setHodname(event.target.value);
  const handleContactChange = (event) => setContact(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);

  const handleAddDepartment = () => {
    const data = {
      dptname,
      shortname,
      hodname,
      contact,
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
                name="dptname"
                label="Department Name"
                color="info"
                fullWidth
                value={dptname}
                onChange={handleDptnameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                varient="contained"
                name="shortname"
                label="Short Form"
                color="info"
                fullWidth
                value={shortname}
                onChange={handleShortnameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                varient="contained"
                name="hodname"
                label="HOD name"
                color="info"
                fullWidth
                value={hodname}
                onChange={handleHodnameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                varient="contained"
                name="contact"
                label="HOD Contact"
                color="info"
                fullWidth
                value={contact}
                onChange={handleContactChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                varient="contained"
                name="email"
                label="E-mail"
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
            <Tooltip title={(!dptname || !shortname || !hodname || !contact || !email?"fill the fields":"sumbit fields")}>
            <span>
              <Button
                variant="contained"
                color="info"
                //   component={RouterLink}
                onClick={handleAddDepartment}
                disabled={!dptname || !shortname || !hodname || !contact || !email}
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
