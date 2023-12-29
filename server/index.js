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
