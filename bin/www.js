"use strict";

const app = require("../app"); // 보내는게 없으면 받질 못한다.
const PORT = 3000; // 뭐든지 변수로 지정해주는게 좋음

app.listen(PORT, () => {
  console.log("서버 가동");
}); //서버 띄움 3000번 포트로 열어달라, 두번째 파라미터 콜백함수 넘길 수 있음
