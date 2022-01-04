import { useState, useEffect, useContext } from "react";
// To create special styled components
import { styled } from "@mui/material/styles";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSideBar";
import { Outlet } from "react-router";

import LOCAL_KEYS from "../../../constants/LOCAL_KEY";
//importing user service
import UserService from "../../../services/userService";
//importing profile context
import { profileContext } from "../../../context/profileContext";

// padding count in pc and lap
const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

// root style for material container wrapper
const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

// main container wrapper
const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// index render this components
export default function DashboardLayout() {
  const { profile, setProfile } = useContext(profileContext);
  //state for controlling sidebar open and close
  const [open, setOpen] = useState(false);
  useEffect(() => {
    async function getUserProfile() {
      try {
        const profile = await UserService.getProfile();
        setProfile(profile);
      } catch (err) {
        console.log(err.response);
      }
    }
    if (!profile) getUserProfile();
  }, []);

  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      <DashboardSidebar
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
      />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
