


/* 
* This example uses the node MongoDB module to connect to the local
* mongodb database on this virtual machine
*
* More here: http://mongodb.github.io/node-mongodb-native/markdown-docs/insert.html
*/



//require node modules (see package.json)
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

//connect away
MongoClient.connect('mongodb://127.0.0.1:27017/mydb', function(err, db) {
  if (err) throw err;
  console.log("Connected to Database");
 
//simple json record
  //   {time:"1377649381310" , user:"debrucesami", twFollowers:"8300"}

    var  document = {time:"1377649381310" , user:"debrucesami", twFollowers:"8300"}
	//insert record
    db.collection('testData').insert(document, function(err, records) {
		if (err) throw err;
		console.log("Record added as "+records[0]._id);

	});


});


//-----esto sería para intentar catpurar algo de lo que bota la terminal 

	var exec = require('child_process').exec,
	child;
	child = exec('cat dataTestJson.json',
		     function stdout(error, stdout, stderr) {
			// console.log(stdout, stderr);
			 return stdout;   //not working
						 
			 if (error !== null) {
			     console.log('exec error: ' + error);
			 }
		   
		     });

