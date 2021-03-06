const express = require("express");
const router = express.Router();
const Fixed = require("../models/fixed.model");
const Master = require("../models/master.model");

router.post("", async (req, res) => {
  try {
    const fixed = await Fixed.create(req.body);
    await Master.findOneAndUpdate(
      { _id: fixed.masterId },
      { $inc: { balance: fixed.balance } }
    );
    console.log(fixed.masterId);
    res.status(201).send(fixed);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.get("/:masterId", async (req, res) => {
  try {
    const fixeds = await Fixed.find(
      { masterId: req.params.masterId },
      { _id: 0, account_number: 1, balance: 1 }
    )
      .lean()
      .exec();
    res.status(200).send(fixeds);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
