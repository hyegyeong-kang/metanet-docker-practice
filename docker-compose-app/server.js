const express = require("express");
const redis = require("redis");

// redis 클라이언트 생성
const client = redis.createClient({
    host: "redis-server",
    port: 6379
});

client.set("number", 0);

const app = express(); // 서버 생성됨

app.get("/", (req, res) => {
    client.get("number", (err, number) => {
        res.send("숫자가 1씩 증가. 숫자:" + number);
        client.set("number", parseInt(number) + 1);
    });
});

app.listen(8082);
console.log('server is running...');

