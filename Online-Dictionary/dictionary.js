var express = require("express");
var word = require('./word');
const path = require("path");
var mysql = require('mysql');

var app = express();

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "dict.html"));
})

app.post('/lookup',express.urlencoded(), function (req, res) {


    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1234",
        database: "entries"
    });
    
    var w = req.body.word;
    word.searchWord(con, w, function(err, result){
        res.send(result);
    });
});

app.listen(3000, function () {
    console.log("Server is running")
});
