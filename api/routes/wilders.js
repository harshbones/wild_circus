const express = require("express");
const connection = require("../config");

const router = express.Router({
  mergeParams: true
});

// Route to select ALL wilders
router.get("/", (req, res) => {
  connection.query("SELECT * from wilders", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Route to select one user
router.get("/:id", (req, res) => {
  const idUser = req.params.id;
  connection.query(
    "SELECT * from wilders WHERE wilder_id = ?",
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

// Create a new Wilder
router.post("/new", (req, res) => {
  const formData = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    nickname: req.body.nickname,
    description: req.body.description
  };
  connection.query("INSERT INTO wilders SET ?", formData, err => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
