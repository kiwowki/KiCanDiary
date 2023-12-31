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
        content: req.body.content.insert,
    }

    Counter.findOne({ name: 'counter' })
        .exec()
        .then((counter) => {
            temp.postNum = counter.postNum

            User.findOne({uid: req.body.uid}).exec().then((userInfo) => {
                temp.author = userInfo.uid;
                
                const DiaryWrite = new Post(temp)
                DiaryWrite.save().then(() => {
                    Counter.updateOne(
                        { name: 'counter' },
                        { $inc: { postNum: 1 }}
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
    const userId = req.params.uid;
    console.log(userId)
    
    User.findOne({uid: userId}).exec()
    .then(user => {
        console.log(user, 'user')
        if (!user) {
            throw new Error('User not found');
        }
        return Post.find({author: user.uid}).exec() 
    })
    .then((result) => {
        console.log(result, 'reuslt') 
        if (result.length === 0) {
            res.status(200).json({success: true, message: 'No posts found for this user', postList: result})
        } else {
            console.log({success: true, postList: result}, "cons")
            res.status(200).json({success: true, postList: result})
        }
    })
    .catch((err) => {
        console.log(err)
        res.status(400).json({success: false, error: err.toString()})
    })
})

// router.get('list/:uid', async(req, res) => {
//     const userId = req.params.uid;
//     console.log(userId);

//     try {
//         const user = await User.findOne({ uid: userId}).exec()
//         console.log(user, 'user')

//         if(!user) {
//             throw new Error('User not found');
//         }

//         const posts = await Post.find({ author: user.uid}).exec()
//         console.log(posts, 'posts')

//         if(posts.length === 0) {
//             res.status(200).json({success: true, message: 'no posts'})
//         } else {
//             console.log({success: true, postList: posts}, "console.log")
//             res.status(200).json({ success: true, postList: posts })
//         }
//     } catch(err) {
//         console.log(err)
//         res.status(400).json({success: false, error: err.toString()})
//     }
// })


module.exports = router
