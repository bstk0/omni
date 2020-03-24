const express = require('express');

const app = express();

app.use(express.json());

//app.get('/', (request, response) => {

app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Rodrigo Bisterço',
        data: '2020-03-23',
        comment: "VS lap Win"
    })
})

app.listen(3333);

