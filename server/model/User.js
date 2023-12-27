const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        userNum: Number,
        Email: String,
        Name: String,
    },
    { collection: "users" }
);

const User = mongoose.model("User", userSchema);
module.exports = { User };