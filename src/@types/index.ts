
import express from 'express';
import authorizationRoute from '../routes/authorization.route';
import statusRoute from '../routes/status.route';
import usersRoute from '../routes/users.route';

const app = express();

// Configuração da aplicação
app.use(express.json());

// Configuração da Rotas
app.use(usersRoute);
app.use(statusRoute);
app.use(authorizationRoute);


// Configuração do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});