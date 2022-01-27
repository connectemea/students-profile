import { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { alpha } from "@mui/material/styles";
import {
  Button,
  Box,
  Divider,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import MenuPopover from "./MenuPopover";
import { profileContext } from "../../../context/profileContext";
import BACKEND_URL from "../../../constants/BACKEND_URL";

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { profile, setProfile } = useContext(profileContext);
  const navigate = useNavigate();

  // handle account popover open
  const handleOpen = () => {
    setOpen(true);
  };

  //handle account popover close
  const handleClose = () => {
    setOpen(false);
  };
  const logoutHandler = () => {
    localStorage.removeItem("token");
    setProfile(null);
    navigate("/user/login");
    // window.location.reload();
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            },
          }),
        }}
      >
        <Avatar
          src={`${BACKEND_URL.BASE_URL}upload/${profile?.profileImage}`}
          alt={profile && profile.username.toUpperCase()}
        />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography
            variant="subtitle1"
            noWrap
            sx={{ textTransform: "capitalize" }}
          >
            {profile && profile.username}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {profile && profile.email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button
            fullWidth
            color="inherit"
            variant="outlined"
            onClick={logoutHandler}
          >
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}
