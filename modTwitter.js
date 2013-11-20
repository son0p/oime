
var scrapTwitter= function(userTwitter) {
    var page = require('webpage').create();
    page.open('https://twitter.com/' + userTwitter, function (status) {
        if (status === 'fail') {
           // console.log(user + ': ?');
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
	   
	   // console.log(userTwitter + userFacebook);
	      
	    doScrap();
	}

   });
}



var doScrap = function(doScrap) {
    console.log(twUser, twFollower, twFollowing,twTweet );
   
    phantom.exit();   
};


/*
/ Passing arguments from console
*/
 
var system = require('system');
if (system.args.length === 1) {
    console.log('usage:  userTest.js [twitterUser] ');
    phantom.exit();
} else {
    system.args.forEach(function (arg, i) {
    });


    userTwitter =  system.args[1];
    scrapTwitter(userTwitter);  
}
