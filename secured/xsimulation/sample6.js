/**
 * Created by santosh on 2/7/17.
 */
var dbManager = require('./db/DbManager');
var db = dbManager.db;


db.serialize(function(){
    var stmt = db.prepare("INSERT INTO user_info VALUES (?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM user_info", function(err, row) {
        console.log(row.id + ": " + row.info);
    });
});

db.close();