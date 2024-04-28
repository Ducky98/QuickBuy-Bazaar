import React, { useState } from "react";
import { Button, Grid, TextField, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Auth/Action";

const LoginForm = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;

    // Simple validation (you might want to add more thorough validation)
    if (!email || !password) {
      setErrors({
        email: email ? "" : "Email is required",
        password: password ? "" : "Password is required",
      });
      return;
    }

    // Reset errors if validation passes
    setErrors({});

    const userData = {
      email: formData.email,
      password: formData.password,
    };

    dispatch(login(userData))
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom textAlign={"center"} fontFamily={"monospace"}>
        Login
      </Typography>
      <Typography variant="body1" gutterBottom textAlign={"center"} fontFamily={"sans-serif"}>
        Welcome back! Please enter your email and password to access your
        account.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} className="pt-5">
          <Grid item xs={12}>
            <TextField
              
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              autoComplete="current-password"
              value={formData.password}
              onChange={handleInputChange}
              error={!!errors.password}
              helperText={errors.password}
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
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <Typography variant="body1" align="center" marginTop={2}>
        Don't have an account?{" "}
        <Button onClick={()=> Navigate("/register")} underline="always">
          Register here
        </Button>
      </Typography>
    </div>
  );
};

export default LoginForm;
