const ControllerBase = require('./ControllerBase.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends ControllerBase {
	constructor() {
		super(pessoaServices);
	}

	async getAulasMatriculadas(req, res) {
		try {
			const { estudanteId } = req.params;
			const listaAulasMatriculadas = await pessoaServices.getAulasMatriculadas(Number(estudanteId));

			res.status(200).json(listaAulasMatriculadas);
		} catch (error) {
			//error
		}
	}
}

module.exports = PessoaController;