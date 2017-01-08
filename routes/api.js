
// Dependências
const express = require('express');
const router = express.Router();

// Model
const Produto = require('../models/produto');

// Rotas
Produto.methods(['get', 'put', 'post', 'delete']);
Produto.register(router, '/produtos');

module.exports = router;