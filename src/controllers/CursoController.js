const ControllerBase = require('./ControllerBase.js');
const CursoServices = require('../services/CursoServices.js');

const cursoServices = new CursoServices();

class CursoController extends ControllerBase {
	constructor() {
		super(cursoServices);
	}
}

module.exports = CursoController;