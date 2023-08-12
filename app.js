const express = require("express");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

// external import controls
const userRouter = require("./routes/users.route");
const homeRouter = require("./routes/home.router");

// database connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connection success with DB"))
  .catch((err) => {
    console.log(err);
    process.exit(1); //to stop server when it occurs error!
  });

// request parser
app.use(express.json()); // parser json-form data
app.use(express.urlencoded({ extended: true })); // Middleware to parse url-encoded form data

app.use("/", homeRouter);
app.use("/users", userRouter);

module.exports = app;
