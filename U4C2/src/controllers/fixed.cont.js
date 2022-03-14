const express = require("express");
const router = express.Router();
const Fixed = require("../models/fixed.model");

router.post("", async (req, res) => {
  try {
    const fixed = await Fixed.create(req.body);
    res.status(201).send(fixed);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const fixeds = await Fixed.find().lean().exec();
    res.status(200).send(fixeds);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
