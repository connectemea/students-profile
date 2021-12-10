import { useState,useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
  Card,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PasswordField from "./utils/PasswordField";
import TextInput from "./utils/TextInput";
import SubmitButton from "./utils/SubmitButton";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 400,
  margin: "auto",
  display: "flex",
  minHeight: "80vh",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  padding: theme.spacing(12, 0),
}));

export default function Register() {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [passwordError, setPasswordError] = useState();
  const [confirmPasswordError, setConfirmPasswordError] = useState();

  const validatePasswordLength = () => {
    //password validation for min length
    if (password.length < 5) {
      setPasswordError("Password must contain atleast 5 characters.");
      return true;
    }
    setPasswordError("");
    return false;
  };

  const validatePasswordMatch = () => {
    //checking passwords match
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords must be same.");
      return true;
    }
    setConfirmPasswordError("");
    return false;
  };

  const handleClick = () => {
    const passwordLengthError = validatePasswordLength();
    const passwordMatchError = validatePasswordMatch();
    if (passwordLengthError || passwordMatchError) return;
    console.log(userName, email, password, confirmPassword);
  };

  return (
    <Container>
      <ContentStyle>
        <Card sx={{ p: 3 }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h3" gutterBottom textAlign="center">
              Register
            </Typography>
          </Box>
          <Stack spacing={2}>
            <TextInput
              label="User name"
              type="text"
              value={userName}
              setValue={setUserName}
            />
            <TextInput
              label="Email"
              type="email"
              value={email}
              setValue={setEmail}
            />
            <PasswordField
              label="Password"
              value={password}
              setValue={setPassword}
              errorMessage={passwordError}
            />
            <PasswordField
              label="Confirm Password"
              value={confirmPassword}
              setValue={setConfirmPassword}
              errorMessage={confirmPasswordError}
            />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
              sx={{ my: 2 }}
            >
              <Link component={RouterLink} variant="subtitle2" to="/user/login">
                Already have an account? Login
              </Link>
            </Stack>
            <SubmitButton
              name="Register"
              disabled={
                !userName || !email || !password || !confirmPassword
                  ? true
                  : false
              }
              onClick={handleClick}
            />
          </Stack>
        </Card>
      </ContentStyle>
    </Container>
  );
}
