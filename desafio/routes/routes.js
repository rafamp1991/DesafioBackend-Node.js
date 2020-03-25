module.exports = function(app){
    const dbClientes = require('./queries/queriesClientes')
    const dbCidades = require('./queries/queriesCidades')
    const dbEstados = require('./queries/queriesEstados')

    app.get('/clientes', dbClientes.getClientes)
    app.get('/clientes/:id', dbClientes.getClienteById)
    app.get('/clientes/nome/:nome', dbClientes.getClienteByNome)
    app.post('/clientes', dbClientes.createCliente)
    app.put('/clientes/:id', dbClientes.updateCliente)
    app.delete('/clientes/:id', dbClientes.deleteCliente)

    app.get('/estados', dbEstados.getEstados)
    app.get('/estados/:id', dbEstados.getEstadoById)
    app.get('/estados/nome/:nome', dbEstados.getEstadoByNome)
    app.get('/estados/uf/:uf', dbEstados.getEstadoByUf)
    app.post('/estados', dbEstados.createEstado)
    app.put('/estados/:id', dbEstados.updateEstado)
    app.delete('/estados/:id', dbEstados.deleteEstado)

    app.get('/cidades', dbCidades.getCidades)
    app.get('/cidades/:id', dbCidades.getCidadeById)
    app.get('/cidades/nome/:nome', dbCidades.getCidadeByNome)
    app.get('/cidades/estado/nome/:nome', dbCidades.getCidadeByEstadoNome)
    app.get('/cidades/estado/uf/:uf', dbCidades.getCidadeByEstadoUf)
    app.post('/cidades', dbCidades.createCidade)
    app.put('/cidades/:id', dbCidades.updateCidade)
    app.delete('/cidades/:id', dbCidades.deleteCidade)
}