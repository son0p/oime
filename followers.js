// List following and followers from several accounts

var users = ['debrucesami',
	     'providenciacol',
	     'fede2001',
	     'reygordiflon',
	     'thecolombians',
	     'elmismosebas',
	     'unloquer',
	     'estebangiraldo',
	     'tarmacreggae',
	     '_Donkristobal_',
	     'selovendoco',
	     'pulpomancito',
	     'saleconelsol',
	     'aerolineaada'
	    ];
  var values = [];
//var scoreArray = [];

function follow(user, callback) {
    var page = require('webpage').create();
    page.open('https://twitter.com/' + user, function (status) {
        if (status === 'fail') {
            console.log(user + ': ?');
        } else {
            var data = page.evaluate(function () {
                return document.querySelector('div.default-footer ul.stats.js-mini-profile-stats li a.js-nav[data-element-term=follower_stats] strong').innerText
            });
	    //console.log(  Date.now() + ',' + + ',' + user);
	  
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

