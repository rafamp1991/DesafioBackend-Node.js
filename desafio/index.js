const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
console.log(`Aplicativo em execução na porta ${port}.`)
})

const db = require('./queries')

app.get('/clientes', db.getClientes)
app.get('/cliente/:id', db.getClienteById)
app.get('/clientes/:nome', db.getClienteByNome)
app.post('/clientes', db.createCliente)
app.put('/clientes/:id', db.updateCliente)
app.delete('/clientes/:id', db.deleteCliente)

app.get('/estados', db.getEstados)
app.get('/estado/:id', db.getEstadoById)
app.get('/estadoNome/:nome', db.getEstadoByNome)
app.get('/estadoUf/:uf', db.getEstadoByUf)
app.post('/estados', db.createEstado)
app.put('/estados/:id', db.updateEstado)
app.delete('/estados/:id', db.deleteEstado)

app.get('/cidades', db.getCidades)
app.get('/cidade/:id', db.getCidadeById)
app.get('/cidadeNome/:nome', db.getCidadeByNome)
app.post('/cidades', db.createCidade)
app.put('/cidades/:id', db.updateCidade)
app.delete('/cidades/:id', db.deleteCidade)