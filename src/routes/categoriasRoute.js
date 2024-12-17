const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController.js');

const categoriaController = new CategoriaController();

const router = Router();

router.get('/categorias', (req, res) => categoriaController.getAll(req, res))
	.get('/categorias/:id', (req, res) => categoriaController.getById(req, res))
	.post('/categorias', (req, res) => categoriaController.post(req, res))
	.put('/categorias/:id', (req, res) => categoriaController.update(req, res))
	.delete('/categorias/:id', (req, res) => categoriaController.delete(req, res));

module.exports = router;