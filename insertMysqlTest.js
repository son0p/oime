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
	     'aerolineaada',
	     'promimascota',
	     'lionreggaemusic',
	     'mrbleat',
	     'panorama_laguna',
	     'lscfj',
	     'fonseca',
	     'clopezcorrea'
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

// Los resultados se escriben a través de un servicio a la base de datos (o esa es la idea)
// Example using HTTP POST operation

var page = require('webpage').create(),
    server = 'http://localhost/jardincosmico/repo/testPhantomjs/scrap_insert',
data = 'time=13334&user=445555';


page.open(server, 'post', data, function (status) {
    if (status !== 'success') {
        console.log('Unable to post!');
    } else {
        console.log(page.content);
    }
    phantom.exit();
});
