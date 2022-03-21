const express = require("express");
const userController = require("./controllers/userCon");
const bookController = require("./controllers/bookCon");
const publicationController = require("./controllers/publicationCon");
const commentController = require("./controllers/commentCon");

const app = express();
app.use(express.json());
app.post("/user", userController);
module.exports = app;
