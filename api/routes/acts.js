const express = require("express");
const connection = require("../config");

const router = express.Router({
  mergeParams: true
});

// Route to select ALL acts
router.get("/", (req, res) => {
  connection.query("SELECT * from acts", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Route to select one act
router.get("/:id", (req, res) => {
  const idUser = req.params.id;
  connection.query(
    "SELECT * from acts WHERE act_id = ?",
    idUser,
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving wilder");
      } else {
        res.json(results);
      }
    }
  );
});

// Create a new Act
router.post("/new", (req, res) => {
  const formData = {
    name: req.body.name,
    location: req.body.location,
    description: req.body.description,
    places: req.body.places
  };
  connection.query("INSERT INTO acts SET ?", formData, err => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
