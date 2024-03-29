import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextInput from "../../../utils/Inputs/TextInput";

// material components
import {
  Stack,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  Tooltip,
} from "@mui/material";

// material icons
import PublishIcon from "@mui/icons-material/Publish";
import DeleteIcon from "@mui/icons-material/Delete";

//loading
import { loadingContext } from "../../../../context/loadingContext";
import Loader from "../../../utils/Loader";
// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";

//api service
import departmentService from "../../../../services/departmentService";

//export function for add department
export default function Add() {
  const { loaderToggler } = useContext(loadingContext);
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [shortName, setshortName] = useState();
  const [hod, setHod] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [email, setEmail] = useState();

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
        loaderToggler(true);
        // get department data
        const response = await departmentService.getDepartmentData(id);
        setState(response);
        loaderToggler(false);
      } catch (err) {
        console.error(err.response);
        loaderToggler(false);
      }
    };
    if (id) getDepartment();
  }, [id]);

  //delete department
  const handleDeleteDepartment = async () => {
    try {
      loaderToggler(true);
      await departmentService.deleteDepartment(id);
      navigate("/app/department/list");
      loaderToggler(false);
    } catch (error) {
      console.error(error.response);
      loaderToggler(false);
    }
  };

  //add department
  const handleAddDepartment = async () => {
    try {
      loaderToggler(true);
      const departmentData = {
        departmentDetails: {
          name,
          shortName,
          hod,
          phoneNo,
          email,
        },
      };
      // adding department to db
      if (!id) {
        await departmentService.addDepartment(departmentData);
      } else {
        await departmentService.updateDepartment(id, departmentData);
      }
      // clearing the form
      navigate("/app/department/list");
      loaderToggler(false);
    } catch (err) {
      console.error(err.response);
      loaderToggler(false);
    }
  };

  return (
    <Page title="Department Data">
      <Container>
        <Loader />
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
              {id && (
                <Tooltip
                  title={
                    !name || !shortName || !hod || !phoneNo || !email
                      ? "Add Department"
                      : "Delete Department"
                  }
                >
                  <Button
                    variant="outlined"
                    color="info"
                    style={{ margin: "5px" }}
                    onClick={handleDeleteDepartment}
                    disabled={!name || !shortName || !hod || !phoneNo || !email}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </Tooltip>
              )}
              <Tooltip
                title={
                  !name || !shortName || !hod || !phoneNo || !email
                    ? "fill the fields"
                    : "sumbit fields"
                }
              >
                <Button
                  variant="contained"
                  color="info"
                  appap
                  onClick={handleAddDepartment}
                  disabled={!name || !shortName || !hod || !phoneNo || !email}
                  startIcon={<PublishIcon />}
                >
                  {id ? "update" : "Submit"}
                </Button>
              </Tooltip>
            </span>
          </Stack>
        </Card>
      </Container>
    </Page>
  );
}
