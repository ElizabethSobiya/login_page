require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./Db");
const userRoutes = require("./router/user");
const authRoutes = require("./router/auth");
// const forgotPassword = require('./router/auth')

// database connection
connection();

// middlewares
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
// app.use("/api/forgotpassword", forgotPassword);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));