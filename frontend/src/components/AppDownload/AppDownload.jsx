import { Box, Typography } from "@mui/material";
import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

const AppDownload = () => {
  return (
    <Box
          className="app-download"
          id="app-download"
      sx={{
        textAlign: "center",
        margin: "auto auto",
        mt: "70px",
        fontWeight: "500",
      }}
    >
      <Typography
        variant="body1"
        sx={{ fontSize: "max(3vw,20px)", fontFamily: "inherit" }}
      >
        For Better Experience Download <br />
        Tomato App
      </Typography>
      <Box
        className="app-download-playforms"
        sx={{
          display: "flex",
          gap: "max(2vw, 10px)",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <Box component="img" src={assets.play_store} alt="Playstore" sx={{width:"max(30vw,120px)",maxWidth:"180px",transition:"0.5s",cursor:"pointer", "&:hover": { transform: "scale(1.05)" }}} />
        <Box component="img" src={assets.app_store} alt="App Store" sx={{width:"max(30vw,120px)",maxWidth:"180px",transition:"0.5s",cursor:"pointer", "&:hover": { transform: "scale(1.05)" }}} />
      </Box>
    </Box>
  );
};

export default AppDownload;
