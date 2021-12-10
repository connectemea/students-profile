import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
import DeleteIcon from '@mui/icons-material/Delete';

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";

//api service
import departmentService from "../../../../services/departmentService"

export default function Add() {
  const navigate = useNavigate()
  const [name, setDptname] = useState();
  const [shortName, setShortName] = useState();
  const [hod, setHodname] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [email, setEmail] = useState();
  const handleDptnameChange = (event) => setDptname(event.target.value);
  const handleShortNameChange = (event) => setShortName(event.target.value);
  const handleHodnameChange = (event) => setHodname(event.target.value);
  const handleContactChange = (event) => setPhoneNo(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);

  const handleAddDepartment = async () => {
    try {
      const departmentData = {
        departmentDetails: {
          name,
          shortName,
          hod,
          phoneNo,
          email,
        }
      };
      // adding department to db
      const response = await departmentService.addDepartment(departmentData);
      // clearing the form
      navigate("/app/department/list");
      console.log(response)
    } catch (err) {
      console.log(err.response);
    }
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
                name="name"
                label="Department Name"
                color="info"
                fullWidth
                value={name}
                onChange={handleDptnameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                varient="contained"
                name="shortName"
                label="Short Form"
                color="info"
                fullWidth
                value={shortName}
                onChange={handleShortNameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                varient="contained"
                name="hod"
                label="HOD name"
                color="info"
                fullWidth
                value={hod}
                onChange={handleHodnameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                varient="contained"
                name="phoneNo"
                type="number"
                label="HOD phoneNo"
                color="info"
                fullWidth
                value={phoneNo}
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
            <span>
              <Tooltip title={(!name || !shortName || !hod || !phoneNo || !email ? "Add Department" : "Delete Department")}>
                <Button variant="outlined"
                  color="info"
                  style={{ margin: "5px" }}
                  //   component={RouterLink}
                  onClick={handleAddDepartment}
                  disabled={!name || !shortName || !hod || !phoneNo || !email}
                  startIcon={<DeleteIcon />}>
                  Delete
                </Button>
              </Tooltip>
              <Tooltip title={(!name || !shortName || !hod || !phoneNo || !email ? "fill the fields" : "sumbit fields")}>
                <Button
                  variant="contained"
                  color="info"
                  //   component={RouterLink}
                  onClick={handleAddDepartment}
                  disabled={!name || !shortName || !hod || !phoneNo || !email}
                  //   to="#"
                  startIcon={<PublishIcon />}
                >
                  Add
                </Button>
              </Tooltip>
            </span>
          </Stack>
        </Card>
      </Container>
    </Page>
  );
}
