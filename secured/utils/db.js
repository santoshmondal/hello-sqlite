/**
 * Created by santosh on 2/7/17.
 */
var config = require('./config');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(config.DIR_SECURED + "data/munsi.db");


module.exports = db;