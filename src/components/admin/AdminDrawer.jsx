import React from "react";
import {
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Home, Code, Groups, HowToReg, Message, Logout } from "@mui/icons-material";

const AdminDrawer = ({ navigate, pageID }) => {
  return (
    <>
      <div>
        <Toolbar style={{ background: "#f2f2fc" }} >
          <img src="./images/logo.png" alt="Logo" width={50} />
        </Toolbar>
        <Divider />
        <List>
          <ListItem disablePadding onClick={() => navigate("/admin")}>
            <ListItemButton>
              <ListItemIcon>
                <Home
                  style={
                    pageID === 0 ? { color: "#02a06b" } : { color: "#58567c" }
                  }
                />
              </ListItemIcon>
              <ListItemText
                style={
                  pageID === 0 ? { color: "#02a06b" } : { color: "#58567c" }
                }
              >
                Home
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => navigate("/ps-admin")}>
            <ListItemButton>
              <ListItemIcon>
                <Code
                  style={
                    pageID === 1 ? { color: "#02a06b" } : { color: "#58567c" }
                  }
                />
              </ListItemIcon>
              <ListItemText
                style={
                  pageID === 1 ? { color: "#02a06b" } : { color: "#58567c" }
                }
              >
                Problem Statements
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            onClick={() => navigate("/registered teams")}
          >
            <ListItemButton>
              <ListItemIcon>
                <Groups
                  style={
                    pageID === 2 ? { color: "#02a06b" } : { color: "#58567c" }
                  }
                />
              </ListItemIcon>
              <ListItemText
                style={
                  pageID === 2 ? { color: "#02a06b" } : { color: "#58567c" }
                }
              >
                Registered Teams
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => navigate("/selected teams")}>
            <ListItemButton>
              <ListItemIcon>
                <HowToReg
                  style={
                    pageID === 3 ? { color: "#02a06b" } : { color: "#58567c" }
                  }
                />
              </ListItemIcon>
              <ListItemText
                style={
                  pageID === 3 ? { color: "#02a06b" } : { color: "#58567c" }
                }
              >
                Selected Teams
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => navigate("/user-messages")}>
            <ListItemButton>
              <ListItemIcon>
                <Message
                  style={
                    pageID === 4 ? { color: "#02a06b" } : { color: "#58567c" }
                  }
                />
              </ListItemIcon>
              <ListItemText
                style={
                  pageID === 4 ? { color: "#02a06b" } : { color: "#58567c" }
                }
              >
                Contacts
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Logout
                  style={
                    pageID === 5 ? { color: "#02a06b" } : { color: "#58567c" }
                  }
                />
              </ListItemIcon>
              <ListItemText
                style={
                  pageID === 5 ? { color: "#02a06b" } : { color: "#58567c" }
                }
              >
                Logout
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default AdminDrawer;
