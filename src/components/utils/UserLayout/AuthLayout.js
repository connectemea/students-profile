import { styled } from "@mui/material/styles";
import { Outlet } from "react-router";
import Logo from "../../../images/AvengersLogo.png";

const HeaderStyle = styled("header")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  paddingTop: theme.spacing(2.5),
  paddingLeft: theme.spacing(2),
}));

const ImageContainer = styled("img")(({ theme }) => ({
  width: "50px",
  
}));

export default function AuthLayout() {
  return (
    <>
      <HeaderStyle>
        <ImageContainer src={Logo} alt="" />
      </HeaderStyle>
      <Outlet />
    </>
  );
}
