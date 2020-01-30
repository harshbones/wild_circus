const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const bodyParser = require("body-parser");
const api = require("./routes");
const port = process.env.DATA_PORT || 3000;

const app = express();

// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// coarse
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, PUT, DELETE, GET, OPTIONS");
  next();
});

app.use("/api", api);

app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${port}`);
});
