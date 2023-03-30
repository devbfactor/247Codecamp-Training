const express = require("express");
const flower = require("../model/flowers");

const router = express.Router();

//------------create router-----------
router.post("/addFlower", (req, res) => {
  let body = req.body;
  console.log(body);
  flower.push(body);
  res.status(200).send(body);
});

//------------read router-----------
router.get("/getFlowers", (req, res) => {
  res.status(200).send(flower);
  console.log("flower data FOUND!");
});

router.get("/getID/:id", (req, res) => {
  let check = flower.find((item) => {
    return item.id === parseInt(req.params.id);
  });

  if (check) {
    res.status(200).send(check);
    console.log(`Getting data is successful`);
  } else {
    res.status(404).send("Data not found");
  }
});

router.get("/getName/:name", (req, res) => {
  let check = flower.find((item) => {
    return item.name === req.params.name;
  });
  if (check) {
    res.status(200).send(check);
    console.log(`Getting data successful`);
  } else {
    res.status(404).send("Data not found");
  }
});

router.get("/getFamily/:family", (req, res) => {
  let check = flower.find((item) => {
    return item.family === req.params.family;
  });
  if (check) {
    res.status(200).send(check);
    console.log(`Getting data successful`);
  } else {
    res.status(404).send("Data not found");
  }
});
//------------update router-----------
router.put("/update/:id", (req, res) => {
  let id = req.params.id;
  let body = req.body;

  let index = flower.findIndex((item) => {
    return item.id === parseInt(id);
  });

  if (index >= 0) {
    let updateData = { id: id, ...body };
    flower[index] = updateData;
    res.json(updateData);
  } else {
    res.status(404).send("ID does not exist");
  }
});
//------------delete router-----------
router.delete("/deleteIDFlower/:id", (req, res) => {
  let id = req.params.id;
  // console.log(id)
  let index = flower.findIndex((item) => {
    return item.id === parseInt(id);
  });
  if (index >= 0) {
    flower.splice(index, 1);

    res.status(200).send(`flower with id number:${id} is deleted`);
  } else {
    res.status(404).send("ID not found");
  }
});

router.delete("/deleteNameFlower/:name", (req, res) => {
  let name = req.params.name;
  // console.log(id)
  let index = flower.findIndex((item) => {
    return item.name === req.params.name;
  });
  if (index >= 0) {
    flower.splice(index, 1);

    res.status(200).send(`flower with name:${name} is deleted`);
  } else {
    res.status(404).send("name not found");
  }
});

router.delete("/deleteFamilyFlower/:family", (req, res) => {
  let family = req.params.family;
  // console.log(id)
  let index = flower.findIndex((item) => {
    return item.family === req.params.family;
  });
  if (index >= 0) {
    flower.splice(index, 1);

    res.status(200).send(`flower with name:${family} is deleted`);
  } else {
    res.status(404).send("name not found");
  }
});

module.exports = router;
