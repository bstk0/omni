const express = require('express');

const app = express();


//app.get('/', (request, response) => {

app.get('/users/:id', (request, response) => {
    const params = request.params;

    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Rodrigo Bisterço',
        data: '2020-03-23',
        comment: "VS lap Win"
    })
})

app.listen(3333);

