var mysql = require('mysql');
var db = require ('./db_connection.js');

/*DATABASE CONFIGURATION*/
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM winery;';

    connection.query(query, function(err,result) {
        callback(err, result);

    });
};

exports.getInfo = function(winery_id, callback) {
    var query = 'CALL winery_getinfo(?)';
    var queryData = [winery_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params,callback){
    var query = 'INSERT INTO winery (name,varietals,region_id) ' +
        'VALUES (?,?,?)';

    var queryData = [params.name, params.varietals,params.region_id];

    connection.query(query, queryData, function(err,result){
        callback(err,result);
    });
};



exports.update = function(params,callback) {
    var query = 'UPDATE winery SET name = ?,varietals = ?' +
        'WHERE winery_id = ?';
    var queryData = [params.name, params.varietals,params.winery_id];

    connection.query(query, queryData, function(err,result){
        callback(err,result);
    });
};