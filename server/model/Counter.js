const mongoose = require("mongoose");
const countSchema = new mongoose.Schema(
    {
        name: String,
        postNum: Number,
        userNum: Number,
        vocalistNum: Number,
        vocaNum: Number,
    },
    { collection: "counter" });
const Counter = mongoose.model("Counter", countSchema);
module.exports = { Counter };