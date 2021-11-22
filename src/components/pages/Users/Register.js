import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Stack,
  TextField,
  Link,
  Card,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Link as RouterLink } from "react-router-dom";

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
  return (
    <Container>
      <ContentStyle>
        <Card  sx={{ p: 4 }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h3" gutterBottom textAlign="center">
              Register
            </Typography>
          </Box>
          <Stack spacing={2}>
            <TextField
              fullWidth
              autoComplete="username"
              type="text"
              label="User name"
            />
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
            <TextField
              fullWidth
              autoComplete="username"
              type="password"
              label="Confirm password"
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
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Register
            </LoadingButton>
          </Stack>
        </Card>
      </ContentStyle>
    </Container>
  );
}
