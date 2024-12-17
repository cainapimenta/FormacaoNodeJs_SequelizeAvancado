const dataSource = require('../models');

class Services {
	constructor(modelName) {
		this.modelName = modelName;
	}

	async getAll() {
		try {
			return dataSource[this.modelName].findAll();
		} catch (error) {
			// lançar erro
		}
	}

	async getById(id) {
		try {
			const entite = dataSource[this.modelName].findByPk(id);

			return entite;
		} catch (error) {
			//error
		}
	}

	async post(entity) {
		try {
			const result = dataSource[this.modelName].create(entity);

			return result;
		} catch (error) {
			//error
		}
	}

	async update(entity, id) {
		try {
			const listReturn = dataSource[this.modelName].update(entity, {
				where: {
					id: id
				}
			});

			if (listReturn[0] === 0) {
				return false;
			} else {
				return true;
			}
		} catch (error) {
			//error
		}
	}

	async delete(id) {
		try {
			const isDeleted = dataSource[this.modelName].destroy({ where: { id: id } });

			if (isDeleted === 0) {
				return false;
			}
			else {
				return true;
			}
		} catch (error) {
			//error	
		}
	}
}

module.exports = Services;