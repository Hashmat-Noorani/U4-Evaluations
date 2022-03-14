const mongoose = require("mongoose");

const fixedSchema = new mongoose.Schema(
  {
    masterId: {
          // 622efa53f1fe7fd0f505e36f
        // 622efa82f1fe7fd0f505e371
      type: mongoose.Schema.Types.ObjectId,
      ref: "master",
      required: true,
    },
    account_number: { type: Number, required: true, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    startDate: { type: String, required: true },
    maturityDate: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("fixed", fixedSchema);
