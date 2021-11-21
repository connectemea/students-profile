import { styled } from "@mui/material/styles";
import { Outlet } from "react-router";

const HeaderStyle = styled("header")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  paddingTop: "20px",
  paddingLeft: "40px",
}));

export default function AuthLayout() {
  return (
    <>
      <HeaderStyle>
        <h1>Logo</h1>
      </HeaderStyle>
      <Outlet />
    </>
  );
}
