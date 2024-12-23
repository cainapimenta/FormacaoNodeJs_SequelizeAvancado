const sequelize = require('sequelize');

const ControllerBase = require('./ControllerBase.js');
const MatriculaServices = require('../services/MatriculaServices.js');
const { Sequelize } = require('../database/models/index.js');

const matriculaServices = new MatriculaServices();

class MatriculaController extends ControllerBase {
	constructor() {
		super(matriculaServices);
	}

	async getAndCountAllMatriculas(req, res) {
		try {
			const { estudante_id } = req.params;
			const listaMatriculas = await this.service.getAndCount({
				where: {
					estudante_id: Number(estudante_id),
					status: 'matriculado'
				},
				limit: 2,
				order: [['id', 'DESC']]
			});

			return res.status(200).json(listaMatriculas);
		} catch (error) {
			return res.status(400).json({ erro: error.message });
		}
	}

	async getCursosLotados(req, res) {
		try {
			const lotado = 2;
			const listaCursosLotados = await this.service.getAndCount({
				where: {
					status: 'matriculado'
				},
				attributes: ['curso_id'],
				group: ['curso_id'],
				having: Sequelize.literal(`COUNT(curso_id) >= ${lotado}`)
			});

			return res.status(200).json(listaCursosLotados.count);
		} catch (error) {
			return res.status(400).json({ erro: error.message });
		}
	}
}

module.exports = MatriculaController;