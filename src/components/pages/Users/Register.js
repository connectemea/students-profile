import { styled } from "@mui/material/styles";
import { Box, Link, Container, Typography } from "@mui/material";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
}));

export default function Register() {
  return (
    <Container>
      <ContentStyle>
        <Box sx={{ mb: 5 }}>
          <Typography variant="h4" gutterBottom>
            Get started absolutely free.
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Free forever. No credit card needed.
          </Typography>
        </Box>

        {/* <RegisterForm /> */}

        <Typography
          variant="body2"
          align="center"
          sx={{ color: "text.secondary", mt: 3 }}
        >
          By registering, I agree to Minimal&nbsp;
          <Link underline="always" sx={{ color: "text.primary" }}>
            Terms of Service
          </Link>
          &nbsp;and&nbsp;
          <Link underline="always" sx={{ color: "text.primary" }}>
            Privacy Policy
          </Link>
          .
        </Typography>
      </ContentStyle>
    </Container>
  );
}
