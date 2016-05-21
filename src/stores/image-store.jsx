var Reflux = require('reflux');
var _ = require('lodash');
var Api = require('../utils/api');
var Actions = require('../actions');

module.exports = Reflux.createStore({
	listenables: [Actions],
	getImages: function(topicId) {
		Api.get('topics/' + topicId)
			.then(function(json){
				this.images = _.reject(json.data, function(image) { // json.data is an array - the function is run on each member of the array
					return image.is_album // lodash will reject every album - if this is true : is_album is a boolean
				}); 
				this.triggerChange();
			}.bind(this));
	},
	triggerChange: function() {
		this.trigger('change', this.images);
	}
});

