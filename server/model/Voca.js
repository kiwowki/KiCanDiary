const mongoose = require("mongoose");
const { Schema } = mongoose;

const vocaSchema = new mongoose.Schema(
    {
        word: String,
        meaning: String,
        vocaNum: Number,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { collection: "vocawrite", timestamps: true }
);

const Vocawrite = mongoose.model("vocawrite", vocaSchema);

module.exports = { Vocawrite };
