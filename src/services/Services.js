const dataSource = require('../database/models');

class Services {
	constructor(modelName) {
		this.modelName = modelName;
	}

	async getAll() {
		return dataSource[this.modelName].findAll();
	}

	async getAllByScope(scope) {
		return dataSource[this.modelName].scope(scope).findAll();
	}

	async getById(id) {
		const entite = dataSource[this.modelName].findByPk(id);

		return entite;

	}

	async post(entity) {
		const result = dataSource[this.modelName].create(entity);

		return result;

	}

	async update(entity, id) {
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

	}

	async delete(id) {
		const isDeleted = dataSource[this.modelName].destroy({ where: { id: id } });

		if (isDeleted === 0) {
			return false;
		}
		else {
			return true;
		}
	}
}

module.exports = Services;