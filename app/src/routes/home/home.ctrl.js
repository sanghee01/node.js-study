"use strict";

const output = {
  // home이라는 컨트롤러 함수를 만들고, 이를 외부에서 사용해준다.
  home: (req, res) => {
    // 나는 이 루트에 왔을 때, 응답을 해줄거야. 그 응답은 해당 파일 코드를 렌더 해주는거야.
    res.render("home/index"); //도메인에 이동해주는 코드, views는 이미 views라는 폴더로 지정했으므로 안써도 됨
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["sanghee", "나개발", "김팀장"],
  psword: ["1234", "1234", "123456"],
};

const process = {
  login: (req, res) => {
    // 여기서 req는 front에서 전달한 req(요청) 데이터들을 담아두는 변수
    const id = req.body.id,
      psword = req.body.psword;

    if (users.id.includes(id)) {
      //만약 id가 있으면
      const idx = users.id.indexOf(id); // id의 index를 가져옴
      if (users.psword[idx] === psword) {
        return res.json({
          success: true, // success:true라는 object를 json으로 만들어서 res 프론트로 응답해주게 되는거. 실패했을땐 if문 밖
        });
      }
    }

    // 실패했을 땐(여기서 굳이 else안쓰는 이유는 위에 return 구문으로 나가기 때문)
    return res.json({
      success: false,
      msg: "로그인에 실패하였습니다.",
    });
  },
};

// 꼭 내보내기 해야함. 그래야 밖에서 사용 가능
module.exports = {
  output,
  process,
};
