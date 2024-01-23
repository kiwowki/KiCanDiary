const express = require("express");
const router = express.Router();
// 스키마
// const { Post } = require("../model/Post.js");
const { User } = require("../model/User.js");
const { Counter } = require("../model/Counter.js");
const { Vocasearch } = require("../model/Vocasearch.js")
const { Vocawrite } = require("../model/Voca.js")

router.post('/searchlist', async (req, res) => {
    const List = req.body.data;
    console.log(List)
    const uid = req.body.uid;
    const result = [];
    try {
        for (let i = 0; i < List.length; i++) {
            const item = List[i];
            const key = item[0];

            const value = item[1];
            const data = [key, value];
            result.push(data);

            let temp = {
                meaning: key,
                word: value,
                uid: uid,
            }
            Counter.findOne({ name: "counter" })
                .exec()
                .then((counter) => {
                    temp.vocalistNum = counter.vocalistNum;

                    User.findOne({ uid: temp.uid })
                        .exec()
                        .then((userInfo) => {
                            temp.author = userInfo._id;

                            const VocaList = new Vocasearch(temp)
                            VocaList
                                .save()
                                .then(() => {
                                    Counter.updateOne({ name: "counter" }, { $inc: { vocalistNum: 1 } }).then(() => {
                                    });
                                });
                        });
                });
        }
        res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
    }
});

router.post('/showsearchlist', async (req, res) => {
    Vocasearch
        .find()
        .limit(50)
        .exec()
        .then((result) => {
            res.status(200).json({ success: true, vocasearchList: result })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false })
        })
})

router.post('/vocalist', async (req, res) => {
    const List = req.body.data;
    console.log(List)
    const uid = req.body.uid;
    try {
        let temp = {
            meaning: List[0].meaning,
            word: List[0].word,
            uid: uid,
        }
        console.log(temp)
        Counter.findOne({ name: "counter" })
            .exec()
            .then((counter) => {
                temp.vocaNum = counter.vocaNum;

                User.findOne({ uid: temp.uid })
                    .exec()
                    .then((userInfo) => {
                        temp.author = userInfo._id;

                        const MyVoca = new Vocawrite(temp)
                        MyVoca
                            .save()
                            .then(() => {
                                Counter.updateOne({ name: "counter" }, { $inc: { vocaNum: 1 } }).then(() => {
                                });
                            });
                    });
            });

        res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
    }
})





module.exports = router;