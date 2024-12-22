const ControllerBase = require('./ControllerBase.js');
const MatriculaServices = require('../services/MatriculaServices.js');

const matriculaServices = new MatriculaServices();

class MatriculaController extends ControllerBase {
	constructor() {
		super(matriculaServices);
	}

	async getAndCountAllMatriculas(req, res) {
		try {
			const { estudante_id } = req.params;
			const listaMatriculas = await this.service.getAndCount({
				estudante_id: Number(estudante_id),
				status: 'matriculado'
			});

			return res.status(200).json(listaMatriculas);
		} catch (error) {
			return res.status(400).json({ erro: error.message });
		}

	}
}

module.exports = MatriculaController;