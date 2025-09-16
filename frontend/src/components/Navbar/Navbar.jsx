import React, { useContext, useState } from "react";
import { Stack, Button, Link,Typography } from "@mui/material";
import "./Navbar.css";
import { assets, navbarMenu } from "../../assets/frontend_assets/assets";
import { Link as RouterLink } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getCartItemCount, user, logoutUser } = useContext(StoreContext);
  return (
    <Stack
      direction="row"
      justifyContent={"space-between"}
      alignItems="center"
      sx={{ width: "100%", padding: "20px 0px" }}
    >
      <RouterLink to="/">
        <img src={assets.logo} alt="" className="logo"></img>
      </RouterLink>
      <div className="navbar-menu">
        {navbarMenu.map((item) => (
          <Link
            key={item.value}
            underline="none"
            sx={{
              color: "#49557e",
              fontSize: "22px",
              cursor: "pointer",
              paddingBottom: menu === item.value ? "2px" : 0,
              borderBottom: menu === item.value ? "2px solid #49557e" : "none",
              // fontWeight: menu === item.value ? "bold" : "normal",
            }}
            onClick={() => setMenu(item.value)}
            children={item.label}
            href={item.id}
          />
        ))}
      </div>
      <div className="navbar-right">
        <img src={assets.search_icon} alt=""></img>
        <div className="navbar-search-icon">
          <RouterLink to="/cart">
            <img src={assets.basket_icon} alt=""></img>
          </RouterLink>
          {getCartItemCount() > 0 && (
            <div className="dot">
              <span
                style={{
                  fontSize: "10px",
                  color: "white",
                  fontWeight: "bold",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {getCartItemCount()}
              </span>
            </div>
          )}
        </div>
        {user ? (
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography
              variant="body1"
              sx={{
                color: "#49557e",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              Welcome, {user.name}!
            </Typography>
            <Button
              children="Logout"
              sx={{
                backgroundColor: "transparent",
                padding: "10px 30px",
                border: "1px solid tomato",
                color: "#49557e",
                fontSize: "16px",
                cursor: "pointer",
                borderRadius: "50px",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#fff4f2",
                },
              }}
              onClick={logoutUser}
            />
          </Stack>
        ) : (
          <Button
            children="Sign in"
            sx={{
              backgroundColor: "transparent",
              padding: "10px 30px",
              border: "1px solid tomato",
              color: "#49557e",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "50px",
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "#fff4f2",
              },
            }}
            onClick={() => setShowLogin(true)}
          />
        )}
      </div>
    </Stack>
  );
};

export default Navbar;
