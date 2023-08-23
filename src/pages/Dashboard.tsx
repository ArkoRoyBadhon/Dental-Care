/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Inbox, Drafts } from "@mui/icons-material";
import { dashboardItem } from "../components/Dashboard/DashboardItem";
import React, { useState } from "react";

const Dashboard = () => {
  const [val, setVal] = useState(1);
  const filtered = dashboardItem.filter(
    (item: { id: number; item: any }) => item.id === val
  );

  return (
    <Box
      sx={{
        paddingX: "60px",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          paddingTop: "14px",
          height: "100%",
        }}
      >
        <Box flex={1}>
          <List
            sx={
              {
                //   position: "fixed",
              }
            }
          >
            <ListItem disablePadding>
              <ListItemButton onClick={() => setVal(1)}>
                <ListItemIcon>
                  <Inbox />
                </ListItemIcon>
                <ListItemText primary="Service" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setVal(2)}>
                <ListItemIcon>
                  <Drafts />
                </ListItemIcon>
                <ListItemText primary="Blog" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setVal(3)}>
                <ListItemIcon>
                  <Drafts />
                </ListItemIcon>
                <ListItemText primary="Phone/Time" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setVal(4)}>
                <ListItemIcon>
                  <Drafts />
                </ListItemIcon>
                <ListItemText primary="Office Tour" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setVal(5)}>
                <ListItemIcon>
                  <Drafts />
                </ListItemIcon>
                <ListItemText primary="About Page" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Box
          flex={4}
          sx={{
            borderLeft: "4px solid #808080",
            height: "100%",
            backgroundColor: "skyblue",
          }}
        >
          {filtered.map((item) => {
            return <div key={item.id}>{item.item}</div>;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
