/**
 * Created by santosh on 2/7/17.
 */
var path = require('path');
var fs = require('fs');

var LOG_DIR_PATH = "/var/log/mbl/";
var LOG_MAX_FILE = 5;
var LOG_MAX_SIZE = 5242880; // 20MB

checkLogPath();
var APP_ROOT_PATH = path.dirname(path.dirname(path.dirname(__filename))) + path.sep;


var config = {

};


function checkLogPath() {
    try{
        fs.lstatSync(LOG_DIR_PATH).isDirectory();
        fs.accessSync(LOG_DIR_PATH, fs.W_OK);
    } catch(e){
        var dir = "xlogs/";
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }

        LOG_DIR_PATH = dir + "/";
    }
}


module.exports = config;