const express = require('express');
const pessoasRoute = require('./pessoasRoute.js');
const categoriasRoute = require('./categoriasRoute.js');
const cursosRoute = require('./cursosRoute.js');

module.exports = app => {
	app.use(
		express.json(),
		pessoasRoute,
		categoriasRoute,
		cursosRoute,
	);
};