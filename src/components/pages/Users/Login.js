import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Stack,
  TextField,
  Link,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Link as RouterLink } from "react-router-dom";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
}));

export default function Login() {
  return (
    <Container>
      <ContentStyle>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h3" gutterBottom>
            Login
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

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ my: 2 }}
          >
            <Link variant="subtitle2" to="#">
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
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            Login
          </LoadingButton>
        </Stack>
      </ContentStyle>
    </Container>
  );
}
