const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        여기는 루트입니다.
    </body>
    </html>
    `);
})

app.get("/login", (req, res) =>{
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <input type="text" placeholder="아이디"><br>
            <input type="text" placeholder="비밀번호"><br>
            <button>로그인</button>
        </body>
        </html>`
    );
})

app.listen(3000, ()=> {
    console.log("서버 가동");
});

// 설명
// 비효율 적으로 화면을 띄워 보았다.