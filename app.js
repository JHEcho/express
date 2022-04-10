const express = require("express");
const app = express();

// 앱 세팅
app.set("views", "./views"); //뷰 파일 경로
app.set("view engine", "ejs") // 뷰 엔진

app.get("/", (req, res) =>{
    res.render("home/index");
})

app.get("/login", (req, res) =>{
    res.render("home/login");
})

app.listen(3000, ()=> {
    console.log("서버 가동");
});
