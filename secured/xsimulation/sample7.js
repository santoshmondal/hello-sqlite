/**
 * Created by santosh on 2/7/17.
 */
var dbManager = require('./db/DbManager');
var db = dbManager.db;


db.serialize(function(){
    dbManager.execDML();

    var stmt = db.prepare("INSERT INTO user_info VALUES (?)");

    /* PARAM AS ARGUMENT REFERENCE */
    for (var i = 0; i < 10; i++) {
        stmt.run("PARAM_SIMPLE " + i);
    }

    /* PARAM ARRAY REFERENCE */
    for (var i = 0; i < 10; i++) {
        stmt.run(["PARAM_AS_ARRAY " + i]);
    }
    stmt.finalize();

    /* NAMED PARAM REFERENCE */
    var stmt = db.prepare("INSERT INTO user_info VALUES ($info)");
    for (var i = 0; i < 10; i++) {
        stmt.run({$info : "NAMED_PARAM"});
    }
    stmt.finalize();


    db.each("SELECT rowid AS id, info FROM user_info", function(err, row) {
        console.log(row.id + ": " + row.info);
    });
});

db.close();