const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    body: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: "book" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("comment", commentSchema);
