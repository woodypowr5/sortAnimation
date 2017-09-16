var UI = require('./UI/UI.js');
var BLL = require('./BLL/BLL.js');
var Controllers = require('./Controllers/Controllers.js');

window.animationApp = function(){

	var UI = function(){
		return UI;
	}
	var BLL = function(){
		return BLL;
	}
	var Controllers = function(){
		return Controllers;
	}

	return {
		UI: UI,
		BLL: BLL,
		Controllers: Controllers
	}
};
		
module.exports = window.animationApp;