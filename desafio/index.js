var app = require('./config/custom-express')();

app.listen(8080, function(){
  console.log('Servidor rodando na porta 8080.');
});

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})



