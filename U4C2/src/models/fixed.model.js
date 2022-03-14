const mongoose = require("mongoose");

const fixedSchema = new mongoose.Schema(
  {
    masterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "master",
      required: true,
    },
    accNo: { type: Number, required: true, unique: true },
    bal: { type: Number, required: true },
    intRate: { type: Number, required: true },
    startDate: { type: String, required: true },
    maturityDate: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("fixed", fixedSchema);
