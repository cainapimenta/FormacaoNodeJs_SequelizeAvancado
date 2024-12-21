class ControllerBase {
	constructor(service) {
		this.service = service;
	}

	async getAll(req, res) {
		try {
			const entities = await this.service.getAll();
			return res.status(200).json(entities);
		} catch (error) {
			return res.status(500).json({ erro: error.message });
		}
	}

	async getById(req, res) {
		const { id } = req.params;

		try {
			const entity = await this.service.getById(Number(id));

			return res.status(200).json(entity);
		} catch (error) {
			return res.status(500).json({ erro: error.message });
		}
	}

	async getOne(req, res) {
		try {
			// const { ...params } = req.params;
			// const entity = await this.service.getById(params);
			// return res.status(200).json(entity);
		} catch (error) {
			return res.status(400).json({ erro: error.message });
		}
	}

	async post(req, res) {
		const entity = req.body;

		try {
			const model = await this.service.post(entity);

			return res.status(201).json(model);
		} catch (error) {
			return res.status(500).json({ erro: error.message });
		}
	}

	async update(req, res) {
		const { id } = req.params;
		const model = req.body;

		try {
			const isUpdate = await this.service.update(model, Number(id));

			if (isUpdate) {
				res.status(204).send();
			}
			else {
				res.status(400).send(`Erro ao atualizar objeto ${id}`);
			}
		} catch (error) {
			return res.status(500).json({ erro: error.message });
		}
	}

	async delete(req, res) {
		const { id } = req.params;

		try {
			const isDeleted = await this.service.delete(Number(id));

			if (isDeleted) {
				res.status(204).send();
			} else {
				res.status(400).json({ message: `Erro ao deletar registro ${id}` });
			}
		} catch (error) {
			return res.status(500).json({ erro: error.message });
		}
	}
}

module.exports = ControllerBase;