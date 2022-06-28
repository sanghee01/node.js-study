const express = require("express"); // require통해 express 모듈 다운
const app = express(); // express 실행시켜 변수에 넣음

app.get("/", (req, res) => {
  res.send("여기는 루트입니다.");
});

app.get("/login", (req, res) => {
  res.send("여기는 로그인 화면입니다.");
});

app.listen(3000, () => {
  console.log("서버 가동");
}); //서버 띄움 3000번 포트로 열어달라, 두번째 파라미터 콜백함수 넘길 수 있음
