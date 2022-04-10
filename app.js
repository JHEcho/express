const express = require("express");
const app = express();

app.listen(3000, ()=> {
    console.log("서버 가동");
});

//npm install express -s 설치