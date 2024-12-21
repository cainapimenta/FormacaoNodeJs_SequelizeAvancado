const Services = require('./Services.js');

class PessoaServices extends Services {
	constructor() {
		super('Pessoa');
	}

	async getAulasMatriculadas(id) {
		const estudante = await super.getById(id);
		const listaAulasMatriculadas = await estudante.getAulasMatriculadas();

		return listaAulasMatriculadas;
	}

	async getAllMatriculas(id) {
		const estudante = await super.getById(id);
		const listaMatriculas = await estudante.getAllMatriculas();

		return listaMatriculas;
	}

	async getAllByScope() {
		const entities = await super.getAllByScope('getAll');
		return entities;
	}
}

module.exports = PessoaServices;