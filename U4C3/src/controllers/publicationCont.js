const Publication = require("../models/publicationModel");
const { check, validationResult } = require("express-validator");
const express = require("express");
const router = express.Router();

router.post(
  "",
  check("likes").isNumeric().withMessage("Invalid input"),
  check("content").notEmpty().withMessage("content required"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      publication = await Publication.create(req.body);
      res.status(200).send(publication);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }
);
