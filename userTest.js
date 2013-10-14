var userTwitter
var foo
var userTw




var scrapTwitter= function(userTwitter) {
    var page = require('webpage').create();
    page.open('https://twitter.com/' + userTwitter, function (status) {
        if (status === 'fail') {
            console.log(user + ': ?');
        } else {

	    //scrap followers
            var twitterFollower = page.evaluate(function () {
                return document.querySelector('div.default-footer ul.stats.js-mini-profile-stats li a.js-nav[data-element-term=follower_stats] strong').innerText
            });

	    //scrap following
	    var twitterFollowing = page.evaluate(function () {
                return document.querySelector('div.default-footer ul.stats.js-mini-profile-stats li a.js-nav[data-element-term=following_stats] strong').innerText
            });

	    //scrap tweet
	    var twitterTweet = page.evaluate(function () {
                return document.querySelector('div.default-footer ul.stats.js-mini-profile-stats li a.js-nav[data-element-term=tweet_stats] strong').innerText
            });

	    //extract the decimal point to make an Int
	    twitterFollower = parseFloat(twitterFollower.replace(/,/g, ''));
	    twitterFollowing = parseFloat(twitterFollowing.replace(/,/g, ''));
	    twitterTweet = parseFloat(twitterTweet.replace(/,/g, ''));
		   
	    page.close();
	    
	    twUser = userTwitter;
	    twFollower= twitterFollower;
	    twFollowing = twitterFollowing; 
	    twTweet = twitterTweet;
	   
	    console.log(userTwitter + userFacebook);
	    scrapFacebook(userFacebook);	   
	  
	}

   });
}

var scrapFacebook = function (userFacebook) {
    var page = require('webpage').create();
    page.open('https://www.facebook.com/' + userFacebook, function (status) {
        if (status === 'fail') {
            console.log(userFacebook + ': ?');
        } else {
            var data = page.evaluate(function () {
                return document.querySelector('#pagelet_timeline_likes_nav_top._5h60 span' ).innerHTML
            });
	   // console.log(  Date.now() + ',' + + ',' + user);
	  
	    likesFacebook = parseFloat(data.replace(/,/g, ''));
	   		   
	}
	
	page.close();

	fbUser = userFacebook;
	fbLikes= likesFacebook;

        doScrap();

    });

}


var doScrap = function(doScrap) {

  
  
    
    console.log('{time:"'+ Date.now() + '",' +' user:"'+ twUser + '",'
			+ ' twitterFollower:"' + twFollower + '",'
			+ ' twitterFollowing:"' + twFollowing + '",'
			+ ' twitterTweet:"' + twTweet + '",'
		+ ' FacebookUser:"' + fbUser + '",'
		+ ' FacebookLikes:"' + fbLikes
			+ '"}');

  
    
    
    phantom.exit();   
};


/*
/ Passing arguments from console
*/
 
var system = require('system');
if (system.args.length === 1) {
    console.log('usage:  userTest.js [twitterUser] [facebookUser]');
    phantom.exit();
} else {
    system.args.forEach(function (arg, i) {
            console.log(i + ': ' + arg);

    });
    userTwitter = system.args[1];
    userFacebook = system.args[2];
   
    
    scrapTwitter(userTwitter);  
}



 




//  console.log(userTwitter);



/*
console.log('{time:"'+ Date.now() + '",' +'user:"'+ user + '",'
			+ '"twitterFollower:"' + twitterFollower
			+ '"twitterFollowing:"' + twitterFollowing 
			+ '"twitterTweet:"' + twitterTweet
			+ '"}');

*/
		  