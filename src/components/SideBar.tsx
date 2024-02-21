import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import PeopleIcon from "@mui/icons-material/People";
import InsightsIcon from "@mui/icons-material/Insights";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Avatar, Box, Icon, Badge } from "@mui/material";
import AgentPic from "../assets/AgentPic.jpg";
const drawerWidth = 240;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

type Props = {
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  selected: String;
};
export default function SideBar(props: Props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      PaperProps={{ sx: { backgroundColor: "#1E4D91", color: "white" } }}
    >
      <DrawerHeader sx={{ textAlign: "center", color: "white" }}>
        {!open ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{ marginLeft: "4.5px" }}
          >
            <Icon>
              <img src={require("../assets/logo.png")} alt="logo"></img>
            </Icon>
          </IconButton>
        ) : (
          <IconButton onClick={handleDrawerClose} color="inherit">
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        )}
      </DrawerHeader>
      <Divider />
      <Box className="h-[100vh] flex flex-col justify-between">
        <List>
          {[
            {
              label: "Conversations",
              name: "conv",
              icon: <InboxIcon></InboxIcon>,
            },
            {
              label: "People",
              name: "people",
              icon: <PeopleIcon />,
            },
            {
              label: "Insights",
              name: "insights",
              icon: <InsightsIcon />,
            },
          ].map((obj, index) => (
            <ListItem
              key={obj.name}
              disablePadding
              sx={{
                display: "block",
                backgroundColor:
                  props.selected === obj.name ? "white" : "inherit",
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => {
                  props.setSelected(obj.name);
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: props.selected === obj.name ? "#1E4D91" : "inherit",
                  }}
                >
                  {obj.icon}
                </ListItemIcon>
                <ListItemText
                  primary={obj.label}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: props.selected === obj.name ? "#1E4D91" : "inherit",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          <ListItem className="mb-4">
            <ListItemIcon>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar src={AgentPic}></Avatar>
              </StyledBadge>
            </ListItemIcon>
            <ListItemText
              primary={"Richard panel"}
              sx={{
                opacity: open ? 1 : 0,
                color: "inherit",
              }}
            />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
