import { useEffect, useState } from "react";
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

//importing the user service
import userService from "../../../../services/userService";

// table header cell config
const TABLE_HEAD = [
  { id: "username", label: "Name", type: "text" },
  { id: "email", label: "Company", type: "text" },
  { id: "status", label: "status", type: "userStatusChip" },
];

const TABLE_DATA = [
  {
    id: "134doojon",
    username: "Aseel",
    email: "aseelhacker@microsoft.com",
    status: "registered",
  },
  {
    id: "ounr34343",
    username: "Noof",
    email: "noof@google.com",
    status: "created",
  },
  {
    id: "343433ojnn",
    username: "Nahyan",
    email: "nahyan@facebook.com",
    status: "filled",
  },
  {
    id: "eonkn2434",
    username: "Dilshad",
    email: "dilshad@amazon.com",
    status: "created",
  },
];

export default function AddStudent() {
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
        const users = await userService.getUsers();
        console.log(users);
        setUsers(users);
      } catch (err) {
        console.error(err?.response?.data?.message);
      }
    };
    getUsers();
  }, []);

  const handleAddStudent = async () => {
    try {
      clearError();
      const userData = {
        username,
        email,
        userType: "student",
      };
      // adding user to db
      await userService.createUser(userData);
      // clearing the form
      clearUserCredentials();
    } catch (err) {
      setErrorMsg(err?.response?.data?.message);
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
