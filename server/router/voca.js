const express = require("express");
const router = express.Router();
// 스키마
const { User } = require("../model/User.js");
const { Counter } = require("../model/Counter.js");
const { Vocasearch } = require("../model/Vocasearch.js")
const { Vocawrite } = require("../model/Voca.js")

router.post('/searchlist', async (req, res) => {
    const List = req.body.data;
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

            const counter = await Counter.findOne({ name: "counter" }).exec();
            temp.vocalistNum = counter.vocalistNum;

            const userInfo = await User.findOne({ uid: temp.uid }).exec();
            temp.author = userInfo._id;

            const VocaList = new Vocasearch(temp);
            await VocaList.save();

            await Counter.updateOne({ name: "counter" }, { $inc: { vocalistNum: 1 } });
        }

        res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
    }
});

router.post('/showsearchlist', async (req, res) => {
    try {
        const result = await Vocasearch.find().limit(50).exec();
        res.status(200).json({ success: true, vocasearchList: result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: err.message });
    }
});

router.post('/vocalist', async (req, res) => {
    const List = req.body.data;
    const uid = req.body.uid;

    try {

        const result = List.map(async item => {
            let temp = {
                meaning: item.meaning,
                word: item.word,
                uid: uid,
            }
            let id = item._id;

            const counter = await Counter.findOne({ name: "counter" }).exec();
            temp.vocaNum = counter.vocaNum;

            const userInfo = await User.findOne({ uid: temp.uid }).exec();
            temp.author = userInfo._id;

            const MyVoca = new Vocawrite(temp);
            await MyVoca.save();

            await Vocasearch.deleteOne({ _id: id }).exec();
            await Counter.updateOne({ name: "counter" }, { $inc: { vocaNum: 1 } });

            return temp;
        });

        await Promise.all(result);
        res.status(200).json({ success: true });

    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
    }
});

router.post('/showvocalist', async (req, res) => {
    try {
        const result = await Vocawrite.find().exec();
        res.status(200).json({ success: true, vocaList: result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: err.message });
    }
})

router.post('/delete', async (req, res) => {
    try {
        let data = req.body.id;
        console.log(data);
        for (let id of data) {
            await Vocawrite.deleteOne({ _id: id }).exec();
        }
        res.status(200).json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;