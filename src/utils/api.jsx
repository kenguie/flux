var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = 'fd027cf7096db89';

module.exports = window.api = {
	get: function(url) {
		return fetch(rootUrl + url, {
			headers: {
				'Authorization': 'Client-ID ' + apiKey
			}
		})
		.then(function(response) {
			return response.json()
		})
		// .then(function(data){
		// 	console.log(data);
		// })
	}
}

/* 

usage: 

api.get('topics/defaults')
	.then(function(data){
		// do something with the data
	}

	*/