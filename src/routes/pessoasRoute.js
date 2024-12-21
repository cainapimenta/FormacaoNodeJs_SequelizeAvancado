const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const router = Router();

router.get('/pessoas', (req, res) => pessoaController.getAll(req, res))
	.get('/pessoas/all', (req, res) => pessoaController.getAllByScope(req, res))
	.get('/pessoas/:id', (req, res) => pessoaController.getById(req, res))
	.post('/pessoas', (req, res) => pessoaController.post(req, res))
	.put('/pessoas/:id', (req, res) => pessoaController.update(req, res))
	.delete('/pessoas/:id', (req, res) => pessoaController.delete(req, res))
	.get('/pessoas/:estudanteId/matriculas', (req, res) => pessoaController.getAulasMatriculadas(req, res))
	.post('/pessoas/:estudanteId/matriculas', (req, res) => matriculaController.post(req, res));

module.exports = router;