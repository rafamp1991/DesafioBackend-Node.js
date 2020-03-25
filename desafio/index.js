var app = require('./config/custom-express')();

app.listen(3000, function(){
  console.log('Servidor rodando na porta 3000.');
});

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})



