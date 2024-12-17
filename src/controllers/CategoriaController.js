const ControllerBase = require('./ControllerBase.js');
const CategoriaServices = require('../services/CategoriaServices.js');

const categoriaServices = new CategoriaServices();

class CategoriaController extends ControllerBase {
	constructor() {
		super(categoriaServices);
	}
}

module.exports = CategoriaController;