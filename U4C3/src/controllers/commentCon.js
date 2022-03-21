const Comment = require("../models/commentModel");
const { check, validationResult } = require("express-validator");
const express = require("express");
const router = express.Router();

router.post(
  "",
  check("body").notEmpty().withMessage("body required"),
  check("userId").notEmpty().withMessage("User Id required"),
  check("bookId").notEmpty().withMessage("Book Id required"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      comment = await Comment.create(req.body);
      res.status(200).send(comment);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }
);
module.exports = router;
