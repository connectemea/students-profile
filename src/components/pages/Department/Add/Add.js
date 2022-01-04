import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextInput from '../../../utils/Inputs/TextInput';

// material components
import {
  Stack,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  Tooltip
} from "@mui/material";

// material icons
import PublishIcon from "@mui/icons-material/Publish";
import DeleteIcon from '@mui/icons-material/Delete';

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";

//api service
import departmentService from "../../../../services/departmentService"

//export function for add department
export default function Add() {

  const navigate = useNavigate();
  const [name, setName] = useState();
  const [shortName, setshortName] = useState();
  const [hod, setHod] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [email, setEmail] = useState();
  // const handleDptnameChange = (event) => setName(event.target.value);
  // const handleShortNameChange = (event) => setshortName(event.target.value);
  // const handleHodnameChange = (event) => setHod(event.target.value);
  // const handleContactChange = (event) => setPhoneNo(event.target.value);
  // const handleEmailChange = (event) => setEmail(event.target.value);

  //update department
  const { id } = useParams();

  //setState function
  function setState(data) {

    setName(data.name);
    setshortName(data.shortName);
    setHod(data.hod);
    setPhoneNo(data.phoneNo);
    setEmail(data.email);
  }

  useEffect(() => {
    const getDepartment = async () => {
      try {
        // get department data
        const response = await departmentService.getDepartmentData(id);
        setState(response);
        console.log(response);
      } catch (err) {
        console.error(err.response);
      }
    };
    if (id) getDepartment()
  }, [id]);


  //delete department
  const handleDeleteDepartment = async () => {
    console.log("cheythkkn");
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
      const response = await departmentService.deleteDepartment(id);
      navigate("/app/department/list");

    } catch (error) {
      console.log(error.response);

    }
  };

  //add department
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
      if (!id) {
        const response = await departmentService.addDepartment(departmentData);
      } else {
        const response = await departmentService.updateDepartment(id, departmentData);
      }
      // clearing the form
      navigate("/app/department/list");

    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <Page title="Department Data">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Typography variant="h5" gutterBottom>
            Department Data
          </Typography>
        </Stack>
        <Card sx={{ padding: 3, marginBottom: 2 }}>
          <Grid container spacing={1} rowSpacing={1}>
            <Grid item xs={12} sm={6} md={6}>
              <TextInput
                varient="contained"
                name="name"
                label="Department Name"
                color="info"
                fullWidth
                textValue={name}
                setTextValue={setName}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextInput
                varient="contained"
                name="shortName"
                label="Short Form"
                color="info"
                fullWidth
                textValue={shortName}
                setTextValue={setshortName}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextInput
                varient="contained"
                name="hod"
                label="HOD name"
                color="info"
                fullWidth
                textValue={hod}
                setTextValue={setHod}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextInput
                varient="contained"
                name="phoneNo"
                label="phone Number"
                color="info"
                fullWidth
                textValue={phoneNo}
                setTextValue={setPhoneNo}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextInput
                varient="contained"
                name="email"
                label="E-mail"
                color="info"
                fullWidth
                textValue={email}
                setTextValue={setEmail}
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
                  onClick={handleDeleteDepartment}
                  disabled={!name || !shortName || !hod || !phoneNo || !email}
                  startIcon={<DeleteIcon />}>
                  Delete
                </Button>
              </Tooltip>
              <Tooltip title={(!name || !shortName || !hod || !phoneNo || !email ? "fill the fields" : "sumbit fields")}>
                <Button
                  variant="contained"
                  color="info" appap
                  //   component={RouterLink}
                  onClick={handleAddDepartment}
                  disabled={!name || !shortName || !hod || !phoneNo || !email}
                  //   to="#"
                  startIcon={<PublishIcon />}
                >
                  Submit
                </Button>
              </Tooltip>
            </span>
          </Stack>
        </Card>
      </Container>
    </Page>
  );
}
