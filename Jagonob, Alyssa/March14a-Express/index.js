require("dotenv").config();

const express = require("express");

//express app
const app = express();

//Routes
app.get("/home", (req, res) => {
  res.json({ mssg: "Welcome to Home Page YAHHOOOOOOO OHUUU" });
});

app.post("/home", (req, res) => {
  res.json({ mssg: "This is a POST request" });
});

app.listen(process.env.PORT, () => {
  console.log("listening to port", process.env.PORT);
});
