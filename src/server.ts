import express from 'express';

const app = express();

app.get('/users', (request, response) =>{
    response.json(['diego', 'cleiton']);
})

app.listen(3333);