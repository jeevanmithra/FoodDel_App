import React, { useContext } from "react";
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { StoreContext } from "../../Context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <>
      <Stack
        direction="row"
        alignItems="start"
        justifyContent="space-between"
        gap={"50px"}
        sx={{ mt: "100px" }}
      >
        <Box
          className="place-order-left"
          sx={{ width: "100%", maxWidth: "max(30%,500px)" }}
        >
          <Typography
            className="title"
            variant="body1"
            sx={{
              fontSize: "30px",
              fontWeight: 600,
              mb: "50px",
              fontFamily: "inherit",
            }}
          >
            Delivery Information
          </Typography>
          <Stack gap={2}>
            <Stack className="multi-fields" direction="row" gap={2}>
              <TextField fullWidth placeholder="First Name" />
              <TextField fullWidth placeholder="Last Name" />
            </Stack>
            <TextField fullWidth placeholder="Email address" />
            <TextField multiline rows={2} fullWidth placeholder="Street" />
            <Stack className="multi-fields" direction="row" gap={2}>
              <TextField fullWidth placeholder="City" />
              <TextField fullWidth placeholder="State" />
            </Stack>
            <Stack className="multi-fields" direction="row" gap={2}>
              <TextField fullWidth placeholder="Zip code" />
              <TextField fullWidth placeholder="Country" />
            </Stack>
            <TextField fullWidth placeholder="Phone"></TextField>
          </Stack>
        </Box>

        <Box
          className="place-order-right"
          sx={{ width: "100%", maxWidth: "max(40%,500px)" }}
        >
          <Stack
            className="cart-total"
            direction="column"
            sx={{ flex: 1, gap: "20px" }}
          >
            <Typography
              component="h4"
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                fontFamily: "inherit",
              }}
            >
              Cart Total
            </Typography>
            <Box>
              <Stack
                className="cart-total-details"
                justifyContent="space-between"
                direction="row"
                sx={{ color: "#555" }}
              >
                <Typography variant="body1">Subtotal</Typography>
                <Typography variant="body1">₹{getTotalCartAmount()}</Typography>
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
                mt: "30px",
                padding: "12px 0px",
                borderRadius: "4px",
                cursor: "pointer",
                width: "max(15vw,200px)",
              }}
            >
              Proceed to Payment
            </Button>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default PlaceOrder;
