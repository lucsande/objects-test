const path = require("path");
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || "8000";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// variables for generating items list
let pages = [[1, 2, 3], [4, 5]];
let currentPageNumber = 0;
let option = "A";

// routes
app.get("/", (req, res) => {
  const lastPage = pages.length - 1;
  const isPreviousDisabled = currentPageNumber === 0 ? "disabled" : "";
  const isNextDisabled = currentPageNumber >= lastPage ? "disabled" : "";

  res.render("index", { pages, currentPageNumber, option });
});

app.post("/items-info", (req, res) => {
  pages = req.body.pages || pages;
  option = req.body.option || option;
  currentPageNumber = currentPageNumber + (req.body.pageChange || 0);

  if (pages.length === 0) {
    currentPageNumber = 0;
  } else if (currentPageNumber >= pages.length) {
    currentPageNumber = pages.length - 1;
  }

  res.json({ pages, currentPageNumber, option });
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
