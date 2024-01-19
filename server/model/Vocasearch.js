const mongoose = require("mongoose");
const { Schema } = mongoose;

const vocasearchSchema = new mongoose.Schema(
    {
        word: String,
        meaning: String,
        vocalistNum: Number,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { collection: "vocasearch", timestamps: true }
);

const Vocasearch = mongoose.model("Vocasearch", vocasearchSchema);

module.exports = { Vocasearch };
