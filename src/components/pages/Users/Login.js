import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack, Card, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PasswordField from "./utils/PasswordField";
import TextInput from "./utils/TextInput";
import SubmitButton from "./utils/SubmitButton";
import { useNavigate } from "react-router-dom";
//services
import authService from "../../../services/authService";
//constants
import LOCAL_KEYS from "../../../constants/LOCAL_KEY";
//context
import Page from "../../utils/Page";
const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 400,
  margin: "auto",
  display: "flex",
  minHeight: "80vh",
  flexDirection: "column",
  justifyContent: "center",
}));

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [authErrors, setAuthErrors] = useState();

  const clearError = () => setAuthErrors("");

  const redirectionHandler = (type, status) => {
    if (type === "admin") return navigate("/app");
    if (type === "teacher" && status === "filled") {
      return navigate("/app/teacher/view/me");
    } else if (type === "teacher") {
      return navigate("/teacher/details");
    }
    if (type === "student" && status === "filled") {
      return navigate("/app/student/view/me");
    } else if ((type = "student")) {
      return navigate("/student/details");
    }
  };
  const handleClick = async () => {
    try {
      clearError();
      const loginCredentials = {
        email,
        password,
      };
      // logging in user
      const response = await authService.loginUser(loginCredentials);
      //storing token in localStorage
      localStorage.setItem(LOCAL_KEYS.AUTH_TOKEN, response.data.token);
      redirectionHandler(response.data.type, response.data.status);
    } catch (err) {
      setAuthErrors(err?.response?.data?.message);
    }
  };

  return (
    <Page title="Login">
      <Container>
        <ContentStyle>
          <Card sx={{ p: 3 }}>
            <Box sx={{ mb: 3 }}>
              <Typography textAlign="center" variant="h3" gutterBottom>
                Login
              </Typography>
            </Box>
            <Stack spacing={2}>
              <TextInput
                label="Email"
                type="email"
                value={email}
                setValue={setEmail}
                authErrors={authErrors}
              />
              <PasswordField
                label="Password"
                value={password}
                setValue={setPassword}
                authErrors={authErrors}
                showError
              />

              <Stack
                direction="column"
                alignItems="flex-start"
                justifyContent="space-between"
                sx={{ my: 2 }}
              >
                <Link
                  component={RouterLink}
                  variant="subtitle2"
                  to="/user/forgot"
                >
                  Forgot password
                </Link>

                <Link
                  component={RouterLink}
                  variant="subtitle2"
                  to="/user/register"
                >
                  Don’t have an account? Register
                </Link>
              </Stack>
              <SubmitButton
                disabled={!email || !password ? true : false}
                name="Login"
                onClick={handleClick}
              />
            </Stack>
          </Card>
        </ContentStyle>
      </Container>
    </Page>
  );
}
