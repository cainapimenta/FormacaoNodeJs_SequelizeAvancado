const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');

const cursoController = new CursoController();

const router = Router();

router.get('/cursos', (req, res) => cursoController.getAll(req, res))
	.get('/cursos/:id', (req, res) => cursoController.getById(req, res))
	.post('/cursos', (req, res) => cursoController.post(req, res))
	.put('/cursos/:id', (req, res) => cursoController.update(req, res))
	.delete('/cursos/:id', (req, res) => cursoController.delete(req, res));

module.exports = router;