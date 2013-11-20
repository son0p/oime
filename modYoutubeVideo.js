
var scrapYoutubeVideo = function( videoLink ) {
    var page = require('webpage').create();
    page.open( videoLink, function (status) {
        if (status === 'fail') {
           // console.log(user + ': ?');
        } else {

	    //scrap Video Views
            var data = page.evaluate(function () {
                return document.querySelector('#watch7-views-info SPAN.watch-view-count' ).innerText
            });
	    // blow out decimal point
	    videoViews = parseFloat(data.replace(/,/g, ''));

	    //scrap Video Title
            var data = page.evaluate(function () {
                return document.querySelector('#watch-headline-title.yt  SPAN#eow-title.watch-title.yt-uix-expander-head' ).innerText
            });
	    videoName = data;
	   
	   
	    page.close();
	    
	    // vars
	    ytVideoLink = videoLink;
	    ytVideoName = videoName;
	    ytVideoViews = videoViews;

	   
	  // call scrap	      
	    doScrap();
	}

   });
}



var doScrap = function( doScrap ) {
    console.log( ytVideoLink, ytVideoName, ytVideoViews );
   
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


    videoLink =  system.args[1];
    scrapYoutubeVideo(videoLink);  
}
