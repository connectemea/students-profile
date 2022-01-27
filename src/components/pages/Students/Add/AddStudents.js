import { useEffect, useState, useContext } from "react";
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

//loading
import { loadingContext } from "../../../../context/loadingContext";
import Loader from "../../../utils/Loader";

//importing the user service
import userService from "../../../../services/userService";

// table header cell config
const TABLE_HEAD = [
  { id: "username", label: "Name", type: "text" },
  { id: "email", label: "Company", type: "text" },
  { id: "status", label: "status", type: "userStatusChip" },
];

export default function AddStudent() {
  const { loaderToggler } = useContext(loadingContext);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [users, setUsers] = useState();
  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const clearError = () => setErrorMsg("");
  useEffect(() => {
    const getUsers = async () => {
      try {
        loaderToggler(true);
        const users = await userService.getUsers();
        setUsers(users);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getUsers();
  }, []);

  //get users
  const getUsers = async () => {
    try {
      loaderToggler(true);
      const users = await userService.getUsers();
      setUsers(users);
      loaderToggler(false);
    } catch (err) {
      console.error(err?.response?.data?.message);
      loaderToggler(false);
    }
  };
  const handleAddStudent = async () => {
    try {
      clearError();
      loaderToggler(true);
      const userData = {
        username,
        email,
        userType: "student",
      };
      // adding user to db
      await userService.createUser(userData);
      getUsers();
      // clearing the form
      clearUserCredentials();
      loaderToggler(false);
    } catch (err) {
      setErrorMsg(err?.response?.data?.message);
      loaderToggler(false);
    }
  };

  // clearing the form
  const clearUserCredentials = () => {
    setUsername("");
    setEmail("");
  };
  return (
    <Page title="AddStudent">
      <Container>
        <Loader />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Typography variant="h5" gutterBottom>
            Add Student
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
                error={errorMsg}
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
                error={errorMsg}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant="body1" gutterBottom color="error">
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
                  onClick={handleAddStudent}
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
