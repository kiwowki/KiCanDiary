<<<<<<< HEAD
const express = require("express");
const path = require("path");

const app = express();
const port = 5050;

// 추가(정적 파일(예: 이미지, 스타일시트, 스크립트)을 제공하기 위해 Express에 정적 미들웨어를 추가)
app.use(express.static(path.join(__dirname, "../client/build")));

app.listen(port, () => {
  console.log("listening --> " + port);
});

// 변경
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// 모든 페이지 설정
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
=======
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
>>>>>>> 95bcdf583fccaae0ce866789bd8d5e549b80203d
