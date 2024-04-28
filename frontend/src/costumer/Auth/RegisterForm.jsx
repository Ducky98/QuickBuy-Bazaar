import React, { useEffect, useState } from "react";
import { Button, Grid, TextField, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, getUser } from "./../../Redux/Auth/Action"; // Assuming getUser action is defined

const RegisterForm = () => {
  const navigate = useNavigate(); // Navigation hook
  const dispatch = useDispatch(); // Dispatch function for Redux actions
  const jwt = localStorage.getItem("jwt"); // Retrieve JWT token from localStorage
  const { auth } = useSelector((store) => store); // Access auth state from Redux store

  // Effect to fetch user data if JWT exists or changes
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt)); // Dispatch getUser action
    }
  }, [jwt, auth.jwt, dispatch]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const [errors, setErrors] = useState({}); // State for form errors

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { password, cPassword, email } = formData;

    // Password complexity check
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password:
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      }));
      return;
    }

    if (password !== cPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cPassword: "Passwords don't match",
      }));
      return;
    }

    // Reset errors if validation passes
    setErrors({});

    const userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email,
      password,
    };
    // Dispatch register action with user data
    dispatch(register(userData));
  };

  return (
    <div>
      <Typography
        variant="h4"
        gutterBottom
        textAlign={"center"}
        fontFamily={"monospace"}
      >
        Sign Up
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        textAlign={"center"}
        fontFamily={"sans-serif"}
      >
        Welcome! Please fill out the form below to create your account.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} className="pt-5">
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="family-name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              autoComplete="new-password"
              value={formData.password}
              onChange={handleInputChange}
              error={!!errors.password}
              helperText={errors.password}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="cPassword"
              name="cPassword"
              label="Confirm Password"
              type="password"
              fullWidth
              value={formData.cPassword}
              onChange={handleInputChange}
              error={!!errors.cPassword}
              helperText={errors.cPassword}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className="bg-indigo-600 w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0" }}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
      <Typography variant="body1" align="center" marginTop={2}>
        Already have an account?{" "}
        <Button onClick={() => navigate("/login")} underline="always">
          Login here
        </Button>
      </Typography>
    </div>
  );
};

export default RegisterForm;
