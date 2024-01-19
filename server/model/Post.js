const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title: String,
        content: String,
        postNum: Number,
        author: {
            type: String,
            ref: "User",
            // foreignField: 'uid'
        }
    },
    { collection: "posts", timestamps: true}
);

const Post = mongoose.model("Post", postSchema);
module.exports = { Post };