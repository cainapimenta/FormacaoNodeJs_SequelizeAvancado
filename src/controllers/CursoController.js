const { Op } = require('sequelize');

const ControllerBase = require('./ControllerBase.js');
const CursoServices = require('../services/CursoServices.js');

const cursoServices = new CursoServices();

class CursoController extends ControllerBase {
	constructor() {
		super(cursoServices);
	}

	async getCursosByData(req, res) {
		const { data_inicial, data_final } = req.query;
		const where = {};

		//se data inicial e data final existe, cria prorp para filtrar
		data_inicial || data_final ? where.data_inicio = {} : null;

		//se data inicial existir, adicionar filtro
		data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;

		//Se data final existir, adicionar filtro
		data_final ? where.data_inicio[Op.lte] = data_final : null;

		try {
			const listCursos = await cursoServices.getAll(where);

			return res.status(200).json(listCursos);
		} catch (error) {
			return res.status(400).json({ erro: error.message });
		}
	}
}

module.exports = CursoController;