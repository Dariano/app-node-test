// Dependências
const express = require(`express`);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost/rest_test');

// Express
const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Rotas
app.use('/api', require('./routes/api'));
app.get('/', (req, res) => {
    res.send('trabalhando');
});

// Inicia servidor
app.listen(3000);
console.log('API está rodando na porta 3000');