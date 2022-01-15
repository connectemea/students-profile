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
import avatar from "../../../images/avatar.jpg";
import { profileContext } from "../../../context/profileContext";

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { profile } = useContext(profileContext);
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
    navigate("/user/login");
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
        <Avatar src={avatar} alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {profile && profile.username}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {profile && profile.email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {/* {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: "body2", py: 1, px: 2.5 }}
          >
            <Box
              // component={Icon}
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24,
              }}
            />

            {option.label}
          </MenuItem>
        ))} */}

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
