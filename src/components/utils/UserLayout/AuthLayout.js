import { styled } from "@mui/material/styles";
import { Outlet } from "react-router";
import Logo from "../../../images/Logo.png";

const RootStyle = styled("div")(({ theme }) => ({
  background: "rgba(3, 141, 254,.15)",
  minHeight: "100vh",
}));
const HeaderStyle = styled("header")(({ theme }) => ({
  width: "100%",
  height:"15vh",
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
    <RootStyle>
      <HeaderStyle>
        <ImageContainer src={Logo} alt="" />
      </HeaderStyle>
      <Outlet />
    </RootStyle>
  );
}
