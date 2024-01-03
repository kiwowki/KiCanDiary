const mongoose = require("mongoose");
const { Schema } = mongoose;
const postSchema = new mongoose.Schema(
    {
        title: String,
        content: Schema.Types.Mixed,
        postNum: Number,
        image: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        // repleNum: {
        //     type: Number,
        //     default: 0,
        // }
    },
    { collection: "posts", timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };