"use strict";

// home이라는 컨트롤러 함수를 만들고, 이를 외부에서 사용해준다.
const home = (req, res) => {
  // 나는 이 루트에 왔을 때, 응답을 해줄거야. 그 응답은 해당 파일 코드를 렌더 해주는거야.
  res.render("home/index"); //도메인에 이동해주는 코드, views는 이미 views라는 폴더로 지정했으므로 안써도 됨
};

const login = (req, res) => {
  res.render("home/login");
};

// 꼭 내보내기 해야함. 그래야 밖에서 사용 가능
module.exports = {
  home,
  login,
};
