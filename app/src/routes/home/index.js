"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl"); // 파일 불러옴

router.get("/", ctrl.output.home); // ctrl에 있는 home 객체 접근 , hello라는 화면을 출력해주는구나 명시해주는게 좋음
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

module.exports = router; // 외부 파일에 사용할 수 있도록 외부로 내보내는 코드
