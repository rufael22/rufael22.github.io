
var mysql = require('mysql');
var searchWord = function(connection, word, callback) {
    connection.connect(function (err) {
        if (err) {
            throw err;
        }


        connection.query("SELECT * FROM entries WHERE word=\"" + word + "\"", (err, result) => {
            if (err){
                callback("error", err);
            }

            else{
                var res = JSON.stringify(result);
                callback("success", res)
            }
        });
    });
}

exports.searchWord = searchWord;