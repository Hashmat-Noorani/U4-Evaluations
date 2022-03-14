const mongoose = require("mongoose");

const masterSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      unique: true,
    },
    relManId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    branchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "branch",
      required: true,
    },
    balance: { type: Number, default: 0 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("master", masterSchema);
