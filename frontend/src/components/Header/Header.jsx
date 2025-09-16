import React from "react";
import { Stack, Button, Typography } from "@mui/material";
import "./Header.css";
  

const Header = () => {
  return (
    <Stack
      className="header"
      direction="row"
      sx={{
        width: "100%",
        height: "34vw",
        margin: "30px auto",
        background: 'url("/header_img.png") no-repeat',
        backgroundSize: "contain",
        position: "relative",
      }}
    >
      <Stack
        className="header-contents"
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "1.5vw",
          maxWidth: "50%",
          bottom: "10%",
          left: "5%",
          m: "auto",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: "500",
            color: " white",
            fontSize: "max(4.5vw, 22px)",
            fontFamily: "inherit",
          }}
        >
          Order your favourite food here
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            color: "white",
            fontSize: "1vw",
            fontFamily: "inherit",
          }}
        >
          choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients to satisfy your craving add
          elevate your dining experience, one delicious meal at a time
        </Typography>
        <Button
          className="header-btn"
          variant="contained"
          sx={{
            border: "none",
            color: "#F26C1B",
            fontWeight: "600",
            padding: "1vw 2.3vw",
            backgroundColor: "white",
            fontSize: "max(1vw,13px)",
            borderRadius: "50px",
            transition: "background-color 0.3s",
          }}
        >
          View Menu
        </Button>
      </Stack>
    </Stack>
  );
};

export default Header;
