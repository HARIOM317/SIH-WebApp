import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";

import AdminDrawer from "../../components/admin/AdminDrawer";
import AdminAppBar from "../../components/admin/AdminAppBar";
import DrawerBox from "../../components/admin/DrawerBox";
import AdminProblemStatements from "../../components/admin/AdminProblemStatements";

const drawerWidth = 240;
const pageID = 1;

function PSAdmin(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const navigate = useNavigate();

  const drawer = <AdminDrawer navigate={navigate} pageID={pageID} />;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AdminAppBar
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />

      <DrawerBox
        drawerWidth={drawerWidth}
        container={container}
        mobileOpen={mobileOpen}
        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        handleDrawerClose={handleDrawerClose}
        drawer={drawer}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <>
          <AdminProblemStatements />
        </>
      </Box>
    </Box>
  );
}

PSAdmin.propTypes = {
  window: PropTypes.func,
};

export default PSAdmin;
