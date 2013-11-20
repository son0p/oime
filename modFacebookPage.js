
var scrapFacebookPage= function( userFacebook ) {
    var page = require('webpage').create();
    page.open('https://www.facebook.com/' + userFacebook, function (status) {
        if (status === 'fail') {
           // console.log(user + ': ?');
        } else {

	    //scrap followers
            var data = page.evaluate(function () {
                return document.querySelector('#pagelet_timeline_likes_nav_top._5h60 span' ).innerHTML
            });
	    // blow out decimal point
	    likesFacebook = parseFloat(data.replace(/,/g, ''));
	   
	    page.close();
	    
	    // vars
	    fbUser = userFacebook;
	    fbLikes= likesFacebook;

	   
	  // call scrap	      
	    doScrap();
	}

   });
}



var doScrap = function( doScrap ) {
    console.log( fbUser, fbLikes );
   
    phantom.exit();   
};


/*
/ Passing arguments from console
*/
 
var system = require('system');
if (system.args.length === 1) {
    console.log('usage:  userTest.js [FacebookPage ] ');
    phantom.exit();
} else {
    system.args.forEach(function (arg, i) {
    });


    userFacebook =  system.args[1];
    scrapFacebookPage(userFacebook);  
}
