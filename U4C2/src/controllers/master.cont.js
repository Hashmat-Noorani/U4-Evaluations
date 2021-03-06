const express = require("express");
const router = express.Router();
const Master = require("../models/master.model");

router.post("", async (req, res) => {
  try {
    const master = await Master.create(req.body);
    res.status(201).send(master);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const masters = await Master.find()
      .populate("userId")
      // .where(`${"userId".age}`)
      // .in(24)
      .lean()
      .exec();
    // const test = masters.populate("userId");
    // console.log(test);
    // console.log(masters[0].userId.email);
    res.status(200).send(masters);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
