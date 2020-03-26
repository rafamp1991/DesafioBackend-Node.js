const pg = require('../config/database.js');
const Pool = require('pg').Pool
const pool = new Pool(pg)

const getEstados = (request, response) => {
    pool.query('SELECT * FROM estados ORDER BY id_estado ASC', (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const getEstadoById = (request, response) => {
    const id = parseInt(request.params.id)
    
    pool.query('SELECT * FROM estados WHERE id_estado = $1', [id], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}
    
const getEstadoByNome = (request, response) => {
    const nome = request.params.nome

    pool.query('SELECT * FROM estados WHERE nome = $1', [nome], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const getEstadoByUf = (request, response) => {
    const uf = request.params.uf

    pool.query('SELECT * FROM estados WHERE uf = $1', [uf], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const createEstado = (request, response) => {
    const { nome, uf } = request.body

    pool.query('INSERT INTO estados (nome, uf) VALUES ($1, $2)', [nome, uf], (error, results) => {
        if (error) {
        throw error
        }
        
        response.status(201).send({ mensagem: 'Estado cadastrado com sucesso.' });
    })
}
    
const updateEstado = (request, response) => {
    const id = parseInt(request.params.id)
    const { nome, uf } = request.body
    
    pool.query(
        'UPDATE estados SET nome = $1, uf = $2 WHERE id_estado = $3',
        [ nome, uf, id ],
        (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Estado modificado com o ID: ${id}`)
        }
    )
}
    
const deleteEstado = (request, response) => {
    const id = parseInt(request.params.id)
    
    pool.query('DELETE FROM estados WHERE id_estado = $1', [id], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).send(`Estado deletado com ID: ${id}`)
    })
}

module.exports = {
    getEstados,
    getEstadoById,
    getEstadoByNome,
    getEstadoByUf,
    createEstado,
    updateEstado,
    deleteEstado,
  }