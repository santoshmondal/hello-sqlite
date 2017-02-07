/**
 * Created by santosh on 2/7/17.
 */
var db = require('./db');

var dml = {};

dml.AREA = {
    "name" : "AREA",
    "desc" : "CREATE TABLE if not exists AREA (info TEXT)"
};


dml.COMBI_DETAILS = {
    "name" : "COMBI_DETAILS",
    "desc" : "CREATE TABLE if not exists COMBI_DETAILS (info TEXT)"
}


dml.CRATE_GL = {
    "name" : "CRATE_GL",
    "desc" : "CREATE TABLE if not exists CRATE_GL (info TEXT)"
}


dml.DC = {
    "name" : "DC",
    "desc" : "CREATE TABLE if not exists DC (info TEXT)"
}


dml.DC_DETAILS = {
    "name" : "DC_DETAILS",
    "desc" : "CREATE TABLE if not exists DC_DETAILS (info TEXT)"
}


dml.DC_PM_DETAILS = {
    "name" : "DC_PM_DETAILS",
    "desc" : "CREATE TABLE if not exists DC_PM_DETAILS (info TEXT)"
}


dml.DC_PUR = {
    "name" : "DC_PUR",
    "desc" : "CREATE TABLE if not exists DC_PUR (info TEXT)"
}

dml.DC_PUR_DETAILS = {
    "name" : "DC_PUR_DETAILS",
    "desc" : "CREATE TABLE if not exists DC_PUR_DETAILS (info TEXT)"
}

dml.DC_SM_DETAILS = {
    "name" : "DC_SM_DETAILS",
    "desc" : "CREATE TABLE if not exists DC_SM_DETAILS (info TEXT)"
}

dml.DISP = {
    "name" : "DISP",
    "desc" : "CREATE TABLE if not exists DISP (info TEXT)"
}

dml.GL = {
    "name" : "GL",
    "desc" : "CREATE TABLE if not exists GL (info TEXT)"
}

dml.INV = {
    "name" : "INV",
    "desc" : "CREATE TABLE if not exists INV (info TEXT)"
}

dml.INV_DETAILS = {
    "name" : "INV_DETAILS",
    "desc" : "CREATE TABLE if not exists INV_DETAILS (info TEXT)"
}

dml.INV_DETAILS2 = {
    "name" : "INV_DETAILS2",
    "desc" : "CREATE TABLE if not exists INV_DETAILS2 (info TEXT)"
}

dml.INV_M_DETAILS = {
    "name" : "INV_M_DETAILS",
    "desc" : "CREATE TABLE if not exists INV_M_DETAILS (info TEXT)"
}

dml.INV_NO = {
    "name" : "INV_NO",
    "desc" : "CREATE TABLE if not exists INV_NO (info TEXT)"
}

dml.PAYC = {
    "name" : "PAYC",
    "desc" : "CREATE TABLE if not exists PAYC (info TEXT)"
}

dml.PO = {
    "name" : "PO",
    "desc" : "CREATE TABLE if not exists PO (info TEXT)"
}

dml.PO_DETAILS = {
    "name" : "PO_DETAILS",
    "desc" : "CREATE TABLE if not exists PO_DETAILS (info TEXT)"
}

dml.POM_DETAILS = {
    "name" : "POM_DETAILS",
    "desc" : "CREATE TABLE if not exists POM_DETAILS (info TEXT)"
}

dml.PREV_RATE = {
    "name" : "PREV_RATE",
    "desc" : "CREATE TABLE if not exists PREV_RATE (info TEXT)"
}


dml.PROD = {
    "name" : "PROD",
    "desc" : "CREATE TABLE if not exists PROD (info TEXT)"
}

dml.PROD_LOC = {
    "name" : "PROD_LOC",
    "desc" : "CREATE TABLE if not exists PROD_LOC (info TEXT)"
}

dml.PRODM_GROUP = {
    "name" : "PRODM_GROUP",
    "desc" : "CREATE TABLE if not exists PRODM_GROUP (info TEXT)"
}


dml.PRODS_GROUP = {
    "name" : "PRODS_GROUP",
    "desc" : "CREATE TABLE if not exists PRODS_GROUP (info TEXT)"
}


dml.PUR = {
    "name" : "PUR",
    "desc" : "CREATE TABLE if not exists PUR (info TEXT)"
}

dml.PUR_DETAILS = {
    "name" : "PUR_DETAILS",
    "desc" : "CREATE TABLE if not exists PUR_DETAILS (info TEXT)"
}

dml.PUR_M_DETAILS = {
    "name" : "PUR_M_DETAILS",
    "desc" : "CREATE TABLE if not exists PUR_M_DETAILS (info TEXT)"
}

dml.REMARKS = {
    "name" : "REMARKS",
    "desc" : "CREATE TABLE if not exists REMARKS (info TEXT)"
}


dml.SAC = {
    "name" : "SAC",
    "desc" : "CREATE TABLE if not exists SAC (info TEXT)"
}


dml.SMAN = {
    "name" : "SMAN",
    "desc" : "CREATE TABLE if not exists SMAN (info TEXT)"
}


dml.SO = {
    "name" : "SO",
    "desc" : "CREATE TABLE if not exists SO (info TEXT)"
}


dml.SO_DETAILS = {
    "name" : "SO_DETAILS",
    "desc" : "CREATE TABLE if not exists SO_DETAILS (info TEXT)"
}


dml.SO_DETAILS2 = {
    "name" : "SO_DETAILS2",
    "desc" : "CREATE TABLE if not exists SO_DETAILS2 (info TEXT)"
}


dml.SO_M_DETAILS = {
    "name" : "SO_M_DETAILS",
    "desc" : "CREATE TABLE if not exists SO_M_DETAILS (info TEXT)"
}


dml.STK = {
    "name" : "STK",
    "desc" : "CREATE TABLE if not exists STK (info TEXT)"
}


dml.VAN = {
    "name" : "VAN",
    "desc" : "CREATE TABLE if not exists VAN (info TEXT)"
}


/**
 * CREATE TABLES
 *
 * Loop through all dml property of type object
 * and having subdocument field 'desc'.
 *
 */
dml.exec = function() {
    for(var k in dml) {

        if(typeof dml[k] == 'object' && dml[k].desc) {
            console.log(dml[k]);

            db.serialize(function(){
                db.run(dml[k].desc);
            });

        }
    }
};

module.exports = dml;

//dml.exec();
