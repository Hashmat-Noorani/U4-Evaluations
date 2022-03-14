const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    IFSC: { type: String, required: true },
    MICR: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = mongoose.model("branch", branchSchema);
