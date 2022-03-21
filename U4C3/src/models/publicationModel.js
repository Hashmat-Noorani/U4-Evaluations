const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("publication", publicationSchema);
