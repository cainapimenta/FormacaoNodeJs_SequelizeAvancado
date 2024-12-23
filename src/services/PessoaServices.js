const Services = require('./Services.js');

class PessoaServices extends Services {
	constructor() {
		super('Pessoa');

		this.matriculaService = new Services('Matricula');
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

	async cancelPessoaAndMatriculas(estudanteId) {
		await super.update({ ativo: false }, { id: estudanteId });
		console.log('chegou aqui');

		await this.matriculaService.update({ status: 'cancelado' }, { estudante_id: estudanteId });
	}
}

module.exports = PessoaServices;