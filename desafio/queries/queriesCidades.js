const pg = require('../config/database.js');
const Pool = require('pg').Pool
const pool = new Pool(pg)

const getCidades = (request, response) => {
    pool.query('SELECT * FROM cidades ORDER BY id_cidade ASC', (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const getCidadeById = (request, response) => {
    const id = parseInt(request.params.id)
    
    pool.query('SELECT * FROM cidades WHERE id_cidade = $1', [id], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}
    
const getCidadeByNome = (request, response) => {
    const nome = request.params.nome

    pool.query('SELECT * FROM cidades WHERE nome = $1', [nome], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const getCidadeByEstadoNome = (request, response) => {
    const nome = request.params.nome
    
    pool.query('SELECT cidades.id_cidade, cidades.nome, cidades.latitude, cidades.longitude, cidades.capital, estados.id_estado FROM cidades JOIN estados ON estados.id_estado = cidades.id_estado where estados.nome like $1', [nome], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const getCidadeByEstadoUf = (request, response) => {
    const uf = request.params.uf
    
    pool.query('SELECT cidades.id_cidade, cidades.nome, cidades.latitude, cidades.longitude, cidades.capital, estados.id_estado FROM cidades JOIN estados ON estados.id_estado = cidades.id_estado where estados.uf like $1', [uf], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const createCidade = (request, response) => {
    const { nome, latitude, longitude, capital, id_estado } = request.body

    pool.query('INSERT INTO cidades (nome, latitude, longitude, capital, id_estado) VALUES ($1, $2, $3, $4, $5)', [nome, latitude, longitude, capital, id_estado], (error, results) => {
        if (error) {
        throw error
        }
        
        response.status(201).send({ mensagem: 'Cidade cadastrada com sucesso.' });
    })
}
    
const updateCidade = (request, response) => {
    const id = parseInt(request.params.id)
    const { nome, latitude, longitude, capital, id_estado } = request.body
    
    pool.query(
        'UPDATE cidades SET nome = $1, latitude = $2, longitude = $3, capital = $4, id_estado = $5 WHERE id_cidade = $6',
        [ nome, latitude, longitude, capital, id_estado, id ],
        (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Cidade modificada com o ID: ${id}`)
        }
    )
}
    
const deleteCidade = (request, response) => {
    const id = parseInt(request.params.id)
    
    pool.query('DELETE FROM cidades WHERE id_cidade = $1', [id], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).send(`Cidade deletada com ID: ${id}`)
    })
}

module.exports = {
    getCidades,
    getCidadeById,
    getCidadeByNome,
    getCidadeByEstadoNome,
    getCidadeByEstadoUf,
    createCidade,
    updateCidade,
    deleteCidade,
  }