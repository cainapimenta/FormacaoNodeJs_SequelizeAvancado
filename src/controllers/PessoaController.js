const ControllerBase = require('./ControllerBase.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends ControllerBase {
	constructor() {
		super(pessoaServices);
	}

	async getAulasMatriculadas(req, res) {
		try {
			const { estudante_id } = req.params;
			const listaAulasMatriculadas = await pessoaServices.getAulasMatriculadas(Number(estudante_id));

			return res.status(200).json(listaAulasMatriculadas);
		} catch (error) {
			return res.status(500).json({ erro: error.message });
		}
	}

	async getAllMatriculas(req, res) {
		try {
			const { estudante_id } = req.params;
			const listaMatriculas = await pessoaServices.getAllMatriculas(Number(estudante_id));

			return res.status(200).json(listaMatriculas);
		} catch (error) {
			return res.status(400).json({ erro: error.message });
		}
	}

	async getAllByScope(req, res) {
		try {
			const models = await pessoaServices.getAllByScope();
			return res.status(200).json(models);
		} catch (error) {
			return res.status(500).json({ erro: error.message });
		}
	}

	async cancelPessoaAndMatricula(req, res) {
		try {
			const { estudante_id } = req.params;
			await pessoaServices.cancelPessoaAndMatriculas(Number(estudante_id));
			return res.status(204).send();
		} catch (error) {
			return res.status(400).json({ erro: error.message });
		}
	}
}

module.exports = PessoaController;