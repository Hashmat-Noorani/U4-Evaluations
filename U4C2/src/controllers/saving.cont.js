const express = require("express");
const router = express.Router();
const Saving = require("../models/saving.model");

router.post("", async (req, res) => {
  try {
    const saving = await Saving.create(req.body);
    res.status(201).send(saving);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const savings = await Saving.find().lean().exec();
    res.status(200).send(savings);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
