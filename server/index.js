const express = require('express');
const path = require("path");
// 데이터베이스
const mongoose = require("mongoose");

const app = express();
const port = 5050;
// DB, Firebase, navercloud key
const config = require("./server/config/key.js");

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use("/api/user", require("./server/router/user.js"));

app.listen(port, () => {
    mongoose
        .connect(config.mongoURI)
        .then(() => {
            console.log("listening  --> " + port);
            console.log("mongoose --> connecting");
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})


let client_id = 'cME2G2vFlaLxdX1949Gv';
let client_secret = 'qdavN_uTpS';

app.post("/api/translate", (req, res) => {
    let searchword = req.body.search;
    console.log(searchword)
    var api_url = 'https://openapi.naver.com/v1/papago/n2mt';
    var request = require('request');
    var options = {
        url: api_url,
        form: { 'source': 'ko', 'target': 'en', 'text': searchword },
        headers: { 'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret }
    };
    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.status(200).json({ success: true, translation: body });
        } else {
            res.status(response.statusCode).json({ success: false, message: '번역 실패' });
            console.log('error = ' + response.statusCode);
        }
    });
})