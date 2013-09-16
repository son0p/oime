// List following and followers from several accounts

var users = ['dbammedellin',
	     'estebangira',
	     'SaleConElSol',
	     'lion.reggae.music',
	     'Providenciamusic'
	     
	    ];
  var values = [];
//var scoreArray = [];

function follow(user, callback) {
    var page = require('webpage').create();
    page.open('https://www.facebook.com/' + user, function (status) {
        if (status === 'fail') {
            console.log(user + ': ?');
        } else {
            var data = page.evaluate(function () {
                return document.querySelector('#pagelet_timeline_likes_nav_top._5h60 span' ).innerHTML
            });
	   // console.log(  Date.now() + ',' + + ',' + user);
	  
	    values[values.length] = parseFloat(data.replace(/,/g, ''));
	   		   
	}
	
	page.close();

        callback.apply();

    });

}



function process() {
    if (users.length > 0) {
        var user = users[0];
        users.splice(0, 1);
        follow(user, process);
	
    } else {
	console.log(Date.now() + "," + values);     
        phantom.exit();
    }
}

function followingList() {
    if (users.length > 0) {
        var user = users[0];
        users.splice(0, 1);
        follow(user, process);
	
    } else {
        phantom.exit();
    }
}

process();

