const express = require("express");

// const admin = require("./admin");
// const acts = require("./acts");
const users = require("./users");
const wilders = require("./wilders");

const router = express.Router();

// router.use("/admin", admin);
// router.use("/acts", acts);
router.use("/users", users);
router.use("/wilders", wilders);

module.exports = router;
