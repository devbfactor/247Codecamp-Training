//------------import-----------
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/hotelRoutes");
require("dotenv").config();

//------------initialize-----------
const app = express();

//------------middleware-----------take note of sequence
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", routes);

// app.get("/", (req, res) => {
//   res.status(200).send(hotel);
// });

//localhots:8080/
//------------connection-----------
app.listen(process.env.port, () => {
  console.log(`server is running on ${process.env.port}`);
});
