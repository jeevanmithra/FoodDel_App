import React from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import { menu_list } from "../../assets/frontend_assets/assets";
import "./ExploreMenu.css";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <Stack
      className="explore-menu"
      id="explore-menu"
      direction="column"
      spacing="20px"
      sx={{
        width: "100%",
      }}
    >
      <Typography
        variant="h3"
        className="explore-menu-title"
        sx={{
          fontWeight: 500,
          color: "#262626",
          fontFamily: "inherit",
        }}
      >
        Explore Our Menu
      </Typography>
      <Typography
        variant="body1"
        className="explore-menu-text"
        sx={{
          mb: 4,
          fontFamily: "inherit",
          maxWidth: "60%",
          color: "#808080",
        }}
      >
        choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients to satisfy your craving add elevate
        your dining experience, one delicious meal at a time
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        gap="21px"
        textAlign={"center"}
        margin={"20px 0px"}
        className="explore-menu-list"
        sx={{
          width: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {menu_list.map((item, index) => (
          <Box
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            className="explore-menu-list-item"
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: 150,
            }}
          >
            <Box
              component="img"
              src={item.menu_image}
              alt={item.name}
              sx={{
                width: "7.5vw",
                minWidth: 120,
                height: 120,
                borderRadius: "50%",
                transition: "0.3s",
                border:
                  category === item.menu_name ? "4px solid tomato" : undefined,
                padding: category === item.menu_name ? "2px" : undefined,
              }}
            />
            <Typography
              sx={{
                fontFamily: "inherit",
                marginTop: "10px",
                color: "#747474",
                fontSize: "max(1.4vw,16px)",
                cursor: "pointer",
              }}
            >
              {item.menu_name}
            </Typography>
          </Box>
        ))}
      </Stack>
      <Divider
        sx={{
          margin: "10px 0px",
          backgroundColor: "#e2e2e2",
          height: "2px",
          border: "none",
        }}
      />
    </Stack>
  );
};

export default ExploreMenu;
