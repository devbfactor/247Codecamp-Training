//------------import-----------
const express = require("express");
const hotel = require("../model/hotel");

//------------initialize-----------
const router = express.Router();

//------------create router-----------
router.post("/postHotel", (req, res) => {
  let body = req.body;
  console.log(body);
  hotel.push(body);
  res.status(200).send(body);
});

//------------read router-----------
// Parameters: 1. Path, 2. Function
router.get("/getHotels", (req, res) => {
  res.status(200).send(hotel);
  console.log("got hotel data!");
});

router.get("/getID/:id", (req, res) => {
  let check = hotel.find((item) => {
    return item.id === parseInt(req.params.id);
  });

  if (check) {
    res.status(200).send(check);
    console.log(`Getting hotel is successful`);
  } else {
    res.status(404).send("Hotel not found");
  }
});

router.get("/getName/:name", (req, res) => {
  let check = hotel.find((item) => {
    return item.name === req.params.name;
  });
  if (check) {
    res.status(200).send(check);
    console.log(`Getting hotel is successful`);
  } else {
    res.status(404).send("Hotel not found");
  }
});

//------------update router-----------
router.put("/update/:id", (req, res) => {
  let id = req.params.id;
  let body = req.body;

  let index = hotel.findIndex((item) => {
    return item.id === +id;
  });

  console.log(index);

  if (index >= 0) {
    let updateData = { id: id, ...body };
    hotel[index] = updateData;
    // console.log(hotel[index]);
    res.json(updateData);
    // console.log(updateData);
  } else {
    res.status(404).send("ID does not exist");
  }
});

//------------delete router-----------

router.delete("/delete/:id", (req, res) => {
  let id = req.params.id;
  // console.log(id)
  let index = hotel.findIndex((item) => {
    return item.id === parseInt(id);
  });
  if (index >= 0) {
    hotel.splice(index, 1);

    res.status(200).send(`Hotel with id number:${id} is deleted`);
  } else {
    res.status(404).send("ID not found");
  }
});

module.exports = router;
