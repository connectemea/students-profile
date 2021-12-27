import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack, Card } from "@mui/material";
import TextInput from "./utils/TextInput";
import SubmitButton from "./utils/SubmitButton";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 400,
  margin: "auto",
  display: "flex",
  minHeight: "80vh",
  flexDirection: "column",
  justifyContent: "center",
}));

export default function ForgotPassword() {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();

  const handleClick = () => console.log(userName, email);

  return (
      <ContentStyle>
        <Card sx={{ p: 5 }}>
          <Box sx={{ mb: 3 }}>
            <Typography textAlign="center" variant="h3" gutterBottom>
              Forgot Password
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

            <SubmitButton
              disabled={!userName || !email ? true : false}
              name="Submit"
              onClick={handleClick}
            />
          </Stack>
        </Card>
      </ContentStyle>
  );
}
