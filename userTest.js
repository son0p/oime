


var user = 0;


//var scoreArray = [];

function scrapTwitter(user) {
    var page = require('webpage').create();
    page.open('https://twitter.com/' + user, function (status) {
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

	    //scrap facebook band likes
	    

	    //extract the decimal point to make an Int
	    twitterFollower = parseFloat(twitterFollower.replace(/,/g, ''));
	    twitterFollowing = parseFloat(twitterFollowing.replace(/,/g, ''));
	    twitterTweet = parseFloat(twitterTweet.replace(/,/g, ''));
	
	    page.close();

	

	    //log result in Json friendly
	    return console.log('{time:"'+ Date.now() + '",' +'user:"'+ user + '",'
			+ '"twitterFollower:"' + twitterFollower
			+ '"twitterFollowing:"' + twitterFollowing 
			+ '"twitterTweet:"' + twitterTweet
			+ '"}');
		  


	    phantom.exit();

	}
    });
}


scrapTwitter('providenciacol');

