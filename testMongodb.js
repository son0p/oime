/*
* Capture console output from  userTest.js (require phantomjs) and store it in data
*/

var exec = require('child_process').exec,child;
child = exec('phantomjs userTest.js',
	     function stdout(error, stdout, stderr) {
		 data = stdout.toString();
		 if (error !== null) {
		     console.log('exec error: ' + error);
		 }
		 insertMongo(data);
	     });
/* 
*Insert in mongodb
*/
//require node modules (see package.json)
var insertMongo = function(data){
    var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

    //connect away
    MongoClient.connect('mongodb://127.0.0.1:27017/mydb', function(err, db) {
	if (err) throw err;
	console.log("Connected to Database");
 
	//convert JSON text into objetc to insert in mongodb
	var document = eval('(' + data + ')');

	//insert record
	db.collection('testData').insert(document, function(err, records) {
	    if (err) throw err;
	    console.log("Record added as "+records[0]._id);
	
    });
});
};
