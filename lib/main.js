var _ = require("underscore");


var Main = function( options ){
	// prerequisites
	options = options || {};


	// middleware
	return function(req, res, next){

	};

	return this;
}

Main.prototype = {

	// logic used to interpret a message
	request: function( key ){
		return this.data[key] || null;
	},

	// logic used to filter the response
	response: function( data ){

	}

}

module.exports = function( options ){
	return new Main( options );
}