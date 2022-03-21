const User = require("../models/userModel");
const { check, validationResult } = require("express-validator");
const express = require("express");
const router = express.Router();

router.post(
  "",
  check("firstName")
    .notEmpty()
    .withMessage("First Name required")
    .isLength({ min: 3, max: 30 })
    .withMessage("Name should contain 3 to 30 characters"),
  check("lastName")
    .isLength({ min: 3, max: 30 })
    .withMessage("Name should contain 3 to 30 characters"),
  check("age")
    .notEmpty()
    .withMessage("age required")
    .isNumeric({ min: 1, max: 150 })
    .withMessage("age should be between 1 and 150"),
  check("email")
    .notEmpty()
    .withMessage("Email required")
    .isEmail()
    .withMessage("invalid email")
    .custom((value) => {
      const email = User.findOne({ email: value }).lean().exec();
      if (email) {
        throw new Error("Email already in use");
      }
    }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      user = await User.create(req.body);
      res.status(200).send(user);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }
);
