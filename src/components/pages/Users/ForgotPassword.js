import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Stack,
  TextField,
//   Link,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// import { Link as RouterLink } from "react-router-dom";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
}));

export default function ForgotPassword() {
  return (
    <div>
      <Container>
        <ContentStyle>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h3" gutterBottom>
              Forgot Password
            </Typography>
          </Box>
          <Stack spacing={2}>
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Email address"
            />
            <TextField
              fullWidth
              autoComplete="username"
              type="password"
              label="Password"
            />

            
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Submit
            </LoadingButton>
          </Stack>
        </ContentStyle>
      </Container>
    </div>
  );
}
