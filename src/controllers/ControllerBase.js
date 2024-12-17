class ControllerBase {
	constructor(service) {
		this.service = service;
	}

	async getAll(req, res) {
		try {
			const entities = await this.service.getAll();
			res.status(200).json(entities);
		} catch (error) {
			// lançar erro
		}
	}

	async getById(req, res) {
		const { id } = req.params;

		try {
			const entity = await this.service.getById(Number(id));

			res.status(200).json(entity);
		} catch (error) {
			//error
		}
	}

	async post(req, res) {
		const entity = req.body;

		try {
			const model = await this.service.post(entity);

			res.status(201).json(model);
		} catch (error) {
			//error
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
			//error
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
			//error
		}
	}
}

module.exports = ControllerBase;