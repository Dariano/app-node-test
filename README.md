# app-node-test
Criando uma aplicação em nodejs passo a passo

### Dependências necessárias para rodar a aplicação

Você precisa ter instalado na sua máquina [nodejs](https://nodejs.org/en/download/package-manager/)
, [mongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/).

1. Criar um diretório como nome do teu projeto, no meu caso é 'api-node-test'.
2. Execute o comando ` npm init ` e depois de responder as pertuntas no terminal, será criado um arquivo chamado package.json onde estará algumas informações do projeto e suas dependências.

3. Instale as senguintes dependências.
    ```sh
    npm install express body-parser mongoose node-restful
    ```
4. Instale de forma global o nodemon
    ```sh
        npm install -g nodemon
    ```
5. Crie um arquivo chamado `server.js` na raiz do projeto e adicione a código abaixo.

    ```js
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
    ```
6. Crie um diretório chamado `rotas` e dentro dele um aquivo chamdo `api.js` e adicione o código abaixo.

    ```js
        // Dependências
        const express = require('express');
        const router = express.Router();

        // Model
        const Produto = require('../models/produto');

        // Rotas
        Produto.methods(['get', 'put', 'post', 'delete']);
        Produto.register(router, '/produtos');

        module.exports = router;
    ```
7. Crie um diretório chamdo `models` e dentro um aquivo com o nome de `produto.js` e adicione o código abaixo.

    ```js
        // Dependências
        const restful = require('node-restful');
        const mongoose = restful.mongoose;

        // Schema
        const produtoSchema = new mongoose.Schema({
            nome: String,
            preco: Number
        });

        module.exports = restful.model('Produtos', produtoSchema);
    ```
8. Para rodar a aplição execute.

    ```sh
      nodemon server.js
    ```
Depois de seguir esses oito passos você poderá testar usa API usando sua ferramenta de peferência. Eu costumo usar o [POSTMAN](https://www.getpostman.com/) para testar minhas APIs.
