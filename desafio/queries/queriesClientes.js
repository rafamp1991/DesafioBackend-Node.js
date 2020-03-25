const pg = require('../config/database.js');
const Pool = require('pg').Pool
const pool = new Pool(pg)

const getClientes = (request, response) => {
    pool.query('SELECT * FROM clientes ORDER BY id_cliente ASC', (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const getClienteById = (request, response) => {
const id = parseInt(request.params.id)

    pool.query('SELECT * FROM clientes WHERE id_cliente = $1', [id], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const getClienteByNome = (request, response) => {
    const nome = request.params.nome

    pool.query('SELECT * FROM clientes WHERE nome = $1', [nome], (error, results) => {
            if (error) {
            throw error
            }
            response.status(200).json(results.rows)
        })
    }

const createCliente = (request, response) => {
    const { nome, sobrenome, sexo, datanascimento, idade, id_cidade } = request.body

    pool.query('INSERT INTO clientes (nome, sobrenome, sexo, datanascimento, idade, id_cidade) VALUES ($1, $2, $3, $4, $5, $6)', [nome, sobrenome, sexo, datanascimento, idade, id_cidade], (error, results) => {
      if (error) {
        throw error
      }
      
      response.status(201).send({ mensagem: 'Cliente cadastrado com sucesso.' });
    })
}

const updateCliente = (request, response) => {
    const id = parseInt(request.params.id)
    const { nome, sobrenome, sexo, datanascimento, idade, id_cidade } = request.body
  
    pool.query(
      'UPDATE clientes SET nome = $1, sobrenome = $2, sexo = $3, datanascimento = $4, idade = $5, id_cidade = $6 WHERE id_cliente = $7',
      [ nome, sobrenome, sexo, datanascimento, idade, id_cidade, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Cliente modificado com o ID: ${id}`)
      }
    )
}

const deleteCliente = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM clientes WHERE id_cliente = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Cliente deletado com ID: ${id}`)
    })
}

module.exports = {
    getClientes,
    getClienteById,
    getClienteByNome,
    createCliente,
    updateCliente,
    deleteCliente,
  }