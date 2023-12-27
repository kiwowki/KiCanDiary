const express = require("express");
const router = express.Router();

// 스키마
const { User } = require("../model/User.js");


router.post("/join", (req, res) => {
});

router.post("/emailcheck", (req, res) => {
    User.findOne({ Email: req.body.Email })
        .exec()
        .then((result) => {
            let check = true;
            if (result) {
                check = false;
            }
            res.status(200).json({ success: true, check })
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
        })
})