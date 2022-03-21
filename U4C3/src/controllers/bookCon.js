const Book = require("../models/bookModel");
const { check, validationResult } = require("express-validator");
const express = require("express");
const router = express.Router();

router.post(
  "",
  check("likes").isNumeric().withMessage("Invalid input"),
  check("content").notEmpty().withMessage("content required"),
  check("userId").notEmpty().withMessage("User Id required"),
  check("publicationId").notEmpty().withMessage("Publication Id required"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      book = await Book.create(req.body);
      res.status(200).send(book);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }
);
module.exports = router;
