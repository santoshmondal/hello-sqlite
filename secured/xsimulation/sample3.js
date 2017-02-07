/**
 * Created by santosh on 2/7/17.
 */
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('sample3.db');


console.log(db);
db.close();