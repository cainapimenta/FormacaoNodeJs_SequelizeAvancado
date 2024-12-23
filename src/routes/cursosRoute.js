const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const cursoController = new CursoController();
const matriculaController = new MatriculaController();

const router = Router();

router.get('/cursos', (req, res) => cursoController.getCursosByData(req, res))
	.get('/cursos/lotados', (req, res) => matriculaController.getCursosLotados(req, res))
	.get('/cursos/:id', (req, res) => cursoController.getById(req, res))
	.post('/cursos', (req, res) => cursoController.post(req, res))
	.put('/cursos/:id', (req, res) => cursoController.update(req, res))
	.delete('/cursos/:id', (req, res) => cursoController.delete(req, res));

module.exports = router;