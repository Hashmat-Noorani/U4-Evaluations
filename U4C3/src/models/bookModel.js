const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    likes: { type: Number, default: 0 },
    content: String,
    coverImage: [String],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    publicationId: { type: mongoose.Schema.Types.ObjectId, ref: "publication" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("book", bookSchema);
