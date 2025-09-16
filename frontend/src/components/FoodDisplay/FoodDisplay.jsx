import React, { useContext } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <Box
      className="food-display"
      id="food-display"
      sx={{
        margin: "20px auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          mb: 2,
          fontFamily: "inherit",
          fontSize: "max(2vw, 24px)",
        }}
      >
        Top Dishes near you
      </Typography>
      <Stack
        className="food-display-list"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 6,
          marginTop: "30px",
          rowGap: 6,
        }}
      >
        {food_list.map((item) => {
          if (category.includes("All") || category.includes(item.category)) {
            return (
              <FoodItem
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </Stack>
    </Box>
  );
};

export default FoodDisplay;
