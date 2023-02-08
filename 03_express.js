"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get("/ashokit", function (req, res) {
    res.status(200).json({ "message": "welcome to type script with node js" });
});
app.listen(8030, function () {
    console.log("server started successfully!!!");
});
