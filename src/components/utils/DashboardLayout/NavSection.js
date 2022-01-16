import { useState } from "react";
import PropTypes from "prop-types";
// routes component
import {
  NavLink as RouterLink,
  matchPath,
  useLocation,
} from "react-router-dom";
// icons in material
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// material ui compoenents
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  List,
  Collapse,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import USER_TYPE from "../../../constants/USER_TYPE";

// custom styled listItem
const ListItemStyle = styled((props) => (
  <ListItemButton disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.text.secondary,
  "&:before": {
    top: 0,
    right: 0,
    width: 3,
    bottom: 0,
    content: "''",
    display: "none",
    position: "absolute",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: theme.palette.info.main,
  },
}));

//icon container component
const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

//props data structure
NavItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.func,
};

//nav item component
function NavItem({ item, active }) {
  const theme = useTheme();
  const isActiveRoot = active(item.path);
  const { title, path, info, children } = item;
  const Icon = item.icon;
  const [open, setOpen] = useState(isActiveRoot);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  //active nav item styles
  const activeRootStyle = {
    color: "info.main",
    fontWeight: "fontWeightMedium",
    bgcolor: alpha(
      theme.palette.info.main,
      theme.palette.action.selectedOpacity
    ),
    "&:before": { display: "block" },
  };
  //default nav item style
  const activeSubStyle = {
    color: "text.info",
    fontWeight: "fontWeightMedium",
  };

  if (children) {
    return (
      <>
        <ListItemStyle
          onClick={handleOpen}
          sx={{
            ...(isActiveRoot && activeRootStyle),
          }}
        >
          <ListItemIconStyle>{Icon && <Icon />}</ListItemIconStyle>
          <ListItemText disableTypography primary={title} />
          {info && info}
          <Box
            icon={open ? KeyboardArrowDownIcon : ArrowForwardIosIcon}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemStyle>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((item) => {
              const { title, path } = item;
              const isActiveSub = active(path);
              return (
                <ListItemStyle
                  key={title}
                  component={RouterLink}
                  to={path}
                  sx={{
                    ...(isActiveSub && activeSubStyle),
                  }}
                >
                  <ListItemIconStyle>
                    <Box
                      component="span"
                      sx={{
                        width: 4,
                        height: 4,
                        display: "flex",
                        borderRadius: "50%",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "text.disabled",
                        transition: (theme) =>
                          theme.transitions.create("transform"),
                        ...(isActiveSub && {
                          transform: "scale(2)",
                          bgcolor: "info.main",
                        }),
                      }}
                    />
                  </ListItemIconStyle>
                  <ListItemText disableTypography primary={title} />
                </ListItemStyle>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle),
      }}
    >
      <ListItemIconStyle>{Icon && <Icon />}</ListItemIconStyle>
      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemStyle>
  );
}

//nav section props type
NavSection.propTypes = {
  navConfig: PropTypes.array,
};

//nav section components
export default function NavSection({ navConfig, profile, ...other }) {
  // pathname in useLocation component
  const { pathname } = useLocation();

  //To user presidence
  const checkUserHavePermission = (permitedUser, givenUser) =>
    Object.keys(USER_TYPE).includes(givenUser) &&
    USER_TYPE[givenUser] >= USER_TYPE[permitedUser]
      ? true
      : false;
  //To match current url and nav url
  const match = (path) =>
    path ? !!matchPath({ path, end: false }, pathname) : false;

  return (
    <Box {...other}>
      <List disablePadding>
        {/* nav item component to map through navlink */}
        {navConfig.map((item) =>
          checkUserHavePermission(item.permittedUser, profile.userType) ? (
            <NavItem key={item.title} item={item} active={match} />
          ) : null
        )}
      </List>
    </Box>
  );
}
