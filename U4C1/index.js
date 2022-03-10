const express = require("express");
const app = express();
app.use(logger);
app.get("/books", (req, res) => {
  res.send({ route: "/books" });
});
app.get("/libraries", checkPermission("librarian"), (req, res) => {
  res.send({ route: "/libraries", permission: req.role });
});
app.get("/authors", checkPermission("author"), (req, res) => {
  res.send({ route: "/authors", permission: req.role });
});
//Validation
function checkPermission(input) {
  return function (req, res, next) {
    if (input == "librarian" || input == "author") {
      req.role = true;
    }
    else {
      req.role = "Not allowed";
    }
    next();
  };
}
//logger function
function logger(req, res, next) {
  if (
    req.path === "/books" ||
    req.path === "/libraries" ||
    req.path === "/authors"
  ) {
    console.log(req.path);
  }
  next();
}

app.listen(4300, () => {
  console.log("listening on port 4300");
});
