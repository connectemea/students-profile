import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack, Card, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Navigate, useNavigate } from "react-router";
import PasswordField from "./utils/PasswordField";
import TextInput from "./utils/TextInput";
import SubmitButton from "./utils/SubmitButton";

//importing the user service
import authService from "../../../services/authService";

//importing LocalKey
import LOCAL_KEYS from "../../../constants/LOCAL_KEY";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 400,
  margin: "auto",
  display: "flex",
  minHeight: "80vh",
  flexDirection: "column",
  justifyContent: "center",
}));

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [authErrors, setAuthErrors] = useState();

  const clearError = () => setAuthErrors("");

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
      localStorage.setItem(LOCAL_KEYS.AUTH_TOKEN, response.data.userToken);
    } catch (err) {
      setAuthErrors(err?.response?.data?.message);
    }
  };

  return (
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
  );
}
