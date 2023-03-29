const express = require("express");

const PORT = 8082;

const app = express();

app.get("/", (req, res) => {
    res.send("HI");
});

app.listen(PORT);
console.log("Server in running..");