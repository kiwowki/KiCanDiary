const express = require('express');
const path = require("path");
// 데이터베이스
const mongoose = require("mongoose");
const app = express();
const port = 5050;
// DB, Firebase, navercloud key
const config = require("./config/key.js");
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// router
app.use("/api/user", require("./router/user.js"));
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

app.post("/api/translate", (req, res) => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('from', 'auto');
    encodedParams.set('to', 'en');
    encodedParams.set('text', req.);

    const options = {
        method: 'POST',
        url: 'https://google-translate113.p.rapidapi.com/api/v1/translator/text',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'a540682a8emshed4f5b41258ddc6p1937aejsn7dece9bebef5',
            'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
        },
        data: encodedParams,
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
})