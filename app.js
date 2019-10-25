const path = require("path");
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || "8000";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let pages = [[1, 2, 3], [4, 5]];
let currentPageNumber = 0;
let option = "A";

app.get("/", (req, res) => {
  // if (pages === []) {
  //   let pages = [[1, 2, 3], [4, 5]];
  // }

  res.render("index", { pages, currentPageNumber, option });
});

app.post("/items-info", (req, res) => {
  pages = req.body.pages;

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

//
//
//
// const path = require("path");
// const express = require("express");
// var bodyParser = require("body-parser");
// const app = express();
// const port = process.env.PORT || "8000";

// app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "public")));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// const itemsInfo = {
//   pages: [[1, 2, 3], [4, 5]],
//   currentPage: 0,
//   option: "A"
// };

// app.get("/", (req, res) => {
//   res.render("index", { itemsInfo });
// });

// app.listen(port, () => {
//   console.log(`Listening to requests on port ${port}`);
// });
