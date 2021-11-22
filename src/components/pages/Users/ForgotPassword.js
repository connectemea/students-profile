import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Stack,
  Card,
  TextField,
//   Link,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// import { Link as RouterLink } from "react-router-dom";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 400,
  margin: "auto",
  display: "flex",
  minHeight: "80vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
}));

export default function ForgotPassword() {
  return (
    <div>
      <Container>
        <ContentStyle>
        <Card sx={{ p: 5 }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h3" gutterBottom>
              Forgot Password
            </Typography>
          </Box>
          <Stack spacing={2}>
            <TextField
              fullWidth
              autoComplete="username"
              type="username"
              label="Username"
            />
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Email address"
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
          </Card>
        </ContentStyle>
      </Container>
    </div>
  );
}
