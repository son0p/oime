/*
* Capture de console output from the script userTest.js
*/

	var exec = require('child_process').exec,
	child;
	child = exec('phantomjs userTest.js',
		     function stdout(error, stdout, stderr) {
		//	 console.log(stdout, stderr); 
		//	 return stdout;   //not working
			 data = stdout;
			// console.log(data)
			 if (error !== null) {
			     console.log('exec error: ' + error);
			 }
			 insertMongo();
		     });



/* 
*Insert in mongo 
*/



//require node modules (see package.json)
var insertMongo = function(){
    var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;


   
//connect away
MongoClient.connect('mongodb://127.0.0.1:27017/mydb', function(err, db) {
    if (err) throw err;
    console.log("Connected to Database");
 
    //simple json record
    //   {time:"1377649381310" , user:"debrucesami", twFollowers:"8300"}
 
    console.log(data);
   
    //insert record
    db.collection('testData').insert(data, function(err, records) {
		if (err) throw err;
		console.log("Record added as "+records[0]._id);

	});
});
};

//-----esto sería para intentar catpurar algo de lo que bota la terminal 

