const express = require('express');
const path = require("path");
const app = express();
const port = 5050;

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log("run -->" + port);
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