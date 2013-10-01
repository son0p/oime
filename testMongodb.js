


/* 
* This example uses the node MongoDB module to connect to the local
* mongodb database on this virtual machine
*
* More here: http://mongodb.github.io/node-mongodb-native/markdown-docs/insert.html
*/

var exec = require('child_process').exec,
    child;
child = exec('cat dataTestJson.txt',
  function (error, stdout, stderr) {
      console.log(stdout, stderr);      
     
       if (error !== null) {
      console.log('exec error: ' + error);
    }
});



/*
//require node modules (see package.json)
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

//connect away
MongoClient.connect('mongodb://127.0.0.1:27017/mydb', function(err, db) {
  if (err) throw err;
  console.log("Connected to Database");

  

//simple json record
   

 var document = 	(child = exec('./phantomjs followersTest.js',
    function (error, stdout, stderr) {
        console.log(stdout, stderr);
	var result = JSON.parse(stdout);
    }
));
	//insert record
	db.collection('testData').insert(document, function(err, records) {
		if (err) throw err;
		console.log("Record added as "+records[0]._id);
	});
});



*/