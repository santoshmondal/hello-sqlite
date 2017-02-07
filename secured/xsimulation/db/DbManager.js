'use strict';
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.cached.Database('development.sqlite3');

var dbManager = {};

var dmlSql = {
    USER_INFO : "CREATE TABLE if not exists USER_INFO (info TEXT)",
    PRODUCT :   "CREATE TABLE if not exists PRODUCT (info TEXT)",
    SALES :     "CREATE TABLE if not exists SALES (info TEXT)",
    PURCHASE :  "CREATE TABLE if not exists PURCHASE (info TEXT)",
};

dbManager.db = db;

dbManager.execDML = function() {
    console.log("EXECUTE DML STATMENTS");


    db.serialize(function(){

        db.run(dmlSql.USER_INFO);
        db.run(dmlSql.PRODUCT);
        db.run(dmlSql.PURCHASE);
        db.run(dmlSql.SALES);
    });
};

module.exports = dbManager;
