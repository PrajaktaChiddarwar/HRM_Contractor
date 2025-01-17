import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
// import Typography from '@mui/material/Typography';
import { AdminPanelSettingsSharp, AppRegistrationTwoTone, CalendarMonthOutlined, LoginTwoTone, Person3Outlined, PersonOffRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const drawerWidth = 240;

function ResponsiveDrawer(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  
  const handleLogOut = () => {
    localStorage.clear()
    navigate("/login")
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
          <ListItem disablePadding >
            <ListItemButton>
              <ListItemIcon>
                 <Person3Outlined />
              </ListItemIcon>
              <ListItemText primary="Profile" onClick={()=>(navigate("/"))}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton>
              <ListItemIcon>
                 <CalendarMonthOutlined />
              </ListItemIcon>
              <ListItemText primary="Calender" onClick={()=>{navigate("/calender")}} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton>
              <ListItemIcon>
                 <AdminPanelSettingsSharp />
              </ListItemIcon>
              <ListItemText primary="LogOut" onClick={()=>{handleLogOut()}} />
            </ListItemButton>
          </ListItem>
      </List>
      {/* <Divider /> */}
     
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ backgroundColor: "white" }}>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
