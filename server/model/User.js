const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        userNum: Number,
<<<<<<< HEAD
        Email: String,
        Name: String,
=======
        email: String,
        displayName: String,
        uid: String,
>>>>>>> edf68676282f59e6f92b1ab0238123c4b7190137
    },
    { collection: "users" }
);

const User = mongoose.model("User", userSchema);
module.exports = { User };