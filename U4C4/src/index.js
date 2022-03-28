const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const connect = require("./configs/db");
const { register, login, newToken } = require("./controllers/authCon");
const todoController = require("./controllers/todoCon");
const usersController = require("./controllers/userCon");
const passport = require("./configs/oauth2");
app.use(express.json());
app.post("/register", register);
app.post("/login", login);
app.use("/todo", todoController);
app.use("/users", usersController);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  function (req, res) {
    const token = newToken(req.user);
    res.status(200).send({ user: req.user, token });
  }
);

app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening on port ${port}`);
  } catch (err) {
    console.log(err);
  }
});
