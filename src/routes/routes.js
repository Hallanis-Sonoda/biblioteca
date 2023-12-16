const express = require('express');
const routes = express.Router();

const livroController = require('../controllers/livroController.js');
const autorController = require('../controllers/autorController.js');

//livros
routes.get('/livros', livroController.index)
routes.get('/livros/:id', livroController.indexById)
routes.post('/livros', livroController.create)
routes.put('/livros/:id', livroController.update)
routes.delete('/livros/:id', livroController.delete)

//autores
routes.get('/autores', autorController.index)
routes.get('/autores/:id', autorController.indexById)
routes.post('/autores', autorController.create)
routes.put('/autores/:id', autorController.update)
routes.delete('/autores/:id', autorController.delete)

module.exports = routes;