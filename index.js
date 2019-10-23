const path = require("path");
const express = require("express");
const port = process.env.PORT || "8000";

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.status(200).send("Objects test");
  res.render("index");
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
