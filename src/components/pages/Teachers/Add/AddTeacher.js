import { useEffect, useState, useContext } from "react";

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

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import DataTable from "../../../utils/DataTable";

import { TextField } from "@mui/material";

// userService
import userService from "../../../../services/userService";

// Loader
import { loadingContext } from "../../../../context/loadingContext";
import Loader from "../../../utils/Loader";

// table header cell config
const TABLE_HEAD = [
  { id: "username", label: "username", type: "text" },
  { id: "email", label: "email", type: "text" },
  { id: "status", label: "status", type: "userStatusChip" },
];

export default function AddTeacher() {
  const { loaderToggler } = useContext(loadingContext);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [users, setUsers] = useState();
  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  //To clear the user input
  const clearUserCredentials = () => {
    setEmail("");
    setUsername("");
  };

  //To clear the error message
  const clearError = () => setErrorMsg("");

  //get all user (teachers)
  const getUsers = async () => {
    try {
      loaderToggler(true);
      const users = await userService.getUsers("teacher");
      setUsers(users);
      loaderToggler(false);
    } catch (err) {
      console.error(err?.response?.data?.message);
      loaderToggler(false);
    }
  };
  // add new teacher
  const handleAddTeacher = async () => {
    try {
      loaderToggler(true);
      clearError();
      const userData = {
        username,
        email,
        userType: "teacher",
      };
      loaderToggler(false);
      // adding user to db
      await userService.createUser(userData);
      //get user on add
      getUsers();
      // clearing the form
      clearUserCredentials();
    } catch (err) {
      setErrorMsg(err?.response?.data?.message);
      loaderToggler(false);
    }
  };

  useEffect(() => {
    //get all user (teachers)
    const getUsers = async () => {
      try {
        const users = await userService.getUsers("teacher");
        setUsers(users);
      } catch (err) {
        console.error(err?.response?.data?.message);
      }
    };
    getUsers();
  }, []);
  return (
    <Page title="AddTeacher">
      <Container>
        <Loader />
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
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant="p" gutterBottom color="error">
                {errorMsg}
              </Typography>
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
                  onClick={handleAddTeacher}
                  disabled={!username || !email}
                  startIcon={<PublishIcon />}
                >
                  Add
                </Button>
              </span>
            </Tooltip>
          </Stack>
        </Card>
        {users && <DataTable TABLE_DATA={users} TABLE_HEAD={TABLE_HEAD} />}
      </Container>
    </Page>
  );
}
