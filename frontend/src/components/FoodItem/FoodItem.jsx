import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { assets } from "../../assets/frontend_assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <Box
      className="food-item"
      sx={{
        width: "100%",
        margin: "auto",
        borderRadius: "15px",
        boxShadow: "0 0px 10px #00000015",
        transition: "transform 0.3s",
        animation: "fadeIn 0.3s",
      }}
    >
      <Box className="food-item-img-container" position="relative">
        <Box
          component="img"
          src={image}
          alt={name}
          className="food-item-img"
          sx={{ width: "100%", borderRadius: "15px 15px 0 0" }}
        />
        {!cartItems[id] ? (
          <Box
            component="img"
            className="add"
            src={assets.add_icon_white}
            alt="Add"
            onClick={() => addToCart(id)}
            sx={{
              width: "35px",
              position: "absolute",
              bottom: "15px",
              right: "15px",
              cursor: "pointer",
              borderRadius: "50%",
            }}
          />
        ) : (
          <Stack
            direction="row"
            alignItems="center"
            className="food-item-counter"
            sx={{
              position: "absolute",
              bottom: "15px",
              right: "15px",
              background: "#fff",
              borderRadius: "20px",
              boxShadow: 2,
              px: 1.5,
              py: 0.5,
              minWidth: 90,
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            <Box
              component="img"
              src={assets.remove_icon_red}
              alt="Remove"
              sx={{ width: 30, height: 30, cursor: "pointer" }}
              onClick={() => removeFromCart(id)}
            />
            <Typography
              component="p"
              sx={{
                mx: 1,
                minWidth: 18,
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              {cartItems[id]}
            </Typography>
            <Box
              component="img"
              src={assets.add_icon_green}
              alt="Add"
              sx={{ width: 30, height: 30, cursor: "pointer" }}
              onClick={() => addToCart(id)}
            />
          </Stack>
        )}
      </Box>
      <Box
        className="food-item-details"
        sx={{
          padding: "20px",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className="food-item-name-rating"
          sx={{ marginBottom: "10px" }}
        >
          <Typography
            component="p"
            sx={{ fontFamily: "inherit", fontSize: "clamp(12px,2vw, 17px)", fontWeight: 500 }}
          >
            {name}
          </Typography>
          <Box component="img" src={assets.rating_starts} alt="" width={70} />
        </Stack>
        <Typography
          className="food-item-desc"
          component="p"
          color="#676767"
          fontSize={12}
        >
          {description}
        </Typography>
        <Typography
          className="food-item-price"
          component="p"
          color="tomato"
          fontSize={22}
          fontWeight={500}
          margin={"10px 0"}
        >
          ₹{price}
        </Typography>
      </Box>
    </Box>
  );
};

export default FoodItem;
