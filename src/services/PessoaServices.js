const Services = require('./Services.js');

class PessoaServices extends Services {
	constructor() {
		super('Pessoa');
	}

	async getAulasMatriculadas(id) {
		try {
			const estudante = await super.getById(id);
			const listaAulasMatriculadas = await estudante.getAulasMatriculadas();

			return listaAulasMatriculadas;
		} catch (error) {
			//error
		}
	}
}

module.exports = PessoaServices;