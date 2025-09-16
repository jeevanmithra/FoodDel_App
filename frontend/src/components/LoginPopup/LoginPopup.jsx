import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const { registerUser, loginUser } = useContext(StoreContext);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (currState === "Sign Up" && !formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (currState === "Sign Up" && !formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      let result;
      if (currState === "Sign Up") {
        result = await registerUser({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
      } else {
        result = await loginUser(formData.email, formData.password);
      }

      if (result.success) {
        setShowLogin(false);
        // Reset form
        setFormData({
          name: "",
          email: "",
          password: "",
          agreeToTerms: false,
        });
        navigate("/");
      } else {
        setSubmitError(result.error);
      }
    } catch {
      setSubmitError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleStateChange = (newState) => {
    setCurrState(newState);
    setErrors({});
    setSubmitError("");
    setFormData({
      name: "",
      email: "",
      password: "",
      agreeToTerms: false,
    });
  };
  return (
    <Box
      className="login-popup"
      sx={{
        width: "100%",
        zIndex: 1,
        position: "absolute",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "grid",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="login-popup-container"
        sx={{
          placeSelf: "center",
          width: "max(23vw,480px)",
          color: "#808080",
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "25px 30px",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          fontSize: "14px",
          animation: "fadeIn 0.5s",
        }}
      >
        <Stack
          className="login-popup-title"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          color="black"
          fontFamily="inherit"
        >
          <Typography variant="h4" className="login-popup-title">
            {currState}
          </Typography>
          <Box
            component="img"
            src={assets.cross_icon}
            alt=""
            onClick={() => {
              setShowLogin(false);
            }}
            sx={{
              width: "16px",
              height: "16px",
              cursor: "pointer",
            }}
          />
        </Stack>
        {submitError && (
          <Alert severity="error" sx={{ marginBottom: 2 }}>
            {submitError}
          </Alert>
        )}

        <Stack className="login-popup-inputs" direction="column" gap="20px">
          {currState === "Sign Up" && (
            <TextField
              label="Name"
              variant="outlined"
              className="login-popup-input"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              error={!!errors.name}
              helperText={errors.name}
              required
            />
          )}
          <TextField
            label="Email"
            variant="outlined"
            className="login-popup-input"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            className="login-popup-input"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
            required
          />
        </Stack>
        {currState === "Sign Up" && (
          <Stack
            direction="row"
            alignItems={"flex-start"}
            spacing="8px"
            className="login-popup-condition"
          >
            <Checkbox
              sx={{ mt: "2px", padding: 0 }}
              checked={formData.agreeToTerms}
              onChange={(e) =>
                handleInputChange("agreeToTerms", e.target.checked)
              }
            />
            <Typography variant="body1" sx={{}}>
              By continuing, I agree to the Terms and Conditions and Privacy
              Policy
            </Typography>
          </Stack>
        )}
        {errors.agreeToTerms && (
          <Typography variant="body2" color="error" sx={{ marginTop: -2 }}>
            {errors.agreeToTerms}
          </Typography>
        )}
        <Button
          variant="contained"
          color="warning"
          type="submit"
          disabled={loading}
          sx={{
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: "15px",
            padding: "10px",
            textTransform: "none",
          }}
        >
          {loading ? (
            <CircularProgress size={20} color="inherit" />
          ) : currState === "Sign Up" ? (
            "Create Account"
          ) : (
            "Login"
          )}
        </Button>
        {currState === "Login" ? (
          <Typography>
            Create a new account?{" "}
            <span
              onClick={() => handleStateChange("Sign Up")}
              style={{ color: "#ED6C02", cursor: "pointer", fontWeight: 500 }}
            >
              Sign Up
            </span>
          </Typography>
        ) : (
          <Typography>
            Already have an account?{" "}
            <span
              onClick={() => handleStateChange("Login")}
              style={{ color: "#ED6C02", cursor: "pointer", fontWeight: 500 }}
            >
              Login
            </span>
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default LoginPopup;
