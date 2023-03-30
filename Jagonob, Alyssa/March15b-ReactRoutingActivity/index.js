const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/flowerRoutes");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", routes);

app.listen(process.env.port, () => {
  console.log(`server is running on ${process.env.port}`);
});
