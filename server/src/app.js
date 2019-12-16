const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("combine"));
app.use(bodyParser.json());
app.use(cors());

app.get("/status", (req, res) => {
  res.send({ msg: "hej" });
});

app.post("/register", (req, res) => {
  res.send({ msg: `${req.body.email} register` });
});

app.listen(3000, () => console.log("server started.."));
