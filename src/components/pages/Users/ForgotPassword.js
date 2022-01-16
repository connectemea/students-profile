import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Stack, Card } from "@mui/material";
import TextInput from "./utils/TextInput";
import SubmitButton from "./utils/SubmitButton";
import { useNavigate } from "react-router-dom";

import authService from "../../../services/authService";
import Page from "../../utils/Page";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 400,
  margin: "auto",
  display: "flex",
  minHeight: "80vh",
  flexDirection: "column",
  justifyContent: "center",
}));

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [authErrors, setAuthErrors] = useState();

  const clearError = () => setAuthErrors("");

  const handleClick = async () => {
    try {
      clearError();
      const data = {
        username,
        email,
      };
      // logging in user
      const response = await authService.forgotPassword(data);
      navigate(`/user/recover/${response.data.userToken}`);
    } catch (err) {
      console.error(err.response);
      setAuthErrors(err?.response?.data?.message);
    }
  };

  return (
    <Page title="Forgot Password">
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
              value={username}
              setValue={setUserName}
              authErrors={authErrors}
            />
            <TextInput
              label="Email"
              type="email"
              value={email}
              setValue={setEmail}
              authErrors={authErrors}
            />
            <Typography variant="body2">{authErrors && authErrors}</Typography>

            <SubmitButton
              disabled={!username || !email ? true : false}
              name="Submit"
              onClick={handleClick}
            />
          </Stack>
        </Card>
      </ContentStyle>
    </Page>
  );
}
