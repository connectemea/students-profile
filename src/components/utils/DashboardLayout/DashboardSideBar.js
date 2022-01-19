import PropTypes from "prop-types";
import { useEffect, useContext } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
// material ui predefined components
import { styled } from "@mui/material/styles";
import { Box, Drawer, Link, Avatar, Typography } from "@mui/material";
// custom components
import Scrollbar from "../Scrollbar";
import NavSection from "./NavSection";
import { MHidden } from "../../@material-extent";
import NavConfig from "./NavConfig";
import Logo from "../../../images/Logo.png";
import { profileContext } from "../../../context/profileContext";
import BACKEND_URL from "../../../constants/BACKEND_URL";

// drawer width for mobile devices
const DRAWER_WIDTH = 280;

// root container style
const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

// profile card styel
const AccountStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[200],
}));

// dashboard props structure
DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();
  const { profile } = useContext(profileContext);

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ px: 2.5, py: 3 }}>
        <Box component={"img"} src={Logo} sx={{ width: 40, height: 40 }} />
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        {profile && (
          <Link
            underline="none"
            component={RouterLink}
            to={`/app/${
              profile.userType === "student"
                ? "student/view/me"
                : profile.userType === "admin"
                ? "home"
                : "teacher/view/me"
            }`}
          >
            <AccountStyle>
              <Avatar
                src={`${BACKEND_URL.BASE_URL}upload/${profile?.profileImage}`}
                alt={profile && profile.username.toUpperCase()}
              />
              <Box sx={{ ml: 2 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "text.primary", textTransform: "capitalize" }}
                >
                  {profile && profile.username}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", textTransform: "capitalize" }}
                >
                  {profile && profile.userType}
                </Typography>
              </Box>
            </AccountStyle>
          </Link>
        )}
      </Box>

      {profile && <NavSection navConfig={NavConfig} profile={profile} />}

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: "background.default",
            },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
