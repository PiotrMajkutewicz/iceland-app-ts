import Box from "@mui/material/Box";
import {
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import PublicOutlined from "@mui/icons-material/PublicOutlined";
import LocalGasStationOutlined from "@mui/icons-material/LocalGasStationOutlined";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "context/ThemeContext";
import { useEffect } from "react";

const drawerWidth = 240;
const listItems: { name: string; icon: any; to: string }[] = [
  {
    name: "Licence Plates",
    icon: <InboxIcon />,
    to: "/licence-plates",
  },
  {
    name: "Earthquakes",
    icon: <PublicOutlined />,
    to: "/earthquakes",
  },
  {
    name: "Petrol",
    icon: <LocalGasStationOutlined />,
    to: "/petrol",
  },
];

const ClippedDrawer = ({ appName = "App" }) => {
  const { theme, toggleTheme } = useTheme();

  console.log(theme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "inherit", flexGrow: 1 }}
          >
            <Typography variant="h6" noWrap component="div">
              {appName}
            </Typography>
          </Link>
          <Switch
            color="warning"
            onChange={toggleTheme}
            checked={theme === "light" ? false : true}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {listItems.map(({ name, icon, to }) => (
              <NavLink
                to={to}
                key={name}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "#1976d2" : "inherit",
                  width: "100%",
                })}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={name}></ListItemText>
                  </ListItemButton>
                </ListItem>
              </NavLink>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default ClippedDrawer;
