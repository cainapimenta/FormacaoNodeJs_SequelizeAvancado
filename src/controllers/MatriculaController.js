const ControllerBase = require('./ControllerBase.js');
const MatriculaServices = require('../services/MatriculaServices.js');

const matriculaServices = new MatriculaServices();

class MatriculaController extends ControllerBase {
	constructor() {
		super(matriculaServices);
	}
}

module.exports = MatriculaController;