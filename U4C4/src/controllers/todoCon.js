const express = require("express");
const Todo = require("../models/todoModel");
const authenticate = require("../middlewares/authenticate");
const router = express.Router();

router.post(
  "",
  authenticate,
  async (req, res) => {
    req.body.userId = req.id;
    try {
      const todo = await Todo.create(req.body);
      return res.status(200).send({ todo });
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  }
);

router.get("", authenticate, async (req, res) => {
  try {
    const todo = await Todo.find({ userId: req.id });
    console.log(todo);
    if (todo.length == 0) {
      return res
        .status(401)
        .send({ message: "You don't have any Todo in your list" });
    }
    return res.status(200).send({ todo });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

router.get("/:todoId", authenticate, async (req, res) => {
  try {
    const todo = await Todo.findOne({ userId: req.id, _id: req.params.todoId });
    if (!todo) {
      return res.status(401).send({ message: "No result found" });
    }
    return res.status(200).send({ todo });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

router.patch("/:todoId", authenticate, async (req, res) => {
  try {
    const todo = await Todo.findOneAndUpdate(
      { userId: req.id, _id: req.params.todoId },
      req.body,
      { new: true }
    );
    if (!todo) {
      return res
        .status(401)
        .send({ message: "You're not authorised to edit this todo" });
    }
    return res.status(200).send({ todo });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

router.delete("/:todoId", authenticate, async (req, res) => {
  try {
    console.log(req.id);
    const todo = await Todo.findOneAndDelete({
      _id: req.params.todoId,
      userId: req.id,
    })
      .lean()
      .exec();
    if (!todo) {
      return res
        .status(401)
        .send({ message: "You're not authorised to delete this todo" });
    }
    return res.status(200).send({ todo });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

module.exports = router;
