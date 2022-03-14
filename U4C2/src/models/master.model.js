const mongoose = require("mongoose");

const masterSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    //cos
    // 622ef3f927d1e03f01578a2a amir
    // 622ef41f27d1e03f01578a2c hash
    //emp
    // 622ef45027d1e03f01578a2e umar
    // 622ef47927d1e03f01578a30 tab
    // branch
    // 622ef51bbcbeaa1ddadbbcc8 jadeed
    // 622ef534bcbeaa1ddadbbcca kb
    // 622ef544bcbeaa1ddadbbccc tp
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
    balance: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("master", masterSchema);
