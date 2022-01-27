import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Box, Button, Typography, Container } from "@mui/material";
// components
import { MotionContainer, varBounceIn } from "../utils/animate";
import Page from "../utils/Page";
import icon from "../../images/pageNotFound.svg";

const RootStyle = styled(Page)(({ theme }) => ({
  display: "flex",
  minHeight: "100%",
  alignItems: "center",
  background: "rgb(217, 238, 255)",
}));
export default function PageNotFound() {
  return (
    <RootStyle title="404 Page Not Found | Minimal-UI">
      <Container>
        <MotionContainer initial="initial" open>
          <motion.div variants={varBounceIn}>
            <Box
              component="img"
              src={icon}
              sx={{ height: 260, margin: "auto" }}
            />
          </motion.div>
          <Box
            sx={{
              maxWidth: 480,
              mx: "auto",
              my: { xs: 5, sm: 10 },
              textAlign: "center",
            }}
          >
            <motion.div variants={varBounceIn}>
              <Typography variant="h3" paragraph>
                Sorry, page not found!
              </Typography>
            </motion.div>
            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              Sorry, we couldn’t find the page you’re looking for. Perhaps
              you’ve mistyped the URL? Be sure to check your spelling.
            </Typography>

            <Button
              to="/user/login"
              size="large"
              variant="contained"
              component={RouterLink}
            >
              Go to Login
            </Button>
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
}
