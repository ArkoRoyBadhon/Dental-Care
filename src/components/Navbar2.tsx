/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Divider,
  Drawer,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Stack,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { styled } from "@mui/system";

const MyDrawer = styled("div")({
  width: 300,
});

const Navbar2 = () => {
  const currentPath = window.location.pathname;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerOpen(open);
    };

  const drawerContent = (
    <MyDrawer sx={{ paddingTop: "20px" }}>
      <Stack paddingLeft="40px">
        <Box display="flex" alignItems="center" gap="10px" paddingBottom="20px">
          <AddIcCallIcon />
          <Box>
            <Typography sx={{ fontSize: "12px" }}>01755434678</Typography>
            <Typography sx={{ fontSize: "10px" }}>
              24/7 Emergency Phone
            </Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap="10px">
          <ManageHistoryIcon />
          <Box>
            <Typography sx={{ fontSize: "12px" }}>Monday-Friday</Typography>
            <Typography sx={{ fontSize: "10px" }}>9AM-9PM</Typography>
          </Box>
        </Box>
      </Stack>
      <Divider sx={{ marginX: "10px", marginTop: "14px" }} />
      <List>
        <ListItemButton component="a" href="/">
          <ListItemText
            sx={{
              fontWeight: "600",
              ...(currentPath === "/"
                ? {
                    textDecoration: "underline",
                    color: "red",
                  }
                : {
                    color: "black",
                  }),
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            primary="Home"
          />
        </ListItemButton>
        <ListItemButton component="a" href="about">
          <ListItemText
            sx={{
              fontWeight: "600",
              ...(currentPath === "/about"
                ? {
                    textDecoration: "underline",
                    color: "red",
                  }
                : {
                    color: "black",
                  }),
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            primary="About"
          />
        </ListItemButton>
        <ListItemButton component="a" href="/services">
          <ListItemText
            sx={{
              fontWeight: "600",
              ...(currentPath === "/services"
                ? {
                    textDecoration: "underline",
                    color: "red",
                  }
                : {
                    color: "black",
                  }),
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            primary="Services"
          />
        </ListItemButton>
        <ListItemButton component="a" href="/office">
          <ListItemText
            sx={{
              fontWeight: "600",
              ...(currentPath === "/office"
                ? {
                    textDecoration: "underline",
                    color: "red",
                  }
                : {
                    color: "black",
                  }),
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            primary="Office Tour"
          />
        </ListItemButton>
        <ListItemButton component="a" href="/blog">
          <ListItemText
            sx={{
              fontWeight: "600",
              ...(currentPath === "/blog"
                ? {
                    textDecoration: "underline",
                    color: "red",
                  }
                : {
                    color: "black",
                  }),
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            primary="Blog"
          />
        </ListItemButton>
      </List>
    </MyDrawer>
  );

  return (
    <Box>
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          paddingX: "60px",
          paddingTop: "14px",
          paddingBottom: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ paddingY: "5px" }}
        >
          <Box>Doctor Care</Box>
          <Box display="flex" gap="15px">
            <Box display="flex" alignItems="center" gap="10px">
              <AddIcCallIcon />
              <Box>
                <Typography sx={{ fontSize: "12px" }}>01755434678</Typography>
                <Typography sx={{ fontSize: "10px" }}>
                  24/7 Emergency Phone
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" gap="10px">
              <ManageHistoryIcon />
              <Box>
                <Typography sx={{ fontSize: "12px" }}>Monday-Friday</Typography>
                <Typography sx={{ fontSize: "10px" }}>9AM-9PM</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ paddingX: "10px", paddingY: "5px" }}
        >
          <Box display="flex" gap="20px">
            <Link
              sx={{
                fontWeight: "600",
                ...(currentPath === "/"
                  ? {
                      textDecoration: "underline",
                      color: "red",
                    }
                  : {
                      color: "black",
                    }),
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              underline="none"
              href="/"
            >
              Home
            </Link>
            <Link
              sx={{
                fontWeight: "600",
                ...(currentPath === "/about"
                  ? {
                      textDecoration: "underline",
                      color: "red",
                    }
                  : {
                      color: "black",
                    }),
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              underline="none"
              href="/about"
            >
              About
            </Link>
            <Link
              sx={{
                fontWeight: "600",
                ...(currentPath === "/services"
                  ? {
                      textDecoration: "underline",
                      color: "red",
                    }
                  : {
                      color: "black",
                    }),
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              underline="none"
              href="/services"
            >
              Services
            </Link>
            <Link
              sx={{
                fontWeight: "600",
                ...(currentPath === "/office"
                  ? {
                      textDecoration: "underline",
                      color: "red",
                    }
                  : {
                      color: "black",
                    }),
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              underline="none"
              href="/services"
            >
              Office Tour
            </Link>
            <Link
              sx={{
                fontWeight: "600",
                ...(currentPath === "/blog"
                  ? {
                      textDecoration: "underline",
                      color: "red",
                    }
                  : {
                      color: "black",
                    }),
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              underline="none"
              href="/services"
            >
              Blog
            </Link>
            <Link
              sx={{
                fontWeight: "600",
                ...(currentPath === "/blog"
                  ? {
                      textDecoration: "underline",
                      color: "red",
                    }
                  : {
                      color: "black",
                    }),
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              underline="none"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Box>
              <FacebookIcon />
              <MailIcon />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Link
                sx={{
                  fontWeight: "600",
                  ...(currentPath === "/blog"
                    ? {
                        textDecoration: "underline",
                        color: "red",
                      }
                    : {
                        color: "black",
                      }),
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
                underline="none"
                href="/register"
              >
                Register
              </Link>
              <Link
                sx={{
                  fontWeight: "600",
                  ...(currentPath === "/blog"
                    ? {
                        textDecoration: "underline",
                        color: "red",
                      }
                    : {
                        color: "black",
                      }),
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
                underline="none"
                href="/login"
              >
                Login
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          paddingY: "20px",
          paddingX: "20px",
          display: {
            xs: "flex",
            sm: "flex",
            md: "none",
          },
          alignItems: {
            xs: "center",
            sm: "center",
          },
          gap: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <MenuIcon
          color="inherit"
          onClick={toggleDrawer(true)}
          aria-label="menu"
        />
        <Box>Doctor Care</Box>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerContent}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar2;
