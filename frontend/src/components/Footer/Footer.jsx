import React from "react";
import {
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <Stack
      id="footer"
      className="footer"
      direction="column"
      sx={{
        backgroundColor: "#323232",
        padding: "20px 8vw",

        paddingTop: "50px",
        color: "#d9d9d9",
        fontFamily: "inherit",
        mt: "50px",
      }}
    >
      <Stack
        className="footer-content"
        direction={{ xs: "column", sm: "row", lg: "row", md: "column" }}
        justifyContent="space-between"
        justifyItems="center"
        sx={{
          width: "100%",
          // display: "grid",
          // gridTemplateColumns: "2fr 1fr 1fr",
          gridTemplateRows: "auto",
          gap: "80px",
        }}
      >
        {/* Right Section */}
        <Stack
          className="footer-content-left"
          spacing={4}
          alignItems={"flex-start"}
          sx={{ minWidth: "250px" }}
        >
          <Box
            component="img"
            src={assets.logo}
            alt="Logo"
            sx={{ width: "120px" }}
          />
          <Typography variant="body2" sx={{ fontSize: "16px" }}>
            Tomato makes ordering food effortless by connecting you with
            top-rated restaurants and hidden local gems. From quick bites to
            full meals, we deliver fresh, delicious food right to your door.
            With real-time tracking and reliable service, Tomato brings taste
            and convenience together in every order.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Box
              component="img"
              src={assets.facebook_icon}
              alt="Facebook"
              sx={{ width: "40px", cursor: "pointer" }}
            />
            <Box
              component="img"
              src={assets.linkedin_icon}
              alt="LinkedIn"
              sx={{ width: "40px", cursor: "pointer" }}
            />
            <Box
              component="img"
              src={assets.twitter_icon}
              alt="Twitter"
              sx={{ width: "40px", cursor: "pointer" }}
            />
          </Stack>
        </Stack>

        {/* Center Section */}
        <Stack
          className="footer-content-center"
          spacing={2}
          alignItems={"flex-start"}
          sx={{ flex: 1, minWidth: "200px" }}
        >
          <Typography variant="h5" color="white">
            Company
          </Typography>
          <List sx={{ padding: 0, cursor: "pointer" }}>
            {["About Us", "About us", "Delivery", "Privacy policy"].map(
              (text, i) => (
                <ListItem key={i} disableGutters sx={{ fontSize: "14px" }}>
                  {text}
                </ListItem>
              )
            )}
          </List>
        </Stack>

        {/* Left Section */}
        <Stack
          className="footer-content-right"
          spacing={2}
          alignItems={"flex-start"}
          sx={{ flex: 1, minWidth: "200px" }}
        >
          <Typography variant="h5" color="white">
            GET IN TOUCH
          </Typography>
          <List sx={{ padding: 0 }}>
            <ListItem disableGutters sx={{ fontSize: "14px" }}>
              +91 1234567890
            </ListItem>
            <ListItem disableGutters sx={{ fontSize: "14px" }}>
              info@food-del.com
            </ListItem>
          </List>
        </Stack>
      </Stack>
      <Divider
        sx={{
          margin: "2vw 0",
          backgroundColor: "#969494ff",
          width: "100%",
          height: "1px",
          border: "none",
        }}
      />
      <Typography
        variant="body2"
        align="center"
        sx={{ fontSize: "14px", fontFamily: "inherit" }}
      >
        Copyright © 2025 Tomato.com - All rights reserved.
      </Typography>
    </Stack>
  );
};

export default Footer;
