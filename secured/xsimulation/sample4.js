/**
 * Created by santosh on 2/7/17.
 */
var dbManager = require('./db/DbManager');
var db = dbManager.db;


console.log(db);
dbManager.execDML();

db.close();