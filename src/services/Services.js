const dataSource = require('../database/models');

class Services {
	constructor(modelName) {
		this.modelName = modelName;
	}

	async getAll(where = {}) {
		return dataSource[this.modelName].findAll({ where: { ...where } });
	}

	async getAllByScope(scope) {
		return dataSource[this.modelName].scope(scope).findAll();
	}

	async getAndCount(options = {}) {
		return dataSource[this.modelName].findAndCountAll({ ...options });
	}

	async getById(id) {
		const entite = dataSource[this.modelName].findByPk(id);

		return entite;
	}

	async getOne(where) {
		const entity = dataSource[this.modelName].findOne({ where: { ...where } });

		return entity;
	}

	async post(entity) {
		const result = dataSource[this.modelName].create(entity);

		return result;
	}

	async update(entity, where) {
		const listReturn = dataSource[this.modelName].update(entity, {
			where: {
				...where
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