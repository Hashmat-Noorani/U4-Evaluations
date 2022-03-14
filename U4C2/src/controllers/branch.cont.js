const express = require("express");
const router = express.Router();
const Branch = require("../models/branch.model");

router.post("", async (req, res) => {
  try {
    const branch = await Branch.create(req.body);
    res.status(201).send(branch);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const branchs = await Branch.find().lean().exec();
    res.status(200).send(branchs);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
