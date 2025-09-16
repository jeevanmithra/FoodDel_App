import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { assets } from "../../assets/frontend_assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    food_list,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(StoreContext);
  const isCartEmpty = Object.values(cartItems).every((qty) => qty === 0);

  const navigate = useNavigate();
  return (
    <>
      {isCartEmpty ? (
        <Stack alignItems="center" justifyContent="center">
          <Box
            component="img"
            src={assets.empty_cart}
            sx={{ width: "30vw" }}
          ></Box>
          <Typography sx={{ fontFamily: "inherit", color: "grey", ml: -5 }}>
            Your cart is empty add items to cart
          </Typography>
          <Link to="../">
            <Button variant="contained" color="warning" sx={{ ml: -5, mt: 3 }}>
              Go Home
            </Button>
          </Link>
        </Stack>
      ) : (
        <Box className="cart" sx={{ mt: "80px" }}>
          <Box className="cart-items">
            <Box
              className="cart-items-title"
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1.5fr 1fr 1fr 1fr",
                alignItems: "center",
                justifyItems: "center",
                color: "black",
                fontSize: "max(1vw,12px)",
                width: "100%",
              }}
            >
              <Typography variant="body1">Items</Typography>
              <Typography variant="body1">Title</Typography>
              <Typography variant="body1">Price</Typography>
              <Typography variant="body1">Quantity</Typography>
              <Typography variant="body1">Total</Typography>
            </Box>
            <br />
            <Divider></Divider>
            {food_list.map((item, index) => {
              if (cartItems[item.id] > 0) {
                return (
                  <>
                    <Box
                      className="cart-items-title cart-items-item"
                      key={index}
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1.5fr 1fr 1fr 1fr",
                        alignItems: "center",
                        justifyItems: "center",
                        color: "grey",
                        fontSize: "max(1vw,12px)",
                        width: "100%",
                        margin: "10px 0px",
                      }}
                    >
                      <Box
                        component={"img"}
                        src={item.image}
                        sx={{
                          width: "60px",
                          borderRadius: "50%",
                          height: "60px",
                        }}
                      ></Box>
                      <Typography variant="body1">{item.name}</Typography>
                      <Typography variant="body1">₹{item.price}</Typography>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        spacing={1}
                      >
                        <Box
                          component="img"
                          src={assets.remove_icon_red}
                          alt="Remove"
                          sx={{
                            width: 25,
                            height: 25,
                            cursor: "pointer",
                            transition: "transform 0.2s",
                            "&:hover": {
                              transform: "scale(1.1)",
                            },
                          }}
                          onClick={() => removeFromCart(item.id)}
                        />
                        <Typography
                          variant="body1"
                          sx={{
                            minWidth: "20px",
                            textAlign: "center",
                            fontWeight: 500,
                          }}
                        >
                          {cartItems[item.id]}
                        </Typography>
                        <Box
                          component="img"
                          src={assets.add_icon_green}
                          alt="Add"
                          sx={{
                            width: 25,
                            height: 25,
                            cursor: "pointer",
                            transition: "transform 0.2s",
                            "&:hover": {
                              transform: "scale(1.1)",
                            },
                          }}
                          onClick={() => addToCart(item.id)}
                        />
                      </Stack>
                      <Typography variant="body1">
                        ₹{item.price * cartItems[item.id]}
                      </Typography>
                    </Box>
                    <Divider />
                  </>
                );
              }
            })}
          </Box>
          <Stack
            className="cart-bottom"
            direction={{ xs: "column-reverse", sm: "row" }}
            justifyContent="space-between"
            sx={{ mt: "80px", gap: { xs: "20px", sm: "max(12vw,20px)" } }}
          >
            <Stack
              className="cart-total"
              direction="column"
              sx={{ flex: 1, gap: "20px" }}
            >
              <Typography component="h4">Cart Total</Typography>
              <Box>
                <Stack
                  className="cart-total-details"
                  justifyContent="space-between"
                  direction="row"
                  sx={{ color: "#555" }}
                >
                  <Typography variant="body1">Subtotal</Typography>
                  <Typography variant="body1">
                    ₹{getTotalCartAmount()}
                  </Typography>
                </Stack>
                <Divider sx={{ m: "10px 0px" }} />
                <Stack
                  className="cart-total-details"
                  justifyContent="space-between"
                  direction="row"
                  sx={{ color: "#555" }}
                >
                  <Typography>Delivery Fee</Typography>
                  <Typography>₹{21}</Typography>
                </Stack>
                <Divider sx={{ m: "10px 0px" }} />
                <Stack
                  className="cart-total-details"
                  justifyContent="space-between"
                  direction="row"
                  sx={{ color: "#555" }}
                >
                  <Typography variant="body1">Total</Typography>
                  <Typography variant="body1">
                    ₹{getTotalCartAmount() + 21}
                  </Typography>
                </Stack>
              </Box>
              <Button
                variant="contained"
                color="warning"
                sx={{
                  padding: "12px 0px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  width: "max(15vw,200px)",
                }}
                onClick={() => navigate("/place-order")}
              >
                Proceed to Checkout
              </Button>
            </Stack>
            <Box className="cart-promo-code" sx={{ flex: 1 }}>
              <Box>
                <Typography variant="body1" sx={{ color: "#555" }}>
                  If you have promo code, Enter it here
                </Typography>
                <Stack
                  className="cart-promocode-input"
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    mt: "10px",
                    backgroundColor: "#eaeaea",
                    borderRadius: "4px",
                  }}
                >
                  <TextField
                    placeholder="Promocode"
                    variant="outlined"
                    InputProps={{
                      sx: { pl: "10px", backgroundColor: "transparent" },
                    }}
                    sx={{
                      "& fieldset": { border: "none" },
                    }}
                  />
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{
                      width: "max(10vw,150px)",
                      border: "none",
                      height: "100%",
                      padding: "15px ",
                    }}
                  >
                    Submit
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Box>
      )}
    </>
  );
};

export default Cart;
