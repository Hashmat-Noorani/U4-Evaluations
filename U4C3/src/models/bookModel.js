const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    likes: { type: String, default: 0 },
    content: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "publication" },
    publicationId: { type: mongoose.Schema.Types.ObjectId, ref: "publication" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("book", bookSchema);
