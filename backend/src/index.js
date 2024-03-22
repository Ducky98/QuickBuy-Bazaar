const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json);
app.use(cors());


const authRouters = require('./routes/auth.route');
app.use("/auth", authRouters);

const userRoutes = require('./routes/user.route');
app.use('/user', userRoutes);


module.exports = app;