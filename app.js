const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const monsters = require("./routes/monster");
const habitats = require("./routes/habitats");

app.use(bodyParser.json());
app.use("/monsters", monsters);
app.use("/habitats", habitats);
app.use((err, req, res, next) => {
  res.json(err);
});

module.exports = app;
