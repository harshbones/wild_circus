const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connection = require("../config");

const router = express.Router({
  mergeParams: true
});

// Route to select ALL users
router.get("/", (req, res) => {
  connection.query("SELECT * from users", (err, results) => {
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
    "SELECT * from users WHERE user_id = ?",
    idUser,
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving user");
      } else {
        res.json(results);
      }
    }
  );
});

// Create a new User
router.post("/new", (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 5);
  const formData = {
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    location: req.body.location,
    is_admin: req.body.is_admin,
    password: hash
  };
  connection.query("INSERT INTO users SET ?", formData, err => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

// Login
router.post("/signin", (req, res) => {
  let formData = {
    email: req.body.email
  };
  connection.query(
    "SELECT * FROM users WHERE email = ?",
    [formData.email],
    (err, result) => {
      if (err) {
        res.status(500).send("login error");
      } else {
        formData = {
          email: req.body.email,
          password: req.body.password
        };
        console.log("ok", result, formData);

        if (result.length === 0) {
          res.status(500).send("no email correspond");
        }

        const isSame = bcrypt.compareSync(
          formData.password,
          result[0].password
        );

        if (!isSame) {
          res.status(403).send("wrong password");
        } else {
          jwt.sign(
            {
              result
            },
            "chaussetterouge123",
            {
              expiresIn: "3000s"
            },
            (err, token) => {
              res.json(token);
            }
          );
        }
      }
    }
  );
});

// Modify a user
router.put("/:id", (req, res) => {
  const idUrl = req.params.id;
  const formData = req.body;

  connection.query(
    "UPDATE users SET ? WHERE user_id = ?",
    [formData, idUrl],
    err => {
      if (err) {
        res.status(500).send("Error to modify a User");
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// Delete ONE user
router.delete("/:id", (req, res) => {
  const idUrl = req.params.id;
  connection.query("DELETE FROM users WHERE user_id = ?", [idUrl], err => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
