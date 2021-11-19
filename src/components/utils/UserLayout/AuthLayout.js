import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router";

const HeaderStyle = styled("header")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

export default function AuthLayout() {
  return (
    <>
      <HeaderStyle>
        <h1>Logo</h1>
      </HeaderStyle>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
}
