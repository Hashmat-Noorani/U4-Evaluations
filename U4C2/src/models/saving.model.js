const mongoose = require("mongoose");

const savingSchema = new mongoose.Schema(
  {
    masterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "master",
      required: true,
    },
    account_number: { type: Number, required: true, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("saving", savingSchema);
