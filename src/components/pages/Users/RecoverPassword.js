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

  const handleClick = () => {
    console.log( password, confirmPassword);
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
            />
            <PasswordField
              label="Confirm Password"
              value={confirmPassword}
              setValue={setConfirmPassword}
            />

            <SubmitButton name="Submit" onClick={handleClick} />
          </Stack>
        </Card>
      </ContentStyle>
    </Container>
  );
}
