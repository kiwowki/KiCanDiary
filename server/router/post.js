const express = require("express");
const router = express.Router();
// 스키마
const { Post } = require("../model/Post.js");
const { User } = require("../model/User.js");
const { Counter } = require("../model/Counter.js");

router.post("/write", (req, res) => {
    let temp = {
        title: req.body.title,
        content: req.body.content,
        uid: req.body.uid
    }

    Counter.findOne({ name: "counter" })
        .exec()
        .then((counter) => {
            temp.postNum = counter.postNum;

            User.findOne({ uid: temp.uid })
                .exec()
                .then((userInfo) => {
                    temp.author = userInfo._id;

                    const BlogWrite = new Post(temp)
                    BlogWrite
                        .save()
                        .then(() => {
                            Counter.updateOne({ name: "counter" }, { $inc: { postNum: 1 } }).then(() => {
                                res.status(200).json({ success: true });
                            })
                        })
                })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false })
        })
})

module.exports = router;