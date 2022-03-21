const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    age: Number,
    email: String,
    profileImages: [String],
    isAuthor: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("user", userSchema);
