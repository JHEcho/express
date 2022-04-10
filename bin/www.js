"use strict"; 

const app = require("../app");

// 포트 설정
const PORT = 3000; 

app.listen(PORT, ()=> {
    console.log("서버 가동");
});
