"use strict";

// 모듈
const express = require("express"); // require통해 express 모듈 다운
const app = express(); // express 실행시켜 변수에 넣음

// 라우팅
const home = require("./src/routes/home"); // 만든 js 폴더를 불러오는 것, 상대적으로 명시, 저 파일에 있는 js 코드를 읽어와줘 -> index.js 코드 읽어옴

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`)); // 정적 경로로 지정, 현재 디렉토리 네임을 가져와서 src에 public이라는 폴더를 만들어줌

app.use("/", home); // use -> 미들웨어를 등록해주는 메소드, '/'경로로 들어오면 home으로 보내줌(index.js 파일로 이동하여 경로에 따른 해당 콜백함수 실행)

module.exports = app;
