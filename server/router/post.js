const express = require('express')
const router = express.Router()
// 스키마

// 스키마
const { User } = require('../model/User.js')
const { Counter } = require('../model/Counter.js')
const { Post } = require('../model/Post.js')

router.post('/write', (req, res) => {
    let temp = {
        title: req.body.title,
        content: req.body.content,
    }

    Counter.findOne({ name: 'counter' })
        .exec()
        .then((counter) => {
            temp.postNum = counter.postNum

            User.findOne({ uid: req.body.uid })
                .exec()
                .then((userInfo) => {
                    temp.author = userInfo.uid

                    const DiaryWrite = new Post(temp)
                    DiaryWrite.save().then(() => {
                        Counter.updateOne(
                            { name: 'counter' },
                            { $inc: { postNum: 1 } }
                        ).then(() => {
                            res.status(200).json({ success: true })
                        })
                    })
                })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false })
        })
})

router.get('/list/:uid', (req, res) => {
    const userId = req.params.uid
    console.log(userId)

    User.findOne({ uid: userId })
        .exec()
        .then((user) => {
            console.log(user, 'user')
            if (!user) {
                throw new Error('User not found')
            }
            return Post.find({ author: user.uid }).exec()
        })
        .then((result) => {
            console.log(result, 'reuslt')
            if (result.length === 0) {
                res.status(200).json({
                    success: true,
                    message: 'No posts found for this user',
                    postList: result,
                })
            } else {
                console.log({ success: true, postList: result }, 'cons')
                res.status(200).json({ success: true, postList: result })
            }
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false, error: err.toString() })
        })
})

router.get(`/view/:postNum`, (req, res) => {
    const postNum = req.params.postNum
    console.log(postNum)
    Post.findOne({ postNum: postNum })
        .then((result) => {
            res.status(200).json({ success: true, post: result })
        })
        .catch((err) => {
            res.status(400).json({ success: false })
            console.log(err, 'error')
        })
})

router.put(`/update/:postNum`, (req, res) => {
    const postNum = req.params.postNum
    const { title, content } = req.body;

    Post.findOne({ postNum: postNum }).exec().then((post) => {
        return post.updateOne({ title, content });
    }).then(() => {
        res.status(200).json({ success: true })
    })
        .catch((err) => {
            res.status(400).json({ success: false })
            console.log(err)
        })
})

router.delete(`/delete/:postNum`, (req, res) => {
    const postNum = req.params.postNum
    console.log(postNum)

    Post.findOne({ postNum: postNum }).exec().then((post) => {
        return post.deleteOne()
    }).then(() => {
        res.status(200).json({ success: true })
    }).catch((err) => {
        res.status(400).json({ success: false })
        console.log(err)
    })
})

module.exports = router

