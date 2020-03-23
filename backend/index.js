const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({ 
        evento: 'Semana OmniStack 11.0',
        aluno: 'Rodrigo Bisterço',
        data: '2020-03-23',
        comment: "VS lap Win"})
})

app.listen(3333);

