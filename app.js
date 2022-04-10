// 모듈
const express = require("express");
const app = express();

const PORT = 3000; // 포트 설정

// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views"); //뷰 파일 경로
app.set("view engine", "ejs") // 뷰 엔진

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

app.listen(PORT, ()=> {
    console.log("서버 가동");
});

