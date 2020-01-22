const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require ('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');


const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://micaellimedeiros:4p0st0lic4@cluster0-s8peg.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros

// Query Params: request.query (Filtros, ordenação, paginação, etc..)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)



server.listen(3333);