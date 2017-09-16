var BLL = require('../BLL/BLL.js');

class Register{
	constructor(numBins){
		this.numBins = numBins;
	}
	
	function populateRegister(){
		return BLL.Register.populate(numBins);
	}
	
	return{
		populateRegister: populateRegister
	}
}

module.exports = Register;