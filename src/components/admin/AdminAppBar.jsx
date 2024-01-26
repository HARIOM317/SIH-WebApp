import React from "react";

import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const AdminAppBar = ({ handleDrawerToggle, drawerWidth }) => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        style={{ background: "#f2f2fc", color: "#02a06b", textTransform: "uppercase" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            SIH - Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AdminAppBar;
