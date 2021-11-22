import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Stack,
  TextField,
  Card,
  Link,
  InputAdornment,
  IconButton,
  Icon,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";


const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 400,
  margin: "auto",
  display: "flex",
  minHeight: "80vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
}));

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <ContentStyle>
        <Card sx={{ p: 4 }}>
          <Box sx={{ mb: 3 }}>
            <Typography textAlign="center" variant="h3" gutterBottom>
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
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Stack
              direction="column"
              alignItems="flex-start"
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
        </Card>
      </ContentStyle>
    </Container>
  );
}
