const express = require("express");
const router = express.Router();
const Saving = require("../models/saving.model");
const Master = require("../models/master.model");
router.post("", async (req, res) => {
  try {
    const saving = await Saving.create(req.body);
    await Master.findOneAndUpdate(
      { _id: saving.masterId },
      { $inc: { balance: saving.balance } }
    );
    res.status(201).send(saving);
    console.log(saving.masterId);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.get("/:masterId", async (req, res) => {
  try {
    const savings = await Saving.find(
      { masterId: req.params.masterId },
      { _id: 0, account_number: 1, balance: 1 }
    )
      .lean()
      .exec();
    res.status(200).send(savings);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
