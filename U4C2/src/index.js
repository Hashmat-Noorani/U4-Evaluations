const express = require("express");

const userController = require("./controllers/user.cont");
const branchController = require("./controllers/branch.cont");
const masterController = require("./controllers/master.cont");
const savingController = require("./controllers/saving.cont");
const fixedController = require("./controllers/fixed.cont");


const app = express();
app.use(express.json());

app.use("/user", userController);
app.use("/branch", branchController);
app.use("/master", masterController);
app.use("/saving", savingController);
app.use("/fixed", fixedController);

module.exports = app;
