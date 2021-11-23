import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack, Link, Card } from "@mui/material";
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
}));

export default function Register() {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleClick = () => {
    console.log(userName, email, password, confirmPassword);
  };

  return (
    <Container>
      <ContentStyle>
        <Card sx={{ p: 4 }}>
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
            />
            <PasswordField
              label="Confirm Password"
              value={confirmPassword}
              setValue={setConfirmPassword}
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
            <SubmitButton name="Register" onClick={handleClick} />
          </Stack>
        </Card>
      </ContentStyle>
    </Container>
  );
}
