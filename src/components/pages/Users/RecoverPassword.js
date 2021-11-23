import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack, Card } from "@mui/material";
import PasswordField from "./utils/PasswordField";
import SubmitButton from "./utils/SubmitButton";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 400,
  margin: "auto",
  display: "flex",
  minHeight: "80vh",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
}));

export default function Register() {
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
    console.log(password, confirmPassword);
  };

  return (
    <Container>
      <ContentStyle>
        <Card sx={{ p: 4 }}>
          <Box sx={{ mb: 3 }}>
            <Typography textAlign="center" variant="h3" gutterBottom>
              Recover Password
            </Typography>
          </Box>
          <Stack spacing={2}>
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

            <SubmitButton name="Submit" onClick={handleClick} />
          </Stack>
        </Card>
      </ContentStyle>
    </Container>
  );
}
