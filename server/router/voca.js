const express = require('express')
const router = express.Router()
// 스키마
const { User } = require('../model/User.js')
const { Counter } = require('../model/Counter.js')
const { Vocasearch } = require('../model/Vocasearch.js')
const { Vocawrite } = require('../model/Voca.js')
const { Correction } = require('../model/Correct.js')

router.post('/searchlist', async (req, res) => {
    const List = req.body.data
    const uid = req.body.uid
    const result = []

    try {
        for (let i = 0; i < List.length; i++) {
            const item = List[i]
            const key = item[0]
            const value = item[1]
            const data = [key, value]
            result.push(data)

            let temp = {
                meaning: key,
                word: value,
                uid: uid,
            }

            const counter = await Counter.findOne({ name: 'counter' }).exec()
            temp.vocalistNum = counter.vocalistNum

            const userInfo = await User.findOne({ uid: temp.uid }).exec()
            temp.author = userInfo._id

            const VocaList = new Vocasearch(temp)
            await VocaList.save()

            await Counter.updateOne(
                { name: 'counter' },
                { $inc: { vocalistNum: 1 } }
            )
        }

        res.status(200).json({ success: true })
    } catch (err) {
        console.log(err)
        res.status(400).json({ success: false })
    }
})

router.post('/showsearchlist/:uid', async (req, res) => {
    const uid = req.params.uid
    User.findOne({ uid: uid })
        .exec()
        .then((user) => {
            console.log(user, 'user // showsearchlist')
            if (!user) {
                throw new Error('User not found')
            }
            return Vocasearch.find({ author: user._id }).limit(50).exec()
        })
        .then((result) => {
            if (result.length > 0) {
                console.log(result, 'result')
                res.status(200).json({ success: true, vocasearchList: result })
            }
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json({ success: false, message: err.message })
        })
})

router.post('/vocalist', async (req, res) => {
    const List = req.body.data
    const uid = req.body.uid
    console.log(uid)

    try {
        const userInfo = await User.findOne({ uid: uid }).exec()
        if (!userInfo) {
            throw new Error('User not found')
        }

        const result = List.map(async (item) => {
            let temp = {
                meaning: item.meaning,
                word: item.word,
                uid: uid,
                author: userInfo._id,
            }
            let id = item._id

            const counter = await Counter.findOne({ name: 'counter' }).exec()
            temp.vocaNum = counter.vocaNum

            const MyVoca = new Vocawrite(temp)
            await MyVoca.save()

            await Vocasearch.deleteOne({ _id: id }).exec()
            await Counter.updateOne(
                { name: 'counter' },
                { $inc: { vocaNum: 1 } }
            )

            return temp
        })

        await Promise.all(result)
        res.status(200).json({ success: true })
    } catch (err) {
        console.log(err)
        res.status(400).json({ success: false })
    }
})

router.post('/showvocalist/:uid', async (req, res) => {
    const uid = req.params.uid
    console.log(uid)
    User.findOne({ uid: uid })
        .exec()
        .then((user) => {
            console.log(user, 'user')
            if (!user) {
                throw new Error('User not found')
            }
            return Vocawrite.find({ author: user._id }).exec()
        })
        .then((result) => {
            if (result.length > 0) {
                res.status(200).json({ success: true, vocaList: result })
            }
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json({ success: false, message: err.message })
        })
})

router.post('/vocadelete', async (req, res) => {
    try {
        let data = req.body.id
        console.log(data)
        for (let id of data) {
            await Vocawrite.deleteOne({ _id: id }).exec()
        }
        res.status(200).json({ success: true })
    } catch (err) {
        console.error(err)
        res.status(500).json({ success: false, message: err.message })
    }
})

router.post('/correctlist', async (req, res) => {
    const List = req.body.data
    const uid = req.body.uid
    const result = []
    console.log(List)

    try {
        for (let i = 0; i < List.length; i++) {
            const item = List[i]
            const wrong = item[0]
            const correct = item[1]
            const data = [wrong, correct]
            result.push(data)

            let temp = {
                wrong: wrong,
                correct: correct,
                uid: uid,
            }

            const counter = await Counter.findOne({ name: 'counter' }).exec()
            temp.correctNum = counter.correctNum

            const userInfo = await User.findOne({ uid: temp.uid }).exec()
            temp.author = userInfo._id

            const CorrectList = new Correction(temp)
            await CorrectList.save()

            await Counter.updateOne(
                { name: 'counter' },
                { $inc: { correctNum: 1 } }
            )
        }
        res.status(200).json({ success: true })
        console.log('success')
    } catch (err) {
        console.log(err)
        res.status(400).json({ success: false })
    }
})

router.get('/showcorrectlist/:uid', async (req, res) => {
    const uid = req.params.uid
    User.findOne({ uid: uid })
        .exec()
        .then((user) => {
            console.log(user, 'userCorrect')
            if (!user) {
                throw new Error('User not found')
            }
            return Correction.find({ author: user._id }).limit(50).exec()
        })
        .then((result) => {
            if (result.length > 0) {
                res.status(200).json({ success: true, correctList: result })
            } else {
                res.status(200).json({ success: true, correctList: [] })
            }
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json({ success: false, message: err.message })
        })
})

router.post('/correctdelete', async (req, res) => {
    try {
        let data = req.body.id
        console.log(data)
        for (let id of data) {
            await Correction.deleteOne({ _id: id }).exec()
        }
        res.status(200).json({ success: true })
    } catch (err) {
        console.error(err)
        res.status(500).json({ success: false, message: err.message })
    }
})

module.exports = router
