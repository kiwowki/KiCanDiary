const mongoose = require("mongoose");
const { Schema } = mongoose;

const correctSchema = new mongoose.Schema(
    {
        wrong: String,
        correct: String,
        correctNum: Number,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { collection: "correction", timestamps: true }
);

const Correction = mongoose.model("correction", correctSchema);

module.exports = { Correction };